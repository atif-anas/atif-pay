self.addEventListener('install', e => {
  e.waitUntil(caches.open('badr-v1').then(c => c.addAll(['./','./bader.html','./chemistry-full.html','./chemistry-points.html','./manifest.json'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});