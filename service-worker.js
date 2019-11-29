const CACHE = "brunoroque06";

self.addEventListener("install", function(event) {
  console.log("[ServiceWorker] Installing...");
  event.waitUntil(
    caches.open(CACHE).then(function(cache) {
      console.log("[ServiceWorker] Installed");
    })
  );
});

self.addEventListener("fetch", function(event) {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        console.log(`[ServiceWorker] Adding to cache: ${response.url}`);
        event.waitUntil(updateCache(event.request, response.clone()));
        return response;
      })
      .catch(function(error) {
        console.log(`[ServiceWorker] Serving from cache: ${event.request.url}`);
        return fromCache(event.request);
      })
  );
});

async function updateCache(request, response) {
  const cache = await caches.open(CACHE);
  return cache.put(request, response);
}

async function fromCache(request) {
  const cache = await caches.open(CACHE);
  const match = await cache.match(request);
  if (!match || match.status === 404) {
    const offline = new Response('[ServiceWorker] You are offline (",)');
    return Promise.resolve(offline);
  }
  return match;
}
