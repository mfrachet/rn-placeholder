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

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "276bed156d9123c2c670a5ce7dc3af95.gif",
    "revision": "276bed156d9123c2c670a5ce7dc3af95"
  },
  {
    "url": "2d0303655337ff7f0f6223f9981da0b1.gif",
    "revision": "2d0303655337ff7f0f6223f9981da0b1"
  },
  {
    "url": "3a496642260c3f3978a43444f18f67a3.gif",
    "revision": "3a496642260c3f3978a43444f18f67a3"
  },
  {
    "url": "404.html",
    "revision": "b4bb66fe4645bcfcf87e6a9f78865954"
  },
  {
    "url": "48885636649741bf2951e403075102a8.gif",
    "revision": "48885636649741bf2951e403075102a8"
  },
  {
    "url": "8d7b1d50313352dafd88bc19589067a3.gif",
    "revision": "8d7b1d50313352dafd88bc19589067a3"
  },
  {
    "url": "animations/builtin.html",
    "revision": "2003648879396b25d509768c31e51f08"
  },
  {
    "url": "assets/css/0.styles.8edcaad7.css",
    "revision": "f4ba02bba30cb5c13ef2fb7fb4952a39"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f0236cb1.js",
    "revision": "526a41f1836179af309d1ed3e4ebc85c"
  },
  {
    "url": "assets/js/11.2d89ff83.js",
    "revision": "3f3efd41d85964cccf0d58cf284ac394"
  },
  {
    "url": "assets/js/12.2d609ec6.js",
    "revision": "def0fbb3f89c9272aa4be7bb5a495512"
  },
  {
    "url": "assets/js/13.61487fb5.js",
    "revision": "64b1d38809fc09357e8d906533e4d9e6"
  },
  {
    "url": "assets/js/14.9871b647.js",
    "revision": "7af0c752a36c08e2528e47d0d35102ea"
  },
  {
    "url": "assets/js/2.4d942548.js",
    "revision": "c9ef5eccec94be6b75165bb145114d6e"
  },
  {
    "url": "assets/js/3.cc186159.js",
    "revision": "ab888f3cb9a34736cd5bb2aa21f88a85"
  },
  {
    "url": "assets/js/4.99493320.js",
    "revision": "5db917cae37253938a084192d62d72f9"
  },
  {
    "url": "assets/js/5.2bb67639.js",
    "revision": "42c1c5f0c163693dee1a715970302786"
  },
  {
    "url": "assets/js/6.cbe27766.js",
    "revision": "8d3ebe25c59793706f65aecc2918d945"
  },
  {
    "url": "assets/js/7.e12360b3.js",
    "revision": "0063021be0fbb796112d2fa2a9911d92"
  },
  {
    "url": "assets/js/8.0f8be7cd.js",
    "revision": "d95929885543a935dd3f6b68080b2d13"
  },
  {
    "url": "assets/js/9.b3f5712a.js",
    "revision": "f93cfea41cb0dd60f0f0d38738c1d4ec"
  },
  {
    "url": "assets/js/app.ac03fca3.js",
    "revision": "5cf66d988dfecf42b58bb2509e0c97bd"
  },
  {
    "url": "components/imagecontent.html",
    "revision": "43cc5e8210aba2a6d8bd0b322f788cf8"
  },
  {
    "url": "components/line.html",
    "revision": "5a2108105c7c6a515242e19688254a36"
  },
  {
    "url": "components/media.html",
    "revision": "f75fde55039d3ed142ebf981c32a0b54"
  },
  {
    "url": "components/multiwords.html",
    "revision": "a403ec9d173da3260abad917d236c4c4"
  },
  {
    "url": "components/paragraph.html",
    "revision": "4e6688e404c0289d437dd47006b4ed56"
  },
  {
    "url": "customize/animation.html",
    "revision": "b7989bc48c860312da81016e11ca9127"
  },
  {
    "url": "customize/component.html",
    "revision": "06c95e66992e21c7b71acc247afa7a10"
  },
  {
    "url": "e56399e6c801b375ed2a1c2e314d74c6.gif",
    "revision": "e56399e6c801b375ed2a1c2e314d74c6"
  },
  {
    "url": "e96be033e0ffcee31188769a2219ad4e.gif",
    "revision": "e96be033e0ffcee31188769a2219ad4e"
  },
  {
    "url": "f147a1ba618c9167a3d7980f20ba5e27.gif",
    "revision": "f147a1ba618c9167a3d7980f20ba5e27"
  },
  {
    "url": "getting-started/example.html",
    "revision": "aeb60923fe90079242f20098afda56a6"
  },
  {
    "url": "getting-started/installation.html",
    "revision": "e2044fccf1ccd7b9f2627038516a8dcb"
  },
  {
    "url": "index.html",
    "revision": "a2e8b850cbebfdfb3df01226fcadd0f4"
  },
  {
    "url": "shine.gif",
    "revision": "ef03d903469348bd0d28f49587e5c78e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
