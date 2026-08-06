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
├── sw.js                               # Service worker (cache-version: neuroguide-v32, öka vid varje ändring)
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
Toppnivå: `riktlinjer`, `akutkort`, `artiklar`, `remiss-vardniva` (Remiss & vårdnivå), `kalkylatorer`, `lankar`.
Under `riktlinjer`: `ms`, `parkinson`, `tremor`, `myasteni`, `polyneuropati`, `neuroonkologi`, `stroke`, `epilepsi`.

Lägger man till en **ny toppkategori** måste man även lägga till en `case` för dess id i routern (`app.js`, switch i `Vy.rendera`), annars renderas den inte.

En kategori kan ha `externalUrl` (kortet öppnar URL:en direkt från startsidan). **`lankar`** beter sig som `artiklar`: korten öppnar `d.pdf`-URL i ny flik. En "länk" är alltså ett DOKUMENT med `kategori: 'lankar'` och ett `pdf`-fält som kan vara vilken URL som helst (t.ex. **FASS** ligger som länk under Länkar med `pdf: 'https://fass.se/health'`).

Kategorin **`remiss-vardniva`** samlar administrativa stöddokument om gränsdragning primärvård/specialist. Vårdnivå-dokumenten är uppdelade **per diagnos** med fokus på **remissinnehåll** (motverka ofullständiga remisser): `Vardnivaer-migran.md`, `Vardnivaer-epilepsi.md`, `Vardnivaer-nph.md`, den interna rutinen `Vardnivaer-remissbedomning.md` (remissbedömning på mottagningen – internt mejl, ingen extern originallänk) samt `Inklusionskriterier-avd58.md`. Varje diagnos-doc har en länk till originaldokumentet via `pdf`-fältet (extern 1177-URL som visas som knapp högst upp i dokumentvyn – etiketten blir **🔗 Öppna originaldokumentet** för webblänkar, **📄 Öppna original-PDF** för `.pdf`). Primärkällor (vårdförlopps-PDF:er) ligger lokalt i mappen `vårdnivå/` men committas/publiceras **inte**.

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
   - Konverterar standalone `**bold**`-rader till rubriker (PDF-artefakt). **Exakt JS-regex**: `/\n\n((?:\*\*[^\n*][^\n]*\*\*\n?)+)\n/g` – kräver blank rad FÖRE men bara EN radbrytning EFTER (inte nödvändigtvis blank rad efter). Första förekomst → `##`, upprepade → `###`. **Konsekvens**: en `**Tremor**`-rad med text direkt på nästa rad konverteras ändå till `##`.
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
- Innehåller knappar för **h2–h4** (h5/h6 exkluderas), byggda från `tocData`-arrayen
- Klick scrollar till rubrik och stänger drawern
- **CSS-klasser**: JS genererar `.toc-2`/`.toc-3`/`.toc-4` via `parseInt(h.tagName.slice(1))` (INTE `.toc-h2` etc.)
  - `.toc-2` = fet med vänster kantlinje (mest prominent)
  - `.toc-3` = indenterat 28px, 0.82rem
  - `.toc-4` = indenterat 40px, 0.78rem, ljusgrå

## Lunch-widget (startsidan)

`Lunch`-modulen i `app.js` visar dagens lunch från Blekingesjukhusets restaurang i ett `#lunch-widget` (endast vardagar).

- **Datakälla:** läser `data/lunch.json` **same-origin** (`Lunch._frånFil`). Filen innehåller hela veckan: `{ updated, vecka, dagar: { Måndag: {lunch, gront}, … } }`. Reserv: `_frånProxy` (codetabs) – men **alla fria CORS-proxyer är opålitliga/nere**, så filen är den som gäller.
- **Filen hålls färsk av en GitHub Action** (`.github/workflows/lunch.yml`, vardagar 07/11) som kör `scripts/lunch-scrape.mjs` – server-side skrapning direkt mot regionblekinge.se (ingen proxy, ingen CORS).
- **Fälla (löst):** GitHubs runner blockerades av regionblekinge.se:s WAF (`fetch failed`) tills scrapern fick en **browser-User-Agent**. Behåll den.
- **Skyddsräcke:** scrapern skriver **aldrig över med tom data** – om skrapningen ger 0 dagar bevaras senaste fungerande fil.
- SW hämtar `data/lunch.json` **nätverk-först** (så Action-uppdateringar syns), cache som offline-reserv.
- **Auto-uppdatering (öppen app):** `Lunch.startaBevakning()` (körs en gång i `App.init`) kör om `Lunch.visa()` vid `visibilitychange`/`focus` + var 30:e minut, så en app som står öppen dygnet runt (jobbdator) byter dag på morgonen utan omladdning. `visa()` använder en `data-sig`-vakt (dag + innehåll) för att undvika onödig omrendering/flimmer, och tömmer widgeten på helger.

