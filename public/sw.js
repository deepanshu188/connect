if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let a={};const r=e=>n(e,i),o={module:{uri:i},exports:a,require:r};s[i]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(t(...e),a)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"132226827da0cc2aa68e825ef935b37a"},{url:"/_next/static/VGNk319jxWeqKVN-K5zrY/_buildManifest.js",revision:"e31ed336eeab5bdf67877e3ccba2bdfe"},{url:"/_next/static/VGNk319jxWeqKVN-K5zrY/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/258.c7e4c2dc80ff97cb.js",revision:"c7e4c2dc80ff97cb"},{url:"/_next/static/chunks/30.4b0ec81b39c38966.js",revision:"4b0ec81b39c38966"},{url:"/_next/static/chunks/4b4758af-c278bc55576ce25e.js",revision:"VGNk319jxWeqKVN-K5zrY"},{url:"/_next/static/chunks/660-73365fe34746ec66.js",revision:"VGNk319jxWeqKVN-K5zrY"},{url:"/_next/static/chunks/679-2b5e20c6784a63cc.js",revision:"VGNk319jxWeqKVN-K5zrY"},{url:"/_next/static/chunks/a65c9164-b5406fc281d65142.js",revision:"VGNk319jxWeqKVN-K5zrY"},{url:"/_next/static/chunks/app/layout-a40378128220bb2d.js",revision:"VGNk319jxWeqKVN-K5zrY"},{url:"/_next/static/chunks/app/page-6e43b902f94da3b6.js",revision:"VGNk319jxWeqKVN-K5zrY"},{url:"/_next/static/chunks/app/user/page-b78c8dca638d5e0c.js",revision:"VGNk319jxWeqKVN-K5zrY"},{url:"/_next/static/chunks/bb688357-1c2c6b471804a294.js",revision:"VGNk319jxWeqKVN-K5zrY"},{url:"/_next/static/chunks/main-2ac2cf76786e2f5d.js",revision:"VGNk319jxWeqKVN-K5zrY"},{url:"/_next/static/chunks/main-app-957243d3b8fe7371.js",revision:"VGNk319jxWeqKVN-K5zrY"},{url:"/_next/static/chunks/pages/_app-5841ab2cb3aa228d.js",revision:"VGNk319jxWeqKVN-K5zrY"},{url:"/_next/static/chunks/pages/_error-91a854d9c9cfa29b.js",revision:"VGNk319jxWeqKVN-K5zrY"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-cdaefa48fdcced54.js",revision:"VGNk319jxWeqKVN-K5zrY"},{url:"/_next/static/css/1199d0576b3b54f3.css",revision:"1199d0576b3b54f3"},{url:"/_next/static/css/cb441d713ba7c6b4.css",revision:"cb441d713ba7c6b4"},{url:"/_next/static/media/2c91708671b37a8b-s.woff2",revision:"5808d1b0c3a511815cbe3f566c9b0e24"},{url:"/_next/static/media/b60fc9d2d030b5e6-s.woff2",revision:"68abb62ac9254f94e38e508ee2061c7c"},{url:"/_next/static/media/b89f66ecdb077e7f-s.p.woff2",revision:"12bb96876fc38b93380a6cc76267bd0b"},{url:"/_next/static/media/c92ff110d0ef9b86-s.woff2",revision:"5c9d4e296e6b27bdc0f9e6355fea368c"},{url:"/_next/static/media/dc9ab78c2735f6b0-s.woff2",revision:"90b0ebbdf04ea023653ea1364c598160"},{url:"/manifest.json",revision:"c797d766ae8658ec8404444795618faf"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/reddit.ico",revision:"e5598dd3e7e342517c6fa8a73d645479"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
