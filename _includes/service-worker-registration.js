if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
    console.log("[ServiceWorker] Already registered");
  } else {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((reg) =>
        console.log(`[ServiceWorker] Registered for scope: ${reg.scope}`)
      );
  }
}
