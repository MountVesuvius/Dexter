// Define a cache name for our app. Increment the version if you make updates.
const CACHE_NAME = 'dexter-pwa-v1';

// List of files to cache immediately during the service worker's install event.
const STATIC_CACHE_URLS = [
    '/', // Index route
    '/favicon.png',
    '/manifest.json'
    // Add other routes or static assets (images, styles, scripts) if necessary
];

self.addEventListener('install', event => {
    console.log('Service Worker: Installing...');

    // Cache app shell and static assets
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Caching app shell and static assets');
                return cache.addAll(STATIC_CACHE_URLS);
            })
    );
});

self.addEventListener('activate', event => {
    console.log('Service Worker: Activating...');
    event.waitUntil(
        // Clean up old caches by iterating through all cache names and deleting outdated ones.
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('Service Worker: Clearing old cache', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    // For GET requests, try the network first, then fall back to the cache.
    // For other request methods (e.g., POST), skip the service worker.
    if (event.request.method === 'GET') {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    // If the fetch is successful, cache the response and return it.
                    let clone = response.clone();
                    caches.open(CACHE_NAME)
                        .then(cache => cache.put(event.request, clone));
                    return response;
                })
                .catch(err => {
                    // If the fetch fails (e.g., the user is offline), return the cached response.
                    console.log('Fetch failed; returning offline page instead.', err);
                    return caches.match(event.request);
                })
        );
    }
});

