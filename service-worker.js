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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bff53f117bce359bafe82ec3c2d759de"
  },
  {
    "url": "about/about-me.html",
    "revision": "5e7d518b7c72ae62641794c3dedc666e"
  },
  {
    "url": "assets/css/0.styles.90b3d535.css",
    "revision": "463c7af0e727c4d23df77a191dcbc338"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/github.ffcae2a3.jpg",
    "revision": "ffcae2a35dbd796b92e53ec12546a9ea"
  },
  {
    "url": "assets/img/hotchpotch.f4f88113.jpg",
    "revision": "f4f88113ab4857ad59b8c7521a4527a3"
  },
  {
    "url": "assets/img/hotchpotch.jpg",
    "revision": "f4f88113ab4857ad59b8c7521a4527a3"
  },
  {
    "url": "assets/img/Java-1.be1e88c7.png",
    "revision": "be1e88c7ac049d6732bb42943f8dd5f4"
  },
  {
    "url": "assets/img/merry-meet-merry-part.583b69f1.jpg",
    "revision": "583b69f1b21f1ba67517a96564c2376a"
  },
  {
    "url": "assets/img/method-breakpoints-1.36082c09.png",
    "revision": "36082c098bb4c874bba784e09228b548"
  },
  {
    "url": "assets/img/method-breakpoints-2.0e0b66db.jpg",
    "revision": "0e0b66db513eee4fbe77161ac5109acc"
  },
  {
    "url": "assets/img/reflex1.6e7a12ac.jpg",
    "revision": "6e7a12ac9615e9ec212397cdfd46831b"
  },
  {
    "url": "assets/img/reflex2.640fb4f5.jpg",
    "revision": "640fb4f5c03271dd61837054246ee7a4"
  },
  {
    "url": "assets/js/1.0d20c5c7.js",
    "revision": "7ce0ba68ff1f1a348b4e53cd679a02f6"
  },
  {
    "url": "assets/js/10.d3aa7660.js",
    "revision": "c560c325169daf898259304ba5e5ead2"
  },
  {
    "url": "assets/js/11.6cee7e75.js",
    "revision": "2e205616bc42368ed3d5bd5bc637504b"
  },
  {
    "url": "assets/js/12.fceca38d.js",
    "revision": "172e02f09f0c2eab6a1c433605e7d946"
  },
  {
    "url": "assets/js/13.9cb4ef02.js",
    "revision": "4f8ee991902d7d3a012163734750eac8"
  },
  {
    "url": "assets/js/14.be4e13f8.js",
    "revision": "3ca9b23bbe5e32dffe2e4e3f0eba5f31"
  },
  {
    "url": "assets/js/15.1d24f505.js",
    "revision": "0837108337750ec9e486bf98e3cbf69f"
  },
  {
    "url": "assets/js/16.43303c50.js",
    "revision": "4405da149d6b25f018c14006a88b0a57"
  },
  {
    "url": "assets/js/17.d36dffb2.js",
    "revision": "25536821bec7b9cff6dc8055b805bc63"
  },
  {
    "url": "assets/js/18.0719d44b.js",
    "revision": "0ffd5f5ed67f5b617ae4007a51925e3c"
  },
  {
    "url": "assets/js/19.d29d21ce.js",
    "revision": "8458ed8440ebe63aa0f0007d75266c16"
  },
  {
    "url": "assets/js/20.3cfb291d.js",
    "revision": "a476a360e1a6629f454425ee5a6f0316"
  },
  {
    "url": "assets/js/21.f3b861cd.js",
    "revision": "5000869836cc22a70ea107a3f7871ba4"
  },
  {
    "url": "assets/js/22.59903ee4.js",
    "revision": "678dbec277acecbf0d185fdb59779939"
  },
  {
    "url": "assets/js/23.962aa8ca.js",
    "revision": "878dcbce67d7518c5dbc7c3ee58062c7"
  },
  {
    "url": "assets/js/24.2ef96988.js",
    "revision": "b25047199b7180306bb79ccba8120331"
  },
  {
    "url": "assets/js/25.46c532b0.js",
    "revision": "e928539e20b38a04dbe11ae246c5c952"
  },
  {
    "url": "assets/js/26.3fde6b5e.js",
    "revision": "cd5220c4d4639e79ef9d8f4169931d42"
  },
  {
    "url": "assets/js/3.a4b3cb92.js",
    "revision": "b9e6eb0027e71f06a3fc4294709e9c1e"
  },
  {
    "url": "assets/js/4.d8240252.js",
    "revision": "254d39e010f70f560a27f6966553ab68"
  },
  {
    "url": "assets/js/5.7d313c81.js",
    "revision": "082af7afc5ca7172f76cd0ab85ed6e17"
  },
  {
    "url": "assets/js/6.293446ee.js",
    "revision": "7b01d68307dfa828b16e07ad28d57154"
  },
  {
    "url": "assets/js/7.14c896bd.js",
    "revision": "f1acf33f1535b8bb92434e8f39c28a9f"
  },
  {
    "url": "assets/js/8.ed29c7e3.js",
    "revision": "c722e6b5ee28fc7d30af319547290745"
  },
  {
    "url": "assets/js/9.8393c88c.js",
    "revision": "aac0700af9f9040626633768a9cbc7fa"
  },
  {
    "url": "assets/js/app.bbfe88f6.js",
    "revision": "e5f470b4e5f2b790b3a52a3de6569bdc"
  },
  {
    "url": "back-end/Java/chap16_reflex.html",
    "revision": "451782c9e026706e5721b021d0b17056"
  },
  {
    "url": "bugs/prob-in-work/method-breakpoints.html",
    "revision": "b3bd367c988a26d1a42640e423b9fabd"
  },
  {
    "url": "bugs/prob-in-work/npm-taobao-mirror-delay.html",
    "revision": "6496a580fbc17f853d78c3dcc9b470af"
  },
  {
    "url": "categories/index.html",
    "revision": "1caa056455a251ec95dcec22a72fe1dd"
  },
  {
    "url": "diary/2022/11.html",
    "revision": "d21a18d9e86994091baf8f58b4bf1c31"
  },
  {
    "url": "diary/2022/12.html",
    "revision": "e0fee06205b5def3f73f5b427951d7fa"
  },
  {
    "url": "guide/welcome.html",
    "revision": "4f54a417d0f5de30f0b0c3e356531f0e"
  },
  {
    "url": "iconfont/back-end/iconfont.css",
    "revision": "dc51b220b7efb2497738e76ededa9dd4"
  },
  {
    "url": "iconfont/back-end/iconfont.ttf",
    "revision": "29749e075ed49ea8a94736119e3c34df"
  },
  {
    "url": "iconfont/bug/iconfont.css",
    "revision": "00feb40243fc7810b4b13b44cf55de12"
  },
  {
    "url": "iconfont/bug/iconfont.ttf",
    "revision": "7801c9d0c960dd1b289262dc6b24def1"
  },
  {
    "url": "iconfont/centos/iconfont.css",
    "revision": "2fa0be39c4ce902cf7ebeb98bd8cdb32"
  },
  {
    "url": "iconfont/centos/iconfont.ttf",
    "revision": "ab500c4f55988e50028204975a457b50"
  },
  {
    "url": "iconfont/diary/iconfont.css",
    "revision": "9af9b950e659b253092fa819421b83d6"
  },
  {
    "url": "iconfont/diary/iconfont.ttf",
    "revision": "15c5656ce153483f0f1bbde33aca6c88"
  },
  {
    "url": "iconfont/interview/iconfont.css",
    "revision": "68715e519afff1482e4f1abc98ce081b"
  },
  {
    "url": "iconfont/interview/iconfont.ttf",
    "revision": "f61bf9decd7535f3c629b6b51f8f25a4"
  },
  {
    "url": "iconfont/Java/iconfont.css",
    "revision": "d67e7924fdc12cdc66cd35127658c452"
  },
  {
    "url": "iconfont/Java/iconfont.ttf",
    "revision": "bfbe2b0504ce221b937a8fa6980edfb4"
  },
  {
    "url": "iconfont/me/iconfont.css",
    "revision": "3f57a78890562acf67b47dfe83d35660"
  },
  {
    "url": "iconfont/me/iconfont.ttf",
    "revision": "53797800b054ac45e5bda04bba9f4fb3"
  },
  {
    "url": "iconfont/movie/iconfont.css",
    "revision": "4503cb6760e76b0e661422358b700b9d"
  },
  {
    "url": "iconfont/movie/iconfont.ttf",
    "revision": "5ce0eae1cfbbe3379c98a19a2c38a0df"
  },
  {
    "url": "iconfont/schedule/iconfont.css",
    "revision": "9743f1521e5ec466de0306e811a82574"
  },
  {
    "url": "iconfont/schedule/iconfont.ttf",
    "revision": "ed4787033e510fd7a1a9b4834983602b"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "2267408135d4d4829ad29127d9cb77d3"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "3a964dfa5e61cc5cbf52149a2508b6d9"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "057b3037768f08cc02f3457cdb28ffc0"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "f2d9a0d79beed2a4bc773ec941623aca"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "b0d0ff5da0bdfbed87f1b35d8e68b7aa"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "669dd07e8a7aacab7338ffa45ab947ee"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "2dfa875427be9c08a54bfd023c93db57"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "bcc2685b234910813ed6a238a9bceb94"
  },
  {
    "url": "index.html",
    "revision": "ad1b680ecb3c82eb911ea00bfabd624a"
  },
  {
    "url": "interview/Java.html",
    "revision": "9b2bea89a8f206ff8ddf032cb15df37f"
  },
  {
    "url": "interview/multi-thread.html",
    "revision": "0eb7a6c19806df060c780559f19b690f"
  },
  {
    "url": "interview/MySQL.html",
    "revision": "b92e42e3dab2b146cfbc03fb3b307573"
  },
  {
    "url": "interview/Redis.html",
    "revision": "8209fcf3387dc18029e024affe804368"
  },
  {
    "url": "Linux/index.html",
    "revision": "d4034de8a47d313fde873518bc330df5"
  },
  {
    "url": "Linux/manual/Frequently-used-Commands.html",
    "revision": "6f6a0d521a42db72eff7f739234bc761"
  },
  {
    "url": "schedule/movies/to-be-seen.html",
    "revision": "852d64c33f58f090093dfe69234240fc"
  },
  {
    "url": "tag/index.html",
    "revision": "76e328f9b6b4e8cb5a7099b3edbf2248"
  },
  {
    "url": "timeline/index.html",
    "revision": "0b7942768341904532fbce18a71b8ab0"
  }
].concat(self.__precacheManifest || []);
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
