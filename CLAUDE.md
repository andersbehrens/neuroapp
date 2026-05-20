# NeuroGuide – Projektbeskrivning för Claude

## Vad är NeuroGuide?

NeuroGuide är en Progressive Web App (PWA) för kliniska neurologer. Den samlar neurologiska riktlinjer och akutkort i ett offlinefungerande, mobilanpassat gränssnitt. Appen är tänkt att användas snabbt i klinisk vardag – t.ex. när en neurolog behöver slå upp behandlingsalgoritm, doseringsschema eller MR-protokoll.

Projektet är ett BTH-projekt av Anders Behrens (neurolog).

## Teknisk stack

- **Ren HTML/CSS/JS** – ingen ram (React, Vue etc.), ingen bundler
- **Hash-baserad routing** – `#start`, `#dokument/id`, `#sektion/id/idx`, `#sok/fråga`
- **PWA** med service worker (`sw.js`) – offlinecache, installerbar på mobil
- **Markdown-rendering** – `marked.js` v14 (`breaks: false, gfm: true`) på klientsidan
- **Lokal dev-server** – `python3 -m http.server 8000` i projektmappen

## Filstruktur

```
neuroApp/
├── index.html                          # App-skal, TOC-drawer, header
├── sw.js                               # Service worker (cache-version: neuroguide-v18)
├── manifest.json                       # PWA-manifest
├── css/style.css                       # All CSS (Birch-tema, layout, Kindle-läsare, TOC)
├── js/
│   ├── app.js                          # Router, Vy, Sök, App-init
│   ├── data.js                         # KATEGORIER + DOKUMENT (stor fil)
│   └── marked.min.js                   # Markdown-renderer
├── riktlinjerMarkdown/                 # Markdown-filer (konverterade från PDF)
│   ├── Konsensusdokument_MR_3.1_2025-10-10.md
│   ├── Handlaggning-av-hypogammaglobulinemi-och-late-onset-neutropeni.md
│   ├── Riktlinjer-for-utredning-och-behandling-av-Parkinsons-sjukdom-10-2025.md
│   ├── Tremor-riktlinjer-SWEMODIS-2026.md
│   ├── MGkonsensus2024v2.md
│   ├── Polyneuropati_Karolinska_2023v2.md
│   ├── PM-akut-hjarntumor.md
│   ├── Vardprogram-stroke-2026.md
│   └── images/                         # Bilder extraherade av pymupdf4llm
├── graphical_abstract_hypogamma.html   # Standalone HTML-abstrakt
├── graphical_abstract_mg.html
├── graphical_abstract_mr.html
├── graphical_abstract_parkinson.html
├── graphical_abstract_polyneuropati.html
├── graphical_abstract_tremor.html
├── graphical_abstract_hjarntumor.html
├── graphical_abstract_stroke.html
├── ledd_kalkylator.html                # Fristående kalkylator (iframe i data.js)
├── moodboard.html                      # Designmoodboard (ej del av appen)
├── akutkort/                           # PDF-filer (GCS, ICH, NIHSS, etc.)
├── riktlinjer/                         # PDF-filer (källdokument)
├── papers/                             # Kliniska artiklar i PDF-format
└── images/                             # Övriga bilder (figurer i dokument)
```

## Data-arkitektur (data.js)

Data är strukturerad i två globala arrays:

**`KATEGORIER`** – navigationsträdet:
```js
{ id, namn, beskrivning, ikon, farg, parent? }
```
Toppnivå: `riktlinjer`, `akutkort`, `artiklar`.
Under `riktlinjer`: `ms`, `parkinson`, `tremor`, `myasteni`, `polyneuropati`, `neuroonkologi`, `stroke`, `epilepsi`.

**`DOKUMENT`** – varje dokument:
```js
{
  id, titel, kategori,
  pdf?,                // länk till original-PDF (relativ sökväg, ingen ledande /)
  markdownUrl?,        // länk till .md-fil → aktiverar Kindle-läge
  graphicalAbstract?,  // länk till graphical_abstract_*.html → visas ovanpå texten
  källa?,              // visas som meta-text för artiklar (t.ex. "Brain 2024")
  kalkylatorUrl?,      // länk till fristående HTML-kalkylator (öppnas i iframe)
  direktPdf?: true,    // kortkortet öppnar PDF direkt (window.open) utan dokumentvy
  innehall: [{ rubrik, text?, html? }]  // sektioner (används av sökning)
}
```

