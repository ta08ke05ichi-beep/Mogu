const CACHE_NAME = "mogu-cache-v3";

const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json"
];

self.addEventListener("activate", event => {

event.waitUntil(

caches.keys().then(keys => {

return Promise.all(

keys.map(key => {

if(key !== CACHE_NAME){

return caches.delete(key);

}

})

);

})

);

});

// インストール
self.addEventListener("install", event => {

  console.log("Mogu Service Worker installed");

  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
      return cache.addAll(urlsToCache);
    })
  );

});


self.addEventListener("fetch", event => {

  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );

});