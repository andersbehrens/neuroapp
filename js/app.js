'use strict';

// === Router ===
const Router = {
  _vy: 'start',
  _params: {},

  init() {
    window.addEventListener('hashchange', () => this._läsHash());
    this._läsHash();
  },

  _läsHash() {
    const raw = location.hash.slice(1) || 'start';
    const slash = raw.indexOf('/');
    const vy    = slash === -1 ? raw : raw.slice(0, slash);
    const param = slash === -1 ? '' : decodeURIComponent(raw.slice(slash + 1));
    this._vy = vy;
    this._params = {};
    if (param) this._params.id = param;
    Vy.rendera(vy, this._params);
  },

  gå(vy, params = {}) {
    const id = params.id ? '/' + encodeURIComponent(params.id) : '';
    location.hash = vy + id;
  }
};

// === Sök ===
const Sök = {
  kör(fråga) {
    if (!fråga.trim()) return [];
    const q = fråga.toLowerCase().trim();
    const träffar = [];

    for (const dok of DOKUMENT) {
      for (const sektion of dok.innehall) {
        const rawText = sektion.html
          ? sektion.html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')
          : (sektion.text || '');
        const searchText = (sektion.rubrik + ' ' + rawText).toLowerCase();
        if (searchText.includes(q)) {
          const idx = searchText.indexOf(q);
          const start = Math.max(0, idx - 80);
          const slut = Math.min(rawText.length, idx + q.length + 120);
          const kontext = rawText.slice(start, slut);
          träffar.push({ dok, sektion, kontext, fråga });
        }
      }
      if (dok.titel.toLowerCase().includes(q) && !träffar.find(t => t.dok.id === dok.id && t.sektion === dok.innehall[0])) {
        träffar.push({ dok, sektion: dok.innehall[0] || { rubrik: '', text: '' }, kontext: dok.titel, fråga });
      }
    }
    return träffar;
  },

  märkUpp(text, fråga) {
    if (!fråga) return this._esc(text);
    const escaped = fråga.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(${escaped})`, 'gi');
    return this._esc(text).replace(re, '<mark>$1</mark>');
  },

  _esc(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }
};

// === Vyer ===
const Vy = {
  rendera(vy, params) {
    const el = document.getElementById('innehall');
    const tillbaka = document.getElementById('tillbaka-knapp');

    // Dölj TOC-knapp och stäng drawer vid vybyten
    document.getElementById('toc-knapp').classList.remove('synlig');
    this._stängToc();

    document.querySelectorAll('.sidebar-nav-item, .sidebar-dok-item')
      .forEach(b => b.classList.remove('aktiv'));

    switch (vy) {
      case 'start':
        tillbaka.classList.remove('synlig');
        el.innerHTML = this.startVy();
        this._uppdateraSidebarAktiv('hem');
        break;

      case 'riktlinjer':
        tillbaka.classList.add('synlig');
        el.innerHTML = this.riktlinjerVy();
        this._uppdateraSidebarAktiv('riktlinjer');
        break;

      case 'ms':
      case 'parkinson':
      case 'tremor':
      case 'myasteni':
      case 'polyneuropati':
        tillbaka.classList.add('synlig');
        el.innerHTML = this.kategoriVy(vy);
        this._bindaKategori(vy);
        this._uppdateraSidebarAktiv(vy);
        break;

      case 'akutkort':
      case 'artiklar':
      case 'neuroonkologi':
      case 'stroke':
      case 'kalkylatorer':
        tillbaka.classList.add('synlig');
        el.innerHTML = this.kategoriVy(vy);
        this._bindaKategori(vy);
        this._uppdateraSidebarAktiv(vy);
        break;

      case 'dokument':
        tillbaka.classList.add('synlig');
        el.innerHTML = this.dokumentVy(params.id);
        this._uppdateraSidebarAktivDok(params.id);
        break;

      case 'sektion':
        tillbaka.classList.add('synlig');
        el.innerHTML = this.sektionVy(params.id);
        break;

      case 'sok':
        tillbaka.classList.add('synlig');
        el.innerHTML = this.sokVy(params.id);
        this._bindaSokResultat();
        break;

      default:
        el.innerHTML = '<p style="padding:20px;color:var(--text-ljus)">Sidan hittades inte.</p>';
    }

    el.scrollTop = 0;
    window.scrollTo(0, 0);
  },

  // --- Startsida ---
  startVy() {
    const topKat = KATEGORIER.filter(k => !k.parent);

    const antalPerKat = kat => {
      if (kat.id === 'riktlinjer') {
        const subIds = KATEGORIER.filter(k => k.parent === 'riktlinjer').map(k => k.id);
        return DOKUMENT.filter(d => subIds.includes(d.kategori)).length;
      }
      return DOKUMENT.filter(d => d.kategori === kat.id).length;
    };

    const installPrompt = window._installEvent ? `
      <div id="install-prompt" onclick="App.visaInstallDialog()">
        <span style="font-size:1.6rem">📲</span>
        <p><strong>Installera NeuroGuide</strong>Lägg till på startskärmen för snabb åtkomst utan internet.</p>
        <button>Installera</button>
        <button id="install-dismiss" onclick="event.stopPropagation();App.avvisaInstall()" aria-label="Stäng">×</button>
      </div>` : '';

    const kat = topKat.map(k => {
      const click = k.externalUrl
        ? `window.open('${k.externalUrl}', '_blank', 'noopener,noreferrer')`
        : `Router.gå('${k.id}')`;
      const keydown = k.externalUrl
        ? `if(event.key==='Enter')window.open('${k.externalUrl}', '_blank', 'noopener,noreferrer')`
        : `if(event.key==='Enter')Router.gå('${k.id}')`;
      const antal = k.externalUrl
        ? `<div class="kategori-antal">Öppnar i webbläsaren ↗</div>`
        : `<div class="kategori-antal">${antalPerKat(k)} dokument</div>`;
      return `
      <div class="kategori-kort ${k.farg}" role="button" tabindex="0"
           onclick="${click}"
           onkeydown="${keydown}">
        <span class="kategori-ikon">${k.ikon}</span>
        <div class="kategori-namn">${k.namn}</div>
        ${antal}
      </div>`;
    }).join('');

    return `
      <div id="startsida">
        ${installPrompt}
        <div class="start-hälsning">
          <h1>NeuroGuide</h1>
          <p>Neurologiska riktlinjer och akutkort</p>
        </div>
        <div class="avsnitt-rubrik">Välj kategori</div>
        <div class="kategori-grid">${kat}</div>
      </div>`;
  },

  // --- Riktlinjer – visar diagnoser ---
  riktlinjerVy() {
    const subKat = KATEGORIER.filter(k => k.parent === 'riktlinjer');

    const antalPerKat = kat => DOKUMENT.filter(d => d.kategori === kat.id).length;

    const kort = subKat.map(k => `
      <div class="kategori-kort ${k.farg}" role="button" tabindex="0"
           onclick="Router.gå('${k.id}')"
           onkeydown="if(event.key==='Enter')Router.gå('${k.id}')">
        <span class="kategori-ikon">${k.ikon}</span>
        <div class="kategori-namn">${k.namn}</div>
        <div class="kategori-antal">${antalPerKat(k)} dokument</div>
      </div>`).join('');

    return `
      <div id="kategorisida" class="kategori-riktlinje">
        <div class="kategori-header">
          <div class="kategori-header-ikon kategori-riktlinje">📋</div>
          <div>
            <h2>Riktlinjer</h2>
            <p>Välj diagnos</p>
          </div>
        </div>
        <div class="kategori-grid">${kort}</div>
      </div>`;
  },

  // --- Kategorisida ---
  kategoriVy(katId) {
    const kat = KATEGORIER.find(k => k.id === katId);
    const dok = DOKUMENT.filter(d => d.kategori === katId);

    const isArtikelKat = katId === 'artiklar';
    const dokKort = dok.length ? dok.map(d => {
      const openPdf = isArtikelKat && d.pdf;
      const onclick  = openPdf ? `window.open('${d.pdf}','_blank','noopener,noreferrer')` : `Router.gå('dokument',{id:'${d.id}'})`;
      const onkeydown = openPdf ? `if(event.key==='Enter')window.open('${d.pdf}','_blank','noopener,noreferrer')` : `if(event.key==='Enter')Router.gå('dokument',{id:'${d.id}'})`;
      const meta = d.källa || `${d.innehall.length} avsnitt`;
      return `
      <div class="dok-kort" role="button" tabindex="0"
           onclick="${onclick}"
           onkeydown="${onkeydown}">
        <div class="dok-kort-ikon ${kat.farg}">${kat.ikon}</div>
        <div class="dok-kort-text">
          <div class="dok-kort-titel">${Sök._esc(d.titel)}</div>
          <div class="dok-kort-meta">${meta}</div>
        </div>
        <span class="dok-kort-pil">›</span>
      </div>`;
    }).join('')
    : '<p style="color:var(--text-ljus);padding:20px 0">Inga dokument ännu.</p>';

    return `
      <div id="kategorisida" class="${kat.farg}">
        <div class="kategori-header">
          <div class="kategori-header-ikon ${kat.farg}">${kat.ikon}</div>
          <div>
            <h2>${kat.namn}</h2>
            <p>${kat.beskrivning}</p>
          </div>
        </div>
        <div class="dok-lista">${dokKort}</div>
      </div>`;
  },

  _bindaKategori(katId) {
    this._uppdateraSidebarAktiv(katId);
  },

  // --- Dokumentsida ---
  dokumentVy(dokId) {
    const dok = DOKUMENT.find(d => d.id === dokId);
    if (!dok) return '<p style="padding:20px;color:var(--text-ljus)">Dokumentet hittades inte.</p>';

    const kat = KATEGORIER.find(k => k.id === dok.kategori);
    const isAkutkort = dok.kategori === 'akutkort';

    const pdfKnapp = dok.pdf ? `
      <a class="pdf-knapp" href="${dok.pdf}" target="_blank">
        📄 Öppna original-PDF
      </a>` : '';

    if (isAkutkort) {
      const bilder = dok.innehall.map(s => s.html).join('\n');
      return `
        <div id="dokumentsida" class="${kat ? kat.farg : ''}">
          <div class="dok-visning-header">
            <div class="dok-visning-kategori">${kat ? kat.namn : ''}</div>
            <h1 class="dok-visning-titel">${Sök._esc(dok.titel)}</h1>
            ${pdfKnapp}
          </div>
          <div class="dok-innehall">${bilder}</div>
        </div>`;
    }

    // Riktlinjedokument med Markdown: visa hela texten direkt (Kindle-läge)
    if (dok.markdownUrl) {
      document.getElementById('toc-knapp').classList.add('synlig');
      requestAnimationFrame(() => this._laddaMdOchScrolla(dok, null));

      const graphicalAbstract = dok.graphicalAbstract ? `
        <iframe src="${dok.graphicalAbstract}" title="Graphical Abstract"
                style="width:100%;border:none;border-radius:12px;display:block;margin:16px 0 20px;min-height:480px"
                onload="try{var h=this.contentDocument.documentElement.scrollHeight;if(h>100)this.style.height=h+8+'px'}catch(e){}">
        </iframe>` : '';

      return `
        <div id="dokumentsida" class="kindle-sida ${kat ? kat.farg : ''}">
          <div class="dok-visning-header">
            <div class="dok-visning-kategori">${kat ? kat.namn : ''}</div>
            <h1 class="dok-visning-titel">${Sök._esc(dok.titel)}</h1>
            ${pdfKnapp}
          </div>
          ${graphicalAbstract}
          <div id="md-innehall" class="kindle-lasare">
            <div class="md-laddas">Laddar dokument…</div>
          </div>
        </div>`;
    }

    // Kalkylator: visa som fullskärms-iframe
    if (dok.kalkylatorUrl) {
      return `
        <div id="dokumentsida" class="${kat ? kat.farg : ''}">
          <div class="dok-visning-header">
            <div class="dok-visning-kategori">${kat ? kat.namn : ''}</div>
            <h1 class="dok-visning-titel">${Sök._esc(dok.titel)}</h1>
          </div>
          <iframe src="${dok.kalkylatorUrl}" title="${Sök._esc(dok.titel)}"
                  style="width:100%;border:none;border-radius:12px;display:block;height:85vh"
                  loading="lazy">
          </iframe>
        </div>`;
    }

    // Fallback: avsnittslista (prognos, etc.)
    const avsnittLista = dok.innehall.map((s, i) => `
      <div class="dok-kort" role="button" tabindex="0"
           onclick="Router.gå('sektion', {id:'${dokId}/${i}'})"
           onkeydown="if(event.key==='Enter')Router.gå('sektion',{id:'${dokId}/${i}'})">
        <div class="dok-sektion-nr">${i + 1}</div>
        <div class="dok-kort-text">
          <div class="dok-kort-titel">${Sök._esc(s.rubrik)}</div>
        </div>
        <span class="dok-kort-pil">›</span>
      </div>`).join('');

    return `
      <div id="dokumentsida" class="${kat ? kat.farg : ''}">
        <div class="dok-visning-header">
          <div class="dok-visning-kategori">${kat ? kat.namn : ''}</div>
          <h1 class="dok-visning-titel">${Sök._esc(dok.titel)}</h1>
          ${pdfKnapp}
        </div>
        <div class="avsnitt-rubrik">Välj avsnitt</div>
        <div class="dok-lista">${avsnittLista}</div>
      </div>`;
  },

  // --- Sektionsvy ---
  sektionVy(param) {
    const slash = param ? param.lastIndexOf('/') : -1;
    if (slash === -1) return '<p style="padding:20px;color:var(--text-ljus)">Avsnittet hittades inte.</p>';
    const dokId  = param.slice(0, slash);
    const idx    = parseInt(param.slice(slash + 1), 10);
    const dok    = DOKUMENT.find(d => d.id === dokId);
    if (!dok || isNaN(idx) || !dok.innehall[idx]) {
      return '<p style="padding:20px;color:var(--text-ljus)">Avsnittet hittades inte.</p>';
    }

    const kat = KATEGORIER.find(k => k.id === dok.kategori);
    const s   = dok.innehall[idx];

    const nav = `
      <div class="sektion-nav kindle-nav">
        ${idx > 0
          ? `<button onclick="Router.gå('sektion',{id:'${dokId}/${idx-1}'})">‹ Föregående</button>`
          : '<span></span>'}
        <button onclick="Router.gå('dokument',{id:'${dokId}'})">Innehåll</button>
        ${idx < dok.innehall.length - 1
          ? `<button onclick="Router.gå('sektion',{id:'${dokId}/${idx+1}'})">Nästa ›</button>`
          : '<span></span>'}
      </div>`;

    // Markdown-dokument: Kindle-läge, scrollat till matchande rubrik
    if (dok.markdownUrl) {
      document.getElementById('toc-knapp').classList.add('synlig');
      requestAnimationFrame(() => this._laddaMdOchScrolla(dok, s.rubrik));
      return `
        <div id="dokumentsida" class="kindle-sida ${kat ? kat.farg : ''}">
          <div class="dok-visning-header">
            <div class="dok-visning-kategori">${Sök._esc(dok.titel)}</div>
            <h1 class="dok-visning-titel">${Sök._esc(s.rubrik)}</h1>
          </div>
          ${nav}
          <div id="md-innehall" class="kindle-lasare">
            <div class="md-laddas">Laddar avsnitt…</div>
          </div>
        </div>`;
    }

    // Vanlig textvy (prognos, etc.)
    const text = s.html
      ? s.html
      : `<p>${Sök._esc(s.text).replace(/\n\n/g,'</p><p>').replace(/\n/g,'<br>')}</p>`;

    return `
      <div id="sektionssida" class="${kat ? kat.farg : ''}">
        <div class="dok-visning-header">
          <div class="dok-visning-kategori">${Sök._esc(dok.titel)}</div>
          <h1 class="dok-visning-titel">${Sök._esc(s.rubrik)}</h1>
        </div>
        <div class="dok-innehall dok-sektion">${text}</div>
        ${nav}
      </div>`;
  },

  // --- Markdown: ladda + scrolla till avsnitt ---
  async _laddaMdOchScrolla(dok, rubrik) {
    const el = document.getElementById('md-innehall');
    if (!el) return;
    try {
      if (!this._mdCache) this._mdCache = {};
      let cached = this._mdCache[dok.markdownUrl];

      if (!cached) {
        // Första inladdning: hämta, parse och bygg TOC-data
        const resp = await fetch(dok.markdownUrl);
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        let mdText = await resp.text();
        mdText = mdText.replace(/^# [^\n]+\n+/, '');
        // Remove date lines and remaining h1 headings (document title duplicates from PDF extraction)
        mdText = mdText.replace(/^(# [^\n]+\n+|\d{4}-\d{2}-\d{2}\n+)+/, '');
        mdText = mdText.replace(/!\[([^\]]*)\]\(images\//g, '![$1](riktlinjerMarkdown/images/');
        mdText = mdText.replace(/!\[[^\]]*\]\([^\)]*\.pdf-0-\d+\.png\)/g, '');
        // Convert blank-surrounded **bold** lines (single or consecutive) to headings.
        // First occurrence → ##, repeated occurrences → ### (subsection of parent).
        // Prevents duplicate top-level TOC entries in docs with repeated subheadings
        // (e.g. each drug in Parkinson has "Farmakologiska egenskaper", each tremor type has "Behandling").
        const _seenBold = new Set();
        mdText = mdText.replace(/\n\n((?:\*\*[^\n*][^\n]*\*\*\n?)+)\n/g, (_, bolded) => {
          const text = bolded.replace(/\*\*([^\n*]+)\*\*\n?/g, '$1 ').trim();
          const level = _seenBold.has(text) ? '###' : '##';
          _seenBold.add(text);
          return `\n\n${level} ${text}\n\n`;
        });
        mdText = this._reflowMd(mdText);

        marked.setOptions({ breaks: false, gfm: true });

        // Rendera i tillfällig div för att sätta ID:n utan att röra DOM
        const tmp = document.createElement('div');
        tmp.innerHTML = marked.parse(mdText);
        this._addaRubrikIds(tmp);

        // Spara TOC-data som enkel array (inte DOM-noder)
        const tocData = Array.from(tmp.querySelectorAll('h2,h3,h4,h5,h6')).map(h => ({
          id: h.id, lvl: h.tagName.toLowerCase(),
          txt: h.textContent.trim().replace(/\*/g, '')
        }));

        cached = { html: tmp.innerHTML, tocData };
        this._mdCache[dok.markdownUrl] = cached;
      }

      if (!document.getElementById('md-innehall')) return;

      // Sätt HTML (omedelbart – inga tunga operationer)
      el.innerHTML = cached.html;
      this._byggTocFraData(cached.tocData);
      this._postprocessBilder(el);
      requestAnimationFrame(() => this._scrollaTillRubrik(el, rubrik));
    } catch (e) {
      if (el) el.innerHTML = `<p style="color:#E11D48;padding:20px 0">Kunde inte ladda avsnittet (${e.message}).</p>`;
    }
  },

  _byggTocFraData(tocData) {
    const lista = document.getElementById('toc-lista');
    if (!lista) return;
    if (!tocData.length) {
      lista.innerHTML = '<p class="toc-tom">Inga avsnitt hittades.</p>';
      return;
    }
    lista.innerHTML = tocData.map(({ id, lvl, txt }) =>
      `<button class="toc-item toc-${lvl}" onclick="Vy._scrollaTill('${id}')">${Sök._esc(txt)}</button>`
    ).join('');
  },

  _postprocessBilder(container) {
    // Slå in tabeller i scrollbar wrapper så de inte orsakar horisontell sidscroll
    container.querySelectorAll('table').forEach(t => {
      if (t.parentElement.classList.contains('tabell-scroll')) return;
      const w = document.createElement('div');
      w.className = 'tabell-scroll';
      t.parentNode.insertBefore(w, t);
      w.appendChild(t);
    });

    const containerW = container.offsetWidth || 680;
    container.querySelectorAll('img').forEach(img => {
      img.loading = 'lazy';
      img.addEventListener('error', () => { img.style.display = 'none'; });

      const hantera = () => {
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        if (!w || !h) return;

        // Ta bort logotyper/banners: mycket bred och låg bild (t.ex. MS-sällskapet header)
        if (w / h > 2.5 && h < 180) {
          const parent = img.closest('p') || img.parentElement;
          if (parent && parent !== container) parent.remove();
          else img.remove();
          return;
        }

        // Skala ner till ~70 % av naturlig pixelbredd (200 DPI → skärmlämplig storlek)
        // Stora diagram (>900 px) tillåts fylla hela bredden
        const målBredd = w > 900
          ? containerW
          : Math.min(Math.round(w * 0.70), containerW);
        img.style.width = målBredd + 'px';
        img.style.maxWidth = '100%';
      };

      if (img.complete && img.naturalWidth) hantera();
      else img.addEventListener('load', hantera);
    });
  },

  _reflowMd(text) {
    // Steg 1: slå ihop mjukt radbrytna rader (enkelt \n = PDF-kolumnbredd)
    text = text.replace(/([^\n])\n(?!\n|#|[ \t]*[-*+>|`]|[ \t]*\d+[.)]\s)/g, '$1 ');
    // Steg 2: slå ihop styckebrytningar mitt i mening (t.ex. myasteni-artefakt med \n\n\n)
    // Skydda rubrikrader med vaktpost (\x00) så de inte slås ihop med efterföljande text
    text = text.replace(/^(#{1,6}[^\n]*)\n\n+/gm, '$1\n\x00\n');
    text = text.replace(/([^.?!:;|\n\x00])\n\n+(?!#|[ \t]*[-*+>|`]|[ \t]*\d+[.)]\s|!\[)/g, '$1 ');
    text = text.replace(/\x00\n/g, '\n');
    return text;
  },

  _addaRubrikIds(container) {
    const seen = {};
    container.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(h => {
      if (h.id) return;
      let base = h.textContent.trim()
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s-]/gu, '')
        .replace(/\s+/g, '-')
        .slice(0, 60);
      if (!base) base = 'rubrik';
      let id = base;
      let n = 1;
      while (seen[id]) { id = base + '-' + (++n); }
      seen[id] = true;
      h.id = id;
    });
  },

  _byggToc(container) {
    const lista = document.getElementById('toc-lista');
    if (!lista) return;
    const headings = Array.from(container.querySelectorAll('h2,h3,h4,h5,h6'));
    if (!headings.length) {
      lista.innerHTML = '<p class="toc-tom">Inga avsnitt hittades.</p>';
      return;
    }
    const textCount = {};
    lista.innerHTML = headings.map(h => {
      const lvl = h.tagName.toLowerCase();
      const base = h.textContent.trim().replace(/\*/g, '');
      textCount[base] = (textCount[base] || 0) + 1;
      const txt = textCount[base] > 1 ? `${base} (${textCount[base]})` : base;
      return `<button class="toc-item toc-${lvl}" onclick="Vy._scrollaTill('${h.id}')">${Sök._esc(txt)}</button>`;
    }).join('');
  },

  _scrollaTill(id) {
    this._stängToc();
    const el = document.getElementById(id);
    if (!el) return;
    const beräknaY = () => {
      const headerH = document.getElementById('header')?.offsetHeight || 56;
      return el.getBoundingClientRect().top + window.scrollY - headerH - 20;
    };
    window.scrollTo({ top: beräknaY(), behavior: 'smooth' });
    // Korrigera efter smooth-animationen – lazy-laddade bilder kan ha skiftat layouten
    setTimeout(() => window.scrollTo({ top: beräknaY(), behavior: 'instant' }), 650);
  },

  _scrollaTillRubrik(container, rubrik) {
    if (!rubrik) return;
    const headings = container.querySelectorAll('h2,h3,h4,h5,h6');
    const stopOrd = new Set(['med','och','vid','för','till','från','eller','samt','inom','som','det','den','av','en','ett','är','ska','kan']);
    const ord = rubrik.toLowerCase()
      .split(/[\s.,;:()\[\]\\/]+/)
      .filter(w => w.length > 3 && !stopOrd.has(w));
    let bäst = null, bästaPoäng = 0;
    for (const h of headings) {
      const txt = h.textContent.toLowerCase().replace(/[*_]/g, '');
      const poäng = ord.filter(w => txt.includes(w)).length;
      if (poäng > bästaPoäng) { bästaPoäng = poäng; bäst = h; }
    }
    if (bäst && bästaPoäng > 0) {
      const headerH = document.getElementById('header')?.offsetHeight || 56;
      const y = bäst.getBoundingClientRect().top + window.scrollY - headerH - 8;
      window.scrollTo({ top: y, behavior: 'auto' });
    }
  },

  _toggleToc() {
    document.getElementById('toc-drawer').classList.toggle('öppen');
    document.getElementById('toc-bakgrund').classList.toggle('synlig');
  },

  _stängToc() {
    document.getElementById('toc-drawer').classList.remove('öppen');
    document.getElementById('toc-bakgrund').classList.remove('synlig');
  },

  // --- Sökresultat ---
  sokVy(fråga) {
    const träffar = Sök.kör(fråga || '');
    const visaAntal = träffar.length;

    const resultat = visaAntal ? träffar.map(t => {
      const sIdx = t.dok.innehall.indexOf(t.sektion);
      const target = sIdx >= 0 ? 'sektion' : 'dokument';
      const targetId = sIdx >= 0 ? `${t.dok.id}/${sIdx}` : t.dok.id;
      return `
        <div class="sok-resultat-item" data-target="${target}" data-id="${targetId}">
          <div class="sok-resultat-dok">${t.dok.kategori.toUpperCase()} › ${Sök._esc(t.dok.titel)}</div>
          ${t.sektion.rubrik ? `<div class="sok-resultat-rubrik">${Sök._esc(t.sektion.rubrik)}</div>` : ''}
          <div class="sok-resultat-kontext">…${Sök.märkUpp(t.kontext, fråga)}…</div>
        </div>`;
    }).join('')
    : `<div class="inga-resultat">
         <p>🔍</p>
         <p>Inga träffar för <strong>"${Sök._esc(fråga)}"</strong></p>
         <p style="font-size:.85rem;margin-top:8px">Prova ett annat sökord</p>
       </div>`;

    return `
      <div id="sokresltat-sida">
        <div class="sok-rubrik">
          Sökresultat <span>– "${Sök._esc(fråga)}" (${visaAntal} träffar)</span>
        </div>
        ${resultat}
      </div>`;
  },

  _bindaSokResultat() {
    document.querySelectorAll('.sok-resultat-item').forEach(el => {
      el.addEventListener('click', () => Router.gå(el.dataset.target, { id: el.dataset.id }));
    });
  },

  _uppdateraSidebarAktiv(id) {
    const btn = document.querySelector(`[data-nav="${id}"]`);
    if (btn) btn.classList.add('aktiv');
  },

  _uppdateraSidebarAktivDok(id) {
    const btn = document.querySelector(`[data-dok="${id}"]`);
    if (btn) btn.classList.add('aktiv');
  }
};