Dokument utan `markdownUrl` visas som avsnittslista (akutkort) eller bildgalleri.

**Artiklar-kategorin** (`artiklar`) beter sig annorlunda: ett tryck på dokumentkortet öppnar PDF direkt i nytt fönster (`window.open()`) istället för att navigera till dokumentvy. Fältet `källa` visas som meta-text under titeln.

**`direktPdf: true`** – valfri flagga på enskilda dokument i alla kategorier. Kortkortet öppnar PDF:en direkt (samma beteende som artiklar). Används för dokument utan meningsfulla textavsnitt (t.ex. rena referensdokument). Meta-texten visar `'PDF'` istället för antal avsnitt.

## Applogik (app.js)

### Router
Hash-baserad. Anropar `Vy.rendera(vy, params)` vid varje hashchange.
Switch-case täcker: `start`, `riktlinjer`, `akutkort`, `artiklar`, `ms`, `parkinson`, `tremor`, `myasteni`, `polyneuropati`, `neuroonkologi`, `stroke`, `epilepsi`, `dokument`, `sektion`, `sok`.

### Vy.rendera()
- Döljer TOC-knappen och stänger TOC-drawer vid varje vybyte
- Switchar på vy-typ

### kategoriVy(katId)
- **Artiklar** (`isArtikelKat = katId === 'artiklar'`): varje dokumentkort har `onclick` som kör `window.open(d.pdf, '_blank', 'noopener,noreferrer')`. Meta-text visar `d.källa` istället för antal avsnitt.
- **Övriga kategorier**: navigerar till `#dokument/id`

### dokumentVy(dokId)
- **Akutkort**: visar bilder direkt
- **markdownUrl**: visar Kindle-vy direkt med laddningsspinner + graphical abstract (om det finns) + `_laddaMdOchScrolla(dok, null)`
- **Fallback**: avsnittslista

### sektionVy(param)
- `param = "dokId/idx"` (t.ex. från sökresultat)
- För markdownUrl-dokument: visar Kindle-vy scrollad till matchande rubrik via `_scrollaTillRubrik`
- För övriga: visar plain text med föregående/nästa-navigation

