if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,t)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const d=e=>n(e,o),l={module:{uri:o},exports:s,require:d};i[o]=Promise.all(r.map((e=>l[e]||d(e)))).then((e=>(t(...e),s)))}}define(["./workbox-6db16f92"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./index.html",revision:"fe7245b9538599b7451a8e2f28bbe609"},{url:"main.css",revision:"8b8a4353205e6e8189c940197ae84d4d"},{url:"main.js",revision:"65806e7716638a0d31980e01a1afa6d6"}],{}),e.cleanupOutdatedCaches()}));
