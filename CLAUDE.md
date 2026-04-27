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
├── sw.js                               # Service worker (cache-version: neuroguide-v7)
├── manifest.json                       # PWA-manifest
├── css/style.css                       # All CSS (layout, Kindle-läsare, TOC, etc.)
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
│   └── images/                         # Bilder extraherade av pymupdf4llm
├── graphical_abstract_hypogamma.html   # Standalone HTML-abstrakt
├── graphical_abstract_mg.html
├── graphical_abstract_mr.html
├── graphical_abstract_parkinson.html
├── graphical_abstract_polyneuropati.html
├── graphical_abstract_tremor.html
├── akutkort/                           # PDF-filer (GCS, ICH, NIHSS, etc.)
├── riktlinjer/                         # PDF-filer (källdokument)
├── prognos/                            # PDF-filer (EIUH-2)
└── images/                             # Övriga bilder (figurer i dokument)
```

## Data-arkitektur (data.js)

Data är strukturerad i två globala arrays:

**`KATEGORIER`** – navigationsträdet:
```js
{ id, namn, beskrivning, ikon, farg, parent? }
```
Toppnivå: `riktlinjer`, `akutkort`, `prognos`. Under `riktlinjer`: `ms`, `parkinson`, `tremor`, `myasteni`, `polyneuropati`.

**`DOKUMENT`** – varje dokument:
```js
{
  id, titel, kategori,
  pdf?,           // länk till original-PDF
  markdownUrl?,   // länk till .md-fil → aktiverar Kindle-läge
  graphicalAbstract?,  // länk till graphical_abstract_*.html → visas ovanpå texten
  innehall: [{ rubrik, text?, html? }]  // sektioner (används av sökning)
}
```

Dokument utan `markdownUrl` visas som avsnittslista (akutkort) eller bildgalleri.

## Applogik (app.js)

### Router
Hash-baserad. Anropar `Vy.rendera(vy, params)` vid varje hashchange.

### Vy.rendera()
- Döljer TOC-knappen och stänger TOC-drawer vid varje vybyte
- Switchar på vy-typ: `start`, `riktlinjer`, kategori-ID, `dokument`, `sektion`, `sok`

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
   - Fixar bildlänkar (`images/` → `/riktlinjerMarkdown/images/`)
   - Tar bort försättsbladsbilder (`.pdf-0-N.png`)
   - Konverterar blank-omgivna `**bold**`-rader till `##`-rubriker (PDF-artefakt)
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

### TOC (innehållsförteckning)
- `#toc-knapp` (☰, fixad nere till höger) visas bara i Kindle-vy
- Klick öppnar `#toc-drawer` (slide-in från höger)
- Innehåller knappar för h2–h6-rubriker, byggda från `tocData`-arrayen
- Klick scrollar till rubrik och stänger drawern

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

5. **Spawn Explore-subagent för undersökning** – om du behöver förstå ett dokuments struktur utan att det ska in i huvudkontexten.

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

### 2. Granska och rensa markdown-filen

Öppna `.md`-filen och kontrollera:

- **Sidfötter**: Vissa PDF:er upprepar dokumentnamn + författare på varje sida. Ta bort dessa rader manuellt (sök på dokumentnamnet). Gjort för hypogamma, inte nödvändigt för övriga ännu.
- **Rubriker**: Dokumentet kan använda `**fet text**` istället för `##`-rubriker. JS hanterar detta automatiskt — du behöver inte fixa det i filen.
- **Bilder**: Bildlänkarna i .md-filen pekar på `images/` (relativ) — JS skriver om dem till `/riktlinjerMarkdown/images/` automatiskt.
- **Försättsblad**: Bilder med `.pdf-0-N.png` (förstasida) filtreras bort automatiskt av JS.

### 3. Lägg till dokumentet i data.js

Hitta rätt kategori-id (t.ex. `ms`, `parkinson`, `tremor`, `myasteni`, `polyneuropati`) och lägg till ett nytt objekt i `DOKUMENT`-arrayen:

```js
{
  id: 'nytt-dokument-id',
  titel: 'Titel på dokumentet',
  kategori: 'ms',                             // kategori-id
  pdf: '/riktlinjer/NyttDokument.pdf',
  markdownUrl: '/riktlinjerMarkdown/NyttDokument.md',
  graphicalAbstract: '/graphical_abstract_nytt.html',  // om du skapar ett
  innehall: [
    { rubrik: 'Bakgrund', text: 'Kort sammanfattning för sökning...' },
    // Lägg till fler sektioner för bättre sökbarhet
  ]
}
```

### 4. Skapa graphical abstract (rekommenderat)

Kopiera en befintlig `graphical_abstract_*.html` som mall. Använd `/skapa-graphical-abstract` för AI-genererad hjälp. Spara som `graphical_abstract_nytt.html` i projektrotenroten.

### 5. Uppdatera service worker (sw.js)

Två saker måste göras:

```js
// 1. Bumpa cache-versionen (annars används gammal cache på installerade enheter)
const CACHE_NAME = 'neuroguide-v8';  // öka siffran

// 2. Lägg till alla nya filer i ASSETS-arrayen:
'/riktlinjerMarkdown/NyttDokument.md',
'/riktlinjer/NyttDokument.pdf',
'/graphical_abstract_nytt.html',
// + eventuella bilder: '/riktlinjerMarkdown/images/NyttDokument_p1_img0.png', ...
```

### 6. Testa

```bash
python3 -m http.server 8000
```

Öppna `http://localhost:8000` i ett **inkognitofönster** (vanligt fönster kan ha gammal SW-cache). Verifiera:
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

## Service Worker (sw.js)

Cache-strategi: cache-first. Alla assets listas explicit i `ASSETS`-arrayen. Varje gång assets ändras måste `CACHE_NAME` bumpa version (nuvarande: `neuroguide-v7`) för att gamla cachen ska rensas.

Vid lokal testning: använd inkognitofönster eller avregistrera SW i DevTools → Application → Service Workers.

## Stil & Design

- **Kindle-läsare**: Georgia serif, 17px, line-height 1.85, max-width 680px, varm bakgrund `#FBF8F0`
- **Rubriker**: h1 1.55rem, h2 1.2rem med border-bottom, h3–h6 progressivt mindre
- **Tabeller**: mörk header (`#1B3A6B`), alternerande rader
- **Bilder**: centrerade, skugga, border-radius, JS-satt bredd
- **TOC-knapp**: cirkulär, mörk blå, fixad `bottom: 28px; right: 20px`
- **Hemknapp** (🏠): i headern bredvid logotypen, navigerar till startsidan
- Sidebar (desktop-navigation) är borttagen – all navigation sker via header och TOC
