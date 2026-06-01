const CACHE_NAME = 'tcamera-v26';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  'LOGO-TECN.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
