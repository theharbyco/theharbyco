self.addEventListener("install", e => {
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  self.clients.claim();
});

// 🔔 Notification click
self.addEventListener("notificationclick", event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("/")
  );
});
