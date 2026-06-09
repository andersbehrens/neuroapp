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
async function get(url) {
  const r = await fetch(url, { headers: { 'User-Agent': 'neuroguide-lunch/1.0' } });
  if (!r.ok) throw new Error(url + ' -> ' + r.status);
  return r.text();
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
  let href = links.find(h => new RegExp('vecka-' + week + '\\D').test(h)) || links[links.length - 1];
  if (href) {
    const m = href.match(/vecka-(\d+)/); if (m) vecka = +m[1];
    if (!href.startsWith('http')) href = BASE + href;
    dagar = parseWeek(await get(href));
  }
} catch (e) { console.error('Skrapning misslyckades:', e.message); }

const out = { updated: now.toISOString(), vecka, dagar };
await mkdir('data', { recursive: true });
await writeFile('data/lunch.json', JSON.stringify(out, null, 2) + '\n', 'utf8');
const n = Object.keys(dagar).length;
console.log(`Skrev data/lunch.json: vecka ${vecka}, ${n} dagar` +
  (n ? ' – ' + Object.entries(dagar).map(([d, r]) => `${d}: ${r.lunch}`).join(' | ') : ' (tomt)'));
