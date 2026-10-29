// Dead Grid service worker: the game works offline once loaded and updates itself with every release.
// VERSION is bumped by `apkship version` together with the game, so each release gets a fresh cache.
const VERSION = "1.4.2";
const CACHE = 'deadgrid-' + VERSION;
const SHELL = ['./', './index.html', './manifest.webmanifest', './vendor/leaflet/leaflet.css', './vendor/leaflet/leaflet.js', './icons/icon-192.png', './icons/apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('deadgrid-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== location.origin || r.headers.has('range') || u.pathname.endsWith('.mp4')) return;
  // the page itself: newest from the network, cached copy when offline
  if (r.mode === 'navigate' || u.pathname.endsWith('/') || u.pathname.endsWith('index.html')) {
    e.respondWith(fetch(r).then(res => { const c = res.clone(); caches.open(CACHE).then(k => k.put(r, c)); return res; }).catch(() => caches.match(r).then(m => m || caches.match('./index.html'))));
    return;
  }
  // everything else of ours: cache first, filled as it's used
  e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => { if (res.ok) { const c = res.clone(); caches.open(CACHE).then(k => k.put(r, c)); } return res; })));
});