// === Sidebar (desktop) ===
const Sidebar = {
  bygg() {
    const nav = document.getElementById('sidebar-nav');
    if (!nav) return;

    const hemKnapp = `
      <button class="sidebar-nav-item" data-nav="hem" onclick="Router.gå('start')">
        <span class="nav-ikon">🏠</span> Startsida
      </button>`;

    // Riktlinjer parent with sub-categories
    const subKat = KATEGORIER.filter(k => k.parent === 'riktlinjer');
    const subItems = subKat.map(k => {
      const dok = DOKUMENT.filter(d => d.kategori === k.id);
      const dokItems = dok.map(d => `
        <button class="sidebar-dok-item" data-dok="${d.id}"
                onclick="Router.gå('dokument',{id:'${d.id}'})">
          ${Sök._esc(d.titel)}
        </button>`).join('');
      return `
        <div>
          <button class="sidebar-nav-item" data-nav="${k.id}" onclick="Router.gå('${k.id}')">
            <span class="nav-ikon">${k.ikon}</span> ${k.namn}
          </button>
          <div style="padding-left:8px">${dokItems}</div>
        </div>`;
    }).join('');

    const riktlinjerSektion = `
      <div>
        <button class="sidebar-nav-item" data-nav="riktlinjer" onclick="Router.gå('riktlinjer')">
          <span class="nav-ikon">📋</span> Riktlinjer
        </button>
        <div style="padding-left:8px">${subItems}</div>
      </div>`;

    // Top-level non-riktlinjer categories
    const övrigaKat = KATEGORIER.filter(k => !k.parent && k.id !== 'riktlinjer');
    const övrigaKnappar = övrigaKat.map(k => {
      const dok = DOKUMENT.filter(d => d.kategori === k.id);
      const dokItems = dok.map(d => `
        <button class="sidebar-dok-item" data-dok="${d.id}"
                onclick="Router.gå('dokument',{id:'${d.id}'})">
          ${Sök._esc(d.titel)}
        </button>`).join('');
      return `
        <div>
          <button class="sidebar-nav-item" data-nav="${k.id}" onclick="Router.gå('${k.id}')">
            <span class="nav-ikon">${k.ikon}</span> ${k.namn}
          </button>
          <div style="padding-left:8px">${dokItems}</div>
        </div>`;
    }).join('');

    nav.innerHTML = hemKnapp + '<div class="sidebar-separator"></div>' + riktlinjerSektion + övrigaKnappar;
  }
};

