#!/usr/bin/env python3
"""
qa_markdown.py – Kvalitetskontroll av pymupdf4llm-genererade markdown-filer.

Kör: python3 .claude/scripts/qa_markdown.py riktlinjerMarkdown/NyttDokument.md

Rapporten är strukturerad så att Claude kan läsa den utan att ladda hela markdown-filen.
Returnerar exit code 1 om kritiska problem hittades, 0 annars.
"""
import sys, re
from collections import Counter
from pathlib import Path

def qa(path):
    text = Path(path).read_text(encoding='utf-8')
    lines = text.splitlines()
    n = len(lines)
    issues = []
    warnings = []

    # --- Rubriker ---
    h = {i: [l for l in lines if l.startswith('#'*i + ' ') and not l.startswith('#'*(i+1))]
         for i in range(1, 7)}

    # Dubblerade rubriker (samma text >1 gång) – skapar duplicerade TOC-poster
    for level in range(2, 7):
        counts = Counter(l.strip() for l in h[level])
        dupes = [(txt, cnt) for txt, cnt in counts.items() if cnt > 1]
        if dupes:
            # h2-h5 duplicates → real problem. h6 → TOC shows "(2)" suffix, navigation works.
            bucket = issues if level <= 5 else warnings
            label = "DUBBLERADE" if level <= 5 else "Upprepade"
            suffix = "" if level <= 5 else " – TOC visar (2)-suffix, navigation fungerar"
            bucket.append(f"{label} h{level}-rubriker{suffix}:")
            for txt, cnt in sorted(dupes, key=lambda x: -x[1])[:10]:
                bucket.append(f"  ×{cnt}  {txt[:80]}")

    # Få strukturrubriker
    h2h3 = len(h[2]) + len(h[3])
    if h2h3 < 3:
        warnings.append(f"Få h2/h3-rubriker ({h2h3}) – troligen mestadels **feta** rubriker (JS hanterar dessa)")

    # Många h1 (>2 = filename + titel är normalt)
    if len(h[1]) > 2:
        issues.append(f"Fler än 2 h1-rubriker ({len(h[1])}) – kontrollera om PDF-kapitelrubriker blöder igenom")

    # --- Feta rubriker (hanteras av JS men högt antal är informativt) ---
    # En "fet rubrik" räknas bara om hela raden är **text** OCH föregående/nästa rad
    # inte också är en **bold**-rad (annars är det del av en flerrads-heading).
    bold_only = []
    for i, l in enumerate(lines):
        if re.match(r'^\*\*[^*\n]+\*\*\s*$', l.strip()):
            prev_bold = i > 0 and re.match(r'^\*\*[^*\n]+\*\*\s*$', lines[i-1].strip())
            next_bold = i < len(lines)-1 and re.match(r'^\*\*[^*\n]+\*\*\s*$', lines[i+1].strip())
            if not prev_bold and not next_bold:
                bold_only.append(l)
    bold_dupes = Counter(l.strip() for l in bold_only)
    bold_dupe_list = [(txt, cnt) for txt, cnt in bold_dupes.items() if cnt > 1]
    if bold_dupe_list:
        warnings.append(f"UPPREPADE feta rubriker – JS gör första till ##, upprepade till ### (subsektioner):")
        for txt, cnt in sorted(bold_dupe_list, key=lambda x: -x[1])[:8]:
            warnings.append(f"  ×{cnt}  {txt[:80]}")

    # --- Upprepade rader (sidfötter) ---
    # Exkludera: **bold**-rader (heading-kandidater), rubrikrader (#), korta rader,
    # och rader som är del av tabeller eller listor.
    def is_footer_candidate(line):
        s = line.strip()
        if len(s) < 25: return False
        if s.startswith('#') or s.startswith('|') or s.startswith('-') or s.startswith('*'): return False
        if re.match(r'^\*\*[^*]+\*\*\s*$', s): return False  # bold heading → hanteras ovan
        # Changelog-rader avslutas ofta med punkt och är processtext – inte sidfötter
        changelog_words = ['justeringar', 'genomförts', 'uppdatering', 'tillägg', 'utgått', 'reviderad']
        if any(w in s.lower() for w in changelog_words): return False
        return True

    nonempty = [l.strip() for l in lines if is_footer_candidate(l)]
    line_counts = Counter(nonempty)
    footers = [(cnt, ln) for ln, cnt in line_counts.items() if cnt >= 3]
    footers.sort(reverse=True)
    if footers:
        issues.append(f"UPPREPADE RADER (troliga sidfötter – måste tas bort manuellt):")
        for cnt, ln in footers[:6]:
            issues.append(f"  ×{cnt}  {ln[:80]}")
        worst = footers[0][1]
        linenums = [i+1 for i, l in enumerate(lines) if l.strip() == worst]
        issues.append(f"  → Rad #{linenums[0]} (och {len(linenums)-1} fler). Sök: grep -n '{worst[:40]}' <fil>")

    # --- Radbrytningsartefakter ---
    non_empty = [l for l in lines if l.strip()]
    short = [l for l in non_empty if len(l) < 60]
    pct = int(len(short) * 100 / max(len(non_empty), 1))
    if pct > 30:
        warnings.append(f"Hög andel korta rader ({pct}%) – _reflowMd hanterar detta, men extrem andel kan ge kvar-stående artefakter")
    elif pct > 15:
        warnings.append(f"Måttlig andel korta rader ({pct}%) – _reflowMd hanterar detta normalt")

    # --- Bilder ---
    images = re.findall(r'!\[.*?\]\((.*?)\)', text)
    cover_imgs = [img for img in images if re.search(r'\.pdf-0-\d+', img)]
    if cover_imgs:
        warnings.append(f"Försättsbladsbilder ({len(cover_imgs)} st, t.ex. .pdf-0-N.png) – filtreras automatiskt av JS")

    # --- Tabeller ---
    table_rows = [l for l in lines if l.startswith('|')]
    # Kontrollera om det finns tabeller med inga separator-rader (trasiga tabeller)
    if table_rows:
        sep_rows = [l for l in table_rows if re.match(r'^\|[-| :]+\|', l)]
        if len(sep_rows) == 0 and len(table_rows) > 3:
            issues.append(f"Tabeller saknar separatorrader (|---|) – tabellerna är troligen trasiga i markdown-filen")

    # --- Sammanfattning ---
    print(f"\n{'='*60}")
    print(f"QA: {Path(path).name}")
    print(f"{'='*60}")
    print(f"Rader totalt:      {n}")
    print(f"Rubriker:          h1={len(h[1])} h2={len(h[2])} h3={len(h[3])} h4={len(h[4])} h5={len(h[5])}")
    print(f"Feta rubriker:     {len(bold_only)} (JS: unik→##, upprepade→###)")
    print(f"Bilder:            {len(images)} ({len(cover_imgs)} försättsblad)")
    print(f"Tabellrader:       {len(table_rows)}")
    print(f"Korta rader:       {pct}%")

    if issues:
        print(f"\n⛔ PROBLEM ({len(issues)} rader):")
        for i in issues:
            print(f"  {i}")
    if warnings:
        print(f"\n⚠ VARNINGAR:")
        for w in warnings:
            print(f"  {w}")
    if not issues and not warnings:
        print(f"\n✓ Inga problem hittades.")
    elif not issues:
        print(f"\n✓ Inga kritiska problem – varningarna hanteras vanligtvis automatiskt.")

    print()
    return 1 if issues else 0


if __name__ == '__main__':
    if len(sys.argv) < 2:
        # Kör på alla .md-filer om inget argument
        files = sorted(Path('riktlinjerMarkdown').glob('*.md'))
        if not files:
            print("Användning: python3 .claude/scripts/qa_markdown.py [fil.md]")
            sys.exit(1)
        code = 0
        for f in files:
            code |= qa(str(f))
        sys.exit(code)
    else:
        sys.exit(qa(sys.argv[1]))
