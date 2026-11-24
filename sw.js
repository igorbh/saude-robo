// Necessário para o celular aceitar instalar como app. Não guarda nada: sempre busca na internet.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
