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
    "revision": "9a56c5e1c188ffbaf38e17c5b0754ec2"
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
    "revision": "ac6f359fb7c0714e0337e4ebe87ce426"
  },
  {
    "url": "assets/css/0.styles.ebbe7728.css",
    "revision": "198e50d5761dc3f9525307db5bf6eb95"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6576d02e.js",
    "revision": "526a41f1836179af309d1ed3e4ebc85c"
  },
  {
    "url": "assets/js/11.dd7e97c7.js",
    "revision": "3f3efd41d85964cccf0d58cf284ac394"
  },
  {
    "url": "assets/js/12.9262c9f6.js",
    "revision": "def0fbb3f89c9272aa4be7bb5a495512"
  },
  {
    "url": "assets/js/13.6ef30ba7.js",
    "revision": "64b1d38809fc09357e8d906533e4d9e6"
  },
  {
    "url": "assets/js/14.9ba1f2ec.js",
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
    "url": "assets/js/4.9fa5bb16.js",
    "revision": "5db917cae37253938a084192d62d72f9"
  },
  {
    "url": "assets/js/5.d3ec1ffb.js",
    "revision": "42c1c5f0c163693dee1a715970302786"
  },
  {
    "url": "assets/js/6.5f4d8837.js",
    "revision": "8d3ebe25c59793706f65aecc2918d945"
  },
  {
    "url": "assets/js/7.ea5ccc0a.js",
    "revision": "0063021be0fbb796112d2fa2a9911d92"
  },
  {
    "url": "assets/js/8.cc93e3a6.js",
    "revision": "d95929885543a935dd3f6b68080b2d13"
  },
  {
    "url": "assets/js/9.a5bd6efd.js",
    "revision": "f93cfea41cb0dd60f0f0d38738c1d4ec"
  },
  {
    "url": "assets/js/app.f3641cbb.js",
    "revision": "36bcc4c11b2a1ab0febd645ec5d44143"
  },
  {
    "url": "components/imagecontent.html",
    "revision": "0df41d2dca2db66991d2fb997c520fbb"
  },
  {
    "url": "components/line.html",
    "revision": "7f44a22d0a0746c04489f948bce36e2d"
  },
  {
    "url": "components/media.html",
    "revision": "6291ac9e0f97c4a9245c89b4b5727a35"
  },
  {
    "url": "components/multiwords.html",
    "revision": "23aaf9e941f35184c7bafa8e07a6ac91"
  },
  {
    "url": "components/paragraph.html",
    "revision": "73884d87d4d899fcaee9bb8d05fb40d3"
  },
  {
    "url": "customize/animation.html",
    "revision": "cc43409be89eb8e551b1996c0b3b54ba"
  },
  {
    "url": "customize/component.html",
    "revision": "3ff022928f7ae4899426decc320ee131"
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
    "revision": "6d1e26738d26b6c0a36c7bca8e1794f9"
  },
  {
    "url": "getting-started/installation.html",
    "revision": "34557bc93a4b5371a9a84a14335e31e0"
  },
  {
    "url": "index.html",
    "revision": "31085f318f9c81a50759d7e31050ec87"
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