Samma mönster (och lärdomar) som GoodDay-appens lunch.

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
- **Standalone bold-rader (KRITISKT)**: JS konverterar `**bold**`-rader med blank rad före till `##`/`###` vid rendering. Detta ger felaktig TOC där subsektioner hamnar på samma nivå som huvudsektioner. **Åtgärd: konvertera ALLTID alla standalone bold-rader till `######` i markdown** (eller `##`/`###` om de verkligen är huvudsektioner). Kör detta efter konvertering:
  ```python
  import re
  with open('fil.md') as f: content = f.read()
  # Visar alla rader som JS kommer att konvertera till ## eller ###:
  print(re.findall(r'\n\n(\*\*[^\n*][^\n]*\*\*)\n', content))
  ```
  Sedan: ersätt varje träff med `###### text` (eller rätt nivå). Bulk-konvertering till `######`:
  ```python
  content = re.sub(r'\n\n(\*\*[^\n*][^\n]*\*\*)\n\n', lambda m: f'\n\n###### {m.group(1).strip("* ")}\n\n', content)
  content = re.sub(r'\n\n(\*\*[^\n*][^\n]*\*\*)\n(?!\n)', lambda m: f'\n\n###### {m.group(1).strip("* ")}\n', content)
  ```
- **Rubrikhierarki** – TOC-knappen visar **bara h2–h4** (JS querySelectorAll `h2,h3,h4`). h5/h6 syns aldrig i TOC. Använd dessa nivåer:
  - `##` = Huvud-sektioner (t.ex. romanska siffror, A/B/C-delar)
  - `###` = Kliniska undersektioner (t.ex. enskilda läkemedel, diagnoser, behandlingstyper)
  - `####` = Detaljer som kliniker navigerar till (doseringssteg, diagnoskriterier) – använd sparsamt
  - `######` = Allt som EJ ska synas i TOC: sub-detaljer, metadata, Fenomenologi/Etiologi-rubriker per tremor-typ, etc.
  - Frontmatter (sjukhusnamn, datum, inbyggd TOC) → `######` eller plain text
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
const CACHE_NAME = 'neuroguide-v32';  // öka siffran vid varje ändring

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

**Två deploy-fällor:** (1) Lunch-Action:en committar `data/lunch.json` till `main` då och då → en egen push kan avvisas (non-fast-forward). Gör `git pull --rebase --autostash origin main` och pusha igen. (2) Repot kan ha **användarens egna oavslutade WIP** (t.ex. stroke-dokument) ocommittad – staga därför **bara dina egna filer explicit** (`git add <fil1> <fil2>`), aldrig `git add -A`.

### Viktiga regler för paths

**Alla URL-sökvägar i projektet måste vara relativa** (inte börja med `/`), annars fungerar de inte på GitHub Pages:

- `data.js`: `markdownUrl`, `pdf`, `graphicalAbstract`, `kalkylatorUrl` – alla utan ledande `/`
- `sw.js`: alla poster i `ASSETS`-arrayen utan ledande `/` (använd `'./'` för rooten, `'index.html'` etc.)
- `app.js`: bildlänkar skrivs om till `riktlinjerMarkdown/images/` (utan ledande `/`)
- `app.js`: service workern registreras med **relativ** sökväg – `navigator.serviceWorker.register('sw.js')`, **aldrig** `'/sw.js'`. Absolut sökväg pekar på domänroten (`andersbehrens.github.io/sw.js` → 404), och då registreras SW:n **aldrig** på GitHub Pages (`/neuroapp/`). Detta var trasigt fram till v31 – offline-läget fungerade inte och alla `CACHE_NAME`-bumpar var no-ops. Relativ sökväg resolvar rätt både lokalt (roten) och i `/neuroapp/`.

### Bumpa service worker-version

Varje gång filer läggs till **eller ändras** måste `CACHE_NAME` i `sw.js` ökas. Annars använder installerade appar gammal cache. Senast: **`neuroguide-v32`** (öka vid varje ändring).

## Service Worker (sw.js)

Cache-strategi: cache-first. Alla assets listas explicit i `ASSETS`-arrayen. Varje gång assets ändras måste `CACHE_NAME` bumpa version för att gamla cachen ska rensas.

**Registrering:** `app.js` kör `navigator.serviceWorker.register('sw.js')` – **relativ** sökväg (se path-reglerna ovan; absolut `/sw.js` var trasigt fram till v31).

**Livscykel:** `install` precachar alla ASSETS (per-URL `catch`, så en enskild 404 inte stjälper installationen) + `skipWaiting()`; `activate` raderar gamla cachar + `clients.claim()`. Därför slår en ny version igenom direkt vid nästa omladdning. `data/lunch.json` hämtas **nätverk-först** (så Action-uppdateringar syns); allt annat cache-first.

**Konsekvens av cache-first:** en app som står **öppen** ser ny kod först vid omladdning (den gamla JS:en fortsätter köra). Lunch-*datan* uppdateras dock ändå automatiskt eftersom `Lunch.visa()` körs om vid `visibilitychange`/`focus` och hämtar `lunch.json` nätverk-först.

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
