let cacheName = "horarios-aula";
let filesToCache = ["/", "/index.html", "/horariosAulas.html", "horariosPE.html", 
                    "/css/styles.css", "/js/main.js"];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then(function (cache){
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWhith(
        caches.match(e.request).then((response) => {
            caches.match(e.request).then((response) => {
                return response || fetch(e.request);
            })
        })
    );
});