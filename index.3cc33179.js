function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequire2cab;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequire2cab=o),o.register("27Lyk",(function(n,t){var r,o;e(n.exports,"register",(()=>r),(e=>r=e)),e(n.exports,"resolve",(()=>o),(e=>o=e));var i={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},o=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),o("27Lyk").register(JSON.parse('{"9vqfN":"index.3cc33179.js","g5kKs":"worker.d94260d4.js"}'));const i=document.getElementsByTagName("input")[0];var l,a;a=function(e,n,t){if(n===self.location.origin)return e;var r=t?"import "+JSON.stringify(e)+";":"importScripts("+JSON.stringify(e)+");";return URL.createObjectURL(new Blob([r],{type:"application/javascript"}))};let s=new URL(o("27Lyk").resolve("g5kKs"),import.meta.url);l=a(s.toString(),s.origin,!0);const d=new Worker(l);function c(e,n){e.parentNode.insertBefore(n,e.nextSibling)}d.onmessage=e=>{const n=document.getElementById("progress");if(null!==n&&n.remove(),0===i.files.length)return;const t=i.files[0];let r=document.createElement("a");r.id="downloadAnchor",r.href=URL.createObjectURL(new Blob([e.data],{type:t.type})),r.download=t.name,r.innerText="Download output",c(i,r)},i.addEventListener("change",(async e=>{let n=document.getElementById("downloadAnchor");if(null!==n&&n.remove(),0===i.files.length)return;const t=i.files[0];d.postMessage(await function(e){return new Promise(((n,t)=>{let r=document.createElement("span");r.id="progress",c(i,r);const o=new FileReader;o.addEventListener("load",(e=>{r.innerHTML="Processing...",n(e.target.result)})),o.addEventListener("progress",(e=>{if(e.loaded&&e.total){const n=e.loaded/e.total*100;r.innerHTML=`Uploaded ${Math.round(n)}%`}})),o.readAsText(e)}))}(t))}));
//# sourceMappingURL=index.3cc33179.js.map