### _laddaMdOchScrolla(dok, rubrik)
Asynkron, med in-memory cache (`_mdCache`):
1. Hämtar `.md`-filen (om ej cachad)
2. Förbehandlar markdown:
   - Tar bort filnamns-h1 och eventuell duplikat-dokumenttitel/datum i toppen
   - Fixar bildlänkar (`images/` → `riktlinjerMarkdown/images/`) – **utan ledande /**
   - Tar bort försättsbladsbilder (`.pdf-0-N.png`)
   - Konverterar blank-omgivna `**bold**`-rader till `##`-rubriker (PDF-artefakt); upprepade → `###`
   - Kör `_reflowMd()` för radbrytningsreparation
3. Parsar med `marked.parse()`
4. Tilldelar rubrik-ID:n (`_addaRubrikIds`)
5. Bygger TOC-data (array av `{id, lvl, txt}`)
6. Cachar `{html, tocData}`
7. Sätter HTML, bygger TOC, postprocessar bilder, scrollar till rubrik

### _reflowMd(text)
Reparerar PDF-extraktionsartefakter:
- **Steg 1**: Slår ihop mjukt radbrytna rader (enkelt `\n` som inte är styckegräns/rubrik/lista)
- **Steg 2**: Slår ihop stycken separerade av trippla tomrader mitt i mening (myasteni-artefakt). Rubrikrader skyddas med vaktpost `\x00` så de inte absorberas av efterföljande text.

### _postprocessBilder(container)
- Sätter `loading="lazy"` på alla bilder
- Filtrerar bort logotyp-banners (bredd/höjd-ratio > 2,5 och höjd < 180px)
- Skalar bilder till 70% av naturlig pixelbredd (200 DPI → skärmanpassad), stora diagram (>900px) fyller containerns bredd

### _scrollaTill(id) – TOC-scroll
Tre-pass scroll för att kompensera för lazy-loaded bilder som förskjuter layouten:
```js
window.scrollTo({ top: beräknaY(), behavior: 'smooth' });
setTimeout(() => window.scrollTo({ top: beräknaY(), behavior: 'instant' }), 650);
setTimeout(() => window.scrollTo({ top: beräknaY(), behavior: 'instant' }), 1400);
```
Smooth scroll direkt → instant-korrigering vid 650 ms (snabba bilder) → instant-korrigering vid 1400 ms (långsamma bilder). Ger ett kort "ryck" men landar alltid rätt.

### TOC (innehållsförteckning)
- `#toc-knapp` (☰, fixad nere till höger) visas bara i Kindle-vy
- Klick öppnar `#toc-drawer` (slide-in från höger)
- Innehåller knappar för h2–h6-rubriker, byggda från `tocData`-arrayen
- Klick scrollar till rubrik och stänger drawern
- **CSS-klasser**: JS genererar `.toc-2`/`.toc-3`/`.toc-4`/`.toc-5`/`.toc-6` (INTE `.toc-h2` etc.)
  - `.toc-2` = fet med vänster kantlinje (mest prominent)
  - `.toc-3` = indenterat 28px, 0.82rem
  - `.toc-4` = indenterat 40px, 0.78rem, ljusgrå
  - `.toc-5`/`.toc-6` = indenterat 52px, 0.74rem, ljusgrå

## Slash-commands och sub-agenter

Projektspecifika kommandon i `.claude/commands/`. Anropas med `/` i Claude Code:

| Kommando | Beskrivning |
|----------|-------------|
| `/konvertera-riktlinje` | Komplett pipeline: PDF → markdown → QA → fix → data.js → sw.js. Använder parallella sub-agenter. |
| `/lagg-till-riktlinje` | Lägger till en befintlig .md-fil i appen (skippar konverteringssteget). |
| `/skapa-graphical-abstract` | Skapar ett kliniskt graphical abstract baserat på dokumentinnehållet. |

QA-script i `.claude/scripts/qa_markdown.py`. Kör direkt:
```bash
python3 .claude/scripts/qa_markdown.py                        # alla filer
python3 .claude/scripts/qa_markdown.py riktlinjerMarkdown/X.md  # en fil
```

Rapporten identifierar: dubblerade rubriker (→ oanvändbara TOC-poster), sidfötter (→ manuell fix), hög andel korta rader (→ _reflowMd), trasiga tabeller.

### Sub-agentmönster

`/konvertera-riktlinje` spawnar sub-agenter parallellt för oberoende uppgifter:
- **Sub-agent A**: kör pymupdf4llm-konverteringen (långsam I/O)
- **Sub-agent B**: analyserar data.js-strukturen med grep (var i filen infoga)

Sub-agenterna returnerar sina resultat till huvud-Claude som sedan sätter ihop helheten.

### Token-sparningsregler (följs alltid i detta projekt)

Markdown-filerna är stora (273–5518 rader). Dessa regler minimerar tokens utan att förlora precision:

1. **Kör QA-scriptet först** – `python3 .claude/scripts/qa_markdown.py <fil>` – innan du läser något i en .md-fil. Scriptet ger en strukturerad rapport på ~30 rader istället för att ladda hela filen.

2. **Använd grep -n för att hitta radnummer** – leta alltid upp radnumret innan du använder Read:
   ```bash
   grep -n "sökterm" riktlinjerMarkdown/fil.md
   # Sedan: Read med offset=<rad-10> limit=30
   ```

3. **Fixa text med sed/python, inte med Read+Edit** – vid borttagning av upprepade rader:
   ```bash
   sed -i '' '/exakt sidfot-text/d' riktlinjerMarkdown/fil.md
   ```

4. **Grep för data.js-infogning** – data.js är stor, läs den inte i sin helhet:
   ```bash
   grep -n "kategori: 'ms'" js/data.js | tail -5
   ```

5. **Spawn general-purpose-subagent för rubrikanalys** – för dokument >1000 rader, spawna en bakgrundsagent med uppgiften att köra `grep -n "^#" fil.md` och analysera klinisk hierarki. Agenten returnerar en kompakt lista med radnummer → ny nivå, utan att ladda hela filen i huvudkontexten.

## Lägga till ett nytt riktlinjedokument

Använd slash-commandet `/lagg-till-riktlinje` (se `.claude/commands/`) för guidad hjälp. Manuellt steg för steg:

### 1. Konvertera PDF → Markdown

Kräver `pymupdf4llm` (`pip install pymupdf4llm`). Kör från projektmappen:

```python
import pymupdf4llm, pathlib

pdf = "riktlinjer/NyttDokument.pdf"          # källfilen
ut  = "riktlinjerMarkdown/NyttDokument.md"   # målfilen

md = pymupdf4llm.to_markdown(
    pdf,
    write_images=True,
    image_path="riktlinjerMarkdown/images/", # bilder hamnar här
    dpi=200,
    table_strategy='lines_strict'
)
pathlib.Path(ut).write_text(md)
```

**OBS .docx-filer**: Konvertera till PDF via Word (AppleScript) innan pymupdf4llm körs.

### 2. Granska och rensa markdown-filen

Kör QA-scriptet och kontrollera:

- **Sidfötter**: Vissa PDF:er upprepar dokumentnamn + författare på varje sida. Ta bort med Python/sed.
- **Inbyggd TOC**: Om dokumentet har en sidnumrerad innehållsförteckning extraheras den som text med `##`-rubrik (`## Innehåll`). Ta bort rubrik-markören eller hela sektionen – annars förorenar den TOC-menyn.
- **Compound headings**: pymupdf4llm sammanfogar ibland två rubriker på samma rad, t.ex. `###### **A. Inledning** **Bakgrund, SWEMODIS**`. Dela upp dessa manuellt: `## A. Inledning\n\n### Bakgrund, SWEMODIS`.
- **Rubriker**: Dokumentet kan använda `**fet text**` istället för `##`-rubriker. JS hanterar detta automatiskt. Men se till att standalone bold-rader som är formulärfält eller varningsboxar (ej rubriker) saknar omgivande tomrader, annars konverteras de felaktigt.
- **Rubrikhierarki** – använd dessa nivåer konsekvent för klinisk TOC-navigering:
  - `##` = Huvud-sektioner (t.ex. A. Medicinsk del, V. Läkemedelsöversikt)
  - `###` = Kliniska undersektioner (t.ex. enskilda läkemedel, diagnoser, behandlingstyper)
  - `####` = Detaljer som kliniker söker (t.ex. doseringssteg, kriterier)
  - `######` = Implementeringsdetaljer som EJ ska synas i TOC (lämna som `######`)
  - Frontmatter (sjukhusnamn, datum, inbyggd TOC) → ta bort rubrik-markören, lämna som plain text
- **Bilder**: Bildlänkarna i .md-filen pekar på `images/` (relativ) — JS skriver om dem automatiskt.
- **Försättsblad**: Bilder med `.pdf-0-N.png` (förstasida) filtreras bort automatiskt av JS.

### 3. Lägg till dokumentet i data.js

Hitta rätt kategori-id och lägg till ett nytt objekt i `DOKUMENT`-arrayen.
**Alla sökvägar måste vara relativa – ingen ledande `/`.**

```js
{
  id: 'nytt-dokument-id',
  titel: 'Titel på dokumentet',
  kategori: 'ms',                               // kategori-id
  pdf: 'riktlinjer/NyttDokument.pdf',           // ingen ledande /
  markdownUrl: 'riktlinjerMarkdown/NyttDokument.md',
  graphicalAbstract: 'graphical_abstract_nytt.html',
  innehall: [
    { rubrik: 'Bakgrund', text: 'Kort sammanfattning för sökning...' },
  ]
}
```

### 4. Skapa graphical abstract (rekommenderat)

Använd `/skapa-graphical-abstract`. Spara som `graphical_abstract_nytt.html` i projektroten.

### 5. Uppdatera service worker (sw.js)

```js
// 1. Bumpa cache-versionen
const CACHE_NAME = 'neuroguide-v19';  // öka siffran (nuvarande: v18)

// 2. Lägg till alla nya filer i ASSETS-arrayen (ingen ledande /):
'riktlinjerMarkdown/NyttDokument.md',
'riktlinjer/NyttDokument.pdf',
'graphical_abstract_nytt.html',
```

### 6. Testa

```bash
python3 -m http.server 8000
```

Öppna `http://localhost:8000` i ett **inkognitofönster**. Verifiera:
- Dokumentet syns i rätt kategori
- Kindle-vy öppnas med graphical abstract ovanför texten
- TOC (☰) listar sektioner korrekt
- Bilder laddas (inga brutna bildlänkar)
- Sökning hittar dokumentet

## Graphical Abstracts

Varje riktlinjedokument har ett standalone HTML-abstrakt som bäddas in via `<iframe>` i Kindle-vyn, ovanför dokumenttexten. Abstrakten är utformade kliniskt – de lyfter fram det som är praktiskt viktigt för en neurolog (algoritmer, doser, beslutsvägar).

Filer och tillhörande dokument:
| Fil | Dokument |
|-----|----------|
| `graphical_abstract_hypogamma.html` | Hypogammaglobulinemi & LON vid anti-CD20 |
| `graphical_abstract_mg.html` | Myastenia Gravis (konsensusprogram 2024) |
| `graphical_abstract_parkinson.html` | Parkinsons sjukdom (SWEMODIS v10, 2025) |
| `graphical_abstract_tremor.html` | Tremortillstånd (SWEMODIS v3, 2026) |
| `graphical_abstract_polyneuropati.html` | Polyneuropati (Karolinska 2023) |
| `graphical_abstract_mr.html` | MR vid neuroinflammation (v3.1, 2025) |
| `graphical_abstract_hjarntumor.html` | Akut försämring hjärntumörpatienter (Södra regionen) |
| `graphical_abstract_stroke.html` | Vårdprogram stroke – Blekingesjukhuset 2026 |

CSS-mall: CSS-variabler `--blå`, `--grön`, `--röd`, `--gul`, `--lila`, `--teal` med `-lj`/`-md`-varianter. Tabeller med mörk header (`background:var(--blå)`). Läs `graphical_abstract_parkinson.html` som referensimplementation.

## Publicering på GitHub Pages

Appen hostar på `https://andersbehrens.github.io/neuroapp/`. Repot är publikt på GitHub (`andersbehrens/neuroapp`).

### Pusha ändringar

```bash
git add <filer>
git commit -m "Beskrivande meddelande"
git push
```

GitHub Pages deployas automatiskt inom ~1 minut. Testa alltid i inkognitofönster.

### Viktiga regler för paths

**Alla URL-sökvägar i projektet måste vara relativa** (inte börja med `/`), annars fungerar de inte på GitHub Pages:

- `data.js`: `markdownUrl`, `pdf`, `graphicalAbstract`, `kalkylatorUrl` – alla utan ledande `/`
- `sw.js`: alla poster i `ASSETS`-arrayen utan ledande `/` (använd `'./'` för rooten, `'index.html'` etc.)
- `app.js`: bildlänkar skrivs om till `riktlinjerMarkdown/images/` (utan ledande `/`)

### Bumpa service worker-version

Varje gång nya filer läggs till **måste** `CACHE_NAME` i `sw.js` ökas. Annars använder installerade appar gammal cache och ser inte de nya dokumenten. Nuvarande version: **`neuroguide-v18`**.

## Service Worker (sw.js)

Cache-strategi: cache-first. Alla assets listas explicit i `ASSETS`-arrayen. Varje gång assets ändras måste `CACHE_NAME` bumpa version för att gamla cachen ska rensas.

Vid lokal testning: använd inkognitofönster eller avregistrera SW i DevTools → Application → Service Workers.

## Stil & Design – Birch-tema

Appen använder ett skandinaviskt minimalistiskt "Birch"-tema:

- **Header**: `background: #FAFAF8`, `color: #2C2C2C`, `border-bottom: 1px solid #E8E6E0`
- **Logotyp**: `font-weight: 300; color: #2C2C2C` / `<span>` med `color: #B87333` (koppar), `font-weight: 700`
- **Accentfärg**: `#B87333` (koppar) – knappar, fokusringar, sökfält-fokus
- **Sökfält**: `background: #EFEDE7; color: #2C2C2C`
- **CSS-variabler**: `--blå-mörk: #2C2C2C`, `--blå-medium: #B87333`, `--blå-ljus: #FBF0E6`, `--blå-kant: #E8DFD0`
- **Kindle-läsare**: Georgia serif, 17px, line-height 1.85, max-width 680px
  - `--kindle-bg: #FFFEFB`, `--kindle-rubrik: #3A2E1E`, `--kindle-kant: #E8DFD0`
- **Tabeller**: mörk header (`#1B3A6B`), alternerande rader
- **TOC-knapp**: cirkulär, fixad `bottom: 28px; right: 20px`
- **Hemknapp** (🏠): i headern bredvid logotypen
- Sidebar är borttagen – all navigation sker via header och TOC-drawer
