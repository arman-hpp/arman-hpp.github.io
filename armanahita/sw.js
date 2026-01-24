const CACHE_NAME = 'static-cache-v4';
const ASSETS = [
  '/armanahita/',
  '/armanahita/index.html',
  '/armanahita/bg.jpg',
  '/manifest.json',
  '/armanahita/icon-192.png',
  '/armanahita/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => {
    return Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)));
  }));
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});