// === App init ===
const App = {
  init() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      window._installEvent = e;
      if (location.hash === '' || location.hash === '#start') {
        Vy.rendera('start', {});
      }
    });

    window.addEventListener('offline', () => {
      document.getElementById('offline-banner').classList.add('synlig');
    });
    window.addEventListener('online', () => {
      document.getElementById('offline-banner').classList.remove('synlig');
    });

    const sokfalt = document.getElementById('sokfalt');
    let sokTimer;
    sokfalt.addEventListener('input', () => {
      clearTimeout(sokTimer);
      const val = sokfalt.value.trim();
      if (val.length >= 2) {
        sokTimer = setTimeout(() => Router.gå('sok', { id: val }), 300);
      } else if (val.length === 0) {
        Router.gå('start');
      }
    });
    sokfalt.addEventListener('keydown', e => {
      if (e.key === 'Enter' && sokfalt.value.trim().length >= 2) {
        clearTimeout(sokTimer);
        Router.gå('sok', { id: sokfalt.value.trim() });
      }
    });

    document.getElementById('tillbaka-knapp').addEventListener('click', () => {
      history.back();
    });

    document.getElementById('header-logo').addEventListener('click', () => Router.gå('start'));
    document.getElementById('hem-knapp').addEventListener('click', () => Router.gå('start'));
    document.getElementById('toc-knapp').addEventListener('click', () => Vy._toggleToc());
    document.getElementById('toc-bakgrund').addEventListener('click', () => Vy._stängToc());

    Router.init();
  },

  visaInstallDialog() {
    if (window._installEvent) {
      window._installEvent.prompt();
      window._installEvent.userChoice.then(() => {
        window._installEvent = null;
        document.getElementById('install-prompt')?.remove();
      });
    }
  },

  avvisaInstall() {
    window._installEvent = null;
    document.getElementById('install-prompt')?.remove();
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
