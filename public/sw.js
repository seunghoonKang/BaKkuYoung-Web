if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let f={};const r=e=>a(e,c),t={module:{uri:c},exports:f,require:r};s[c]=Promise.all(n.map((e=>t[e]||r(e)))).then((e=>(i(...e),f)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"ee81b34cb7054232edfcb021fea3bbdc"},{url:"/_next/static/Kk_Mab43EfhjcAA_sfuV7/_buildManifest.js",revision:"6861a7d29e6644354f7c1542912fbbf0"},{url:"/_next/static/Kk_Mab43EfhjcAA_sfuV7/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/4bd1b696-1d398b649b281e55.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/517-112f2f05bde3390c.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/565-086e1af49afc1b93.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/977-9ae64685fbab9eb3.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/987-d610351872ed686b.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/app/_not-found/page-91f747c343fd2643.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/app/chat/layout-c27a7084fb0780b9.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/app/chat/page-395a84e7e1d5bd22.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/app/exchange/page-32132fc2e5dfaef8.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/app/layout-44bd763c882aaf19.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/app/login/page-c2be8f15d14b3c7b.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/app/main/page-25f1f55d466876ae.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/app/offline/page-a6251dfffe33d209.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/app/page-dca6737b18bf1819.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/app/register/layout-f33e450da796a25a.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/app/register/page-c469ba5af6da677e.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/c15bf2b0-2e5094ff64f4d456.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/main-73f9a6f27d1267d8.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/main-app-35441652517d322f.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-5d6af2747f2141a5.js",revision:"Kk_Mab43EfhjcAA_sfuV7"},{url:"/_next/static/css/637e248848727d19.css",revision:"637e248848727d19"},{url:"/_next/static/media/ff840cfebfb63b0c-s.p.woff2",revision:"302ec55f5b4320354ec6b35a53dead87"},{url:"/arrow_bakkuyoung.svg",revision:"7bba42ce9591f664f0f53b17c6a4ed99"},{url:"/car_mandarin.png",revision:"eda2791f15f6496e0753e2466502d35b"},{url:"/chat1.svg",revision:"f8156592046984786215a529280a5f64"},{url:"/chorong_pigeon.svg",revision:"c750ee8333b749dc16ea55e20b703615"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/flower_pigeon.svg",revision:"a78f6f3824c71f25e2efa162569f2e6b"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/happy_exchange.svg",revision:"f30f4be2acacebff3d93ec64014876b9"},{url:"/hello_jeju.svg",revision:"22eefc2c0f5560fdcd5ac97867d5895a"},{url:"/hello_pigeon.svg",revision:"aa4f522571a686712404664f287d8711"},{url:"/hello_pigeon_bg.svg",revision:"d7ab5da89675b47bff979d6f3dfa4623"},{url:"/icons/Contents.json",revision:"12ee8441b744cdabc72ddb1cacdd82d1"},{url:"/icons/MainLogo.svg",revision:"7bba42ce9591f664f0f53b17c6a4ed99"},{url:"/icons/SendMind.svg",revision:"f346ee41f52669e40dc34255159110f5"},{url:"/icons/apple-icon.png",revision:"c64c3c2f1fde868118bd6f325a3bc632"},{url:"/icons/bakkuyoung.svg",revision:"21d4b4b16d7b7aa95bddf9500ce6d033"},{url:"/icons/camera.png",revision:"7676e7b6c3cdce303b1e1c35988e3999"},{url:"/icons/icon.png",revision:"7c06d246088cfad8d7fbe2c7b2ce7f37"},{url:"/icons/jeju.png",revision:"f8814a5e260ac2ad5964811b17d1d047"},{url:"/icons/mind.png",revision:"32bcd1e14294d4c310c0521ec8f5d6eb"},{url:"/icons/phone.png",revision:"3645af44a2b1063798982a5d1bdab12d"},{url:"/icons/photobook.png",revision:"e1cf4b52860c2c4c096f9adbab86d7b0"},{url:"/icons/rainy.png",revision:"b26f7d160ff929dff68d6202dfb1c13b"},{url:"/icons/share.png",revision:"173946a9235ba6f3d487218c20063c07"},{url:"/icons/travel.png",revision:"9d18efc002377760741a9d06a6b0c173"},{url:"/images/arrow.svg",revision:"7bba42ce9591f664f0f53b17c6a4ed99"},{url:"/images/arrow2.png",revision:"8e6c9dc2bfbda3be0caf31e6ff1a3a27"},{url:"/images/brid.svg",revision:"41b3d4b83b62f041e96657686a1da217"},{url:"/images/circle.svg",revision:"d7ab5da89675b47bff979d6f3dfa4623"},{url:"/images/hello_jeju.svg",revision:"22eefc2c0f5560fdcd5ac97867d5895a"},{url:"/images/repeat.png",revision:"d97196b5b1ea2544bbc20bc8a82f7d13"},{url:"/images/wing.png",revision:"ebdeac6cb5c5e658f02a51d475177ee4"},{url:"/mandarin.png",revision:"55ffed2380de0abb0370cc26f6abbd66"},{url:"/manifest.json",revision:"5d31766d887342041ed79332e4a0e748"},{url:"/mountain.png",revision:"998ac4b429f6f08e6ec4c3a4a102068a"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/selfie_four.png",revision:"b8a4160ef5f2cfe12b8bf93b8f3e5eac"},{url:"/selfie_one.png",revision:"2012f2bf07faba3ea71a65b34e202ecc"},{url:"/selfie_three.png",revision:"50e5162f636298d07220235e6507cb6f"},{url:"/selfie_two.png",revision:"ed08f8fa80a2ab833189b55933c67fa6"},{url:"/service-worker.js",revision:"4df9324b2f93cc852eb97bb9f3b48e2b"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/wait_matching.svg",revision:"ae4356e13f3444fc22399deffe6451d0"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
