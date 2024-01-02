'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ac933aa0f13c6bdec13f9660725dd6e1",
"assets/AssetManifest.bin.json": "259f3802e73f477fba7e46917f9d293c",
"assets/AssetManifest.json": "41f9833dfb759780a894642f0ec06998",
"assets/assets/avatar.png": "a4334818d3b960d7c61a03cc6c326aec",
"assets/assets/Ellipse%252010.png": "5d9cde232fe9d055c9a56189f1a3e2c3",
"assets/assets/Ellipse%25205.png": "ff0ab67d761335d2c5e2e9bb07605bc2",
"assets/assets/Ellipse%25207.png": "d9c93781a3a3caa2114b48c34c9abe83",
"assets/assets/Ellipse%25208.png": "e8c83b2c4296a78f313b054e220e75fd",
"assets/assets/Ellipse%25209.png": "62655b0cfcb2f77a2d03e34378ac5db2",
"assets/assets/fluent-emoji_fire.png": "eca13e1bdfd365ccf326983641956e5d",
"assets/assets/Frame%25201.png": "4e31d492772fb02c933a4ef37f03bc8b",
"assets/assets/Group%252036777.png": "1ecf271c35c13e7306cf614f42264542",
"assets/assets/Group.png": "6c4f9e7d33b69c15508195c515499ea2",
"assets/assets/map.png": "ca2899a0556040af3a01f683877119ad",
"assets/assets/mdi_organic-outline.png": "d0e61188fe090fc1632b764fbee7b137",
"assets/assets/noto_star.png": "ae5b2a2d9173ced2ddb60f7975c2e5f5",
"assets/assets/pngwing%25201.png": "63a650ed43118e674d6257c181c2bf4f",
"assets/assets/Rectangle%25202.png": "ac29d0a95db5d25ac13f208211bbe01b",
"assets/assets/Rectangle%25204381-1.png": "b2efbaa961f7f5d7ba99a3122055aed4",
"assets/assets/Rectangle%25204381.png": "a564982b7530609d4367f892ee33f511",
"assets/assets/Rectangle%25204382-1.png": "48967aea8f93f798ab25d7c755c0ebb3",
"assets/assets/Rectangle%25204382-10.png": "0b8741e2cab12eb2d6bac43eb96014f5",
"assets/assets/Rectangle%25204382-2.png": "78ec98e5a7c32e6fa99c7609625fea1d",
"assets/assets/Rectangle%25204382-3.png": "7eaea9e151866edaa8825544dad9b7be",
"assets/assets/Rectangle%25204382-4.png": "2b0d6bc3abc9e7b252fb06f99c61783d",
"assets/assets/Rectangle%25204382-5.png": "6555168e9abdce092202569e8b6c8ed9",
"assets/assets/Rectangle%25204382-6.png": "8980161c128b2e10afd719339e27131d",
"assets/assets/Rectangle%25204382-7.png": "97b999f95e0ca0598480c8a2eeebbddd",
"assets/assets/Rectangle%25204382-8.png": "6629a937e387ae042b77ffd98be7ff40",
"assets/assets/Rectangle%25204382-9.png": "83d2e0eaa8de7872601d43285f46c1f6",
"assets/assets/Rectangle%25204382.png": "9cff54524c2fcbb1e6ce3e6debd4bda5",
"assets/assets/tabler_square-number-1.png": "98644736c74f86a16514030a50768a29",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1f1d1a30220880d49718a6e8c8fd5a3a",
"assets/NOTICES": "d04822a72a3d5465360b305c187f199d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3bdd3031d610e817f6492f1efa0c78cd",
"/": "3bdd3031d610e817f6492f1efa0c78cd",
"main.dart.js": "cf17e9560fb31ef6ae1c232abeecc2cb",
"manifest.json": "857d7438891fe081a903fd431d44ce05",
"version.json": "868c6fca6cfa40393c07f0ab75b73b60"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
