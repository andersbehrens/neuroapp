const CACHE_NAME = 'neuroguide-v11';
const ASSETS = [
  './',
  'index.html',
  'css/style.css',
  'js/app.js',
  'js/data.js',
  'js/marked.min.js',
  'manifest.json',
  'icons/icon.svg',
  'icons/icon-192.png',
  'icons/icon-512.png',
  // Akutkort-bilder
  'images/akutkort/GCS_p1.png',
  'images/akutkort/ICH_p1.png',
  'images/akutkort/ICH_p2.png',
  'images/akutkort/IVT_EVT_p1.png',
  'images/akutkort/IVT_EVT_p2.png',
  'images/akutkort/NIHSS_p1.png',
  'images/akutkort/NIHSS_p2.png',
  'images/akutkort/NIHSS_p3.png',
  'images/akutkort/NIHSS_p4.png',
  'images/akutkort/RLS_p1.png',
  'images/akutkort/Rutinnervstatus_p1.png',
  'images/akutkort/SBAR_p1.png',
  'images/akutkort/Status_EP_p1.png',
  'images/akutkort/Status_EP_p2.png',
  'images/akutkort/Yrsel_p1.png',
  'images/akutkort/Yrsel_p2.png',
  // Övriga bilder
  'images/EIUH2_p2_img0.jpeg',
  'images/MG_p16_img0.jpeg',
  'images/Tremor_p8_img0.png',
  'images/Tremor_p12_img0.jpeg',
  // Riktlinjer Markdown
  'riktlinjerMarkdown/Konsensusdokument_MR_3.1_2025-10-10.md',
  'riktlinjerMarkdown/Handlaggning-av-hypogammaglobulinemi-och-late-onset-neutropeni.md',
  'riktlinjerMarkdown/Riktlinjer-for-utredning-och-behandling-av-Parkinsons-sjukdom-10-2025.md',
  'riktlinjerMarkdown/Tremor-riktlinjer-SWEMODIS-2026.md',
  'riktlinjerMarkdown/MGkonsensus2024v2.md',
  'riktlinjerMarkdown/Polyneuropati_Karolinska_2023v2.md',
  // PDF-filer
  'akutkort/GCS.pdf',
  'akutkort/ICH.pdf',
  'akutkort/IVT_EVT.pdf',
  'akutkort/NIHSS.pdf',
  'akutkort/RLS.pdf',
  'akutkort/Rutinnervstatus.pdf',
  'akutkort/SBAR.pdf',
  'riktlinjer/Konsensusdokument_MR_3.1_2025-10-10.pdf',
  'riktlinjer/Handlaggning-av-hypogammaglobulinemi-och-late-onset-neutropeni.pdf',
  'riktlinjer/MGkonsensus2024v2.pdf',
  'riktlinjer/Polyneuropati Karolinska 2023v2.pdf',
  'riktlinjer/Riktlinjer-for-utredning-och-behandling-av-Parkinsons-sjukdom-10-2025.pdf',
  'riktlinjer/Tremor-riktlinjer-SWEMODIS-2026.pdf',
  'papers/4A7884B3-820E-4B4C-8587-133D336C1012.pdf',
  'papers/51F1599A-2FCA-423A-B1D4-AC8026090E6C.pdf',
  'papers/EE288F17-635C-43FB-95C7-374F680DFC3E.pdf',
  // Graphical abstracts
  'graphical_abstract_hypogamma.html',
  'graphical_abstract_mg.html',
  'graphical_abstract_parkinson.html',
  'graphical_abstract_tremor.html',
  'graphical_abstract_polyneuropati.html',
  'graphical_abstract_mr.html',
  'ledd_kalkylator.html'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(c =>
      Promise.allSettled(ASSETS.map(url => c.add(url).catch(() => {})))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
