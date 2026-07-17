const CACHE_NAME = "mogu-cache-v2";

const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json"
];


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


// 通信した画像を自動保存
self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)
    .then(response => {

      return response || fetch(event.request)
      .then(fetchResponse => {

        return caches.open(CACHE_NAME)
        .then(cache => {

          cache.put(
            event.request,
            fetchResponse.clone()
          );

          return fetchResponse;

        });

      });

    })

  );

});