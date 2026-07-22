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