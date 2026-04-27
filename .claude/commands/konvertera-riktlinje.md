Konvertera en PDF-riktlinje till markdown och lägg till den i NeuroGuide.

Argument: sökväg till PDF-filen (t.ex. `riktlinjer/NyttDokument.pdf`)

## Steg 1 – Förbered

Fråga mig om information som saknas:
- Sökväg till PDF
- Kategori-id (`ms`, `parkinson`, `tremor`, `myasteni`, `polyneuropati`, eller nytt)
- Vill du ha ett graphical abstract?

Kör sedan dessa två uppgifter **parallellt** med sub-agenter:

**Sub-agent A (konvertering):** Kör python-konverteringen:
```bash
cd /Users/andersbehrens2/Desktop/BTH-projekt/claudeProjekt/neuroApp
python3 -c "
import pymupdf4llm, pathlib, sys
pdf = sys.argv[1]
ut  = 'riktlinjerMarkdown/' + pathlib.Path(pdf).stem + '.md'
md  = pymupdf4llm.to_markdown(pdf, write_images=True,
        image_path='riktlinjerMarkdown/images/', dpi=200,
        table_strategy='lines_strict')
pathlib.Path(ut).write_text(md)
print('Skapad:', ut, '–', len(md.splitlines()), 'rader')
" <pdf-fil>
```

**Sub-agent B (struktur):** Kör utan att läsa hela data.js — använd grep för att hitta rätt kategori och sista dokumentet i den kategorin:
```bash
grep -n "kategori:\|id:" js/data.js | tail -40
```

## Steg 2 – QA (kör script, läs inte filen)

```bash
python3 .claude/scripts/qa_markdown.py riktlinjerMarkdown/<fil>.md
```

Analysera rapporten. Identifiera:
- **Kritiska problem** (⛔): kräver manuell fix eller JS-ändring
- **Dubblerade rubriker**: skapar oanvändbara TOC-poster → fix nedan
- **Sidfötter**: måste tas bort med sed/grep, inte med Read

## Steg 3 – Åtgärda problem med script (läs inte hela filen)

**Sidfötter** – ta bort med sed (kör grep -n först för att verifiera):
```bash
grep -n "sidfot-text" riktlinjerMarkdown/<fil>.md | head -5
sed -i '' '/sidfot-text/d' riktlinjerMarkdown/<fil>.md
```

**Dubblerade feta rubriker** – om samma `**text**` förekommer 3+ gånger i en enhet (t.ex. läkemedelsmonografier) är de strukturella subsektioner, inte kapiteltitlar. Lägg till dem i JS-blocklistan i `_laddaMdOchScrolla`:
```js
// I preprocessing-blocket, efter bold→## konverteringen:
const blocklistadeFetaRubriker = ['Behandling', 'Etiologi', 'Farmakologiska egenskaper', ...];
```
Alternativt: kontextualisera dem med föräldrarubrik via script i markdownfilen.

**Granska bara problemrader** (använd offset/limit, inte hela filen):
```bash
grep -n "problemtext" riktlinjerMarkdown/<fil>.md
# Sedan: Read med offset=<radnr-10> limit=30
```

## Steg 4 – Lägg till i data.js

Använd grep för att hitta infogningspunkt, sedan Edit med minimal kontext:
```bash
grep -n "kategori: '<kategori-id>'" js/data.js | tail -3
```

Lägg till dokumentobjektet med id, titel, kategori, pdf, markdownUrl, och minst 3 innehall-sektioner baserade på QA-rapportens rubrikstruktur.

## Steg 5 – Uppdatera sw.js

```bash
grep -n "CACHE_NAME\|riktlinjerMarkdown" sw.js | head -5
```
Bumpa cache-versionen, lägg till .md och .pdf i ASSETS.

## Steg 6 – Graphical abstract (om önskat)

Kör `/skapa-graphical-abstract` med dokumentets namn. Gör det **parallellt** med att du verifierar sw.js-ändringen.

## Steg 7 – Kör QA igen

```bash
python3 .claude/scripts/qa_markdown.py riktlinjerMarkdown/<fil>.md
```

Rapportera resultatet. Påminn om att testa i inkognitofönster på http://localhost:8000.
