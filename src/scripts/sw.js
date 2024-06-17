import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './icons/benah-kota-icon.png',
  './icons/logout.svg',
  './icons/search.svg',
  './images/collaboration.png',
  './images/contact.svg',
  './images/damaged-road-2.jpg',
  './images/deadline.png',
  './images/kota3.jpg',
  './images/quality-of-life.png',
  './images/realtime.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
