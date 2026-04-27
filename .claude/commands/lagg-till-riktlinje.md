Lägg till ett nytt riktlinjedokument i NeuroGuide. Markdown-filen är redan skapad.

Använd `/konvertera-riktlinje` om du även behöver konvertera från PDF.

Argument: sökväg till .md-filen (t.ex. `riktlinjerMarkdown/NyttDokument.md`)

## Steg 1 – QA (kör script, läs inte filen)

```bash
python3 .claude/scripts/qa_markdown.py <fil>.md
```

Kör **parallellt** med sub-agent som hämtar data.js-strukturen:
```bash
grep -n "kategori:\|id:\|titel:" js/data.js | tail -50
```

## Steg 2 – Åtgärda kritiska problem

Se steg 3 i `/konvertera-riktlinje` för scriptbaserade fixar.
**Regel: Läs aldrig hela .md-filen. Använd grep -n för att hitta radnummer, sedan Read med offset+limit.**

## Steg 3 – Lägg till i data.js

```bash
grep -n "kategori: '<kategori-id>'" js/data.js | tail -3
```

Skapa dokumentobjektet. Rubrikerna från QA-rapporten (h2/h3-listan) ger dig innehall-sektionerna för sökbarhet.

## Steg 4 – Uppdatera sw.js (bumpa cache-version + lägg till filer)

## Steg 5 – Kör QA igen och sammanfatta
