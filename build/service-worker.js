/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "favicon.ico",
    "revision": "c92b85a5b907c70211f4ec25e29a8c4a"
  },
  {
    "url": "index.html",
    "revision": "4f6ef72a9780b05cc256b18c45df224f"
  },
  {
    "url": "pre-loader.css",
    "revision": "ccafbf5e345f4b34a2c7259e8e67131d"
  },
  {
    "url": "static/css/main.992f4d39.css",
    "revision": "daf7e72ece5c802bf6a0ef8ca5dfdfac"
  },
  {
    "url": "static/js/main.ccefbffc.js",
    "revision": "78bf96e421b1efcdc70543cc72f673f1"
  },
  {
    "url": "static/media/todos.833dfac7.svg",
    "revision": "833dfac7eaef3901842f8cad6cb0d100"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, workbox.strategies.cacheFirst({ cacheName: "images", plugins: [new workbox.expiration.Plugin({"maxEntries":500,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({ cacheName: "fonts", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/graph.facebook.com\/(.*)/, workbox.strategies.cacheFirst({ cacheName: "avatars", plugins: [] }), 'GET');
workbox.routing.registerRoute(/api/, workbox.strategies.networkFirst({ networkTimeoutSeconds: 10, cacheName: "api-cache", plugins: [] }), 'GET');
