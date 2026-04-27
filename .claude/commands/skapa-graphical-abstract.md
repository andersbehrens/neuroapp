Skapa ett graphical abstract för ett NeuroGuide-riktlinjedokument.

Fråga mig om följande (om inte angivet):
1. Vilket dokument/riktlinje gäller det?
2. Ska jag läsa markdown-filen för att hämta innehåll, eller beskriver du innehållet?

Utför sedan:

**Steg 1 – Läs källdokumentet**
Om markdownUrl finns i data.js – läs .md-filen (eller åtminstone de viktigaste sektionerna). Identifiera:
- Behandlingsalgoritmer och doser
- Diagnostiska kriterier
- Klassifikationer/tabeller
- Akuta åtgärder / varningar
- Det som en klinisk neurolog behöver ha snabb tillgång till

**Steg 2 – Skapa HTML-filen**
Skapa `graphical_abstract_[kortnamn].html` i projektrotenroten. Använd exakt samma CSS-mall som befintliga abstrakts (variabelnamn, typografi, komponentklasser). Strukturen ska innehålla:
- `<h1>` med titel och undertext (dokument + version/datum)
- Kliniskt relevanta sektioner: algoritmer, tabeller, dosscheman, varningsboxar
- Aldrig mer text än vad som ryms på en mobilskärm vid scroll – kompakt och skanningsbar

Designprinciper (samma som befintliga abstrakts):
- CSS-variabler: `--blå`, `--grön`, `--röd`, `--gul`, `--lila`, `--teal` med `-lj` (ljus) och `-md` (medium) varianter
- Tabeller med mörk header (`background:var(--blå)`)
- Chips/badges för klassifikationer
- Varningsboxar med vänster border i `--röd` eller `--gul`
- Font-size 13px body, komprimerade padding-värden för mobilanpassning

**Steg 3 – Koppla till data.js**
Lägg till `graphicalAbstract: '/graphical_abstract_[kortnamn].html'` i rätt dokument-objekt i `js/data.js`.

**Steg 4 – Lägg till i sw.js**
Lägg till `/graphical_abstract_[kortnamn].html` i ASSETS-arrayen och bumpa CACHE_NAME-versionen.

**Steg 5 – Sammanfatta**
Beskriv vad som ingår i abstractet och vilka kliniska aspekter som lyftes fram.
