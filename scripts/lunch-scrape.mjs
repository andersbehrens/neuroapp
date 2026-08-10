#!/usr/bin/env node
/**
 * Hämtar Blekingesjukhusets (Karlskrona) veckomatsedel server-side och skriver
 * data/lunch.json. Körs av GitHub Action (direkt hämtning – inga CORS/proxy-problem).
 * Lokalt: node scripts/lunch-scrape.mjs
 */
import { writeFile, mkdir } from 'node:fs/promises';

const HUVUD = 'https://regionblekinge.se/halsa-och-vard/sa-fungerar-varden-i-blekinge/blekingesjukhuset/matsedlar-for-sjukhusrestauranger/restaurangen-i-karlskrona.html';
const BASE = 'https://regionblekinge.se';
const DAGAR = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag'];

function isoWeek(d) {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  t.setUTCDate(t.getUTCDate() + 4 - (t.getUTCDay() || 7));
  const y0 = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return Math.ceil(((t - y0) / 864e5 + 1) / 7);
}
async function get(url, tries = 3) {
  let last;
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url, { headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'sv-SE,sv;q=0.9,en;q=0.8',
      } });
      if (!r.ok) throw new Error(url + ' -> ' + r.status);
      return await r.text();
    } catch (e) {
      last = e;
      if (i < tries - 1) await new Promise(res => setTimeout(res, 1500 * (i + 1))); // backoff mot WAF/transient
    }
  }
  throw last;
}
const clean = s => s.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

function parseWeek(html) {
  const m = html.match(/<table[\s\S]*?<\/table>/i);
  const seg = m ? m[0] : html;
  const cells = [...seg.matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi)].map(x => clean(x[1])).filter(Boolean);
  const dagar = {};
  let cur = null, expect = null;
  for (const c of cells) {
    const day = DAGAR.find(d => c.toLowerCase().startsWith(d.toLowerCase()) && c.length < 15);
    if (day) { cur = day; dagar[cur] = { lunch: '', gront: '' }; expect = null; continue; }
    if (!cur) continue;
    const low = c.toLowerCase();
    if (low === 'lunch' || low === 'dagens lunch') { expect = 'lunch'; continue; }
    if (low.includes('grön') || low.includes('vegetar')) { expect = 'gront'; continue; }
    if (expect === 'lunch' && !dagar[cur].lunch) { dagar[cur].lunch = c; expect = null; }
    else if (expect === 'gront' && !dagar[cur].gront) { dagar[cur].gront = c; expect = null; }
  }
  return dagar;
}

const now = new Date();
const week = isoWeek(now);
let dagar = {}, vecka = week;
try {
  const main = await get(HUVUD);
  const links = [...main.matchAll(/href="([^"]*matsedel[^"]*\.html)"/gi)].map(m => m[1]);
  // ENDAST innevarande vecka. Skriv aldrig en annan veckas meny – då hellre behålla
  // gammal fil (widgeten veckokontrollerar och visar "ej uppdaterad" om den är gammal).
  let href = links.find(h => new RegExp('vecka-' + week + '\\D').test(h));
  if (href) {
    if (!href.startsWith('http')) href = BASE + href;
    dagar = parseWeek(await get(href));
  } else {
    console.error(`Ingen länk för vecka ${week} hittades – behåller befintlig data/lunch.json.`);
  }
} catch (e) { console.error('Skrapning misslyckades:', e.message); }

const n = Object.keys(dagar).length;
if (!n) {
  // Skriv ALDRIG över med tom data (t.ex. om sajten är onåbar från runnern) –
  // behåll senaste fungerande data/lunch.json.
  console.error('Tom skrapning – behåller befintlig data/lunch.json (skriver inte).');
  process.exit(0);
}
const out = { updated: now.toISOString(), vecka, dagar };
await mkdir('data', { recursive: true });
await writeFile('data/lunch.json', JSON.stringify(out, null, 2) + '\n', 'utf8');
console.log(`Skrev data/lunch.json: vecka ${vecka}, ${n} dagar – ` +
  Object.entries(dagar).map(([d, r]) => `${d}: ${r.lunch}`).join(' | '));
