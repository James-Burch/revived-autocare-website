// // Service Worker for Performance Caching
// const CACHE_NAME = 'mortgage-advisor-v3'; // Incremented version to force cache refresh
// const urlsToCache = [
//     '/',
//     '/static/css/main.css',
//     '/static/js/main.js',
//     '/manifest.json',
//     '/favicon.ico'
// ];

// // Install event - cache resources
// self.addEventListener('install', (event) => {
//     console.log('Service Worker: Installing version', CACHE_NAME);
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then((cache) => {
//                 console.log('Service Worker: Caching files');
//                 return cache.addAll(urlsToCache);
//             })
//             .then(() => {
//                 console.log('Service Worker: Installation complete, skipping waiting');
//                 return self.skipWaiting();
//             })
//     );
// });

// // Activate event - clean up old caches
// self.addEventListener('activate', (event) => {
//     console.log('Service Worker: Activating version', CACHE_NAME);
//     event.waitUntil(
//         caches.keys().then((cacheNames) => {
//             return Promise.all(
//                 cacheNames.map((cacheName) => {
//                     // Delete any cache that doesn't match current version
//                     if (cacheName !== CACHE_NAME) {
//                         console.log('Service Worker: Deleting old cache', cacheName);
//                         return caches.delete(cacheName);
//                     }
//                 })
//             );
//         }).then(() => {
//             console.log('Service Worker: Claiming clients');
//             return self.clients.claim();
//         })
//     );
// });

// // Fetch event - serve from cache when possible
// self.addEventListener('fetch', (event) => {
//     // Only handle GET requests
//     if (event.request.method !== 'GET') return;

//     // Skip cross-origin requests
//     if (!event.request.url.startsWith(self.location.origin)) return;

//     // Skip requests with cache-busting parameters for fresh content
//     const url = new URL(event.request.url);
//     if (url.searchParams.has('nocache')) {
//         return fetch(event.request);
//     }

//     event.respondWith(
//         caches.match(event.request)
//             .then((response) => {
//                 // Return cached version or fetch from network
//                 if (response) {
//                     console.log('Service Worker: Serving from cache', event.request.url);
//                     return response;
//                 }

//                 console.log('Service Worker: Fetching from network', event.request.url);
//                 return fetch(event.request).then((response) => {
//                     // Don't cache non-successful responses
//                     if (!response || response.status !== 200 || response.type !== 'basic') {
//                         return response;
//                     }

//                     // Clone the response as it can only be consumed once
//                     const responseToCache = response.clone();

//                     // Cache the new response
//                     caches.open(CACHE_NAME)
//                         .then((cache) => {
//                             cache.put(event.request, responseToCache);
//                         })
//                         .catch((error) => {
//                             console.warn('Service Worker: Failed to cache', event.request.url, error);
//                         });

//                     return response;
//                 });
//             })
//             .catch((error) => {
//                 console.warn('Service Worker: Fetch failed', event.request.url, error);
//                 // Fallback for offline scenarios
//                 if (event.request.destination === 'document') {
//                     return caches.match('/');
//                 }
//             })
//     );
// });

// // Listen for messages from the main thread
// self.addEventListener('message', (event) => {
//     if (event.data && event.data.type === 'SKIP_WAITING') {
//         console.log('Service Worker: Received SKIP_WAITING message');
//         self.skipWaiting();
//     }
// });

// // Handle updates - notify when new version is available
// self.addEventListener('message', (event) => {
//     if (event.data && event.data.type === 'GET_VERSION') {
//         event.ports[0].postMessage({ version: CACHE_NAME });
//     }
// });