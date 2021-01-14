!function(e){function t(t){for(var i,n,a=t[0],o=t[1],s=0,d=[];s<a.length;s++)n=a[s],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);for(l&&l(t);d.length;)d.shift()()}var i={},r={1:0};function n(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.e=function(e){var t=[],i=r[e];if(0!==i)if(i)t.push(i[2]);else{var a=new Promise((function(t,n){i=r[e]=[t,n]}));t.push(i[2]=a);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.src=function(e){return n.p+"build/vaadin-"+({}[e]||e)+"-"+{0:"4bf6dfa40714b1435880",4:"124d711ad4051828a047",6:"005498b21b1c249b9ba7"}[e]+".cache.js"}(e);var l=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(d);var i=r[e];if(0!==i){if(i){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,i[1](l)}r[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},n.m=e,n.c=i,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="VAADIN/",n.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],o=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var l=o;n(n.s=232)}([,,,,,,function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i(28);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class r{constructor(e){this.value=e.toString()}toString(){return this.value}}function n(e){if(e instanceof r)return e.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+e)}var a=function(e,...t){var i=document.createElement("template");return i.innerHTML=t.reduce((t,i,a)=>t+function(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof r)return n(e);throw new Error("non-template value passed to Polymer's html function: "+e)}(i)+e[a+1],e[0]),i}},,,function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var r=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:e=>e},,function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i(87),n=i(6);i.d(t,"b",(function(){return n.a}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var a=Object(r.a)(HTMLElement)},,function(e,t,i){"use strict";i.d(t,"d",(function(){return r})),i.d(t,"g",(function(){return n})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"i",(function(){return s})),i.d(t,"e",(function(){return l})),i.d(t,"f",(function(){return d})),i.d(t,"a",(function(){return c})),i.d(t,"h",(function(){return u}));i(28);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(e){return e.indexOf(".")>=0}function n(e){var t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function a(e,t){return 0===e.indexOf(t+".")}function o(e,t){return 0===t.indexOf(e+".")}function s(e,t,i){return t+i.slice(e.length)}function l(e,t){return e===t||a(e,t)||o(e,t)}function d(e){if(Array.isArray(e)){for(var t=[],i=0;i<e.length;i++)for(var r=e[i].toString().split("."),n=0;n<r.length;n++)t.push(r[n]);return t.join(".")}return e}function h(e){return Array.isArray(e)?d(e).split("."):e.toString().split(".")}function c(e,t,i){for(var r=e,n=h(t),a=0;a<n.length;a++){if(!r)return;r=r[n[a]]}return i&&(i.path=n.join(".")),r}function u(e,t,i){var r=e,n=h(t),a=n[n.length-1];if(n.length>1){for(var o=0;o<n.length-1;o++){if(!(r=r[n[o]]))return}r[a]=i}else r[t]=i;return n.join(".")}},,function(e,t,i){"use strict";i.d(t,"d",(function(){return l})),i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return h})),i.d(t,"c",(function(){return c}));i(28);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var r=0,n=0,a=[],o=0,s=document.createTextNode("");new window.MutationObserver((function(){for(var e=a.length,t=0;t<e;t++){var i=a[t];if(i)try{i()}catch(e){setTimeout(()=>{throw e})}}a.splice(0,e),n+=e})).observe(s,{characterData:!0});var l={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},d={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},h={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},c={run:e=>(s.textContent=o++,a.push(e),r++),cancel(e){var t=e-n;if(t>=0){if(!a[t])throw new Error("invalid async handle: "+e);a[t]=null}}}},,function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i(70),n=i(159),a=e=>class extends(Object(n.a)(e)){static finalize(){super.finalize();var e=this.prototype._template,t=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,i=Object.getPrototypeOf(this.prototype)._template;i&&!t&&Array.from(i.content.querySelectorAll("style[include]")).forEach(t=>{this._includeStyle(t.getAttribute("include"),e)}),this._includeMatchingThemes(e)}static _includeMatchingThemes(e){var t=r.a.prototype.modules,i=!1,n=this.is+"-default-theme";Object.keys(t).sort((e,t)=>{var i=0===e.indexOf("vaadin-"),r=0===t.indexOf("vaadin-"),n=["lumo-","material-"],a=n.filter(t=>0===e.indexOf(t)).length>0,o=n.filter(e=>0===t.indexOf(e)).length>0;return i!==r?i?-1:1:a!==o?a?-1:1:0}).forEach(r=>{if(r!==n){var a=t[r].getAttribute("theme-for");a&&a.split(" ").forEach(t=>{new RegExp("^"+t.split("*").join(".*")+"$").test(this.is)&&(i=!0,this._includeStyle(r,e))})}}),!i&&t[n]&&this._includeStyle(n,e)}static _includeStyle(e,t){if(t&&!t.content.querySelector(`style[include="${e}"]`)){var i=document.createElement("style");i.setAttribute("include",e),t.content.appendChild(i)}}}},,function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o}));i(28),i(26),i(15);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class r{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,n.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),n.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof r?e._cancelAsync():e=new r,e.setConfig(t,i),e}}var n=new Set,a=function(e){n.add(e)},o=function(){var e=Boolean(n.size);return n.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e}},,function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var r=i(15),n=i(19),a=i(34),o=i(80),s=i(153);function l(){}var d,h=function(){if("function"==typeof s.a)return Object(s.a)(l)};window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){h&&h()};var c=new Set,u=e=>class extends(Object(o.a)(e)){static finalize(){super.finalize();var{is:e}=this;e&&!c.has(e)&&(window.Vaadin.registrations.push(this),c.add(e),window.Vaadin.developmentModeCallback&&(d=n.a.debounce(d,r.b,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Object(a.a)(d)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}},,,function(e,t,i){"use strict";i.d(t,"h",(function(){return n})),i.d(t,"d",(function(){return a})),i.d(t,"e",(function(){return o})),i.d(t,"c",(function(){return s})),i.d(t,"f",(function(){return l})),i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return h})),i.d(t,"g",(function(){return c}));i(28);var r=i(60),n=!window.ShadyDOM,a=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,Object(r.a)(document.baseURI||window.location.href)),o=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,s=!1,l=!1,d=!1,h=!1,c=!1},,function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i(28);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var r=0;function n(){}n.prototype.__mixinApplications,n.prototype.__mixinSet;var a=function(e){var t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);var i=r++;return function(r){var n=r.__mixinSet;if(n&&n[i])return r;var a=t,o=a.get(r);o||(o=e(r),a.set(r,o));var s=Object.create(o.__mixinSet||n||null);return s[i]=!0,o.__mixinSet=s,o}}},,function(e,t,i){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(e,t){return e}},,function(e,t,i){"use strict";i.d(t,"b",(function(){return s})),i.d(t,"a",(function(){return u}));i(28);var r=i(9),n=(i(24),i(42)),a=(i(34),i(19),Element.prototype),o=a.matches||a.matchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector||a.webkitMatchesSelector,s=function(e,t){return o.call(e,t)};class l{constructor(e){this.node=e}observeNodes(e){return new n.a(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(Object(r.a)(this.node).contains(e))return!0;for(var t=e,i=e.ownerDocument;t&&t!==i&&t!==this.node;)t=Object(r.a)(t).parentNode||Object(r.a)(t).host;return t===this.node}getOwnerRoot(){return Object(r.a)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Object(r.a)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){for(var e=[],t=Object(r.a)(this.node).assignedSlot;t;)e.push(t),t=Object(r.a)(t).assignedSlot;return e}importNode(e,t){var i=this.node instanceof Document?this.node:this.node.ownerDocument;return Object(r.a)(i).importNode(e,t)}getEffectiveChildNodes(){return n.a.getFlattenedNodes(this.node)}queryDistributedElements(e){for(var t,i=this.getEffectiveChildNodes(),r=[],n=0,a=i.length;n<a&&(t=i[n]);n++)t.nodeType===Node.ELEMENT_NODE&&s(t,e)&&r.push(t);return r}get activeElement(){var e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function d(e,t){for(var i=function(i){var r=t[i];Object.defineProperty(e,r,{get:function(){return this.node[r]},configurable:!0})},r=0;r<t.length;r++)i(r)}class h{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}l.prototype.cloneNode,l.prototype.appendChild,l.prototype.insertBefore,l.prototype.removeChild,l.prototype.replaceChild,l.prototype.setAttribute,l.prototype.removeAttribute,l.prototype.querySelector,l.prototype.querySelectorAll,l.prototype.parentNode,l.prototype.firstChild,l.prototype.lastChild,l.prototype.nextSibling,l.prototype.previousSibling,l.prototype.firstElementChild,l.prototype.lastElementChild,l.prototype.nextElementSibling,l.prototype.previousElementSibling,l.prototype.childNodes,l.prototype.children,l.prototype.classList,l.prototype.textContent,l.prototype.innerHTML;var c=l;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(l.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=l.prototype[t])}),d(e.prototype,["classList"]),c=e,Object.defineProperties(h.prototype,{localTarget:{get(){return this.event.currentTarget},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(var i=function(i){var r=t[i];e[r]=function(){return this.node[r].apply(this.node,arguments)}},r=0;r<t.length;r++)i(r)}(l.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),d(l.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(var i=function(i){var r=t[i];Object.defineProperty(e,r,{get:function(){return this.node[r]},set:function(e){this.node[r]=e},configurable:!0})},r=0;r<t.length;r++)i(r)}(l.prototype,["textContent","innerHTML"]);var u=function(e){if((e=e||document)instanceof c)return e;if(e instanceof h)return e;var t=e.__domApi;return t||(t=e instanceof Event?new h(e):new c(e),e.__domApi=t),t}},,function(e,t,i){"use strict";i(95),i(62);var r=document.createElement("template");r.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(r.content)},,function(e,t,i){"use strict";i.d(t,"b",(function(){return n}));i(28);var r=i(19);i.d(t,"a",(function(){return r.b}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var n=function(){var e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Object(r.c)()}while(e||t)}},,function(e,t,i){"use strict";i(95),i(62),i(70);var r=document.createElement("template");r.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r.content)},,function(e,t,i){"use strict";i.d(t,"d",(function(){return a})),i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return l}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var r,n,a=!(window.ShadyDOM&&window.ShadyDOM.inUse);function o(e){r=(!e||!e.shimcssproperties)&&(a||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(n=window.ShadyCSS.cssBuild);var s=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?r=window.ShadyCSS.nativeCss:window.ShadyCSS?(o(window.ShadyCSS),window.ShadyCSS=void 0):o(window.WebComponents&&window.WebComponents.flags);var l=r},,function(e,t,i){"use strict";i(95),i(62);var r=document.createElement("template");r.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(r.content)},,function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));i(28);var r=i(126),n=i(15),a=i(9);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function o(e){return"slot"===e.localName}var s=class{static getFlattenedNodes(e){var t=Object(a.a)(e);return o(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>o(e)?(e=e,Object(a.a)(e).assignedNodes({flatten:!0})):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){o(this._target)?this._listenSlots([this._target]):Object(a.a)(this._target).children&&(this._listenSlots(Object(a.a)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){o(this._target)?this._unlistenSlots([this._target]):Object(a.a)(this._target).children&&(this._unlistenSlots(Object(a.a)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,n.c.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(var t=0;t<e.length;t++){var i=e[t];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;for(var e,t={target:this._target,addedNodes:[],removedNodes:[]},i=this.constructor.getFlattenedNodes(this._target),n=Object(r.a)(i,this._effectiveNodes),a=0;a<n.length&&(e=n[a]);a++)for(var o,s=0;s<e.removed.length&&(o=e.removed[s]);s++)t.removedNodes.push(o);for(var l,d=0;d<n.length&&(l=n[d]);d++)for(var h=l.index;h<l.index+l.addedCount;h++)t.addedNodes.push(i[h]);this._effectiveNodes=i;var c=!1;return(t.addedNodes.length||t.removedNodes.length)&&(c=!0,this.callback.call(this._target,t)),c}_listenSlots(e){for(var t=0;t<e.length;t++){var i=e[t];o(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(var t=0;t<e.length;t++){var i=e[t];o(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}}},,function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var r=class{static _getISOWeekNumber(e){var t=e.getDay();0===t&&(t=7);var i=4-t,r=new Date(e.getTime()+24*i*3600*1e3),n=new Date(0,0);n.setFullYear(r.getFullYear());var a=r.getTime()-n.getTime(),o=Math.round(a/864e5);return Math.floor(o/7+1)}static _dateEquals(e,t){return e instanceof Date&&t instanceof Date&&e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}static _dateAllowed(e,t,i){return(!t||e>=t)&&(!i||e<=i)}static _getClosestDate(e,t){return t.filter(e=>void 0!==e).reduce((t,i)=>i?t?Math.abs(e.getTime()-i.getTime())<Math.abs(t.getTime()-e.getTime())?i:t:i:t)}static _extractDateParts(e){return{day:e.getDate(),month:e.getMonth(),year:e.getFullYear()}}}},,function(e,t,i){"use strict";i(95),i(62),i(70);var r=document.createElement("template");r.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n\n      /* RTL specific styles */\n\n      blockquote[dir="rtl"] {\n        border-left: none;\n        border-right: 2px solid var(--lumo-contrast-30pct);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r.content)},,function(e,t,i){"use strict";i.d(t,"b",(function(){return d})),i.d(t,"a",(function(){return h}));i(28);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var r=!1,n=[],a=[];function o(){r=!0,requestAnimationFrame((function(){r=!1,s(n),setTimeout((function(){!function(e){for(var t=0,i=e.length;t<i;t++)l(e.shift())}(a)}))}))}function s(e){for(;e.length;)l(e.shift())}function l(e){var t=e[0],i=e[1],r=e[2];try{i.apply(t,r)}catch(e){setTimeout(()=>{throw e})}}function d(e,t,i){r||o(),n.push([e,t,i])}function h(e,t,i){r||o(),a.push([e,t,i])}},,function(e,t,i){"use strict";i(95),i(62);var r=document.createElement("template");r.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(r.content)},,function(e,t,i){"use strict";i.r(t),i.d(t,"gestures",(function(){return I})),i.d(t,"recognizers",(function(){return k})),i.d(t,"deepTargetFind",(function(){return P})),i.d(t,"addListener",(function(){return D})),i.d(t,"removeListener",(function(){return M})),i.d(t,"register",(function(){return L})),i.d(t,"setTouchAction",(function(){return F})),i.d(t,"prevent",(function(){return R})),i.d(t,"resetMouseCanceller",(function(){return j})),i.d(t,"findOriginalTarget",(function(){return q})),i.d(t,"add",(function(){return Y})),i.d(t,"remove",(function(){return W}));i(28);var r=i(15),n=i(19),a=i(24),o=i(9),s="string"==typeof document.head.style.touchAction,l="__polymerGesturesHandled",d="__polymerGesturesTouchAction",h=["mousedown","mousemove","mouseup","click"],c=[0,1,4,2],u=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function p(e){return h.indexOf(e)>-1}var m=!1;function f(e){if(!p(e)&&"touchend"!==e)return s&&m&&a.c?{passive:!0}:void 0}!function(){try{var e=Object.defineProperty({},"passive",{get(){m=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();var v=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),_=[],g={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},b={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function y(e){var t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];var i=e.getRootNode();if(e.id)for(var r=i.querySelectorAll(`label[for = ${e.id}]`),n=0;n<r.length;n++)t.push(r[n])}return t}var w=function(e){var t,i=e.sourceCapabilities;if((!i||i.firesTouchEvents)&&(e[l]={skip:!0},"click"===e.type)){for(var r=!1,n=O(e),a=0;a<n.length;a++){if(n[a].nodeType===Node.ELEMENT_NODE)if("label"===n[a].localName)_.push(n[a]);else if(t=n[a],g[t.localName])for(var o=y(n[a]),s=0;s<o.length;s++)r=r||_.indexOf(o[s])>-1;if(n[a]===C.mouse.target)return}if(r)return;e.preventDefault(),e.stopPropagation()}};function A(e){for(var t,i=v?["click"]:h,r=0;r<i.length;r++)t=i[r],e?(_.length=0,document.addEventListener(t,w,!0)):document.removeEventListener(t,w,!0)}function x(e){var t=e.type;if(!p(t))return!1;if("mousemove"===t){var i=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!u&&(i=c[e.which]||0),Boolean(1&i)}return 0===(void 0===e.button?0:e.button)}var C={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function S(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function E(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){C.mouse.mouseIgnoreJob||A(!0),C.mouse.target=O(e)[0],C.mouse.mouseIgnoreJob=n.a.debounce(C.mouse.mouseIgnoreJob,r.d.after(2500),(function(){A(),C.mouse.target=null,C.mouse.mouseIgnoreJob=null}))}),!!m&&{passive:!0});var O=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],I={},k=[];function P(e,t){for(var i=document.elementFromPoint(e,t),r=i;r&&r.shadowRoot&&!window.ShadyDOM;){if(r===(r=r.shadowRoot.elementFromPoint(e,t)))break;r&&(i=r)}return i}function T(e){var t=O(e);return t.length>0?t[0]:e.target}function z(e){var t,i=e.type,r=e.currentTarget.__polymerGestures;if(r){var n=r[i];if(n){if(!e[l]&&(e[l]={},"touch"===i.slice(0,5))){var a=(e=e).changedTouches[0];if("touchstart"===i&&1===e.touches.length&&(C.touch.id=a.identifier),C.touch.id!==a.identifier)return;s||"touchstart"!==i&&"touchmove"!==i||function(e){var t=e.changedTouches[0],i=e.type;if("touchstart"===i)C.touch.x=t.clientX,C.touch.y=t.clientY,C.touch.scrollDecided=!1;else if("touchmove"===i){if(C.touch.scrollDecided)return;C.touch.scrollDecided=!0;var r=function(e){for(var t,i="auto",r=O(e),n=0;n<r.length;n++)if((t=r[n])[d]){i=t[d];break}return i}(e),n=!1,a=Math.abs(C.touch.x-t.clientX),o=Math.abs(C.touch.y-t.clientY);e.cancelable&&("none"===r?n=!0:"pan-x"===r?n=o>a:"pan-y"===r&&(n=a>o)),n?e.preventDefault():R("track")}}(e)}if(!(t=e[l]).skip){for(var o,h=0;h<k.length;h++)n[(o=k[h]).name]&&!t[o.name]&&o.flow&&o.flow.start.indexOf(e.type)>-1&&o.reset&&o.reset();for(var c,u=0;u<k.length;u++)n[(c=k[u]).name]&&!t[c.name]&&(t[c.name]=!0,c[i](e))}}}}function D(e,t,i){return!!I[t]&&(function(e,t,i){var r=I[t],n=r.deps,a=r.name,o=e.__polymerGestures;o||(e.__polymerGestures=o={});for(var s,l,d=0;d<n.length;d++)s=n[d],v&&p(s)&&"click"!==s||((l=o[s])||(o[s]=l={_count:0}),0===l._count&&e.addEventListener(s,z,f(s)),l[a]=(l[a]||0)+1,l._count=(l._count||0)+1);e.addEventListener(t,i),r.touchAction&&F(e,r.touchAction)}(e,t,i),!0)}function M(e,t,i){return!!I[t]&&(function(e,t,i){var r=I[t],n=r.deps,a=r.name,o=e.__polymerGestures;if(o)for(var s,l,d=0;d<n.length;d++)s=n[d],(l=o[s])&&l[a]&&(l[a]=(l[a]||1)-1,l._count=(l._count||1)-1,0===l._count&&e.removeEventListener(s,z,f(s)));e.removeEventListener(t,i)}(e,t,i),!0)}function L(e){k.push(e);for(var t=0;t<e.emits.length;t++)I[e.emits[t]]=e}function F(e,t){s&&e instanceof HTMLElement&&r.c.run(()=>{e.style.touchAction=t}),e[d]=t}function N(e,t,i){var r=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=i,Object(o.a)(e).dispatchEvent(r),r.defaultPrevented){var n=i.preventer||i.sourceEvent;n&&n.preventDefault&&n.preventDefault()}}function R(e){var t=function(e){for(var t,i=0;i<k.length;i++){t=k[i];for(var r=0;r<t.emits.length;r++)if(t.emits[r]===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function j(){C.mouse.mouseIgnoreJob&&C.mouse.mouseIgnoreJob.flush()}function B(e,t,i,r){t&&N(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:r,prevent:function(e){return R(e)}})}function V(e,t,i){if(e.prevent)return!1;if(e.started)return!0;var r=Math.abs(e.x-t),n=Math.abs(e.y-i);return r>=5||n>=5}function H(e,t,i){if(t){var r,n=e.moves[e.moves.length-2],a=e.moves[e.moves.length-1],o=a.x-e.x,s=a.y-e.y,l=0;n&&(r=a.x-n.x,l=a.y-n.y),N(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:o,dy:s,ddx:r,ddy:l,sourceEvent:i,hover:function(){return P(i.clientX,i.clientY)}})}}function $(e,t,i){var r=Math.abs(t.clientX-e.x),n=Math.abs(t.clientY-e.y),a=T(i||t);!a||b[a.localName]&&a.hasAttribute("disabled")||(isNaN(r)||isNaN(n)||r<=25&&n<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;var t=T(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;var i=t.getBoundingClientRect(),r=e.pageX,n=e.pageY;return!(r>=i.left&&r<=i.right&&n>=i.top&&n<=i.bottom)}return!1}(t))&&(e.prevent||N(a,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}L({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){E(this.info)},mousedown:function(e){if(x(e)){var t=T(e),i=this;S(this.info,(function(e){x(e)||(B("up",t,e),E(i.info))}),(function(e){x(e)&&B("up",t,e),E(i.info)})),B("down",t,e)}},touchstart:function(e){B("down",T(e),e.changedTouches[0],e)},touchend:function(e){B("up",T(e),e.changedTouches[0],e)}}),L({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,E(this.info)},mousedown:function(e){if(x(e)){var t=T(e),i=this,r=function(e){var r=e.clientX,n=e.clientY;V(i.info,r,n)&&(i.info.state=i.info.started?"mouseup"===e.type?"end":"track":"start","start"===i.info.state&&R("tap"),i.info.addMove({x:r,y:n}),x(e)||(i.info.state="end",E(i.info)),t&&H(i.info,t,e),i.info.started=!0)};S(this.info,r,(function(e){i.info.started&&r(e),E(i.info)})),this.info.x=e.clientX,this.info.y=e.clientY}},touchstart:function(e){var t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){var t=T(e),i=e.changedTouches[0],r=i.clientX,n=i.clientY;V(this.info,r,n)&&("start"===this.info.state&&R("tap"),this.info.addMove({x:r,y:n}),H(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){var t=T(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),H(this.info,t,i))}}),L({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){x(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){x(e)&&$(this.info,e)},touchstart:function(e){var t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){$(this.info,e.changedTouches[0],e)}});var q=T,Y=D,W=M},,function(e,t,i){"use strict";i.d(t,"b",(function(){return b})),i.d(t,"a",(function(){return y}));i(28);var r=i(108),n=i(90),a=i(24),o=i(9),s=null;function l(){return s}l.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:l,writable:!0}});var d=Object(r.a)(l),h=Object(n.a)(d);var c=Object(r.a)(class{});class u extends c{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);for(var t=this.children=[],i=this.root.firstChild;i;i=i.nextSibling)t.push(i),i.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);var r=this.__templatizeOptions;(e&&r.instanceProps||!r.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(var t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(var i in e)this._setPendingProperty(i,e[i])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,i(e)});else{var r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(e,t,i)}}_showHideChildren(e){for(var t=this.children,i=0;i<t.length;i++){var r=t[i];if(Boolean(e)!=Boolean(r.__hideTemplateChildren__))if(r.nodeType===Node.TEXT_NODE)e?(r.__polymerTextContent__=r.textContent,r.textContent=""):r.textContent=r.__polymerTextContent__;else if("slot"===r.localName)if(e)r.__polymerReplaced__=document.createComment("hidden-slot"),Object(o.a)(Object(o.a)(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{var n=r.__polymerReplaced__;n&&Object(o.a)(Object(o.a)(n).parentNode).replaceChild(r,n)}else r.style&&(e?(r.__polymerDisplay__=r.style.display,r.style.display="none"):r.style.display=r.__polymerDisplay__);r.__hideTemplateChildren__=e,r._showHideChildren&&r._showHideChildren(e)}}_setUnmanagedPropertyToNode(e,t,i){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(e,t,i)}get parentModel(){var e=this.__parentModel;if(!e){var t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}u.prototype.__dataHost,u.prototype.__templatizeOptions,u.prototype._methodHost,u.prototype.__templatizeOwner,u.prototype.__hostProps;var p=Object(n.a)(u);function m(e){var t=e.__dataHost;return t&&t._methodHost||t}function f(e,t,i){var r=i.mutableData?p:u;b.mixin&&(r=b.mixin(r));var n=class extends r{};return n.prototype.__templatizeOptions=i,n.prototype._bindTemplate(e),function(e,t,i,r){var n=i.hostProps||{};for(var a in r.instanceProps){delete n[a];var o=r.notifyInstanceProp;o&&e.prototype._addPropertyEffect(a,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:g(a,o)})}if(r.forwardHostProp&&t.__dataHost)for(var s in n)e.prototype._addPropertyEffect(s,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,i){e.__dataHost._setPendingPropertyOrPath("_host_"+t,i[t],!0,!0)}})}(n,e,t,i),n}function v(e,t,i){var r=i.forwardHostProp;if(r){var n=t.templatizeTemplateClass;if(!n){var a=i.mutableData?h:d;n=t.templatizeTemplateClass=class extends a{};var o=t.hostProps;for(var l in o)n.prototype._addPropertyEffect("_host_"+l,n.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:_(l,r)}),n.prototype._createNotifyingProperty("_host_"+l)}!function(e,t){s=e,Object.setPrototypeOf(e,t.prototype),new t,s=null}(e,n),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}function _(e,t){return function(e,i,r){t.call(e.__templatizeOwner,i.substring("_host_".length),r[i])}}function g(e,t){return function(e,i,r){t.call(e.__templatizeOwner,e,i,r[i])}}function b(e,t,i){if(a.f&&!m(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;var r=(t?t.constructor:u)._parseTemplate(e),n=r.templatizeInstanceClass;n||(n=f(e,r,i),r.templatizeInstanceClass=n),v(e,r,i);var o=class extends n{};return o.prototype._methodHost=m(e),o.prototype.__dataHost=e,o.prototype.__templatizeOwner=t,o.prototype.__hostProps=r.hostProps,o=o}function y(e,t){for(var i;t;)if(i=t.__templatizeInstance){if(i.__dataHost==e)return i;t=i.__dataHost}else t=Object(o.a)(t).parentNode;return null}},,function(e,t,i){"use strict";i.d(t,"p",(function(){return d})),i.d(t,"m",(function(){return h})),i.d(t,"j",(function(){return c})),i.d(t,"f",(function(){return u})),i.d(t,"a",(function(){return p})),i.d(t,"c",(function(){return f})),i.d(t,"b",(function(){return v})),i.d(t,"e",(function(){return _})),i.d(t,"l",(function(){return g})),i.d(t,"n",(function(){return b})),i.d(t,"q",(function(){return y})),i.d(t,"i",(function(){return w})),i.d(t,"g",(function(){return A})),i.d(t,"o",(function(){return x})),i.d(t,"h",(function(){return C})),i.d(t,"d",(function(){return S})),i.d(t,"k",(function(){return E}));var r=i(38),n=i(72),a=i(74),o=new Set;function s(e){var t=e.textContent;if(!o.has(t)){o.add(t);var i=document.createElement("style");i.setAttribute("shady-unscoped",""),i.textContent=t,document.head.appendChild(i)}}function l(e){return e.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function d(e,t){return e?("string"==typeof e&&(e=Object(n.b)(e)),t&&u(e,t),Object(n.d)(e,r.c)):""}function h(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=Object(n.b)(e.textContent)),e.__cssRules||null}function c(e){return Boolean(e.parent)&&e.parent.type===n.e.KEYFRAMES_RULE}function u(e,t,i,r){if(e){var o=!1,s=e.type;if(r&&s===n.e.MEDIA_RULE){var l=e.selector.match(a.e);l&&(window.matchMedia(l[1]).matches||(o=!0))}s===n.e.STYLE_RULE?t(e):i&&s===n.e.KEYFRAMES_RULE?i(e):s===n.e.MIXIN_RULE&&(o=!0);var d=e.rules;if(d&&!o)for(var h,c=0,p=d.length;c<p&&(h=d[c]);c++)u(h,t,i,r)}}function p(e,t,i,r){var n=function(e,t){var i=document.createElement("style");t&&i.setAttribute("scope",t);return i.textContent=e,i}(e,t);return v(n,i,r),n}var m=null;function f(e){var t=document.createComment(" Shady DOM styles for "+e+" "),i=m?m.nextSibling:null,r=document.head;return r.insertBefore(t,i||r.firstChild),m=t,t}function v(e,t,i){t=t||document.head;var r=i&&i.nextSibling||t.firstChild;(t.insertBefore(e,r),m)?e.compareDocumentPosition(m)===Node.DOCUMENT_POSITION_PRECEDING&&(m=e):m=e}function _(e,t){for(var i=0,r=t,n=e.length;r<n;r++)if("("===e[r])i++;else if(")"===e[r]&&0==--i)return r;return-1}function g(e,t){var i=e.indexOf("var(");if(-1===i)return t(e,"","","");var r=_(e,i+3),n=e.substring(i+4,r),a=e.substring(0,i),o=g(e.substring(r+1),t),s=n.indexOf(",");return-1===s?t(a,n.trim(),"",o):t(a,n.substring(0,s).trim(),n.substring(s+1).trim(),o)}function b(e,t){r.d?e.setAttribute("class",t):window.ShadyDOM.nativeMethods.setAttribute.call(e,"class",t)}var y=window.ShadyDOM&&window.ShadyDOM.wrap||(e=>e);function w(e){var t=e.localName,i="",r="";return t?t.indexOf("-")>-1?i=t:(r=t,i=e.getAttribute&&e.getAttribute("is")||""):(i=e.is,r=e.extends),{is:i,typeExtension:r}}function A(e){for(var t=[],i=e.querySelectorAll("style"),n=0;n<i.length;n++){var a=i[n];l(a)?r.d||(s(a),a.parentNode.removeChild(a)):(t.push(a.textContent),a.parentNode.removeChild(a))}return t.join("").trim()}function x(e){for(var t=[],i="",r=0;r>=0&&r<e.length;r++)if("("===e[r]){var n=_(e,r);i+=e.slice(r,n+1),r=n}else","===e[r]?(t.push(i),i=""):i+=e[r];return i&&t.push(i),t}function C(e){if(void 0!==r.a)return r.a;if(void 0===e.__cssBuild){var t=e.getAttribute("css-build");if(t)e.__cssBuild=t;else{var i=function(e){var t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){var i=t.textContent.trim().split(":");if("css-build"===i[0])return i[1]}return""}(e);""!==i&&function(e){var t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}(e),e.__cssBuild=i}}return e.__cssBuild||""}function S(e){return""!==C(e)}function E(e=""){return!(""===e||!r.c)&&(r.d?"shadow"===e:"shady"===e)}},,function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var r=i(77),n=(i(28),function(e){var t;return t="function"==typeof e?e:n.Class(e),customElements.define(t.is,t),t});n.Class=r.a},,function(e,t,i){"use strict";i.d(t,"c",(function(){return s})),i.d(t,"b",(function(){return l})),i.d(t,"a",(function(){return d}));i(28);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var r,n,a=/(url\()([^)]*)(\))/g,o=/(^\/)|(^#)|(^[\w-\d]*:)/;function s(e,t){if(e&&o.test(e))return e;if(void 0===r){r=!1;try{var i=new URL("b","http://a");i.pathname="c%20d",r="http://a/c%20d"===i.href}catch(e){}}return t||(t=document.baseURI||window.location.href),r?new URL(e,t).href:(n||((n=document.implementation.createHTMLDocument("temp")).base=n.createElement("base"),n.head.appendChild(n.base),n.anchor=n.createElement("a"),n.body.appendChild(n.anchor)),n.base.href=t,n.anchor.href=e,n.anchor.href||e)}function l(e,t){return e.replace(a,(function(e,i,r,n){return i+"'"+s(r.replace(/["']/g,""),t)+"'"+n}))}function d(e){return e.substring(0,e.lastIndexOf("/")+1)}},,function(e,t,i){"use strict";var r=i(149),n=i(89),a=i(38),o=new r.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,i){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,i){},styleSubtree(e,t){o.processStyles(),Object(n.c)(e,t)},styleElement(e){o.processStyles()},styleDocument(e){o.processStyles(),Object(n.c)(document.body,e)},getComputedStyleValue:(e,t)=>Object(n.b)(e,t),flushCustomStyles(){},nativeCss:a.c,nativeShadow:a.d,cssBuild:a.a,disableRuntime:a.b}),window.ShadyCSS.CustomStyleInterface=o;var s=i(118),l=window.ShadyCSS.CustomStyleInterface;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class d extends HTMLElement{constructor(){super(),this._style=null,l.addCustomStyle(this)}getStyle(){if(this._style)return this._style;var e=this.querySelector("style");if(!e)return null;this._style=e;var t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=Object(s.a)(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",d)},,,function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i(28);var r=i(26),n=i(52),a=Object(r.a)(e=>class extends e{_addEventListenerToNode(e,t,i){Object(n.addListener)(e,t,i)||super._addEventListenerToNode(e,t,i)}_removeEventListenerFromNode(e,t,i){Object(n.removeListener)(e,t,i)||super._removeEventListenerFromNode(e,t,i)}})},,,function(e,t,i){"use strict";i.d(t,"a",(function(){return v}));var r=i(110),n=(i(58),i(151),i(28),i(108)),a=i(90),o=i(65),s=i(24),l=i(9),d=Object(o.a)(Object(a.b)(Object(n.a)(HTMLElement)));customElements.define("dom-bind",class extends d{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),s.f)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Object(l.a)(Object(l.a)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(var e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){var e;if(!this.__children){if(!(e=e||this.querySelector("template"))){var t=new MutationObserver(()=>{if(!(e=this.querySelector("template")))throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(var i=this.root.firstChild;i;i=i.nextSibling)this.__children[this.__children.length]=i;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});i(144),i(202);var h=i(11),c=i(26),u=i(126),p=i(87),m=Object(c.a)(e=>{var t=Object(p.a)(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){var i=t.path;if(i==JSCompiler_renameProperty("items",this)){var r=t.base||[],n=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),n){var a=Object(u.a)(r,n);this.__applySplices(a)}this.__lastItems=r,this.__lastMulti=e}else if(t.path==JSCompiler_renameProperty("items",this)+".splices")this.__applySplices(t.value.indexSplices);else{var o=i.slice((JSCompiler_renameProperty("items",this)+".").length),s=parseInt(o,10);o.indexOf(".")<0&&o==s&&this.__deselectChangedIdx(s)}}__applySplices(e){for(var t=this,i=this.__selectedMap,r=function(r){var n=e[r];i.forEach((e,t)=>{e<n.index||(e>=n.index+n.removed.length?i.set(t,e+n.addedCount-n.removed.length):i.set(t,-1))});for(var a=0;a<n.addedCount;a++){var o=n.index+a;i.has(t.items[o])&&i.set(t.items[o],o)}},n=0;n<e.length;n++)r(n);this.__updateLinks();var a=0;i.forEach((e,t)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),a,1):this.selected=this.selectedItem=null,i.delete(t)):a++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){var e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){var t=this.__selectedIndexForItemIndex(e);if(t>=0){var i=0;this.__selectedMap.forEach((e,r)=>{t==i++&&this.deselect(r)})}}__selectedIndexForItemIndex(e){var t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice((JSCompiler_renameProperty("selected",this)+".").length),10)}deselect(e){var t,i=this.__selectedMap.get(e);i>=0&&(this.__selectedMap.delete(e),this.multi&&(t=this.__selectedIndexForItemIndex(i)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),t,1):this.selected=this.selectedItem=null)}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){var t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})(h.a);class f extends m{static get is(){return"array-selector"}static get template(){return null}}customElements.define(f.is,f);i(62),i(152),i(6);var v=Object(r.a)(HTMLElement).prototype},,function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));i(28);var r=i(60),n=i(24),a={},o={};function s(e,t){a[e]=o[e.toLowerCase()]=t}function l(e){return a[e]||o[e.toLowerCase()]}class d extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){var i=l(e);return i&&t?i.querySelector(t):i}return null}attributeChangedCallback(e,t,i,r){t!==i&&this.register()}get assetpath(){if(!this.__assetpath){var e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=Object(r.c)(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Object(r.a)(t)}return this.__assetpath}register(e){if(e=e||this.id){if(n.f&&void 0!==l(e))throw s(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,s(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}d.prototype.modules=a,customElements.define("dom-module",d)},,function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return n})),i.d(t,"d",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"e",(function(){return s}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class r{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function n(e){return function e(t,i){var r=i.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=r.trim(),t.parent){var n=t.previous?t.previous.end:t.parent.start;r=(r=(r=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){for(var e=arguments[1],t=6-e.length;t--;)e="0"+e;return"\\"+e}))}(r=i.substring(n,t.start-1))).replace(h.multipleSpaces," ")).substring(r.lastIndexOf(";")+1);var a=t.parsedSelector=t.selector=r.trim();t.atRule=0===a.indexOf(p),t.atRule?0===a.indexOf(u)?t.type=s.MEDIA_RULE:a.match(h.keyframesRule)&&(t.type=s.KEYFRAMES_RULE,t.keyframesName=t.selector.split(h.multipleSpaces).pop()):0===a.indexOf(c)?t.type=s.MIXIN_RULE:t.type=s.STYLE_RULE}var o=t.rules;if(o)for(var l,d=0,m=o.length;d<m&&(l=o[d]);d++)e(l,i);return t}(function(e){var t=new r;t.start=0,t.end=e.length;for(var i=t,n=0,a=e.length;n<a;n++)if(e[n]===l){i.rules||(i.rules=[]);var o=i,s=o.rules[o.rules.length-1]||null;(i=new r).start=n+1,i.parent=o,i.previous=s,o.rules.push(i)}else e[n]===d&&(i.end=n+1,i=i.parent||t);return t}(e=e.replace(h.comments,"").replace(h.port,"")),e)}function a(e,t,i=""){var r="";if(e.cssText||e.rules){var n=e.rules;if(n&&!function(e){var t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(c)}(n))for(var s,u=0,p=n.length;u<p&&(s=n[u]);u++)r=a(s,t,r);else(r=(r=t?e.cssText:function(e){return function(e){return e.replace(h.mixinApply,"").replace(h.varApply,"")}(e=o(e))}(e.cssText)).trim())&&(r="  "+r+"\n")}return r&&(e.selector&&(i+=e.selector+" "+l+"\n"),i+=r,e.selector&&(i+=d+"\n\n")),i}function o(e){return e.replace(h.customProp,"").replace(h.mixinProp,"")}var s={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},l="{",d="}",h={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},c="--",u="@media",p="@"},,function(e,t,i){"use strict";i.d(t,"g",(function(){return r})),i.d(t,"f",(function(){return n})),i.d(t,"h",(function(){return a})),i.d(t,"a",(function(){return o})),i.d(t,"e",(function(){return s})),i.d(t,"b",(function(){return l})),i.d(t,"c",(function(){return d})),i.d(t,"d",(function(){return h}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var r=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,n=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,a=/(--[\w-]+)\s*([:,;)]|$)/gi,o=/(animation\s*:)|(animation-name\s*:)/,s=/@media\s(.*)/,l=/\{[^}]*\}/g,d="(?:^|[^.#[:])",h="($|[.:[\\s>+~])"},,function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));i(68);var r=i(30),n=i(24),a=new Set,o={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(a.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():n.h||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=Object(r.a)(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(a.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?a.delete(this):a.add(this)}}},function(e,t,i){"use strict";i.d(t,"b",(function(){return l})),i.d(t,"a",(function(){return u}));var r=i(110),n=i(24),a={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},o={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},s=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},o);function l(e,t){return c({},Object(r.a)(t),e)}function d(e,t,i,r){for(var n in function(e,t,i){for(var r=e._noAccessors,n=Object.getOwnPropertyNames(e),a=0;a<n.length;a++){var o=n[a];if(!(o in i))if(r)t[o]=e[o];else{var s=Object.getOwnPropertyDescriptor(e,o);s&&(s.configurable=!0,Object.defineProperty(t,o,s))}}}(t,e,r),a)t[n]&&(i[n]=i[n]||[],i[n].push(t[n]))}function h(e,t){for(var i in t){var r=e[i],n=t[i];e[i]=!("value"in n)&&r&&"value"in r?Object.assign({value:r.value},n):n}}function c(e,t,i){var r,a={};class l extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(r)for(var t,i=0;i<r.length;i++)(t=r[i]).properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else super._finalizeClass()}static get properties(){var t={};if(r)for(var i=0;i<r.length;i++)h(t,r[i].properties);return h(t,e.properties),t}static get observers(){var t=[];if(r)for(var i,n=0;n<r.length;n++)(i=r[n]).observers&&(t=t.concat(i.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();var e=a.created;if(e)for(var t=0;t<e.length;t++)e[t].call(this)}_registered(){var e=l.prototype;if(!e.hasOwnProperty("__hasRegisterFinished")){e.__hasRegisterFinished=!0,super._registered(),n.b&&u(e);var t=Object.getPrototypeOf(this),i=a.beforeRegister;if(i)for(var r=0;r<i.length;r++)i[r].call(t);if(i=a.registered)for(var o=0;o<i.length;o++)i[o].call(t)}}_applyListeners(){super._applyListeners();var e=a.listeners;if(e)for(var t=0;t<e.length;t++){var i=e[t];if(i)for(var r in i)this._addMethodEventListenerToNode(this,r,i[r])}}_ensureAttributes(){var e=a.hostAttributes;if(e)for(var t=e.length-1;t>=0;t--){var i=e[t];for(var r in i)this._ensureAttribute(r,i[r])}super._ensureAttributes()}ready(){super.ready();var e=a.ready;if(e)for(var t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();var e=a.attached;if(e)for(var t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();var e=a.detached;if(e)for(var t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,i){super.attributeChanged();var r=a.attributeChanged;if(r)for(var n=0;n<r.length;n++)r[n].call(this,e,t,i)}}if(i){Array.isArray(i)||(i=[i]);var c=t.prototype.behaviors;r=function e(t,i,r){i=i||[];for(var n=t.length-1;n>=0;n--){var a=t[n];a?Array.isArray(a)?e(a,i):i.indexOf(a)<0&&(!r||r.indexOf(a)<0)&&i.unshift(a):console.warn("behavior is null, check for missing or 404 import")}return i}(i,null,c),l.prototype.behaviors=c?c.concat(i):r}var u=t=>{r&&function(e,t,i){for(var r=0;r<t.length;r++)d(e,t[r],i,s)}(t,r,a),d(t,e,a,o)};return n.b||u(l.prototype),l.generatedFrom=e,l}var u=function(e,t){e||console.warn("Polymer.Class requires `info` argument");var i=t?t(Object(r.a)(HTMLElement)):Object(r.a)(HTMLElement);return(i=c(e,i,e.behaviors)).is=i.prototype.is=e.is,i}},,,function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var r,n=i(102),a=[];new MutationObserver((function(){var e=s();a.forEach(t=>{o(t,e)})})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});var o=function(e,t){t?e.setAttribute("dir",t):e.removeAttribute("dir")},s=function(){return document.documentElement.getAttribute("dir")},l=e=>class extends e{static get properties(){return{dir:{type:String,readOnly:!0}}}static finalize(){super.finalize(),r||(r=n.a.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),o(this,s()))}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"dir"===e){var r=i===s()&&-1===a.indexOf(this),n=!i&&t&&-1===a.indexOf(this),l=i!==s()&&t===s();r||n?(this.__subscribe(),o(this,s())):l&&this.__subscribe(!1)}}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}__subscribe(e=!0){e?-1===a.indexOf(this)&&a.push(this):a.indexOf(this)>-1&&a.splice(a.indexOf(this),1)}__getNormalizedScrollLeft(e){return n.a.getNormalizedScrollLeft(r,this.getAttribute("dir")||"ltr",e)}__setNormalizedScrollLeft(e,t){return n.a.setNormalizedScrollLeft(r,this.getAttribute("dir")||"ltr",e,t)}}},,function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var r=!1;window.addEventListener("keydown",()=>{r=!0},{capture:!0}),window.addEventListener("mousedown",()=>{r=!1},{capture:!0});var n=e=>class extends((e=>class extends e{static get properties(){var e={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(e.tabIndex=e.tabindex),e}})(e)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",e=>{e.composedPath()[0]===this?this.contains(e.relatedTarget)||this._focus():-1===e.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",e=>this._setFocused(!1)),super.ready();var e=e=>{e.composed||e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",e),this.shadowRoot.addEventListener("focusout",e),this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&9===e.keyCode)if(e.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0);else{var t=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(t&&parseFloat(t[1])>=63&&parseFloat(t[1])<66&&this.parentNode&&this.nextSibling){var i=document.createElement("input");i.style.position="absolute",i.style.opacity="0",i.tabIndex=this.tabIndex,this.parentNode.insertBefore(i,this.nextSibling),i.focus(),i.addEventListener("focusout",()=>this.parentNode.removeChild(i))}}}),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")})}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused"),e&&r?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this.focusElement&&!this._isShiftTabbing&&(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}_disabledChanged(e){this.focusElement.disabled=e,e?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(e){void 0!==e&&(this.focusElement.tabIndex=e),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=e=void 0),window.ShadyDOM&&this.setProperties({tabIndex:e,tabindex:e})}click(){this.disabled||super.click()}}},,function(e,t,i){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/t.a={}},,function(e,t,i){"use strict";t.a="#header {\n  height: var(--lumo-size-xl);\n}\n#header h1 {\n  font-size: var(--lumo-font-size-l);\n  margin: 0;\n}\n#header img#logo {\n  height: var(--lumo-size-l);\n  margin: 0 var(--lumo-space-s);\n}\n#header img#avatar {\n  border-radius: 50%;\n  height: var(--lumo-size-s);\n  margin-right: var(--lumo-space-m);\n  overflow: hidden;\n  margin-left: auto;\n  background-color: var(--lumo-contrast);\n}\nvaadin-app-layout[dir='rtl'] vaadin-horizontal-layout #header img#avatar {\n  margin-left: var(--lumo-space-m);\n  margin-right: auto;\n}\n"},function(e,t,i){"use strict";i.d(t,"a",(function(){return m}));i(28);var r=i(24),n=i(26),a=i(118),o=i(60),s=i(70),l=i(108);var d=[];var h=i(125);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var c=Object(n.a)(e=>{var t=Object(h.a)(e);function i(e){var t=Object.getPrototypeOf(e);return t.prototype instanceof n?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){var t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){var i=e.properties;i&&(t=function(e){var t={};for(var i in e){var r=e[i];t[i]="function"==typeof r?{type:r}:r}return t}(i))}e.__ownProperties=t}return e.__ownProperties}class n extends t{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){t=this.prototype,d.push(t);var e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.attributeNameForProperty(e)):[]}var t;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){var e=i(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){var e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){var e=i(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){var t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n}),u=i(9),p=window.ShadyCSS&&window.ShadyCSS.cssBuild,m=Object(n.a)(e=>{var t=c(Object(l.a)(e));return class extends t{static get polymerElementVersion(){return"3.2.0"}static _finalizeClass(){super._finalizeClass();var e,t=((e=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty("observers",e))?e.observers:null),e.__ownObservers);t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){var e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):r.b||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(var t in e)i=this.prototype,r=t,n=e[t],a=e,n.computed&&(n.readOnly=!0),n.computed&&(i._hasReadOnlyEffect(r)?console.warn(`Cannot redefine computed property '${r}'.`):i._createComputedProperty(r,n.computed,a)),n.readOnly&&!i._hasReadOnlyEffect(r)?i._createReadOnlyProperty(r,!n.computed):!1===n.readOnly&&i._hasReadOnlyEffect(r)&&console.warn(`Cannot make readOnly property '${r}' non-readOnly.`),n.reflectToAttribute&&!i._hasReflectEffect(r)?i._createReflectedProperty(r):!1===n.reflectToAttribute&&i._hasReflectEffect(r)&&console.warn(`Cannot make reflected property '${r}' non-reflected.`),n.notify&&!i._hasNotifyEffect(r)?i._createNotifyingProperty(r):!1===n.notify&&i._hasNotifyEffect(r)&&console.warn(`Cannot make notify property '${r}' non-notify.`),n.observer&&i._createPropertyObserver(r,n.observer,a[n.observer]),i._addPropertyToAttributeMap(r);var i,r,n,a}static createObservers(e,t){for(var i=this.prototype,r=0;r<e.length;r++)i._createMethodObserver(e[r],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){var t=null;if(e&&(!r.f||r.a)&&(t=s.a.import(e,"template"),r.f&&!t))throw new Error("strictTemplatePolicy: expecting dom-module or null template for "+e);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){var e=this.importMeta;if(e)this._importPath=Object(o.a)(e.url);else{var t=s.a.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=r.d,this.importPath=this.constructor.importPath;var e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;var t=e._properties;for(var i in t){var r=t[i];"value"in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[i]=r)}}return e.__propertyDefaults}(this.constructor);if(e)for(var t in e){var i=e[t];if(!this.hasOwnProperty(t)){var n="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(t)?this._setPendingProperty(t,n,!0):this[t]=n}}}static _processStyleText(e,t){return Object(o.b)(e,t)}static _finalizeTemplate(e){var t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;var i=this.importPath;!function(e,t,i,r){if(!p){for(var n=t.content.querySelectorAll("style"),o=Object(a.c)(t),s=Object(a.b)(i),l=t.content.firstElementChild,d=0;d<s.length;d++){var h=s[d];h.textContent=e._processStyleText(h.textContent,r),t.content.insertBefore(h,l)}for(var c=0,u=0;u<o.length;u++){var m=o[u],f=n[c];f!==m?(m=m.cloneNode(!0),f.parentNode.insertBefore(m,f)):c++,m.textContent=e._processStyleText(m.textContent,r)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,i)}(this,t,e,i?Object(o.c)(i):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){var t=Object(u.a)(this);if(t.attachShadow)return e?(t.shadowRoot||t.attachShadow({mode:"open"}),t.shadowRoot.appendChild(e),r.g&&window.ShadyDOM&&ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=Object(o.c)(this.importPath)),Object(o.c)(e,t)}static _parseTemplateContent(e,t,i){return t.dynamicFns=t.dynamicFns||this._properties,super._parseTemplateContent(e,t,i)}static _addTemplatePropertyEffect(e,t,i){return r.b&&!(t in this._properties)&&console.warn(`Property '${t}' used in template but not declared in 'properties'; attribute will not be observed.`),super._addTemplatePropertyEffect(e,t,i)}}})},,function(e,t,i){"use strict";i.d(t,"c",(function(){return n})),i.d(t,"b",(function(){return a})),i.d(t,"a",(function(){return o}));var r=i(74);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(e,t){for(var i in t)null===i?e.style.removeProperty(i):e.style.setProperty(i,t[i])}function a(e,t){var i=window.getComputedStyle(e).getPropertyValue(t);return i?i.trim():""}function o(e){var t=r.f.test(e)||r.g.test(e);return r.f.lastIndex=0,r.g.lastIndex=0,t}},function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return o}));var r=i(26);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(e,t,i,r,n){var a;n&&(a="object"==typeof i&&null!==i)&&(r=e.__dataTemp[t]);var o=r!==i&&(r==r||i==i);return a&&o&&(e.__dataTemp[t]=i),o}var a=Object(r.a)(e=>class extends e{_shouldPropertyChange(e,t,i){return n(this,e,t,i,!0)}}),o=Object(r.a)(e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,i){return n(this,e,t,i,this.mutableData)}});a._mutablePropertyChange=n},,,function(e,t,i){"use strict";i(62),i(95);var r=document.createElement("template");r.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMQAAADYSnCkuaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh55IAsbWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAAYi2NOJ94fpuvDNzML4AiDNc/fzqEoP+/Zp7KdAvI5WBgAokCAGkcDfgAAAB4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo8CoIKuArwC1ALlgu8eJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n</custom-style>',document.head.appendChild(r.content)},,function(e,t,i){"use strict";class r extends HTMLElement{static get version(){return"1.6.0"}}customElements.define("vaadin-lumo-styles",r)},,function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var r=class{toString(){return""}}},,,function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"a",(function(){return s}));i(28);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var r={},n=/-[a-z]/g,a=/([A-Z])/g;function o(e){return r[e]||(r[e]=e.indexOf("-")<0?e:e.replace(n,e=>e[1].toUpperCase()))}function s(e){return r[e]||(r[e]=e.replace(a,"-$1").toLowerCase())}},,function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));
/**
@license
Copyright (c) 2020 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class r{static detectScrollType(){var e=document.createElement("div");e.textContent="ABCD",e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e);var t="reverse";return e.scrollLeft>0?t="default":(e.scrollLeft=2,e.scrollLeft<2&&(t="negative")),document.body.removeChild(e),t}static getNormalizedScrollLeft(e,t,i){var{scrollLeft:r}=i;if("rtl"!==t||!e)return r;switch(e){case"negative":return i.scrollWidth-i.clientWidth+r;case"reverse":return i.scrollWidth-i.clientWidth-r}return r}static setNormalizedScrollLeft(e,t,i,r){if("rtl"===t&&e)switch(e){case"negative":i.scrollLeft=i.clientWidth-i.scrollWidth+r;break;case"reverse":i.scrollLeft=i.scrollWidth-i.clientWidth-r;break;default:i.scrollLeft=r}else i.scrollLeft=r}}},,function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var r=i(11),n=i(127),a=i(82),o=i(17),s=i(21),l=i(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class d extends(Object(s.a)(Object(n.a)(Object(a.a)(Object(o.a)(r.a))))){static get template(){return l.a`
    <style include="vaadin-text-field-shared-styles">
      /* polymer-cli linter breaks with empty line */
    </style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="input">
          <input part="value">
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="helper-text" on-click="focus" id="[[_helperTextId]]">
        <slot name="helper">[[helperText]]</slot>
      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-field"}static get version(){return"2.8.2"}static get properties(){return{list:{type:String},pattern:{type:String},title:{type:String}}}}customElements.define(d.is,d)},,function(e,t,i){"use strict";i.d(t,"a",(function(){return f}));i(68);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var r={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},n={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},a={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},o=/[a-z0-9*]/,s=/U\+/,l=/^arrow/,d=/^space(bar)?/,h=/^escape$/;function c(e,t){var i="";if(e){var r=e.toLowerCase();" "===r||d.test(r)?i="space":h.test(r)?i="esc":1==r.length?t&&!o.test(r)||(i=r):i=l.test(r)?r.replace("arrow",""):"multiply"==r?"*":r}return i}function u(e,t){return e.key?c(e.key,t):e.detail&&e.detail.key?c(e.detail.key,t):(i=e.keyIdentifier,a="",i&&(i in r?a=r[i]:s.test(i)?(i=parseInt(i.replace("U+","0x"),16),a=String.fromCharCode(i).toLowerCase()):a=i.toLowerCase()),a||function(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):n[e]),t}(e.keyCode)||"");var i,a}function p(e,t){return u(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function m(e){return e.trim().split(" ").map((function(e){return function(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce((function(e,t){var i=t.split(":"),r=i[0],n=i[1];return r in a?(e[a[r]]=!0,e.hasModifiers=!0):(e.key=r,e.event=n||"keydown"),e}),{combo:e.split(":").shift()})}(e)}))}var f={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var i=m(t),r=0;r<i.length;++r)if(p(i[r],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map((function(e){return e.keyBindings}));return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach((function(e){for(var t in e)this._addKeyBinding(t,e[t])}),this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort((function(e,t){var i=e[0].hasModifiers;return i===t[0].hasModifiers?0:i?-1:1}))},_addKeyBinding:function(e,t){m(e).forEach((function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(e){var t=this._keyBindings[e],i=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,i]),this.keyEventTarget.addEventListener(e,i)}),this)},_unlistenKeyEventListeners:function(){for(var e,t,i,r;this._boundKeyHandlers.length;)t=(e=this._boundKeyHandlers.pop())[0],i=e[1],r=e[2],t.removeEventListener(i,r)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var i=0;i<e.length;i++){var r=e[i][0],n=e[i][1];if(p(r,t)&&(this._triggerKeyHandler(r,n,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,i){var r=Object.create(e);r.keyboardEvent=i;var n=new CustomEvent(e.event,{detail:r,cancelable:!0});this[t].call(this,n),n.defaultPrevented&&i.preventDefault()}}},,function(e,t,i){"use strict";i.d(t,"a",(function(){return Y}));i(28);var r=i(9),n=i(26),a=i(13),o=i(100),s=i(124),l=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),d={"dom-if":!0,"dom-repeat":!0};function h(e){var t=e.getAttribute("is");if(t&&d[t]){var i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;)e.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return e}function c(e,t){var i=t.parentInfo&&c(e,t.parentInfo);if(!i)return e;l.currentNode=i;for(var r=l.firstChild(),n=0;r;r=l.nextSibling())if(t.parentIndex===n++)return r}function u(e,t,i,r){r.id&&(t[r.id]=i)}function p(e,t,i){if(i.events&&i.events.length)for(var r,n=0,a=i.events;n<a.length&&(r=a[n]);n++)e._addMethodEventListenerToNode(t,r.name,r.value,e)}function m(e,t,i){i.templateInfo&&(t._templateInfo=i.templateInfo)}var f=Object(n.a)(e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){var i=e._templateInfo={};i.nodeInfoList=[],i.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,i,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,i){return this._parseTemplateNode(e.content,t,i)}static _parseTemplateNode(e,t,i){var r,n=e;return"template"!=n.localName||n.hasAttribute("preserve-content")?"slot"===n.localName&&(t.hasInsertionPoint=!0):r=this._parseTemplateNestedTemplate(n,t,i)||r,l.currentNode=n,l.firstChild()&&(r=this._parseTemplateChildNodes(n,t,i)||r),n.hasAttributes&&n.hasAttributes()&&(r=this._parseTemplateNodeAttributes(n,t,i)||r),r}static _parseTemplateChildNodes(e,t,i){if("script"!==e.localName&&"style"!==e.localName){l.currentNode=e;for(var r,n=l.firstChild(),a=0;n;n=r){if("template"==n.localName&&(n=h(n)),l.currentNode=n,r=l.nextSibling(),n.nodeType===Node.TEXT_NODE){for(var o=r;o&&o.nodeType===Node.TEXT_NODE;)n.textContent+=o.textContent,r=l.nextSibling(),e.removeChild(o),o=r;if(t.stripWhiteSpace&&!n.textContent.trim()){e.removeChild(n);continue}}var s={parentIndex:a,parentInfo:i};this._parseTemplateNode(n,t,s)&&(s.infoIndex=t.nodeInfoList.push(s)-1),l.currentNode=n,l.parentNode()&&a++}}}static _parseTemplateNestedTemplate(e,t,i){var r=this._parseTemplate(e,t);return(r.content=e.content.ownerDocument.createDocumentFragment()).appendChild(e.content),i.templateInfo=r,!0}static _parseTemplateNodeAttributes(e,t,i){for(var r,n=!1,a=Array.from(e.attributes),o=a.length-1;r=a[o];o--)n=this._parseTemplateNodeAttribute(e,t,i,r.name,r.value)||n;return n}static _parseTemplateNodeAttribute(e,t,i,r,n){return"on-"===r.slice(0,3)?(e.removeAttribute(r),i.events=i.events||[],i.events.push({name:r.slice(3),value:n}),!0):"id"===r&&(i.id=n,!0)}static _contentForTemplate(e){var t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);var t=this.constructor._parseTemplate(e),i=t.nodeInfoList,r=t.content||e.content,n=document.importNode(r,!0);n.__noInsertionPoint=!t.hasInsertionPoint;var a=n.nodeList=new Array(i.length);n.$={};for(var o,s=0,l=i.length;s<l&&(o=i[s]);s++){var d=a[s]=c(n,o);u(0,n.$,d,o),m(0,d,o),p(this,d,o)}return n=n}_addMethodEventListenerToNode(e,t,i,r){var n=function(e,t,i){return e=e._methodHost||e,function(t){e[i]?e[i](t,t.detail):console.warn("listener method `"+i+"` not defined")}}(r=r||e,0,i);return this._addEventListenerToNode(e,t,n),n}_addEventListenerToNode(e,t,i){e.addEventListener(t,i)}_removeEventListenerFromNode(e,t,i){e.removeEventListener(t,i)}}),v=i(24),_=0,g={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},b=/[A-Z]/;function y(e,t){var i=e[t];if(i){if(!e.hasOwnProperty(t))for(var r in i=e[t]=Object.create(e[t]))for(var n=i[r],a=i[r]=Array(n.length),o=0;o<n.length;o++)a[o]=n[o]}else i=e[t]={};return i}function w(e,t,i,r,n,a){if(t){var o=!1,s=_++;for(var l in i)A(e,t,s,l,i,r,n,a)&&(o=!0);return o}return!1}function A(e,t,i,r,n,o,s,l){var d=!1,h=t[s?Object(a.g)(r):r];if(h)for(var c,u=0,p=h.length;u<p&&(c=h[u]);u++)c.info&&c.info.lastRun===i||s&&!x(r,c.trigger)||(c.info&&(c.info.lastRun=i),c.fn(e,r,n,o,c.info,s,l),d=!0);return d}function x(e,t){if(t){var i=t.name;return i==e||!(!t.structured||!Object(a.b)(i,e))||!(!t.wildcard||!Object(a.c)(i,e))}return!0}function C(e,t,i,r,n){var a="string"==typeof n.method?e[n.method]:n.method,o=n.property;a?a.call(e,e.__data[o],r[o]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function S(e,t,i){var r=Object(a.g)(t);return r!==t&&(E(e,Object(o.a)(r)+"-changed",i[t],t),!0)}function E(e,t,i,n){var a={value:i,queueProperty:!0};n&&(a.path=n),Object(r.a)(e).dispatchEvent(new CustomEvent(t,{detail:a}))}function O(e,t,i,r,n,o){var s=(o?Object(a.g)(t):t)!=t?t:null,l=s?Object(a.a)(e,s):e.__data[t];s&&void 0===l&&(l=i[t]),E(e,n.eventName,l,s)}function I(e,t,i,r,n){var a=e.__data[t];v.e&&(a=Object(v.e)(a,n.attrName,"attribute",e)),e._propertyToAttribute(t,n.attrName,a)}function k(e,t,i,r,n){var a=F(e,t,i,r,n),o=n.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,a,!0):e[o]=a}function P(e,t,i,r,n,a,s){i.bindings=i.bindings||[];var l={kind:r,target:n,parts:a,literal:s,isCompound:1!==a.length};if(i.bindings.push(l),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(l)){var{event:d,negate:h}=l.parts[0];l.listenerEvent=d||Object(o.a)(n)+"-changed",l.listenerNegate=h}for(var c=t.nodeInfoList.length,u=0;u<l.parts.length;u++){var p=l.parts[u];p.compoundIndex=u,T(e,t,l,p,c)}}function T(e,t,i,r,n){if(!r.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else for(var a=r.dependencies,o={index:n,binding:i,part:r,evaluator:e},s=0;s<a.length;s++){var l=a[s];"string"==typeof l&&((l=V(l)).wildcard=!0),e._addTemplatePropertyEffect(t,l.rootProperty,{fn:z,info:o,trigger:l})}}function z(e,t,i,r,n,o,s){var l=s[n.index],d=n.binding,h=n.part;if(o&&h.source&&t.length>h.source.length&&"property"==d.kind&&!d.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[d.target]){var c=i[t];t=Object(a.i)(h.source,d.target,t),l._setPendingPropertyOrPath(t,c,!1,!0)&&e._enqueueClient(l)}else{!function(e,t,i,r,n){n=function(e,t,i,r){if(i.isCompound){var n=e.__dataCompoundStorage[i.target];n[r.compoundIndex]=t,t=n.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,n,i,r),v.e&&(n=Object(v.e)(n,i.target,i.kind,t));if("attribute"==i.kind)e._valueToNodeAttribute(t,n,i.target);else{var a=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[a]?t[g.READ_ONLY]&&t[g.READ_ONLY][a]||t._setPendingProperty(a,n)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,a,n)}}(e,l,d,h,n.evaluator._evaluateBinding(e,h,t,i,r,o))}}function D(e,t){if(t.isCompound){for(var i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),r=t.parts,n=new Array(r.length),a=0;a<r.length;a++)n[a]=r[a].literal;var o=t.target;i[o]=n,t.literal&&"property"==t.kind&&(e[o]=t.literal)}}function M(e,t,i){if(i.listenerEvent){var r=i.parts[0];e.addEventListener(i.listenerEvent,(function(e){!function(e,t,i,r,n){var o,s=e.detail,l=s&&s.path;l?(r=Object(a.i)(i,r,l),o=s&&s.value):o=e.currentTarget[i],o=n?!o:o,t[g.READ_ONLY]&&t[g.READ_ONLY][r]||!t._setPendingPropertyOrPath(r,o,!0,Boolean(l))||s&&s.queueProperty||t._invalidateProperties()}(e,t,i.target,r.source,r.negate)}))}}function L(e,t,i,r,n,a){a=t.static||a&&("object"!=typeof a||a[t.methodName]);for(var o,s={methodName:t.methodName,args:t.args,methodInfo:n,dynamicFn:a},l=0;l<t.args.length&&(o=t.args[l]);l++)o.literal||e._addPropertyEffect(o.rootProperty,i,{fn:r,info:s,trigger:o});a&&e._addPropertyEffect(t.methodName,i,{fn:r,info:s})}function F(e,t,i,r,n){var a=e._methodHost||e,o=a[n.methodName];if(o){var s=e._marshalArgs(n.args,t,i);return o.apply(a,s)}n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}var N=[],R=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function j(e){for(var t="",i=0;i<e.length;i++){t+=e[i].literal||""}return t}function B(e){var t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){var i={methodName:t[1],static:!0,args:N};return t[2].trim()?function(e,t){return t.args=e.map((function(e){var i=V(e);return i.literal||(t.static=!1),i}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),i):i}return null}function V(e){var t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},r=t[0];switch("-"===r&&(r=t[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0}return i.literal||(i.rootProperty=Object(a.g)(t),i.structured=Object(a.d)(t),i.structured&&(i.wildcard=".*"==t.slice(-2),i.wildcard&&(i.name=t.slice(0,-2)))),i}function H(e,t,i){var r=Object(a.a)(e,i);return void 0===r&&(r=t[i]),r}function $(e,t,i,r){e.notifyPath(i+".splices",{indexSplices:r}),e.notifyPath(i+".length",t.length)}function q(e,t,i,r,n,a){$(e,t,i,[{index:r,addedCount:n,removed:a,object:t,type:"splice"}])}var Y=Object(n.a)(e=>{var t=f(Object(s.a)(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return g}_initializeProperties(){super._initializeProperties(),W.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){var t=this[g.READ_ONLY];for(var i in e)t&&t[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=e[i])}_addPropertyEffect(e,t,i){this._createPropertyAccessor(e,t==g.READ_ONLY);var r=y(this,t)[e];r||(r=this[t][e]=[]),r.push(i)}_removePropertyEffect(e,t,i){var r=y(this,t)[e],n=r.indexOf(i);n>=0&&r.splice(n,1)}_hasPropertyEffect(e,t){var i=this[t];return Boolean(i&&i[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,g.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,g.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,g.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,g.COMPUTE)}_setPendingPropertyOrPath(e,t,i,r){if(r||Object(a.g)(Array.isArray(e)?e[0]:e)!==e){if(!r){var n=Object(a.a)(this,e);if(!(e=Object(a.h)(this,e,t))||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,i))return function(e,t,i){var r,n=e.__dataLinkedPaths;if(n)for(var o in n){var s=n[o];Object(a.c)(o,t)?(r=Object(a.i)(o,s,t),e._setPendingPropertyOrPath(r,i,!0,!0)):Object(a.c)(s,t)&&(r=Object(a.i)(s,o,t),e._setPendingPropertyOrPath(r,i,!0,!0))}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,i);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,i){i===e[t]&&"object"!=typeof i||(e[t]=i)}_setPendingProperty(e,t,i){var r=this.__dataHasPaths&&Object(a.d)(e),n=r?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,n[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[g.NOTIFY]&&this[g.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=i),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){var e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(var t=0;t<e.length;t++){var i=e[t];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(var i in e)!t&&this[g.READ_ONLY]&&this[g.READ_ONLY][i]||this._setPendingPropertyOrPath(i,e[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,i){var r=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,i,r){var n=e[g.COMPUTE];if(n)for(var a=t;w(e,n,a,i,r);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),a=e.__dataPending,e.__dataPending=null}(this,t,i,r);var n=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,i,r),this._flushClients(),w(this,this[g.REFLECT],t,i,r),w(this,this[g.OBSERVE],t,i,r),n&&function(e,t,i,r,n){var a,o,s=e[g.NOTIFY],l=_++;for(var d in t)t[d]&&(s&&A(e,s,l,d,i,r,n)||n&&S(e,d,i))&&(a=!0);a&&(o=e.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,n,t,i,r),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,i){this[g.PROPAGATE]&&w(this,this[g.PROPAGATE],e,t,i);for(var r=this.__templateInfo;r;)w(this,r.propertyEffects,e,t,i,r.nodeList),r=r.nextTemplateInfo}linkPaths(e,t){e=Object(a.f)(e),t=Object(a.f)(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=Object(a.f)(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){var i={path:""};$(this,Object(a.a)(this,e,i),i.path,t)}get(e,t){return Object(a.a)(t||this,e)}set(e,t,i){i?Object(a.h)(i,e,t):this[g.READ_ONLY]&&this[g.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){var i={path:""},r=Object(a.a)(this,e,i),n=r.length,o=r.push(...t);return t.length&&q(this,r,i.path,n,t.length,[]),o}pop(e){var t={path:""},i=Object(a.a)(this,e,t),r=Boolean(i.length),n=i.pop();return r&&q(this,i,t.path,i.length,0,[n]),n}splice(e,t,i,...r){var n,o={path:""},s=Object(a.a)(this,e,o);return t<0?t=s.length-Math.floor(-t):t&&(t=Math.floor(t)),n=2===arguments.length?s.splice(t):s.splice(t,i,...r),(r.length||n.length)&&q(this,s,o.path,t,r.length,n),n}shift(e){var t={path:""},i=Object(a.a)(this,e,t),r=Boolean(i.length),n=i.shift();return r&&q(this,i,t.path,0,0,[n]),n}unshift(e,...t){var i={path:""},r=Object(a.a)(this,e,i),n=r.unshift(...t);return t.length&&q(this,r,i.path,0,t.length,[]),n}notifyPath(e,t){var i;if(1==arguments.length){var r={path:""};t=Object(a.a)(this,e,r),i=r.path}else i=Array.isArray(e)?Object(a.f)(e):e;this._setPendingPropertyOrPath(i,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var i;this._addPropertyEffect(e,g.READ_ONLY),t&&(this["_set"+(i=e,i[0].toUpperCase()+i.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,i){var r={property:e,method:t,dynamicFn:Boolean(i)};this._addPropertyEffect(e,g.OBSERVE,{fn:C,info:r,trigger:{name:e}}),i&&this._addPropertyEffect(t,g.OBSERVE,{fn:C,info:r,trigger:{name:t}})}_createMethodObserver(e,t){var i=B(e);if(!i)throw new Error("Malformed observer expression '"+e+"'");L(this,i,g.OBSERVE,F,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,g.NOTIFY,{fn:O,info:{eventName:Object(o.a)(e)+"-changed",property:e}})}_createReflectedProperty(e){var t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,g.REFLECT,{fn:I,info:{attrName:t}})}_createComputedProperty(e,t,i){var r=B(t);if(!r)throw new Error("Malformed computed expression '"+t+"'");L(this,r,g.COMPUTE,k,e,i)}_marshalArgs(e,t,i){for(var r=this.__data,n=[],o=0,s=e.length;o<s;o++){var{name:l,structured:d,wildcard:h,value:c,literal:u}=e[o];if(!u)if(h){var p=Object(a.c)(l,t),m=H(r,i,p?t:l);c={path:p?t:l,value:m,base:p?Object(a.a)(r,l):m}}else c=d?H(r,i,l):r[l];n[o]=c}return n}static addPropertyEffect(e,t,i){this.prototype._addPropertyEffect(e,t,i)}static createPropertyObserver(e,t,i){this.prototype._createPropertyObserver(e,t,i)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,i){this.prototype._createComputedProperty(e,t,i)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){var i=this.constructor._parseTemplate(e),r=this.__templateInfo==i;if(!r)for(var n in i.propertyEffects)this._createPropertyAccessor(n);if(t&&((i=Object.create(i)).wasPreBound=r,!r&&this.__templateInfo)){var a=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=a.nextTemplateInfo=i,i.previousTemplateInfo=a,i}return this.__templateInfo=i}static _addTemplatePropertyEffect(e,t,i){(e.hostProps=e.hostProps||{})[t]=!0;var r=e.propertyEffects=e.propertyEffects||{};(r[t]=r[t]||[]).push(i)}_stampTemplate(e){W.beginHosting(this);var t=super._stampTemplate(e);W.endHosting(this);var i=this._bindTemplate(e,!0);if(i.nodeList=t.nodeList,!i.wasPreBound)for(var r=i.childNodes=[],n=t.firstChild;n;n=n.nextSibling)r.push(n);return t.templateInfo=i,function(e,t){var{nodeList:i,nodeInfoList:r}=t;if(r.length)for(var n=0;n<r.length;n++){var a=r[n],o=i[n],s=a.bindings;if(s)for(var l=0;l<s.length;l++){var d=s[l];D(o,d),M(o,e,d)}o.__dataHost=e}}(this,i),this.__dataReady&&w(this,i.propertyEffects,this.__data,null,!1,i.nodeList),t}_removeBoundDom(e){var t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;for(var i=t.childNodes,r=0;r<i.length;r++){var n=i[r];n.parentNode.removeChild(n)}}static _parseTemplateNode(e,t,i){var r=super._parseTemplateNode(e,t,i);if(e.nodeType===Node.TEXT_NODE){var n=this._parseBindings(e.textContent,t);n&&(e.textContent=j(n)||" ",P(this,t,i,"text","textContent",n),r=!0)}return r}static _parseTemplateNodeAttribute(e,t,i,r,n){var a=this._parseBindings(n,t);if(a){var s=r,l="property";b.test(r)?l="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),l="attribute");var d=j(a);return d&&"attribute"==l&&("class"==r&&e.hasAttribute("class")&&(d+=" "+e.getAttribute(r)),e.setAttribute(r,d)),"input"===e.localName&&"value"===s&&e.setAttribute(s,""),e.removeAttribute(s),"property"===l&&(r=Object(o.b)(r)),P(this,t,i,l,r,a,d),!0}return super._parseTemplateNodeAttribute(e,t,i,r,n)}static _parseTemplateNestedTemplate(e,t,i){var r=super._parseTemplateNestedTemplate(e,t,i),n=i.templateInfo.hostProps;for(var a in n){P(this,t,i,"property","_host_"+a,[{mode:"{",source:a,dependencies:[a]}])}return r}static _parseBindings(e,t){for(var i,r=[],n=0;null!==(i=R.exec(e));){i.index>n&&r.push({literal:e.slice(n,i.index)});var a=i[1][0],o=Boolean(i[2]),s=i[3].trim(),l=!1,d="",h=-1;"{"==a&&(h=s.indexOf("::"))>0&&(d=s.substring(h+2),s=s.substring(0,h),l=!0);var c=B(s),u=[];if(c){for(var{args:p,methodName:m}=c,f=0;f<p.length;f++){var v=p[f];v.literal||u.push(v)}var _=t.dynamicFns;(_&&_[m]||c.static)&&(u.push(m),c.dynamicFn=!0)}else u.push(s);r.push({source:s,mode:a,negate:o,customEvent:l,signature:c,dependencies:u,event:d}),n=R.lastIndex}if(n&&n<e.length){var g=e.substring(n);g&&r.push({literal:g})}return r.length?r:null}static _evaluateBinding(e,t,i,r,n,o){var s;return s=t.signature?F(e,i,r,0,t.signature):i!=t.source?Object(a.a)(e,t.source):o&&Object(a.d)(i)?Object(a.a)(e,i):e.__data[i],t.negate&&(s=!s),s}}});var W=new class{constructor(){this.stack=[]}registerHost(e){this.stack.length&&this.stack[this.stack.length-1]._enqueueClient(e)}beginHosting(e){this.stack.push(e)}endHosting(e){var t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}}},,function(e,t,i){"use strict";i.d(t,"a",(function(){return $}));var r=i(56),n=i(74),a=i(89),o=(i(72),/;\s*/m),s=/^\s*(initial)|(inherit)\s*$/,l=/\s*!important/;class d{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}var h=null;class c{constructor(){this._currentElement=null,this._measureElement=null,this._map=new d}detectMixin(e){return Object(a.a)(e)}gatherStyles(e){var t=Object(r.g)(e.content);if(t){var i=document.createElement("style");return i.textContent=t,e.content.insertBefore(i,e.content.firstChild),i}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));var i=e._gatheredStyle;return i?this.transformStyle(i,t):null}transformStyle(e,t=""){var i=Object(r.m)(e);return this.transformRules(i,t),e.textContent=Object(r.p)(i),i}transformCustomStyle(e){var t=Object(r.m)(e);return Object(r.f)(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=Object(r.p)(t),t}transformRules(e,t){this._currentElement=t,Object(r.f)(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(n.g,(e,i,r,n)=>this._produceCssProperties(e,i,r,n,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){for(var t=e;t.parent;)t=t.parent;var i={},n=!1;return Object(r.f)(t,t=>{(n=n||t===e)||t.selector===e.selector&&Object.assign(i,this._cssTextToMap(t.parsedCssText))}),i}_consumeCssProperties(e,t){for(var i=null;i=n.f.exec(e);){var r=i[0],a=i[1],o=i.index,s=o+r.indexOf("@apply"),l=o+r.length,d=e.slice(0,s),h=e.slice(l),c=t?this._fallbacksFromPreviousRules(t):{};Object.assign(c,this._cssTextToMap(d));var u=this._atApplyToCssProperties(a,c);e=`${d}${u}${h}`,n.f.lastIndex=o+u.length}return e}_atApplyToCssProperties(e,t){e=e.replace(o,"");var i=[],r=this._map.get(e);if(r||(this._map.set(e,{}),r=this._map.get(e)),r){var n,a,s;this._currentElement&&(r.dependants[this._currentElement]=!0);var d=r.properties;for(n in d)a=[n,": var(",e,"_-_",n],(s=t&&t[n])&&a.push(",",s.replace(l,"")),a.push(")"),l.test(d[n])&&a.push(" !important"),i.push(a.join(""))}return i.join("; ")}_replaceInitialOrInherit(e,t){var i=s.exec(t);return i&&(t=i[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){for(var i,r,n,a,o=e.split(";"),s={},l=0;l<o.length;l++)(n=o[l])&&(a=n.split(":")).length>1&&(i=a[0].trim(),r=a.slice(1).join(":"),t&&(r=this._replaceInitialOrInherit(i,r)),s[i]=r);return s}_invalidateMixinEntry(e){if(h)for(var t in e.dependants)t!==this._currentElement&&h(t)}_produceCssProperties(e,t,i,n,a){if(i&&Object(r.l)(i,(e,t)=>{t&&this._map.get(t)&&(n=`@apply ${t};`)}),!n)return e;var o=this._consumeCssProperties(""+n,a),s=e.slice(0,e.indexOf("--")),l=this._cssTextToMap(o,!0),d=l,h=this._map.get(t),c=h&&h.properties;c?d=Object.assign(Object.create(c),l):this._map.set(t,d);var u,p,m=[],f=!1;for(u in d)void 0===(p=l[u])&&(p="initial"),c&&!(u in c)&&(f=!0),m.push(`${t}_-_${u}: ${p}`);return f&&this._invalidateMixinEntry(h),h&&(h.properties=d),i&&(s=`${e};${s}`),`${s}${m.join("; ")};`}}c.prototype.detectMixin=c.prototype.detectMixin,c.prototype.transformStyle=c.prototype.transformStyle,c.prototype.transformCustomStyle=c.prototype.transformCustomStyle,c.prototype.transformRules=c.prototype.transformRules,c.prototype.transformRule=c.prototype.transformRule,c.prototype.transformTemplate=c.prototype.transformTemplate,c.prototype._separator="_-_",Object.defineProperty(c.prototype,"invalidCallback",{get:()=>h,set(e){h=e}});var u=c,p=i(84),m=i(119),f=(i(149),i(38)),v=new u;class _{constructor(){this.customStyleInterface=null,v.invalidCallback=m.a}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{v.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),!Object(r.d)(e)){p.a[t]=e;var i=v.transformTemplate(e,t);e._styleAst=i}}flushCustomStyles(){if(this.ensure(),this.customStyleInterface){var e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(var t=0;t<e.length;t++){var i=e[t],r=this.customStyleInterface.getStyleForCustomStyle(i);r&&v.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}}styleSubtree(e,t){if(this.ensure(),t&&Object(a.c)(e,t),e.shadowRoot){this.styleElement(e);for(var i=e.shadowRoot.children||e.shadowRoot.childNodes,r=0;r<i.length;r++)this.styleSubtree(i[r])}else for(var n=e.children||e.childNodes,o=0;o<n.length;o++)this.styleSubtree(n[o])}styleElement(e){this.ensure();var{is:t}=Object(r.i)(e),i=p.a[t];if((!i||!Object(r.d)(i))&&i&&!m.c(i)){m.d(i)||(this.prepareTemplate(i,t),m.b(i));var n=e.shadowRoot;if(n){var a=n.querySelector("style");a&&(a.__cssRules=i._styleAst,a.textContent=Object(r.p)(i._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){var g=new _,b=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,t,i){g.flushCustomStyles(),g.prepareTemplate(e,t)},prepareTemplateStyles(e,t,i){window.ShadyCSS.prepareTemplate(e,t,i)},prepareTemplateDom(e,t){},styleSubtree(e,t){g.flushCustomStyles(),g.styleSubtree(e,t)},styleElement(e){g.flushCustomStyles(),g.styleElement(e)},styleDocument(e){g.flushCustomStyles(),g.styleDocument(e)},getComputedStyleValue:(e,t)=>Object(a.b)(e,t),flushCustomStyles(){g.flushCustomStyles()},nativeCss:f.c,nativeShadow:f.d,cssBuild:f.a,disableRuntime:f.b},b&&(window.ShadyCSS.CustomStyleInterface=b)}window.ShadyCSS.ApplyShim=v;var y=i(87),w=i(65),A=i(124),x=i(26),C=/:host\(:dir\((ltr|rtl)\)\)/g,S=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,E=/:dir\((?:ltr|rtl)\)/,O=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),I=[],k=null,P="";function T(){P=document.documentElement.getAttribute("dir")}function z(e){e.__autoDirOptOut||e.setAttribute("dir",P)}function D(){T(),P=document.documentElement.getAttribute("dir");for(var e=0;e<I.length;e++)z(I[e])}var M=Object(x.a)(e=>{O||k||(T(),(k=new MutationObserver(D)).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));var t=Object(A.a)(e);class i extends t{static _processStyleText(e,t){return e=super._processStyleText(e,t),!O&&E.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){var t=e;return t=(t=t.replace(C,':host([dir="$1"])')).replace(S,':host([dir="$2"]) $1')}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(k&&k.takeRecords().length&&D(),I.push(this),z(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){var e=I.indexOf(this);e>-1&&I.splice(e,1)}}}return i.__activateDir=!1,i});i(48);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function L(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?L():window.addEventListener("DOMContentLoaded",L);var F=i(30),N=i(52),R=i(19),j=i(15),B=i(13),V=i(9),H=window.ShadyCSS,$=Object(x.a)(e=>{var t=M(Object(w.a)(Object(y.a)(e))),i={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,i,r){t!==i&&(super.attributeChangedCallback(e,t,i,r),this.attributeChanged(e,t,i))}attributeChanged(e,t,i){}_initializeProperties(){var e=Object.getPrototypeOf(this);e.hasOwnProperty("__hasRegisterFinished")||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,i){this._propertyToAttribute(e,t,i)}serializeValueToAttribute(e,t,i){this._valueToNodeAttribute(i||this,e,t)}extend(e,t){if(!e||!t)return e||t;for(var i,r=Object.getOwnPropertyNames(t),n=0;n<r.length&&(i=r[n]);n++){var a=Object.getOwnPropertyDescriptor(t,i);a&&Object.defineProperty(e,i,a)}return e}mixin(e,t){for(var i in t)e[i]=t[i];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){var t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,i){i=i||{},t=null==t?{}:t;var r=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});r.detail=t;var n=i.node||this;return Object(V.a)(n).dispatchEvent(r),r}listen(e,t,i){e=e||this;var r=this.__boundListeners||(this.__boundListeners=new WeakMap),n=r.get(e);n||(n={},r.set(e,n));var a=t+i;n[a]||(n[a]=this._addMethodEventListenerToNode(e,t,i,this))}unlisten(e,t,i){e=e||this;var r=this.__boundListeners&&this.__boundListeners.get(e),n=t+i,a=r&&r[n];a&&(this._removeEventListenerFromNode(e,t,a),r[n]=null)}setScrollDirection(e,t){Object(N.setTouchAction)(t||this,i[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){var e=Object(V.a)(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){var e=Object(F.a)(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(F.a)(this).getEffectiveChildNodes()}queryDistributedElements(e){return Object(F.a)(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){for(var e,t=this.getEffectiveChildNodes(),i=[],r=0;e=t[r];r++)e.nodeType!==Node.COMMENT_NODE&&i.push(e.textContent);return i.join("")}queryEffectiveChildren(e){var t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){var t=this.root.querySelector(e||"slot");return t?Object(F.a)(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){return this!==e&&Object(V.a)(this).contains(e)&&Object(V.a)(this).getRootNode()===Object(V.a)(e).getRootNode()}isLocalDescendant(e){return this.root===Object(V.a)(e).getRootNode()}scopeSubtree(e,t){}getComputedStyleValue(e){return H.getComputedStyleValue(this,e)}debounce(e,t,i){return this._debouncers=this._debouncers||{},this._debouncers[e]=R.a.debounce(this._debouncers[e],i>0?j.d.after(i):j.c,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};var t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};var t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};var t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?j.d.run(e.bind(this),t):~j.c.run(e.bind(this))}cancelAsync(e){e<0?j.c.cancel(~e):j.d.cancel(e)}create(e,t){var i=document.createElement(e);if(t)if(i.setProperties)i.setProperties(t);else for(var r in t)i[r]=t[r];return i}elementMatches(e,t){return Object(F.b)(t||this,e)}toggleAttribute(e,t){var i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(t=!i.hasAttribute(e)),t?(Object(V.a)(i).setAttribute(e,""),!0):(Object(V.a)(i).removeAttribute(e),!1)}toggleClass(e,t,i){i=i||this,1==arguments.length&&(t=!i.classList.contains(e)),t?i.classList.add(e):i.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,i,r){r=r||this,this.transform("translate3d("+e+","+t+","+i+")",r)}arrayDelete(e,t){var i;if(Array.isArray(e)){if((i=e.indexOf(t))>=0)return e.splice(i,1)}else if((i=Object(B.a)(this,e).indexOf(t))>=0)return this.splice(e,i,1);return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return r.prototype.is="",r})},,function(e,t,i){"use strict";i(36),i(50),i(32),i(40),i(46),i(140),i(93),i(116);var r=i(6).a`<dom-module id="lumo-text-field" theme-for="vaadin-text-field">
  <template>
    <style include="lumo-required-field lumo-field-button">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([focused]:not([readonly])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      :host([has-helper]) [part="helper-text"]::before {
        content: "";
        display: block;
        height: 0.4em;
      }

      [part="helper-text"],
      [part="helper-text"] ::slotted(*) {
        display: block;
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-xs);
        margin-left: calc(var(--lumo-border-radius-m) / 4);
        transition: color 0.2s;
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        cursor: inherit;
        min-height: var(--lumo-text-field-size);
        padding: 0 0.25em;
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      }

      [part="value"]:focus,
      :host([focused]) [part="input-field"] ::slotted(input),
      :host([focused]) [part="input-field"] ::slotted(textarea) {
        -webkit-mask-image: none;
        mask-image: none;
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="value"],
        [part="input-field"] ::slotted(input),
        [part="input-field"] ::slotted(textarea),
        [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      [part="value"]::-webkit-input-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]:-ms-input-placeholder {
        color: inherit;
        opacity: 0.5;
      }

      [part="value"]::-moz-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]::placeholder {
        color: inherit;
        transition: opacity 0.175s 0.1s;
        opacity: 0.5;
      }

      [part="input-field"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: text;
        box-sizing: border-box;
      }

      /* Used for hover and activation effects */
      [part="input-field"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        pointer-events: none;
        background-color: var(--lumo-contrast-50pct);
        opacity: 0;
        transition: transform 0.15s, opacity 0.2s;
        transform-origin: 100% 0;
      }

      /* Hover */

      :host(:hover:not([readonly]):not([focused])) [part="label"],
      :host(:hover:not([readonly])) [part="helper-text"],
      :host(:hover:not([readonly])) [part="helper-text"] ::slotted(*) {
        color: var(--lumo-body-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
        opacity: 0.1;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }

        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0;
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0.2;
        }
      }

      /* Trigger when not focusing using the keyboard */
      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
        transform: scaleX(0);
        transition-duration: 0.15s, 1s;
      }

      /* Focus-ring */

      :host([focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Read-only and disabled */
      :host([readonly]) [part="value"]::-webkit-input-placeholder,
      :host([disabled]) [part="value"]::-webkit-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]:-ms-input-placeholder,
      :host([disabled]) [part="value"]:-ms-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::-moz-placeholder,
      :host([disabled]) [part="value"]::-moz-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::placeholder,
      :host([disabled]) [part="value"]::placeholder {
        opacity: 0;
      }

      /* Read-only */

      :host([readonly]) [part="input-field"] {
        color: var(--lumo-secondary-text-color);
        background-color: transparent;
        cursor: default;
      }

      :host([readonly]) [part="input-field"]::after {
        background-color: transparent;
        opacity: 1;
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      /* Disabled style */

      :host([disabled]) {
        pointer-events: none;
      }

      :host([disabled]) [part="input-field"] {
        background-color: var(--lumo-contrast-5pct);
      }

      :host([disabled]) [part="label"],
      :host([disabled]) [part="helper-text"],
      :host([disabled]) [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(*) {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Invalid style */

      :host([invalid]) [part="input-field"] {
        background-color: var(--lumo-error-color-10pct);
      }

      :host([invalid]) [part="input-field"]::after {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([invalid][focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
      }

      :host([input-prevented]) [part="input-field"] {
        color: var(--lumo-error-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }

      /* Text align */

      :host([theme~="align-left"]) [part="value"] {
        text-align: left;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-center"]) [part="value"] {
        text-align: center;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) [part="value"] {
        text-align: right;
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-left"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
        }
      }
      /* helper-text position */

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::before {
        display: none;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::after {
        content: "";
        display: block;
        height: 0.4em;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="label"] {
        order: 0;
        padding-bottom: 0.4em;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"] {
        order: 1;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="input-field"] {
        order: 2;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="error-message"] {
        order: 3;
      }

      /* Slotted content */

      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
        color: var(--lumo-secondary-text-color);
        font-weight: 400;
      }

      /* Slotted icons */

      [part="input-field"] ::slotted(iron-icon) {
        color: var(--lumo-contrast-60pct);
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="input-field"]::after {
        transform-origin: 0% 0;
      }

      :host([dir="rtl"]) [part="value"],
      :host([dir="rtl"]) [part="input-field"] ::slotted(input),
      :host([dir="rtl"]) [part="input-field"] ::slotted(textarea) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
      }

      :host([dir="rtl"]) [part="value"]:focus,
      :host([focused][dir="rtl"]) [part="input-field"] ::slotted(input),
      :host([focused][dir="rtl"]) [part="input-field"] ::slotted(textarea) {
        -webkit-mask-image: none;
        mask-image: none;
      }

      @-moz-document url-prefix() {
        :host([dir="rtl"]) [part="value"],
        :host([dir="rtl"]) [part="input-field"] ::slotted(input),
        :host([dir="rtl"]) [part="input-field"] ::slotted(textarea),
        :host([dir="rtl"]) [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      :host([theme~="align-left"][dir="rtl"]) [part="value"] {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-center"][dir="rtl"]) [part="value"] {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"][dir="rtl"]) [part="value"] {
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"][dir="rtl"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-left"][dir="rtl"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content);i(104)},,function(e,t,i){"use strict";i.d(t,"a",(function(){return f}));var r=i(11),n=i(54),a=i(48),o=i(42),s=i(17),l=i(80),d=Element.prototype,h=d.matches||d.matchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector||d.webkitMatchesSelector;var c=i(6),u=0,p={},m=e=>{var t="vaadin-overlay-content-"+ ++u,i=document.createElement("template"),r=document.createElement("style");r.textContent=":host { display: block; }"+e,i.content.appendChild(r),window.ShadyCSS&&window.ShadyCSS.prepareTemplate(i,t);var n=class extends HTMLElement{static get is(){return t}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(document.importNode(i.content,!0)))}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this)}};return customElements.define(n.is,n),p[e]=t,t};
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class f extends(Object(s.a)(Object(l.a)(r.a))){static get template(){return c.a`
    <style>
      :host {
        z-index: 200;
        position: fixed;

        /*
          Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part.
        */

        /*
          Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport.
        */
        top: 0;
        right: 0;
        bottom: var(--vaadin-overlay-viewport-bottom);
        left: 0;

        /* Use flexbox alignment for the overlay part. */
        display: flex;
        flex-direction: column; /* makes dropdowns sizing easier */
        /* Align to center by default. */
        align-items: center;
        justify-content: center;

        /* Allow centering when max-width/max-height applies. */
        margin: auto;

        /* The host is not clickable, only the overlay part is. */
        pointer-events: none;

        /* Remove tap highlight on touch devices. */
        -webkit-tap-highlight-color: transparent;

        /* CSS API for host */
        --vaadin-overlay-viewport-bottom: 0;
      }

      :host([hidden]),
      :host(:not([opened]):not([closing])) {
        display: none !important;
      }

      [part="overlay"] {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;

        /* Prevent overflowing the host in MSIE 11 */
        max-width: 100%;
        box-sizing: border-box;

        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
      }

      [part="backdrop"] {
        z-index: -1;
        content: "";
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: auto;
      }
    </style>

    <div id="backdrop" part="backdrop" hidden\$="{{!withBackdrop}}"></div>
    <div part="overlay" id="overlay" tabindex="0">
      <div part="content" id="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},instanceProps:{type:Object},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new o.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{})}_detectIosNavbar(){if(this.opened){var e=window.innerHeight,t=window.innerWidth>e,i=document.documentElement.clientHeight;t&&i>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",i-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}}_setTemplateFromNodes(e){this.template=e.filter(e=>e.localName&&"template"===e.localName)[0]||this.template}close(e){var t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(-1!==e.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(this._last){var t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_keydownListener(e){if(this._last)if("Tab"===e.key&&this.focusTrap&&!e.defaultPrevented)this._cycleTab(e.shiftKey?-1:1),e.preventDefault();else if("Escape"===e.key||"Esc"===e.key){var t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),Object(a.a)(this,()=>{this.focusTrap&&!this.contains(document._activeElement||document.activeElement)&&this._cycleTab(0,0);var e=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(e)}),this.modeless||this._addGlobalListeners()):t&&(this._animatedClosing(),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){var e=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&e&&"none"!=e}_enqueueAnimation(e,t){var i=`__${e}Handler`,r=e=>{e&&e.target!==this||(t(),this.removeEventListener("animationend",r),delete this[i])};this[i]=r,this.addEventListener("animationend",r)}_flushAnimation(e){var t=`__${e}Handler`;"function"==typeof this[t]&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening","");var e=()=>{document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")};this._shouldAnimate()?this._enqueueAnimation("opening",e):e()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){if(this._exitModalState(),this.restoreFocusOnClose&&this.__restoreFocusNode){var e=this._getActiveElement();(e===document.body||this._deepContains(e))&&this.__restoreFocusNode.focus(),this.__restoreFocusNode=null}this.setAttribute("closing","");var t=()=>{document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),this.removeAttribute("closing")};this._shouldAnimate()?this._enqueueAnimation("closing",t):t()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(e=>e instanceof f&&!e.hasAttribute("closing")).sort((e,t)=>e.__zIndex-t.__zIndex||0)}get _last(){return this===f.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0),document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),f.__attachedInstances.forEach(e=>{e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0),document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);for(var e,t=f.__attachedInstances;(e=t.pop())&&(e===this||(e.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),e.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach(e=>{e.parentNode===this.content&&this.content.removeChild(e)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e,t){this._removeOldContent(),e._Templatizer||(e._Templatizer=Object(n.b)(e,this,{instanceProps:t,forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);var i,r,a=e._templateRoot||(e._templateRoot=e.getRootNode());if(a!==document){var o=window.ShadyCSS&&!window.ShadyCSS.nativeShadow;this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});var s=Array.from(a.querySelectorAll("style")).reduce((e,t)=>e+t.textContent,"");if(o){var l=window.ShadyCSS.ScopingShim._styleInfoForNode(a.host);l&&(s+=l._getStyleRules().parsedCssText,s+="}")}if(s=s.replace(/:host/g,":host-nomatch"))if(o){var d=(r=p[i=s]||m(i),document.createElement(r));d.id="content",d.setAttribute("part","content"),this.$.content.parentNode.replaceChild(d,this.$.content),d.className=this.$.content.className,this._originalContentPart=this.$.content,this.$.content=d}else{var h=document.createElement("style");h.textContent=s,this.$.content.shadowRoot.appendChild(h),this._contentNodes.unshift(h)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,i,r){e!==t?this.template=void 0:i!==r&&(this.renderer=void 0)}render(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_templateOrRendererChanged(e,t,i,r,n,a){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");var o=this._oldOwner!==i||this._oldModel!==r;this._oldModel=r,this._oldOwner=i;var s=this._oldInstanceProps!==n||this._oldTemplate!==e;this._oldInstanceProps=n,this._oldTemplate=e;var l=this._oldRenderer!==t;this._oldRenderer=t;var d=this._oldOpened!==a;if(this._oldOpened=a,e&&s)this._stampOverlayTemplate(e,n);else if(t&&(l||d||o)){if(this.content=this,l)for(;this.content.firstChild;)this.content.removeChild(this.content.firstChild);a&&this.render()}}_isFocused(e){return e&&e.getRootNode().activeElement===e}_focusedIndex(e){return(e=e||this._getFocusableElements()).indexOf(e.filter(this._isFocused).pop())}_cycleTab(e,t){var i=this._getFocusableElements();void 0===t&&(t=this._focusedIndex(i)),(t+=e)>=i.length?t=0:t<0&&(t=i.length-1),i[t].focus()}_getFocusableElements(){return class{static getTabbableNodes(e){var t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t}static isFocusable(e){return h.call(e,"input, select, textarea, button, object")?h.call(e,":not([disabled])"):h.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")}static isTabbable(e){return this.isFocusable(e)&&h.call(e,':not([tabindex="-1"])')&&this._isVisible(e)}static _normalizedTabIndex(e){if(this.isFocusable(e)){var t=e.getAttribute("tabindex")||0;return Number(t)}return-1}static _collectTabbableNodes(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;var i,r=e,n=this._normalizedTabIndex(r),a=n>0;if(n>=0&&t.push(r),i="slot"===r.localName?r.assignedNodes({flatten:!0}):(r.shadowRoot||r).children)for(var o=0;o<i.length;o++)a=this._collectTabbableNodes(i[o],t)||a;return a}static _isVisible(e){var t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&("hidden"!==(t=window.getComputedStyle(e)).visibility&&"none"!==t.display)}static _sortByTabIndex(e){var t=e.length;if(t<2)return e;var i=Math.ceil(t/2),r=this._sortByTabIndex(e.slice(0,i)),n=this._sortByTabIndex(e.slice(i));return this._mergeSortByTabIndex(r,n)}static _mergeSortByTabIndex(e,t){for(var i=[];e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?i.push(t.shift()):i.push(e.shift());return i.concat(e,t)}static _hasLowerTabOrder(e,t){var i=Math.max(e.tabIndex,0),r=Math.max(t.tabIndex,0);return 0===i||0===r?r>i:i>r}}.getTabbableNodes(this.$.overlay)}_getActiveElement(){var e=document._activeElement||document.activeElement;for(e&&e!==document.documentElement&&e instanceof Element!=!1||(e=document.body);e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;for(var t=e,i=e.ownerDocument;t&&t!==i&&t!==this;)t=t.parentNode||t.host;return t===this}bringToFront(){var e="",t=f.__attachedInstances.filter(e=>e!==this).pop();t&&(e=t.__zIndex+1);this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(f.is,f)},,function(e,t,i){"use strict";i(36),i(93),i(50),i(40);var r=document.createElement("template");r.innerHTML='<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r.content)},,function(e,t,i){"use strict";i.d(t,"c",(function(){return d})),i.d(t,"b",(function(){return h})),i.d(t,"a",(function(){return u}));var r=i(70),n=i(60);function a(e){return r.a.import(e)}function o(e){var t=e.body?e.body:e,i=Object(n.b)(t.textContent,e.baseURI),r=document.createElement("style");return r.textContent=i,r}function s(e){for(var t=e.trim().split(/\s+/),i=[],r=0;r<t.length;r++)i.push(...l(t[r]));return i}function l(e){var t=a(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){var i=[];i.push(...c(t));var r=t.querySelector("template");r&&i.push(...d(r,t.assetpath)),t._styles=i}return t._styles}function d(e,t){if(!e._styles){for(var i=[],r=e.content.querySelectorAll("style"),a=0;a<r.length;a++){var o=r[a],l=o.getAttribute("include");l&&i.push(...s(l).filter((function(e,t,i){return i.indexOf(e)===t}))),t&&(o.textContent=Object(n.b)(o.textContent,t)),i.push(o)}e._styles=i}return e._styles}function h(e){var t=a(e);return t?c(t):[]}function c(e){for(var t=[],i=e.querySelectorAll("link[rel=import][type~=css]"),r=0;r<i.length;r++){var n=i[r];if(n.import){var a=n.import,s=n.hasAttribute("shady-unscoped");if(s&&!a._unscopedStyle){var l=o(a);l.setAttribute("shady-unscoped",""),a._unscopedStyle=l}else a._style||(a._style=o(a));t.push(s?a._unscopedStyle:a._style)}}return t}function u(e){for(var t=e.trim().split(/\s+/),i="",r=0;r<t.length;r++)i+=p(t[r]);return i}function p(e){var t=a(e);if(t&&void 0===t._cssText){var i=m(t),r=t.querySelector("template");r&&(i+=function(e,t){for(var i="",r=d(e,t),n=0;n<r.length;n++){var a=r[n];a.parentNode&&a.parentNode.removeChild(a),i+=a.textContent}return i}(r,t.assetpath)),t._cssText=i||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function m(e){for(var t="",i=c(e),r=0;r<i.length;r++)t+=i[r].textContent;return t}},function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return d})),i.d(t,"b",(function(){return h}));var r=i(84),n=(i(72),"_applyShimCurrentVersion"),a="_applyShimNextVersion",o=Promise.resolve();function s(e){var t=r.a[e];t&&function(e){e[n]=e[n]||0,e._applyShimValidatingVersion=e._applyShimValidatingVersion||0,e[a]=(e[a]||0)+1}(t)}function l(e){return e[n]===e[a]}function d(e){return!l(e)&&e._applyShimValidatingVersion===e[a]}function h(e){e._applyShimValidatingVersion=e[a],e._validating||(e._validating=!0,o.then((function(){e[n]=e[a],e._validating=!1})))}},,,function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var r=i(11),n=i(65),a=i(17),o=i(82),s=i(21),l=i(6),d=i(52);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class h extends(Object(s.a)(Object(o.a)(Object(a.a)(Object(n.a)(r.a))))){static get template(){return l.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.4.0"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners(),window.ShadyDOM&&window.ShadyDOM.flush()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){Object(d.addListener)(this,"down",()=>!this.disabled&&this.setAttribute("active","")),Object(d.addListener)(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",e=>!this.disabled&&[13,32].indexOf(e.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(h.is,h)},,function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));i(28);for(var r=i(26),n=i(100),a=i(125),o={},s=HTMLElement.prototype;s;){for(var l=Object.getOwnPropertyNames(s),d=0;d<l.length;d++)o[l[d]]=!0;s=Object.getPrototypeOf(s)}var h=Object(r.a)(e=>{var t=Object(a.a)(e);return class extends t{static createPropertiesForAttributes(){for(var e=this.observedAttributes,t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Object(n.b)(e[t]))}static attributeNameForProperty(e){return Object(n.a)(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(var t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){this.hasAttribute(e)||this._valueToNodeAttribute(this,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){var i;switch(t){case Object:try{i=JSON.parse(e)}catch(t){i=e}break;case Array:try{i=JSON.parse(e)}catch(t){i=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+e)}break;case Date:i=isNaN(e)?String(e):Number(e),i=new Date(i);break;default:i=super._deserializeValue(e,t)}return i}_definePropertyAccessor(e,t){!function(e,t){if(!o[t]){var i=e[t];void 0!==i&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}})},function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));i(28);var r=i(26),n=i(15),a=i(9),o=n.c,s=Object(r.a)(e=>class extends e{static createProperties(e){var t=this.prototype;for(var i in e)i in t||t._createPropertyAccessor(i)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){var t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(var e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,i){var r=this.__data[e],n=this._shouldPropertyChange(e,t,r);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),n}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,o.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){var e=this.__data,t=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(e,t,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,i))}_shouldPropertiesChange(e,t,i){return Boolean(t)}_propertiesChanged(e,t,i){}_shouldPropertyChange(e,t,i){return i!==t&&(i==i||t==t)}attributeChangedCallback(e,t,i,r){t!==i&&this._attributeToProperty(e,i),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i,r)}_attributeToProperty(e,t,i){if(!this.__serializing){var r=this.__dataAttributes,n=r&&r[e]||e;this[n]=this._deserializeValue(t,i||this.constructor.typeForProperty(n))}}_propertyToAttribute(e,t,i){this.__serializing=!0,i=arguments.length<3?this[e]:i,this._valueToNodeAttribute(this,i,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,i){var r=this._serializeValue(t);void 0===r?e.removeAttribute(i):("class"!==i&&"name"!==i&&"slot"!==i||(e=Object(a.a)(e)),e.setAttribute(i,r))}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}})},function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i(28);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function r(e,t,i){return{index:e,removed:t,addedCount:i}}function n(e,t,i,n,a,s){var l,d=0,h=0,c=Math.min(i-t,s-a);if(0==t&&0==a&&(d=function(e,t,i){for(var r=0;r<i;r++)if(!o(e[r],t[r]))return r;return i}(e,n,c)),i==e.length&&s==n.length&&(h=function(e,t,i){var r=e.length,n=t.length,a=0;for(;a<i&&o(e[--r],t[--n]);)a++;return a}(e,n,c-d)),a+=d,s-=h,(i-=h)-(t+=d)==0&&s-a==0)return[];if(t==i){for(l=r(t,[],0);a<s;)l.removed.push(n[a++]);return[l]}if(a==s)return[r(t,[],i-t)];var u=function(e){for(var t=e.length-1,i=e[0].length-1,r=e[t][i],n=[];t>0||i>0;)if(0!=t)if(0!=i){var a=e[t-1][i-1],o=e[t-1][i],s=e[t][i-1],l=void 0;(l=o<s?o<a?o:a:s<a?s:a)==a?(a==r?n.push(0):(n.push(1),r=a),t--,i--):l==o?(n.push(3),t--,r=o):(n.push(2),i--,r=s)}else n.push(3),t--;else n.push(2),i--;return n.reverse(),n}(function(e,t,i,r,n,a){for(var s=a-n+1,l=i-t+1,d=new Array(s),h=0;h<s;h++)d[h]=new Array(l),d[h][0]=h;for(var c=0;c<l;c++)d[0][c]=c;for(var u=1;u<s;u++)for(var p=1;p<l;p++)if(o(e[t+p-1],r[n+u-1]))d[u][p]=d[u-1][p-1];else{var m=d[u-1][p]+1,f=d[u][p-1]+1;d[u][p]=m<f?m:f}return d}(e,t,i,n,a,s));l=void 0;for(var p=[],m=t,f=a,v=0;v<u.length;v++)switch(u[v]){case 0:l&&(p.push(l),l=void 0),m++,f++;break;case 1:l||(l=r(m,[],0)),l.addedCount++,m++,l.removed.push(n[f]),f++;break;case 2:l||(l=r(m,[],0)),l.addedCount++,m++;break;case 3:l||(l=r(m,[],0)),l.removed.push(n[f]),f++}return l&&p.push(l),p}function a(e,t){return n(e,0,e.length,t,0,t.length)}function o(e,t){return e===t}},function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var r=i(15),n=i(19),a=i(6).a`<dom-module id="vaadin-text-field-shared-styles">
  <template>
    <style>
      :host {
        display: inline-flex;
        outline: none;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
        /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
      }

      :host([hidden]) {
        display: none !important;
      }

      .vaadin-text-field-container,
      .vaadin-text-area-container {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        max-width: 100%;
        width: var(--vaadin-text-field-default-width, 12em);
      }

      [part="label"]:empty {
        display: none;
      }

      [part="input-field"] {
        display: flex;
        align-items: center;
        flex: auto;
      }

      .vaadin-text-field-container [part="input-field"] {
        flex-grow: 0;
      }

      /* Reset the native input styles */
      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea) {
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: none;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        min-width: 0;
        font: inherit;
        font-size: 1em;
        line-height: normal;
        color: inherit;
        background-color: transparent;
        /* Disable default invalid style in Firefox */
        box-shadow: none;
      }

      [part="input-field"] ::slotted(*) {
        flex: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        flex: auto;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      [part="input-field"] ::slotted(textarea) {
        resize: none;
      }

      [part="value"]::-ms-clear,
      [part="input-field"] ::slotted(input)::-ms-clear {
        display: none;
      }

      [part="clear-button"] {
        cursor: default;
      }

      [part="clear-button"]::before {
        content: "✕";
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(a.content);var o={default:["list","autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title","disabled","readonly","required"],accessible:["invalid"]},s={DEFAULT:"default",ACCESSIBLE:"accessible"},l=e=>class extends e{static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},i18n:{type:Object,value:()=>({clear:"Clear"})},label:{type:String,value:"",observer:"_labelChanged"},helperText:{type:String,value:"",observer:"_helperTextChanged"},maxlength:{type:Number},minlength:{type:Number},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflectToAttribute:!0},required:{type:Boolean,reflectToAttribute:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},hasValue:{type:Boolean,reflectToAttribute:!0},preventInvalidInput:{type:Boolean},_enabledCharPattern:String,_labelId:String,_helperTextId:String,_errorId:String,_inputId:String,_hasSlottedHelper:Boolean}}static get observers(){return["_stateChanged(disabled, readonly, clearButtonVisible, hasValue)","_hostPropsChanged("+o.default.join(", ")+")","_hostAccessiblePropsChanged("+o.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId, helperText, _helperTextId, _hasSlottedHelper)","_getActiveLabelId(label, _labelId, _inputId)","__observeOffsetHeight(errorMessage, invalid, label, helperText)","__enabledCharPatternChanged(_enabledCharPattern)"]}get focusElement(){if(this.shadowRoot){var e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);return e||this.shadowRoot.querySelector('[part="value"]')}}get inputElement(){return this.focusElement}get _slottedTagName(){return"input"}_createConstraintsObserver(){this._createMethodObserver("_constraintsChanged(required, minlength, maxlength, pattern)")}_onInput(e){if(this.__preventInput)return e.stopImmediatePropagation(),void(this.__preventInput=!1);if(this.preventInvalidInput){var t=this.inputElement;if(t.value.length>0&&!this.checkValidity())return t.value=this.value||"",this.setAttribute("input-prevented",""),void(this._inputDebouncer=n.a.debounce(this._inputDebouncer,r.d.after(200),()=>{this.removeAttribute("input-prevented")}))}e.__fromClearButton||(this.__userInput=!0),this.value=e.target.value,this.__userInput=!1}_stateChanged(e,t,i,r){!e&&!t&&i&&r?this.$.clearButton.removeAttribute("hidden"):this.$.clearButton.setAttribute("hidden",!0)}_onChange(e){if(!this._valueClearing){var t=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(t)}}_valueChanged(e,t){""===e&&void 0===t||(this.hasValue=""!==e&&null!=e,this.__userInput||(void 0!==e?this.inputElement.value=e:this.value=this.inputElement.value="",this.invalid&&this.validate()))}_labelChanged(e){this._setOrToggleAttribute("has-label",!!e,this)}_helperTextChanged(e){this._setOrToggleAttribute("has-helper",!!e,this)}_errorMessageChanged(e){this._setOrToggleAttribute("has-error-message",!!e,this)}_onHelperSlotChange(){var e=this.shadowRoot.querySelector('[name="helper"]').assignedNodes({flatten:!0});this._hasSlottedHelper=e.filter(e=>3!==e.nodeType).length,this._hasSlottedHelper?this.setAttribute("has-helper","slotted"):""!==this.helperText&&null!==this.helperText||this.removeAttribute("has-helper")}_onSlotChange(){var e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this.value&&(this.inputElement.value=this.value,this.validate()),e&&!this._slottedInput?(this._validateSlottedValue(e),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput=e):!e&&this._slottedInput&&(this._removeInputListeners(this._slottedInput),this._removeIEListeners(this._slottedInput),this._slottedInput=void 0),Object.keys(s).map(e=>s[e]).forEach(e=>this._propagateHostAttributes(o[e].map(e=>this[e]),e))}_hostPropsChanged(...e){this._propagateHostAttributes(e,s.DEFAULT)}_hostAccessiblePropsChanged(...e){this._propagateHostAttributes(e,s.ACCESSIBLE)}_validateSlottedValue(e){e.value!==this.value&&(console.warn("Please define value on the vaadin-text-field component!"),e.value="")}_propagateHostAttributes(e,t){var i=this.inputElement,r=o[t];t===s.ACCESSIBLE?r.forEach((t,r)=>{this._setOrToggleAttribute(t,e[r],i),this._setOrToggleAttribute("aria-"+t,!!e[r]&&"true",i)}):r.forEach((t,r)=>{this._setOrToggleAttribute(t,e[r],i)})}_setOrToggleAttribute(e,t,i){e&&i&&(t?i.setAttribute(e,"boolean"==typeof t?"":t):i.removeAttribute(e))}_constraintsChanged(e,t,i,r){this.invalid&&(e||t||i||r?this.validate():this.invalid=!1)}checkValidity(){return this.required||this.pattern||this.maxlength||this.minlength||this.__forceCheckValidity?this.inputElement.checkValidity():!this.invalid}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange),e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange),e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}ready(){super.ready(),this._createConstraintsObserver(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this);var e=this.shadowRoot.querySelector('[part="value"]');this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput&&(this._addIEListeners(this._slottedInput),this._addInputListeners(this._slottedInput)),this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener("slotchange",this._onSlotChange.bind(this)),this._onHelperSlotChange(),this.shadowRoot.querySelector('[name="helper"]').addEventListener("slotchange",this._onHelperSlotChange.bind(this)),window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles(),this.$.clearButton.addEventListener("mousedown",()=>this._valueClearing=!0),this.$.clearButton.addEventListener("mouseleave",()=>this._valueClearing=!1),this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this));var t=l._uniqueId=1+l._uniqueId||0;this._errorId=`${this.constructor.is}-error-${t}`,this._labelId=`${this.constructor.is}-label-${t}`,this._helperTextId=`${this.constructor.is}-helper-${t}`,this._inputId=`${this.constructor.is}-input-${t}`,this.shadowRoot.querySelector('[part="error-message"]').addEventListener("transitionend",()=>{this.__observeOffsetHeight()})}validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onBlur(){this.validate()}_onFocus(){this.autoselect&&(this.inputElement.select(),setTimeout(()=>{try{this.inputElement.setSelectionRange(0,9999)}catch(e){}}))}_onClearButtonClick(e){e.preventDefault(),this.inputElement.focus(),this.clear(),this._valueClearing=!1,navigator.userAgent.match(/Trident/)&&(this.__preventInput=!1);var t=new Event("input",{bubbles:!0,composed:!0});t.__fromClearButton=!0;var i=new Event("change",{bubbles:!this._slottedInput});i.__fromClearButton=!0,this.inputElement.dispatchEvent(t),this.inputElement.dispatchEvent(i)}_onKeyDown(e){if(27===e.keyCode&&this.clearButtonVisible){var t=!!this.value;this.clear(),t&&this.inputElement.dispatchEvent(new Event("change",{bubbles:!this._slottedInput}))}this._enabledCharPattern&&!this.__shouldAcceptKey(e)&&e.preventDefault()}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||1!==e.key.length||this.__enabledCharRegExp.test(e.key)}_onPaste(e){if(this._enabledCharPattern){var t=(e.clipboardData||window.clipboardData).getData("text");this.__enabledTextRegExp.test(t)||e.preventDefault()}}_onDrop(e){if(this._enabledCharPattern){var t=e.dataTransfer.getData("text");this.__enabledTextRegExp.test(t)||e.preventDefault()}}_onBeforeInput(e){this._enabledCharPattern&&e.data&&!this.__enabledTextRegExp.test(e.data)&&e.preventDefault()}__enabledCharPatternChanged(e){this.__enabledCharRegExp=e&&new RegExp("^"+e+"$"),this.__enabledTextRegExp=e&&new RegExp("^"+e+"*$")}_addIEListeners(e){navigator.userAgent.match(/Trident/)&&(this._shouldPreventInput=()=>{this.__preventInput=!0,requestAnimationFrame(()=>{this.__preventInput=!1})},e.addEventListener("focusin",this._shouldPreventInput),e.addEventListener("focusout",this._shouldPreventInput),this._createPropertyObserver("placeholder",this._shouldPreventInput))}_removeIEListeners(e){navigator.userAgent.match(/Trident/)&&(e.removeEventListener("focusin",this._shouldPreventInput),e.removeEventListener("focusout",this._shouldPreventInput))}_getActiveErrorId(e,t,i,r,n,a){var o=[];(r||a)&&o.push(n),t&&e&&o.push(i),this._setOrToggleAttribute("aria-describedby",o.join(" "),this.focusElement)}_getActiveLabelId(e,t,i){var r=i;e&&(r=`${t} ${i}`),this.focusElement.setAttribute("aria-labelledby",r)}_getErrorMessageAriaHidden(e,t,i){return(!(t&&e?i:void 0)).toString()}_dispatchIronResizeEventIfNeeded(e,t){var i="__previous"+e;void 0!==this[i]&&this[i]!==t&&this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0})),this[i]=t}__observeOffsetHeight(){this.__observeOffsetHeightDebouncer=n.a.debounce(this.__observeOffsetHeightDebouncer,r.a,()=>{this._dispatchIronResizeEventIfNeeded("Height",this.offsetHeight)})}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),window.ShadyCSS&&window.ShadyCSS.nativeCss||!/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(e)||this.updateStyles(),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root){this.root.querySelectorAll("*").forEach(e=>{e.style["-webkit-backface-visibility"]="visible",e.style["-webkit-backface-visibility"]=""})}}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}}},function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var r=e=>class extends e{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();var e=this.getAttribute("value");null!==e&&(this.value=e),this.addEventListener("focus",e=>this._setFocused(!0),!0),this.addEventListener("blur",e=>this._setFocused(!1),!0),this.addEventListener("mousedown",e=>{this._setActive(this._mousedown=!0);var t=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)}),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("keyup",e=>this._onKeyup(e))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this._setFocused(!1)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){e?(this.selected=!1,this.setAttribute("aria-disabled","true"),this.blur()):this.removeAttribute("aria-disabled")}_setFocused(e){e?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"),this._setActive(!1))}_setActive(e){e?this.setAttribute("active",""):this.removeAttribute("active")}_onKeydown(e){/^( |SpaceBar|Enter)$/.test(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this._setActive(!0))}_onKeyup(e){this.hasAttribute("active")&&(this._setActive(!1),this.click())}}},function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i(68);var r=i(58),n=i(6),a=Object(r.a)({_template:n.a`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},timeout:{type:Number,value:150},_text:{type:String,value:""}},created:function(){a.instance||(a.instance=this),document.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async((function(){this._text=e}),this.timeout)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});a.instance=null,a.requestAvailability=function(){a.instance||(a.instance=document.createElement("iron-a11y-announcer")),document.body?document.body.appendChild(a.instance):document.addEventListener("load",(function(){document.body.appendChild(a.instance)}))}},function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i(87),n=i(26),a=Object(n.a)(e=>{var t=Object(r.a)(e);return class extends t{static get observedAttributes(){return super.observedAttributes.concat("disable-upgrade")}attributeChangedCallback(e,t,i,r){"disable-upgrade"==e?!this.__dataEnabled&&null==i&&this.isConnected&&super.connectedCallback():super.attributeChangedCallback(e,t,i,r)}_initializeProperties(){}connectedCallback(){!this.__dataEnabled&&this.hasAttribute("disable-upgrade")||super.connectedCallback()}_enableProperties(){this.hasAttribute("disable-upgrade")||(this.__dataEnabled||super._initializeProperties(),super._enableProperties())}disconnectedCallback(){this.__dataEnabled&&super.disconnectedCallback()}}})},,,,,,,,function(e,t,i){"use strict";i(190),i(122)},,function(e,t,i){"use strict";i(36),i(32),i(40),i(46);var r=document.createElement("template");r.innerHTML='<dom-module id="lumo-required-field">\n  <template>\n    <style>\n      [part="label"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part="label"] {\n        padding-right: 1em;\n      }\n\n      [part="label"]::after {\n        content: var(--lumo-required-field-indicator, "•");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part="label"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part="label"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part="error-message"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn’t reserve space when there’s no error message */\n      [part="error-message"]:not(:empty)::before,\n      [part="error-message"]:not(:empty)::after {\n        content: "";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part="error-message"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n\n      /* RTL specific styles */\n\n      :host([dir="rtl"]) [part="label"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n      :host([required][dir="rtl"]) [part="label"] {\n        padding-left: 1em;\n        padding-right: 0;\n      }\n\n      :host([dir="rtl"]) [part="label"]::after {\n        right: auto;\n        left: 0;\n      }\n\n      :host([dir="rtl"]) [part="error-message"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r.content)},function(e,t,i){"use strict";i(32),i(40),i(145);var r=document.createElement("template");r.innerHTML='<dom-module id="lumo-menu-overlay-core">\n  <template>\n    <style>\n      :host([opening]),\n      :host([closing]) {\n        animation: 0.14s lumo-overlay-dummy-animation;\n      }\n\n      [part="overlay"] {\n        will-change: opacity, transform;\n      }\n\n      :host([opening]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-enter ease-out both;\n      }\n\n      @keyframes lumo-menu-overlay-enter {\n        0% {\n          opacity: 0;\n          transform: translateY(-4px);\n        }\n      }\n\n      :host([closing]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-exit both;\n      }\n\n      @keyframes lumo-menu-overlay-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-menu-overlay">\n  <template>\n    <style include="lumo-overlay lumo-menu-overlay-core">\n      /* Small viewport (bottom sheet) styles */\n      /* Use direct media queries instead of the state attributes (`[phone]` and `[fullscreen]`) provided by the elements */\n      @media (max-width: 420px), (max-height: 420px) {\n        :host {\n          top: 0 !important;\n          right: 0 !important;\n          bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;\n          left: 0 !important;\n          align-items: stretch !important;\n          justify-content: flex-end !important;\n        }\n\n        [part="overlay"] {\n          max-height: 50vh;\n          width: 100vw;\n          border-radius: 0;\n          box-shadow: var(--lumo-box-shadow-xl);\n        }\n\n        /* The content part scrolls instead of the overlay part, because of the gradient fade-out */\n        [part="content"] {\n          padding: 30px var(--lumo-space-m);\n          max-height: inherit;\n          box-sizing: border-box;\n          -webkit-overflow-scrolling: touch;\n          overflow: auto;\n          -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n          mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n        }\n\n        [part="backdrop"] {\n          display: block;\n        }\n\n        /* Animations */\n\n        :host([opening]) [part="overlay"] {\n          animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(.215, .61, .355, 1) both;\n        }\n\n        :host([closing]),\n        :host([closing]) [part="backdrop"] {\n          animation-delay: 0.14s;\n        }\n\n        :host([closing]) [part="overlay"] {\n          animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(.55, .055, .675, .19) both;\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-enter {\n        0% {\n          transform: translateY(150%);\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-exit {\n        100% {\n          transform: translateY(150%);\n        }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r.content)},,,function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var r=i(11),n=i(54),a=i(19),o=i(34),s=i(90),l=i(13),d=i(15),h=i(9),c=Object(s.b)(r.a);class u extends c{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(var e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;for(var e=Object(h.a)(Object(h.a)(this).parentNode),t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){var e=this.template=this.querySelector("template");if(!e){var t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}var i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=Object(n.b)(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(e,t){for(var i,r=this.__instances,n=0;n<r.length&&(i=r[n]);n++)i.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,i){if(Object(l.e)(this.as,t)){var r=e[this.itemsIndexAs];t==this.as&&(this.items[r]=i);var n=Object(l.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${r}`,t);this.notifyPath(n,i)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){var t=e,i=this.__getMethodHost();return function(){return i[t].apply(i,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){var e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths)for(var t=this.__observePaths,i=0;i<t.length;i++)0===e.indexOf(t[i])&&this.__debounceRender(this.__render,this.delay)}else this.__debounceRender(this.__render,this.delay)}__debounceRender(e,t=0){this.__renderDebouncer=a.a.debounce(this.__renderDebouncer,t>0?d.d.after(t):d.c,e.bind(this)),Object(o.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(o.b)()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){for(var e=this.items||[],t=new Array(e.length),i=0;i<e.length;i++)t[i]=i;this.__filterFn&&(t=t.filter((t,i,r)=>this.__filterFn(e[t],i,r))),this.__sortFn&&t.sort((t,i)=>this.__sortFn(e[t],e[i]));for(var r=this.__itemsIdxToInstIdx={},n=0,a=Math.min(t.length,this.__limit);n<a;n++){var o=this.__instances[n],s=t[n],l=e[s];r[s]=n,o?(o._setPendingProperty(this.as,l),o._setPendingProperty(this.indexAs,n),o._setPendingProperty(this.itemsIndexAs,s),o._flushProperties()):this.__insertInstance(l,n,s)}for(var d=this.__instances.length-1;d>=n;d--)this.__detachAndRemoveInstance(d)}__detachInstance(e){for(var t=this.__instances[e],i=Object(h.a)(t.root),r=0;r<t.children.length;r++){var n=t.children[r];i.appendChild(n)}return t}__attachInstance(e,t){var i=this.__instances[e];t.insertBefore(i.root,this)}__detachAndRemoveInstance(e){var t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,i){var r={};return r[this.as]=e,r[this.indexAs]=t,r[this.itemsIndexAs]=i,new this.__ctor(r)}__insertInstance(e,t,i){var r=this.__pool.pop();r?(r._setPendingProperty(this.as,e),r._setPendingProperty(this.indexAs,t),r._setPendingProperty(this.itemsIndexAs,i),r._flushProperties()):r=this.__stampInstance(e,t,i);var n=this.__instances[t+1],a=n?n.children[0]:this;return Object(h.a)(Object(h.a)(this).parentNode).insertBefore(r.root,a),this.__instances[t]=r,r}_showHideChildren(e){for(var t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){var i=e.slice(6),r=i.indexOf("."),n=r<0?i:i.substring(0,r);if(n==parseInt(n,10)){var a=r<0?"":i.substring(r+1);this.__handleObservedPaths(a);var o=this.__itemsIdxToInstIdx[n],s=this.__instances[o];if(s){var l=this.as+(a?"."+a:"");s._setPendingPropertyOrPath(l,t,!1,!0),s._flushProperties()}return!0}}itemForElement(e){var t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){var t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return Object(n.a)(this.template,e)}}customElements.define(u.is,u)},function(e,t,i){"use strict";i(36),i(32),i(40),i(46);var r=document.createElement("template");r.innerHTML='<dom-module id="lumo-overlay">\n  <template>\n    <style>\n      :host {\n        top: var(--lumo-space-m);\n        right: var(--lumo-space-m);\n        bottom: var(--lumo-space-m);\n        left: var(--lumo-space-m);\n        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n        /* stylelint-disable-next-line */\n        outline: 0px solid transparent;\n      }\n\n      [part="overlay"] {\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        border-radius: var(--lumo-border-radius-m);\n        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n        color: var(--lumo-body-text-color);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 400;\n        line-height: var(--lumo-line-height-m);\n        letter-spacing: 0;\n        text-transform: none;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      [part="content"] {\n        padding: var(--lumo-space-xs);\n      }\n\n      [part="backdrop"] {\n        background-color: var(--lumo-shade-20pct);\n        animation: 0.2s lumo-overlay-backdrop-enter both;\n        will-change: opacity;\n      }\n\n      @keyframes lumo-overlay-backdrop-enter {\n        0% {\n          opacity: 0;\n        }\n      }\n\n      :host([closing]) [part="backdrop"] {\n        animation: 0.2s lumo-overlay-backdrop-exit both;\n      }\n\n      @keyframes lumo-overlay-backdrop-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes lumo-overlay-dummy-animation {\n        0% { opacity: 1; }\n        100% { opacity: 1; }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r.content)},,,,function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var r,n=null,a=window.HTMLImports&&window.HTMLImports.whenReady||null;function o(e){requestAnimationFrame((function(){a?a(e):(n||(n=new Promise(e=>{r=e}),"complete"===document.readyState?r():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&r()})),n.then((function(){e&&e()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var s="__shadyCSSCachedStyle",l=null,d=null;class h{constructor(){this.customStyles=[],this.enqueued=!1,o(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&d&&(this.enqueued=!0,o(d))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){return e[s]?e[s]:e.getStyle?e.getStyle():e}processStyles(){for(var e=this.customStyles,t=0;t<e.length;t++){var i=e[t];if(!i[s]){var r=this.getStyleForCustomStyle(i);if(r){var n=r.__appliedElement||r;l&&l(n),i[s]=n}}}return e}}h.prototype.addCustomStyle=h.prototype.addCustomStyle,h.prototype.getStyleForCustomStyle=h.prototype.getStyleForCustomStyle,h.prototype.processStyles=h.prototype.processStyles,Object.defineProperties(h.prototype,{transformCallback:{get:()=>l,set(e){l=e}},validateCallback:{get:()=>d,set(e){var t=!1;d||(t=!0),d=e,t&&this.enqueueDocumentValidation()}}})},,function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var r=i(54),n={templatize(e,t){this._templatizerTemplate=e,this.ctor=Object(r.b)(e,this,{mutableData:Boolean(t),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(e){return new this.ctor(e)},modelForElement(e){return Object(r.a)(this._templatizerTemplate,e)}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/},function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r,n=i(90);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/r=n.a._mutablePropertyChange;var a={properties:{mutableData:Boolean},_shouldPropertyChange(e,t,i){return r(this,e,t,i,this.mutableData)}}},function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var r=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,n=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function a(e,t){if("function"==typeof e){var i=r.exec(e.toString());if(i)try{e=new Function(i[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}}window.Vaadin=window.Vaadin||{};var o=function(e,t){if(window.Vaadin.developmentMode)return a(e,t)};void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(n?!function(){if(n){if(Object.keys(n).map(e=>n[e]).filter(e=>e.productionMode).length>0)return!0}return!1}():!a((function(){return!0})))}catch(e){return!1}}())},function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));i(68);var r=i(58);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class n{constructor(e){n[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return n.types[e]&&n.types[e][t]}set value(e){var t=this.type,i=this.key;t&&i&&(t=n.types[t]=n.types[t]||{},null==e?delete t[i]:t[i]=e)}get list(){if(this.type){var e=n.types[this.type];return e?Object.keys(e).map((function(e){return a[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}n[" "]=function(){},n.types={};var a=n.types;Object(r.a)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,i){var r=new n({type:e,key:t});return void 0!==i&&i!==r.value?r.value=i:this.value!==r.value&&(this.value=r.value),r},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new n({type:this.type,key:e}).value}})},,,,,function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var r=e=>class extends e{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"theme"===e&&this._setTheme(i)}}},function(e,t,i){"use strict";i(68);var r=i(58);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(r.a)({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var e=this.query;e&&(this.full||"("===e[0]||(e="("+e+")"),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))},queryHandler:function(e){this._setQueryMatches(e.matches)}})},,,function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var r=i(11),n=i(42),a=i(76),o=i(17),s=i(21),l=i(6),d=i(48),h=i(77);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class c extends(Object(s.a)(Object(o.a)(Object(h.b)([a.a],r.a)))){static get template(){return l.a`
    <style>
      :host {
        display: block;
        max-width: 100%;
        animation: 1ms vaadin-form-layout-appear;
        /* CSS API for host */
        --vaadin-form-layout-column-spacing: 2em; /* (default) */
        align-self: stretch;
      }

      @keyframes vaadin-form-layout-appear {
        to {
          opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
        }
      }

      :host([hidden]) {
        display: none !important;
      }

      #layout {
        display: flex;

        align-items: baseline; /* default \`stretch\` is not appropriate */

        flex-wrap: wrap; /* the items should wrap */
      }

      #layout ::slotted(*) {
        /* Items should neither grow nor shrink. */
        flex-grow: 0;
        flex-shrink: 0;

        /* Margins make spacing between the columns */
        margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
      }

      #layout ::slotted(br) {
        display: none;
      }
    </style>
    <div id="layout">
      <slot id="slot"></slot>
    </div>
`}static get is(){return"vaadin-form-layout"}static get version(){return"2.3.0"}static get properties(){return{responsiveSteps:{type:Array,value:function(){return[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]},observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateStyles(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.root.appendChild(this._styleElement),this._styleElement.textContent=" ",window.ShadyDOM&&window.ShadyDOM.flush(),super.ready(),this.addEventListener("iron-resize",this._selectResponsiveStep),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),Object(d.b)(this,this._selectResponsiveStep),Object(d.b)(this,this.updateStyles),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){var e={attributes:!0};this.__mutationObserver=new MutationObserver(e=>{e.forEach(e=>{"attributes"!==e.type||"colspan"!==e.attributeName&&"hidden"!==e.attributeName||this._invokeUpdateStyles()})}),this.__childObserver=new n.a(this,t=>{var i=this._getObservableNodes(t.addedNodes),r=this._getObservableNodes(t.removedNodes);i.forEach(t=>{this.__mutationObserver.observe(t,e)}),(i.length>0||r.length>0)&&this._invokeUpdateStyles()})}_getObservableNodes(e){var t=["template","style","dom-repeat","dom-if"];return Array.from(e).filter(e=>e.nodeType===Node.ELEMENT_NODE&&-1===t.indexOf(e.localName.toLowerCase()))}_naturalNumberOrOne(e){return"number"==typeof e&&e>=1&&e<1/0?Math.floor(e):1}_isValidCSSLength(e){return"inherit"!==e&&"normal"!==e&&(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${e}; }`,!this._styleElement.sheet||["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0)}_responsiveStepsChanged(e,t){try{if(!Array.isArray(e))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(e.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');e.forEach(e=>{if(this._naturalNumberOrOne(e.columns)!==e.columns)throw new Error(`Invalid 'columns' value of ${e.columns}, a natural number is required.`);if(void 0!==e.minWidth&&!this._isValidCSSLength(e.minWidth))throw new Error(`Invalid 'minWidth' value of ${e.minWidth}, a valid CSS length required.`);if(void 0!==e.labelsPosition&&-1===["aside","top"].indexOf(e.labelsPosition))throw new Error(`Invalid 'labelsPosition' value of ${e.labelsPosition}, 'aside' or 'top' string is required.`)})}catch(i){t&&t!==e?(console.warn(i.message+" Using previously set 'responsiveSteps' instead."),this.responsiveSteps=t):(console.warn(i.message+" Using default 'responsiveSteps' instead."),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(e){0===e.animationName.indexOf("vaadin-form-layout-appear")&&this._selectResponsiveStep()}_selectResponsiveStep(){var e;this.responsiveSteps.forEach(t=>{this.$.layout.style.setProperty("background-position",t.minWidth),parseFloat(getComputedStyle(this.$.layout).getPropertyValue("background-position"))<=this.offsetWidth&&(e=t)}),this.$.layout.style.removeProperty("background-position"),e&&(this._columnCount=e.columns,this._labelsOnTop="top"===e.labelsPosition),/\b(Edge|Trident)\//.test(navigator.userAgent)&&this.offsetWidth!==this._lastOffsetWidth&&(this.updateStyles(),this._lastOffsetWidth=this.offsetWidth)}_invokeUpdateStyles(){this.updateStyles()}updateStyles(e){super.updateStyles(e);var t=window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-form-layout-column-spacing"):getComputedStyle(this).getPropertyValue("--vaadin-form-layout-column-spacing"),i=getComputedStyle(this).direction,r="margin-"+("ltr"===i?"left":"right"),n="margin-"+("ltr"===i?"right":"left"),a=this.offsetWidth;window.ShadyDOM&&window.ShadyDOM.flush();var o=0;Array.from(this.children).filter(e=>"br"===e.localName||"none"!==getComputedStyle(e).display).forEach((e,i,s)=>{if("br"!==e.localName){var l;l=this._naturalNumberOrOne(parseFloat(e.getAttribute("colspan")));var d=(l=Math.min(l,this._columnCount))/this._columnCount;e.style.width=`calc(${99.9*d}% - ${1-d} * ${t})`,o+l>this._columnCount&&(o=0),0===o?e.style.setProperty(r,"0px"):e.style.removeProperty(r);var h=i+1,c=h<s.length&&"br"===s[h].localName;if(o+l===this._columnCount)e.style.setProperty(n,"0px");else if(c){var u=(this._columnCount-o-l)/this._columnCount;e.style.setProperty(n,`calc(${u*a}px + ${u} * ${t})`)}else e.style.removeProperty(n);o=(o+l)%this._columnCount,"vaadin-form-item"===e.localName&&(this._labelsOnTop?e.setAttribute("label-position","top"):e.removeAttribute("label-position"))}else o=0})}}customElements.define(c.is,c)},,function(e,t,i){"use strict";i.d(t,"a",(function(){return k}));var r=i(11),n=i(65),a=(i(160),i(17)),o=i(82),s=i(114),l=i(130);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class d extends(Object(l.a)(s.a)){static get is(){return"vaadin-date-picker-overlay"}}customElements.define(d.is,d);var h=i(106),c=i(129),u=(i(122),i(80)),p=(i(144),i(44)),m=i(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class f extends(Object(a.a)(Object(n.a)(r.a))){static get template(){return m.a`
    <style>
      :host {
        display: block;
      }

      [part="weekdays"],
      #days {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
      }

      #days-container,
      #weekdays-container {
        display: flex;
      }

      [part="week-numbers"] {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-shrink: 0;
      }

      [part="week-numbers"][hidden],
      [part="weekday"][hidden] {
        display: none;
      }

      [part="weekday"],
      [part="date"] {
        /* Would use calc(100% / 7) but it doesn't work nice on IE */
        width: 14.285714286%;
      }

      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: 12.5%;
        flex-shrink: 0;
      }
    </style>

    <div part="month-header" role="heading">[[_getTitle(month, i18n.monthNames)]]</div>
    <div id="monthGrid" on-tap="_handleTap" on-touchend="_preventDefault" on-touchstart="_onMonthGridTouchStart">
      <div id="weekdays-container">
        <div hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]" part="weekday"></div>
        <div part="weekdays">
          <template is="dom-repeat" items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]">
            <div part="weekday" role="heading" aria-label\$="[[item.weekDay]]">[[item.weekDayShort]]</div>
          </template>
        </div>
      </div>
      <div id="days-container">
        <div part="week-numbers" hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]">
          <template is="dom-repeat" items="[[_getWeekNumbers(_days)]]">
            <div part="week-number" role="heading" aria-label\$="[[i18n.week]] [[item]]">[[item]]</div>
          </template>
        </div>
        <div id="days">
          <template is="dom-repeat" items="[[_days]]">
            <div part="date" today\$="[[_isToday(item)]]" selected\$="[[_dateEquals(item, selectedDate)]]" focused\$="[[_dateEquals(item, focusedDate)]]" date="[[item]]" disabled\$="[[!_dateAllowed(item, minDate, maxDate)]]" role\$="[[_getRole(item)]]" aria-label\$="[[_getAriaLabel(item)]]" aria-disabled\$="[[_getAriaDisabled(item, minDate, maxDate)]]">[[_getDate(item)]]</div>
          </template>
        </div>
      </div>
    </div>
`}static get is(){return"vaadin-month-calendar"}static get properties(){return{month:{type:Date,value:new Date},selectedDate:{type:Date,notify:!0},focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Date,value:null},maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)"]}_dateEquals(e,t){return p.a._dateEquals(e,t)}_dateAllowed(e,t,i){return p.a._dateAllowed(e,t,i)}_isDisabled(e,t,i){var r=new Date(0,0);r.setFullYear(e.getFullYear()),r.setMonth(e.getMonth()),r.setDate(1);var n=new Date(0,0);return n.setFullYear(e.getFullYear()),n.setMonth(e.getMonth()+1),n.setDate(0),!(t&&i&&t.getMonth()===i.getMonth()&&t.getMonth()===e.getMonth()&&i.getDate()-t.getDate()>=0)&&(!this._dateAllowed(r,t,i)&&!this._dateAllowed(n,t,i))}_getTitle(e,t){if(void 0!==e&&void 0!==t)return this.i18n.formatTitle(t[e.getMonth()],e.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>this._notTapping=!0,300)}_dateAdd(e,t){e.setDate(e.getDate()+t)}_applyFirstDayOfWeek(e,t){if(void 0!==e&&void 0!==t)return e.slice(t).concat(e.slice(0,t))}_getWeekDayNames(e,t,i,r){if(void 0!==e&&void 0!==t&&void 0!==i&&void 0!==r)return e=this._applyFirstDayOfWeek(e,r),t=this._applyFirstDayOfWeek(t,r),e=e.map((e,i)=>({weekDay:e,weekDayShort:t[i]}))}_getDate(e){return e?e.getDate():""}_showWeekNumbersChanged(e,t){e&&1===t?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}_showWeekSeparator(e,t){return e&&1===t}_isToday(e){return this._dateEquals(new Date,e)}_getDays(e,t){if(void 0!==e&&void 0!==t){var i=new Date(0,0);for(i.setFullYear(e.getFullYear()),i.setMonth(e.getMonth()),i.setDate(1);i.getDay()!==t;)this._dateAdd(i,-1);for(var r=[],n=i.getMonth(),a=e.getMonth();i.getMonth()===a||i.getMonth()===n;)r.push(i.getMonth()===a?new Date(i.getTime()):null),this._dateAdd(i,1);return r}}_getWeekNumber(e,t){if(void 0!==e&&void 0!==t)return e||(e=t.reduce((e,t)=>!e&&t?t:e)),p.a._getISOWeekNumber(e)}_getWeekNumbers(e){return e.map(t=>this._getWeekNumber(t,e)).filter((e,t,i)=>i.indexOf(e)===t)}_handleTap(e){this.ignoreTaps||this._notTapping||!e.target.date||e.target.hasAttribute("disabled")||(this.selectedDate=e.target.date,this.dispatchEvent(new CustomEvent("date-tap",{bubbles:!0,composed:!0})))}_preventDefault(e){e.preventDefault()}_getRole(e){return e?"button":"presentation"}_getAriaLabel(e){if(!e)return"";var t=this._getDate(e)+" "+this.i18n.monthNames[e.getMonth()]+" "+e.getFullYear()+", "+this.i18n.weekdays[e.getDay()];return this._isToday(e)&&(t+=", "+this.i18n.today),t}_getAriaDisabled(e,t,i){if(void 0!==e&&void 0!==t&&void 0!==i)return this._dateAllowed(e,t,i)?"false":"true"}}customElements.define(f.is,f);var v=i(15),_=i(19),g=i(34),b=i(54),y=i(48);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class w extends r.a{static get template(){return m.a`
    <style>
      :host {
        display: block;
        overflow: hidden;
        height: 500px;
      }

      #scroller {
        position: relative;
        height: 100%;
        overflow: auto;
        outline: none;
        margin-right: -40px;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        overflow-x: hidden;
      }

      #scroller.notouchscroll {
        -webkit-overflow-scrolling: auto;
      }

      #scroller::-webkit-scrollbar {
        display: none;
      }

      .buffer {
        position: absolute;
        width: var(--vaadin-infinite-scroller-buffer-width, 100%);
        box-sizing: border-box;
        padding-right: 40px;
        top: var(--vaadin-infinite-scroller-buffer-offset, 0);
        animation: fadein 0.2s;
      }

      @keyframes fadein {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    </style>

    <div id="scroller" on-scroll="_scroll">
      <div class="buffer"></div>
      <div class="buffer"></div>
      <div id="fullHeight"></div>
    </div>
`}static get is(){return"vaadin-infinite-scroller"}static get properties(){return{bufferSize:{type:Number,value:20},_initialScroll:{value:5e5},_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}ready(){super.ready(),this._buffers=Array.prototype.slice.call(this.root.querySelectorAll(".buffer")),this.$.fullHeight.style.height=2*this._initialScroll+"px";var e=this.querySelector("template");this._TemplateClass=Object(b.b)(e,this,{forwardHostProp:function(e,t){"index"!==e&&this._buffers.forEach(i=>{[].forEach.call(i.children,i=>{i._itemWrapper.instance[e]=t})})}}),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&(this.$.scroller.tabIndex=-1)}_activated(e){e&&!this._initialized&&(this._createPool(),this._initialized=!0)}_finishInit(){this._initDone||(this._buffers.forEach(e=>{[].forEach.call(e.children,e=>this._ensureStampedInstance(e._itemWrapper))},this),this._buffers[0].translateY||this._reset(),this._initDone=!0)}_translateBuffer(e){var t=e?1:0;this._buffers[t].translateY=this._buffers[t?0:1].translateY+this._bufferHeight*(t?-1:1),this._buffers[t].style.transform="translate3d(0, "+this._buffers[t].translateY+"px, 0)",this._buffers[t].updated=!1,this._buffers.reverse()}_scroll(){if(!this._scrollDisabled){var e=this.$.scroller.scrollTop;(e<this._bufferHeight||e>2*this._initialScroll-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());var t=this.root.querySelector(".buffer").offsetTop,i=e>this._buffers[1].translateY+this.itemHeight+t,r=e<this._buffers[0].translateY+this.itemHeight+t;(i||r)&&(this._translateBuffer(r),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=_.a.debounce(this._debouncerScrollFinish,v.d.after(200),()=>{var e=this.$.scroller.getBoundingClientRect();this._isVisible(this._buffers[0],e)||this._isVisible(this._buffers[1],e)||(this.position=this.position)})}}set position(e){this._preventScrollEvent=!0,e>this._firstIndex&&e<this._firstIndex+2*this.bufferSize?this.$.scroller.scrollTop=this.itemHeight*(e-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~e,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=e%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}get itemHeight(){if(!this._itemHeightVal){window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles();var e=window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-infinite-scroller-item-height"):getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height");this.$.fullHeight.style.setProperty("background-position",e);var t=getComputedStyle(this.$.fullHeight).getPropertyValue("background-position");this.$.fullHeight.style.removeProperty("background-position"),this._itemHeightVal=parseFloat(t)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(e=>{e.style.transform="translate3d(0, "+e.translateY+"px, 0)"}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=_.a.debounce(this._debouncerUpdateClones,v.d.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){var e=this,t=this.getBoundingClientRect();this._buffers.forEach(i=>{for(var r=function(){var r=document.createElement("div");r.style.height=e.itemHeight+"px",r.instance={};var n="vaadin-infinite-scroller-item-content-"+(w._contentIndex=w._contentIndex+1||0),a=document.createElement("slot");a.setAttribute("name",n),a._itemWrapper=r,i.appendChild(a),r.setAttribute("slot",n),e.appendChild(r),Object(g.b)(),setTimeout(()=>{e._isVisible(r,t)&&e._ensureStampedInstance(r)},1)},n=0;n<this.bufferSize;n++)r()},this),setTimeout(()=>{Object(y.a)(this,this._finishInit.bind(this))},1)}_ensureStampedInstance(e){if(!e.firstElementChild){var t=e.instance;e.instance=new this._TemplateClass({}),e.appendChild(e.instance.root),Object.keys(t).forEach(i=>{e.instance.set(i,t[i])})}}_updateClones(e){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;var t=e?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((i,r)=>{if(!i.updated){var n=this._firstIndex+this.bufferSize*r;[].forEach.call(i.children,(i,r)=>{var a=i._itemWrapper;e&&!this._isVisible(a,t)||(a.instance.index=n+r)}),i.updated=!0}},this)}_isVisible(e,t){var i=e.getBoundingClientRect();return i.bottom>t.top&&i.top<t.bottom}}customElements.define(w.is,w);i(62);var A=document.createElement("template");A.innerHTML='<dom-module id="vaadin-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n\n      :host([right-aligned]) {\n        align-items: flex-end;\n      }\n\n      :host([dir="rtl"]) {\n        align-items: flex-end;\n      }\n\n      :host([dir="rtl"][right-aligned]) {\n        align-items: flex-start;\n      }\n\n      [part="overlay"] {\n        display: flex;\n        flex: auto;\n      }\n\n      [part~="content"] {\n        flex: auto;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(A.content);var x=i(52);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class C extends(Object(a.a)(Object(u.a)(Object(n.a)(r.a)))){static get template(){return m.a`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        outline: none;
        background: #fff;
      }

      [part="overlay-header"] {
        display: flex;
        flex-shrink: 0;
        flex-wrap: nowrap;
        align-items: center;
      }

      :host(:not([fullscreen])) [part="overlay-header"] {
        display: none;
      }

      [part="label"] {
        flex-grow: 1;
      }

      [part="clear-button"]:not([showclear]) {
        display: none;
      }

      [part="years-toggle-button"] {
        display: flex;
      }

      [part="years-toggle-button"][desktop] {
        display: none;
      }

      :host(:not([years-visible])) [part="years-toggle-button"]::before {
        transform: rotate(180deg);
      }

      #scrollers {
        display: flex;
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
      }

      [part="months"],
      [part="years"] {
        height: 100%;
      }

      [part="months"] {
        --vaadin-infinite-scroller-item-height: 270px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      #scrollers[desktop] [part="months"] {
        right: 50px;
        transform: none !important;
      }

      [part="years"] {
        --vaadin-infinite-scroller-item-height: 80px;
        width: 50px;
        position: absolute;
        right: 0;
        transform: translateX(100%);
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        /* Center the year scroller position. */
        --vaadin-infinite-scroller-buffer-offset: 50%;
      }

      #scrollers[desktop] [part="years"] {
        position: absolute;
        transform: none !important;
      }

      [part="years"]::before {
        content: '';
        display: block;
        background: transparent;
        width: 0;
        height: 0;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-width: 6px;
        border-style: solid;
        border-color: transparent;
        border-left-color: #000;
      }

      :host(.animate) [part="months"],
      :host(.animate) [part="years"] {
        transition: all 200ms;
      }

      [part="toolbar"] {
        display: flex;
        justify-content: space-between;
        z-index: 2;
        flex-shrink: 0;
      }

      [part~="overlay-header"]:not([desktop]) {
        padding-bottom: 40px;
      }

      [part~="years-toggle-button"] {
        position: absolute;
        top: auto;
        right: 8px;
        bottom: 0;
        z-index: 1;
        padding: 8px;
      }

      #announcer {
        display: inline-block;
        position: fixed;
        clip: rect(0, 0, 0, 0);
        clip-path: inset(100%);
      }
    </style>

    <div id="announcer" role="alert" aria-live="polite">
      [[i18n.calendar]]
    </div>

    <div part="overlay-header" on-touchend="_preventDefault" desktop\$="[[_desktopMode]]" aria-hidden="true">
      <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
      <div part="clear-button" on-tap="_clear" showclear\$="[[_showClear(selectedDate)]]"></div>
      <div part="toggle-button" on-tap="_cancel"></div>

      <div part="years-toggle-button" desktop\$="[[_desktopMode]]" on-tap="_toggleYearScroller" aria-hidden="true">
        [[_yearAfterXMonths(_visibleMonthIndex)]]
      </div>
    </div>

    <div id="scrollers" desktop\$="[[_desktopMode]]" on-track="_track">
      <vaadin-infinite-scroller id="monthScroller" on-custom-scroll="_onMonthScroll" on-touchstart="_onMonthScrollTouchStart" buffer-size="3" active="[[initialPosition]]" part="months">
        <template>
          <vaadin-month-calendar i18n="[[i18n]]" month="[[_dateAfterXMonths(index)]]" selected-date="{{selectedDate}}" focused-date="[[focusedDate]]" ignore-taps="[[_ignoreTaps]]" show-week-numbers="[[showWeekNumbers]]" min-date="[[minDate]]" max-date="[[maxDate]]" focused\$="[[_focused]]" part="month" theme\$="[[theme]]">
          </vaadin-month-calendar>
        </template>
      </vaadin-infinite-scroller>
      <vaadin-infinite-scroller id="yearScroller" on-tap="_onYearTap" on-custom-scroll="_onYearScroll" on-touchstart="_onYearScrollTouchStart" buffer-size="12" active="[[initialPosition]]" part="years">
        <template>
          <div part="year-number" role="button" current\$="[[_isCurrentYear(index)]]" selected\$="[[_isSelectedYear(index, selectedDate)]]">
            [[_yearAfterXYears(index)]]
          </div>
          <div part="year-separator" aria-hidden="true"></div>
        </template>
      </vaadin-infinite-scroller>
    </div>

    <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
      <vaadin-button id="todayButton" theme="tertiary" part="today-button" disabled="[[!_isTodayAllowed(minDate, maxDate)]]" on-tap="_onTodayTap">
        [[i18n.today]]
      </vaadin-button>
      <vaadin-button id="cancelButton" theme="tertiary" part="cancel-button" on-tap="_cancel">
        [[i18n.cancel]]
      </vaadin-button>
    </div>

    <iron-media-query query="(min-width: 375px)" query-matches="{{_desktopMode}}"></iron-media-query>
`}static get is(){return"vaadin-date-picker-overlay-content"}static get properties(){return{selectedDate:{type:Date,notify:!0},focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:Boolean,_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:Date,maxDate:Date,_focused:Boolean,label:String}}get __isRTL(){return"rtl"===this.getAttribute("dir")}ready(){super.ready(),this.setAttribute("tabindex",0),this.addEventListener("keydown",this._onKeydown.bind(this)),Object(x.addListener)(this,"tap",this._stopPropagation),this.addEventListener("focus",this._onOverlayFocus.bind(this)),this.addEventListener("blur",this._onOverlayBlur.bind(this))}connectedCallback(){super.connectedCallback(),this._closeYearScroller(),this._toggleAnimateClass(!0),Object(x.setTouchAction)(this.$.scrollers,"pan-y"),c.a.requestAvailability()}announceFocusedDate(){var e=this._currentlyFocusedDate(),t=[];p.a._dateEquals(e,new Date)&&t.push(this.i18n.today),t=t.concat([this.i18n.weekdays[e.getDay()],e.getDate(),this.i18n.monthNames[e.getMonth()],e.getFullYear()]),this.showWeekNumbers&&1===this.i18n.firstDayOfWeek&&(t.push(this.i18n.week),t.push(p.a._getISOWeekNumber(e))),this.dispatchEvent(new CustomEvent("iron-announce",{bubbles:!0,composed:!0,detail:{text:t.join(" ")}}))}focusCancel(){this.$.cancelButton.focus()}scrollToDate(e,t){this._scrollToPosition(this._differenceInMonths(e,this._originDate),t)}_focusedDateChanged(e){this.revealDate(e)}_isCurrentYear(e){return 0===e}_isSelectedYear(e,t){if(t)return t.getFullYear()===this._originDate.getFullYear()+e}revealDate(e){if(e){var t=this._differenceInMonths(e,this._originDate),i=this.$.monthScroller.position>t,r=this.$.monthScroller.clientHeight/this.$.monthScroller.itemHeight,n=this.$.monthScroller.position+r-1<t;i?this._scrollToPosition(t,!0):n&&this._scrollToPosition(t-r+1,!0)}}_onOverlayFocus(){this._focused=!0}_onOverlayBlur(){this._focused=!1}_initialPositionChanged(e){this.scrollToDate(e)}_repositionYearScroller(){this._visibleMonthIndex=Math.floor(this.$.monthScroller.position),this.$.yearScroller.position=(this.$.monthScroller.position+this._originDate.getMonth())/12}_repositionMonthScroller(){this.$.monthScroller.position=12*this.$.yearScroller.position-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this.$.monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>this._notTapping=!0,300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=_.a.debounce(this._debouncer,v.d.after(300),()=>this._ignoreTaps=!1)}_formatDisplayed(e,t,i){return e?t(p.a._extractDateParts(e)):i}_onTodayTap(){var e=new Date;Math.abs(this.$.monthScroller.position-this._differenceInMonths(e,this._originDate))<.001?(this.selectedDate=e,this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_showClear(e){return!!e}_onYearTap(e){if(!this._ignoreTaps&&!this._notTapping){var t=(e.detail.y-(this.$.yearScroller.getBoundingClientRect().top+this.$.yearScroller.clientHeight/2))/this.$.yearScroller.itemHeight;this._scrollToPosition(this.$.monthScroller.position+12*t,!0)}}_scrollToPosition(e,t){if(void 0===this._targetPosition){if(!t)return this.$.monthScroller.position=e,this._targetPosition=void 0,void this._repositionYearScroller();this._targetPosition=e;var i=t?300:0,r=0,n=this.$.monthScroller.position,a=e=>{var t,o,s,l=e-(r=r||e);if(l<i){var d=(t=l,o=n,s=this._targetPosition-n,(t/=i/2)<1?s/2*t*t+o:-s/2*(--t*(t-2)-1)+o);this.$.monthScroller.position=d,window.requestAnimationFrame(a)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:n}})),this.$.monthScroller.position=this._targetPosition,this._targetPosition=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(a)}else this._targetPosition=e}_limit(e,t){return Math.min(t.max,Math.max(t.min,e))}_handleTrack(e){if(!(Math.abs(e.detail.dx)<10||Math.abs(e.detail.ddy)>10)){Math.abs(e.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);var t=this._translateX+e.detail.ddx;this._translateX=this._limit(t,{min:0,max:this._yearScrollerWidth})}}_track(e){if(!this._desktopMode)switch(e.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(e);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller()}}_toggleAnimateClass(e){e?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(e){this._desktopMode||(this.$.monthScroller.style.transform="translateX("+(e-this._yearScrollerWidth)+"px)",this.$.yearScroller.style.transform="translateX("+e+"px)")}_yearAfterXYears(e){var t=new Date(this._originDate);return t.setFullYear(parseInt(e)+this._originDate.getFullYear()),t.getFullYear()}_yearAfterXMonths(e){return this._dateAfterXMonths(e).getFullYear()}_dateAfterXMonths(e){var t=new Date(this._originDate);return t.setDate(1),t.setMonth(parseInt(e)+this._originDate.getMonth()),t}_differenceInMonths(e,t){return 12*(e.getFullYear()-t.getFullYear())-t.getMonth()+e.getMonth()}_differenceInYears(e,t){return this._differenceInMonths(e,t)/12}_clear(){this.selectedDate=""}_close(){var e=this.getRootNode().host,t=e?e.getRootNode().host:null;t&&(t.opened=!1),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(e){e.preventDefault()}_eventKey(e){for(var t=["down","up","right","left","enter","space","home","end","pageup","pagedown","tab","esc"],i=0;i<t.length;i++){var r=t[i];if(h.a.keyboardEventMatchesKeys(e,r))return r}}_onKeydown(e){var t=this._currentlyFocusedDate(),i=e.composedPath().indexOf(this.$.todayButton)>=0,r=e.composedPath().indexOf(this.$.cancelButton)>=0,n=!i&&!r,a=this._eventKey(e);if("tab"===a){e.stopPropagation();var o=this.hasAttribute("fullscreen"),s=e.shiftKey;o?e.preventDefault():s&&n||!s&&r?(e.preventDefault(),this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))):s&&i?(this._focused=!0,setTimeout(()=>this.revealDate(this.focusedDate),1)):this._focused=!1}else if(a)switch(e.preventDefault(),e.stopPropagation(),a){case"down":this._moveFocusByDays(7),this.focus();break;case"up":this._moveFocusByDays(-7),this.focus();break;case"right":n&&this._moveFocusByDays(this.__isRTL?-1:1);break;case"left":n&&this._moveFocusByDays(this.__isRTL?1:-1);break;case"enter":n||r?this._close():i&&this._onTodayTap();break;case"space":if(r)this._close();else if(i)this._onTodayTap();else{var l=this.focusedDate;p.a._dateEquals(l,this.selectedDate)?(this.selectedDate="",this.focusedDate=l):this.selectedDate=l}break;case"home":this._moveFocusInsideMonth(t,"minDate");break;case"end":this._moveFocusInsideMonth(t,"maxDate");break;case"pagedown":this._moveFocusByMonths(e.shiftKey?12:1);break;case"pageup":this._moveFocusByMonths(e.shiftKey?-12:-1);break;case"esc":this._cancel()}}_currentlyFocusedDate(){return this.focusedDate||this.selectedDate||this.initialPosition||new Date}_focusDate(e){this.focusedDate=e,this._focusedMonthDate=e.getDate()}_focusClosestDate(e){this._focusDate(p.a._getClosestDate(e,[this.minDate,this.maxDate]))}_moveFocusByDays(e){var t=this._currentlyFocusedDate(),i=new Date(0,0);i.setFullYear(t.getFullYear()),i.setMonth(t.getMonth()),i.setDate(t.getDate()+e),this._dateAllowed(i,this.minDate,this.maxDate)?this._focusDate(i):this._dateAllowed(t,this.minDate,this.maxDate)?e>0?this._focusDate(this.maxDate):this._focusDate(this.minDate):this._focusClosestDate(t)}_moveFocusByMonths(e){var t=this._currentlyFocusedDate(),i=new Date(0,0);i.setFullYear(t.getFullYear()),i.setMonth(t.getMonth()+e);var r=i.getMonth();i.setDate(this._focusedMonthDate||(this._focusedMonthDate=t.getDate())),i.getMonth()!==r&&i.setDate(0),this._dateAllowed(i,this.minDate,this.maxDate)?this.focusedDate=i:this._dateAllowed(t,this.minDate,this.maxDate)?e>0?this._focusDate(this.maxDate):this._focusDate(this.minDate):this._focusClosestDate(t)}_moveFocusInsideMonth(e,t){var i=new Date(0,0);i.setFullYear(e.getFullYear()),"minDate"===t?(i.setMonth(e.getMonth()),i.setDate(1)):(i.setMonth(e.getMonth()+1),i.setDate(0)),this._dateAllowed(i,this.minDate,this.maxDate)?this._focusDate(i):this._dateAllowed(e,this.minDate,this.maxDate)?this._focusDate(this[t]):this._focusClosestDate(e)}_dateAllowed(e,t,i){return(!t||e>=t)&&(!i||e<=i)}_isTodayAllowed(e,t){var i=new Date,r=new Date(0,0);return r.setFullYear(i.getFullYear()),r.setMonth(i.getMonth()),r.setDate(i.getDate()),this._dateAllowed(r,e,t)}_stopPropagation(e){e.stopPropagation()}}customElements.define(C.is,C);var S=i(76),E=i(77),O=e=>class extends(Object(E.b)([S.a],e)){static get properties(){return{_selectedDate:{type:Date},_focusedDate:Date,value:{type:String,observer:"_valueChanged",notify:!0,value:""},required:{type:Boolean,value:!1},name:{type:String},initialPosition:String,label:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},autoOpenDisabled:Boolean,showWeekNumbers:{type:Boolean},_fullscreen:{value:!1,observer:"_fullscreenChanged"},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_touchPrevented:Array,i18n:{type:Object,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,week:"Week",calendar:"Calendar",clear:"Clear",today:"Today",cancel:"Cancel",formatDate:e=>{var t=String(e.year).replace(/\d+/,e=>"0000".substr(e.length)+e);return[e.month+1,e.day,t].join("/")},parseDate:e=>{var t,i=e.split("/"),r=new Date,n=r.getMonth(),a=r.getFullYear();if(3===i.length?(a=parseInt(i[2]),i[2].length<3&&a>=0&&(a+=a<50?2e3:1900),n=parseInt(i[0])-1,t=parseInt(i[1])):2===i.length?(n=parseInt(i[0])-1,t=parseInt(i[1])):1===i.length&&(t=parseInt(i[0])),void 0!==t)return{day:t,month:n,year:a}},formatTitle:(e,t)=>e+" "+t})},min:{type:String,observer:"_minChanged"},max:{type:String,observer:"_maxChanged"},_minDate:{type:Date,value:""},_maxDate:{type:Date,value:""},_noInput:{type:Boolean,computed:"_isNoInput(_fullscreen, _ios, i18n, i18n.*)"},_ios:{type:Boolean,value:navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)},_webkitOverflowScroll:{type:Boolean,value:""===document.createElement("div").style.webkitOverflowScrolling},_ignoreAnnounce:{value:!0},_focusOverlayOnOpen:Boolean,_overlayInitialized:Boolean}}static get observers(){return["_updateHasValue(value)","_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)","_announceFocusedDate(_focusedDate, opened, _ignoreAnnounce)"]}ready(){super.ready(),this._boundOnScroll=this._onScroll.bind(this),this._boundFocus=this._focus.bind(this),this._boundUpdateAlignmentAndPosition=this._updateAlignmentAndPosition.bind(this);var e=e=>{var t=e.composedPath(),i=t.indexOf(this._inputElement);return 1===t.slice(0,i).filter(e=>e.getAttribute&&"clear-button"===e.getAttribute("part")).length};Object(x.addListener)(this,"tap",t=>{e(t)||this.autoOpenDisabled&&!this._noInput||this.open()}),this.addEventListener("touchend",t=>{e(t)||t.preventDefault()}),this.addEventListener("keydown",this._onKeydown.bind(this)),this.addEventListener("input",this._onUserInput.bind(this)),this.addEventListener("focus",e=>this._noInput&&e.target.blur()),this.addEventListener("blur",e=>{if(!this.opened){if(this.autoOpenDisabled){var t=this._getParsedDate();this._isValidDate(t)&&(this._selectedDate=t)}""===this._inputElement.value&&this.__dispatchChange?(this.validate(),this.value="",this.__dispatchChange=!1):this.validate()}})}_initOverlay(){this.$.overlay.removeAttribute("disable-upgrade"),this._overlayInitialized=!0,this.$.overlay.addEventListener("opened-changed",e=>this.opened=e.detail.value),this._overlayContent.addEventListener("close",this._close.bind(this)),this._overlayContent.addEventListener("focus-input",this._focusAndSelect.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._boundFocus),this._overlayContent.addEventListener("focus",()=>this.focusElement._setFocused(!0)),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this));var e=e=>{this.$.overlay.bringToFront&&requestAnimationFrame(()=>{this.$.overlay.bringToFront()})};this.addEventListener("mousedown",e),this.addEventListener("touchstart",e)}disconnectedCallback(){super.disconnectedCallback(),this._overlayInitialized&&this.$.overlay.removeEventListener("vaadin-overlay-escape-press",this._boundFocus),this.opened=!1}open(){this.disabled||this.readonly||(this.opened=!0)}_close(e){e&&e.stopPropagation(),this._focus(),this.close()}close(){(this._overlayInitialized||this.autoOpenDisabled)&&this.$.overlay.close()}get _inputElement(){return this._input()}get _nativeInput(){if(this._inputElement)return this._inputElement.focusElement?this._inputElement.focusElement:this._inputElement.inputElement?this._inputElement.inputElement:window.unwrap?window.unwrap(this._inputElement):this._inputElement}_parseDate(e){var t=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(e);if(t){var i=new Date(0,0);return i.setFullYear(parseInt(t[1],10)),i.setMonth(parseInt(t[2],10)-1),i.setDate(parseInt(t[3],10)),i}}_isNoInput(e,t,i){return!this._inputElement||e||t||!i.parseDate}_formatISO(e){if(!(e instanceof Date))return"";var t=(e,t="00")=>(t+e).substr((t+e).length-t.length),i="",r="0000",n=e.getFullYear();return n<0?(n=-n,i="-",r="000000"):e.getFullYear()>=1e4&&(i="+",r="000000"),[i+t(n,r),t(e.getMonth()+1),t(e.getDate())].join("-")}_openedChanged(e){e&&!this._overlayInitialized&&this._initOverlay(),this._overlayInitialized&&(this.$.overlay.opened=e),e&&this._updateAlignmentAndPosition()}_selectedDateChanged(e,t){if(void 0!==e&&void 0!==t){this.__userInputOccurred&&(this.__dispatchChange=!0);var i=this._formatISO(e);this.__keepInputValue||this._applyInputValue(e),i!==this.value&&(this.validate(),this.value=i),this.__userInputOccurred=!1,this.__dispatchChange=!1,this._ignoreFocusedDateChange=!0,this._focusedDate=e,this._ignoreFocusedDateChange=!1}}_focusedDateChanged(e,t){void 0!==e&&void 0!==t&&(this.__userInputOccurred=!0,this._ignoreFocusedDateChange||this._noInput||this._applyInputValue(e))}_updateHasValue(e){e?this.setAttribute("has-value",""):this.removeAttribute("has-value")}__getOverlayTheme(e,t){if(t)return e}_handleDateChange(e,t,i){if(t){var r=this._parseDate(t);r?p.a._dateEquals(this[e],r)||(this[e]=r,this.value&&this.validate()):this.value=i}else this[e]=""}_valueChanged(e,t){this.__dispatchChange&&this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._handleDateChange("_selectedDate",e,t)}_minChanged(e,t){this._handleDateChange("_minDate",e,t)}_maxChanged(e,t){this._handleDateChange("_maxDate",e,t)}_updateAlignmentAndPosition(){if(this._overlayInitialized){if(!this._fullscreen){var e=this._inputElement.getBoundingClientRect(),t=e.top>window.innerHeight/2;if(e.left+this.clientWidth/2>window.innerWidth/2){var i=Math.min(window.innerWidth,document.documentElement.clientWidth);this.$.overlay.setAttribute("right-aligned",""),this.$.overlay.style.removeProperty("left"),this.$.overlay.style.right=i-e.right+"px"}else this.$.overlay.removeAttribute("right-aligned"),this.$.overlay.style.removeProperty("right"),this.$.overlay.style.left=e.left+"px";if(t){var r=Math.min(window.innerHeight,document.documentElement.clientHeight);this.$.overlay.setAttribute("bottom-aligned",""),this.$.overlay.style.removeProperty("top"),this.$.overlay.style.bottom=r-e.top+"px"}else this.$.overlay.removeAttribute("bottom-aligned"),this.$.overlay.style.removeProperty("bottom"),this.$.overlay.style.top=e.bottom+"px"}this.$.overlay.setAttribute("dir",getComputedStyle(this._inputElement).getPropertyValue("direction")),this._overlayContent._repositionYearScroller()}}_fullscreenChanged(){this._overlayInitialized&&this.$.overlay.opened&&this._updateAlignmentAndPosition()}_onOverlayOpened(){this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring");var e=this._parseDate(this.initialPosition),t=this._selectedDate||this._overlayContent.initialPosition||e||new Date;e||p.a._dateAllowed(t,this._minDate,this._maxDate)?this._overlayContent.initialPosition=t:this._overlayContent.initialPosition=p.a._getClosestDate(t,[this._minDate,this._maxDate]),this._overlayContent.scrollToDate(this._overlayContent.focusedDate||this._overlayContent.initialPosition),this._ignoreFocusedDateChange=!0,this._overlayContent.focusedDate=this._overlayContent.focusedDate||this._overlayContent.initialPosition,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this.addEventListener("iron-resize",this._boundUpdateAlignmentAndPosition),this._webkitOverflowScroll&&(this._touchPrevented=this._preventWebkitOverflowScrollingTouch(this.parentElement)),this._focusOverlayOnOpen?(this._overlayContent.focus(),this._focusOverlayOnOpen=!1):this._focus(),this._noInput&&this.focusElement&&this.focusElement.blur(),this.updateStyles(),this._ignoreAnnounce=!1}_preventWebkitOverflowScrollingTouch(e){for(var t=[];e;){if("touch"===window.getComputedStyle(e).webkitOverflowScrolling){var i=e.style.webkitOverflowScrolling;e.style.webkitOverflowScrolling="auto",t.push({element:e,oldInlineValue:i})}e=e.parentElement}return t}_selectParsedOrFocusedDate(){if(this._ignoreFocusedDateChange=!0,this.i18n.parseDate){var e=this._inputValue||"",t=this._getParsedDate(e);this._isValidDate(t)?this._selectedDate=t:(this.__keepInputValue=!0,this._selectedDate=null,this.__keepInputValue=!1)}else this._focusedDate&&(this._selectedDate=this._focusedDate);this._ignoreFocusedDateChange=!1}_onOverlayClosed(){this._ignoreAnnounce=!0,window.removeEventListener("scroll",this._boundOnScroll,!0),this.removeEventListener("iron-resize",this._boundUpdateAlignmentAndPosition),this._touchPrevented&&(this._touchPrevented.forEach(e=>e.element.style.webkitOverflowScrolling=e.oldInlineValue),this._touchPrevented=[]),this.updateStyles(),this._selectParsedOrFocusedDate(),this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),this.value||this.validate()}validate(){return!(this.invalid=!this.checkValidity(this._inputValue))}checkValidity(){var e=!this._inputValue||this._selectedDate&&this._inputValue===this._getFormattedDate(this.i18n.formatDate,this._selectedDate),t=!this._selectedDate||p.a._dateAllowed(this._selectedDate,this._minDate,this._maxDate),i=!0;return this._inputElement&&(this._inputElement.checkValidity?(this._inputElement.__forceCheckValidity=!0,i=this._inputElement.checkValidity(),this._inputElement.__forceCheckValidity=!1):this._inputElement.validate&&(i=this._inputElement.validate())),e&&t&&i}_onScroll(e){e.target!==window&&this._overlayContent.contains(e.target)||this._updateAlignmentAndPosition()}_focus(){this._noInput?this._overlayInitialized&&this._overlayContent.focus():this._inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputValue.length)}_applyInputValue(e){this._inputValue=e?this._getFormattedDate(this.i18n.formatDate,e):""}_getFormattedDate(e,t){return e(p.a._extractDateParts(t))}_setSelectionRange(e,t){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(e,t)}_eventKey(e){for(var t=["down","up","enter","esc","tab"],i=0;i<t.length;i++){var r=t[i];if(h.a.keyboardEventMatchesKeys(e,r))return r}}_isValidDate(e){return e&&!isNaN(e.getTime())}_onKeydown(e){if(this._noInput){-1===[9].indexOf(e.keyCode)&&e.preventDefault()}switch(this._eventKey(e)){case"down":case"up":e.preventDefault(),this.opened?(this._overlayContent.focus(),this._overlayContent._onKeydown(e)):(this._focusOverlayOnOpen=!0,this.open());break;case"enter":var t=this._getParsedDate(),i=this._isValidDate(t);if(this.opened)this._overlayInitialized&&this._overlayContent.focusedDate&&i&&(this._selectedDate=this._overlayContent.focusedDate),this.close();else if(i||""===this._inputElement.value){var r=this.value;this._selectParsedOrFocusedDate(),r===this.value&&this.validate()}else this.validate();break;case"esc":this.opened?(this._focusedDate=this._selectedDate,this._close()):this.autoOpenDisabled?(""===this._inputElement.value&&(this._selectedDate=null),this._applyInputValue(this._selectedDate)):(this._focusedDate=this._selectedDate,this._selectParsedOrFocusedDate());break;case"tab":this.opened&&(e.preventDefault(),this._setSelectionRange(0,0),e.shiftKey?this._overlayContent.focusCancel():(this._overlayContent.focus(),this._overlayContent.revealDate(this._focusedDate)))}}_getParsedDate(e=this._inputValue){var t=this.i18n.parseDate&&this.i18n.parseDate(e);return t&&this._parseDate(t.year+"-"+(t.month+1)+"-"+t.day)}_onUserInput(e){this.opened||!this._inputElement.value||this.autoOpenDisabled||this.open(),this._userInputValueChanged(),e.__fromClearButton&&(this.validate(),this.__dispatchChange=!0,this.value="",this.__dispatchChange=!1)}_userInputValueChanged(e){if(this.opened&&this._inputValue){var t=this._getParsedDate();this._isValidDate(t)&&(this._ignoreFocusedDateChange=!0,p.a._dateEquals(t,this._focusedDate)||(this._focusedDate=t),this._ignoreFocusedDateChange=!1)}}_announceFocusedDate(e,t,i){t&&!i&&this._overlayContent.announceFocusedDate()}get _overlayContent(){return this.$.overlay.content.querySelector("#overlay-content")}},I=(i(174),i(21));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class k extends(Object(I.a)(Object(o.a)(Object(a.a)(O(Object(n.a)(r.a)))))){static get template(){return m.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([opened]) {
        pointer-events: auto;
      }

      [part="text-field"] {
        width: 100%;
        min-width: 0;
      }
    </style>


    <vaadin-date-picker-text-field id="input" role="application" autocomplete="off" on-focus="_focus" value="{{_userInputValue}}" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" error-message="[[errorMessage]]" clear-button-visible="[[clearButtonVisible]]" aria-label\$="[[label]]" part="text-field" helper-text="[[helperText]]" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <slot name="helper" slot="helper">[[helperText]]</slot>
      <div part="toggle-button" slot="suffix" on-tap="_toggle" role="button" aria-label\$="[[i18n.calendar]]" aria-expanded\$="[[_getAriaExpanded(opened)]]"></div>
    </vaadin-date-picker-text-field>

    <vaadin-date-picker-overlay id="overlay" fullscreen\$="[[_fullscreen]]" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]" on-vaadin-overlay-open="_onOverlayOpened" on-vaadin-overlay-close="_onOverlayClosed" disable-upgrade="">
      <template>
        <vaadin-date-picker-overlay-content id="overlay-content" i18n="[[i18n]]" fullscreen\$="[[_fullscreen]]" label="[[label]]" selected-date="{{_selectedDate}}" slot="dropdown-content" focused-date="{{_focusedDate}}" show-week-numbers="[[showWeekNumbers]]" min-date="[[_minDate]]" max-date="[[_maxDate]]" role="dialog" on-date-tap="_close" part="overlay-content" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]">
        </vaadin-date-picker-overlay-content>
      </template>
    </vaadin-date-picker-overlay>

    <iron-media-query query="[[_fullscreenMediaQuery]]" query-matches="{{_fullscreen}}">
    </iron-media-query>
`}static get is(){return"vaadin-date-picker"}static get version(){return"4.4.1"}static get properties(){return{clearButtonVisible:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:String,placeholder:String,helperText:{type:String,value:""},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_userInputValue:String}}static get observers(){return["_userInputValueChanged(_userInputValue)","_setClearButtonLabel(i18n.clear)"]}ready(){super.ready(),Object(y.a)(this,()=>this._inputElement.validate=()=>{}),this._inputElement.addEventListener("change",e=>{""!==this._inputElement.value||e.__fromClearButton||(this.__dispatchChange=!0)})}_onVaadinOverlayClose(e){this._openedWithFocusRing&&this.hasAttribute("focused")?this.focusElement.setAttribute("focus-ring",""):this.hasAttribute("focused")||this.focusElement.blur(),e.detail.sourceEvent&&-1!==e.detail.sourceEvent.composedPath().indexOf(this)&&e.preventDefault()}_toggle(e){e.stopPropagation(),this[this._overlayInitialized&&this.$.overlay.opened?"close":"open"]()}_input(){return this.$.input}set _inputValue(e){this._inputElement.value=e}get _inputValue(){return this._inputElement.value}_getAriaExpanded(e){return Boolean(e).toString()}get focusElement(){return this._input()||this}_setClearButtonLabel(e){this._inputElement.shadowRoot.querySelector('[part="clear-button"]').setAttribute("aria-label",e)}}customElements.define(k.is,k)},,function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var r=i(11),n=i(17),a=i(21),o=i(42),s=e=>class extends e{static get properties(){return{inputs:{type:Array,readOnly:!0},i18n:{type:Object,value:()=>({parseValue:function(e){return e.split("\t")},formatValue:function(e){return e.join("\t")}})},__errorId:String,__labelId:String,__helperTextId:String,__hasSlottedHelper:Boolean}}connectedCallback(){super.connectedCallback(),this.__observer&&this.__observer.connect()}disconnectedCallback(){super.disconnectedCallback(),this.__observer&&this.__observer.disconnect()}ready(){super.ready(),this.__setInputsFromSlot(),this.__observer=new o.a(this.$.slot,()=>{this.__setInputsFromSlot()}),this.$.helperSlot.addEventListener("slotchange",this.__onHelperSlotChange.bind(this)),this.__onHelperSlotChange();var e=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor);this.addEventListener("keydown",t=>{if(9===t.keyCode){if("slot"===t.target.parentElement.localName&&!t.defaultPrevented&&e){var i=t.target.parentElement;i.setAttribute("tabindex",-1),setTimeout(()=>i.removeAttribute("tabindex"))}this.inputs.indexOf(t.target)<this.inputs.length-1&&!t.shiftKey||this.inputs.indexOf(t.target)>0&&t.shiftKey?this.dispatchEvent(new CustomEvent("internal-tab")):this.__setValue()}}),this.addEventListener("focusin",()=>this.setAttribute("focused","")),this.addEventListener("focusout",e=>{var t=this.getRootNode().activeElement;this.inputs.some(e=>t===e||e.shadowRoot&&e.shadowRoot.contains(t))||this.removeAttribute("focused")});var t=s._uniqueId=1+s._uniqueId||1;this.__errorId=`${this.constructor.is}-error-${t}`,this.__labelId=`${this.constructor.is}-label-${t}`,this.__helperTextId=`${this.constructor.is}-helper-${t}`}focus(){this.inputs&&this.inputs[0]&&this.inputs[0].focus()}__updateValue(e){e&&e.stopPropagation(),this.__setValue(),this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1,detail:{value:this.value}}))}__setValue(){this.__settingValue=!0,this.value=this.i18n.formatValue.apply(this,[this.inputs.map(e=>e.value)]),this.__settingValue=!1}__queryAllAssignedElements(e){var t,i=[];return"SLOT"===e.tagName?t=e.assignedNodes({flatten:!0}).filter(e=>e.nodeType===Node.ELEMENT_NODE):(i.push(e),t=Array.from(e.children)),t.forEach(e=>i.push(...this.__queryAllAssignedElements(e))),i}__getInputsFromSlot(){return this.__queryAllAssignedElements(this.$.slot).filter(e=>e.validate||e.checkValidity)}__setInputsFromSlot(){this._setInputs(this.__getInputsFromSlot()),this.__setValue()}__valueChanged(e,t){if(!this.__settingValue&&this.inputs){var i=this.i18n.parseValue(e);i&&0!=i.length?(this.inputs.forEach((e,t)=>e.value=i[t]),void 0!==t&&this.validate()):console.warn("Value parser has not provided values array")}}__onHelperSlotChange(){var e=this.$.helperSlot.assignedNodes({flatten:!0});this.__hasSlottedHelper=e.filter(e=>3!==e.nodeType).length>0,this.__hasSlottedHelper?this.setAttribute("has-helper","slotted"):""!==this.helperText&&null!==this.helperText||this.removeAttribute("has-helper")}},l=i(6);
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class d extends(Object(a.a)(s(Object(n.a)(r.a)))){static get template(){return l.a`
    <style>
      :host {
        display: inline-flex;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
        /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
      }

      :host([hidden]) {
        display: none !important;
      }

      .container {
        width: 100%;
        display: flex;
        flex-direction: column;
      }

      .inputs-wrapper {
        flex: none;
      }
    </style>

    <div class="container">
      <label part="label" on-click="focus" id="[[__labelId]]">[[label]]</label>
      <div class="inputs-wrapper" on-change="__updateValue">
        <slot id="slot"></slot>
      </div>
      <div part="helper-text" on-click="focus" id="[[__helperTextId]]">
        <slot name="helper" id="helperSlot">[[helperText]]</slot>
      </div>
      <div part="error-message" id="[[__errorId]]" aria-live="assertive" aria-hidden\$="[[__getErrorMessageAriaHidden(invalid, errorMessage, __errorId)]]">[[errorMessage]]</div>
    </div>
`}static get is(){return"vaadin-custom-field"}static get version(){return"1.3.0"}static get properties(){return{label:{type:String,value:"",observer:"_labelChanged"},name:String,required:{type:Boolean,reflectToAttribute:!0},value:{type:String,observer:"__valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1,observer:"__invalidChanged"},errorMessage:{type:String,value:"",observer:"__errorMessageChanged"},helperText:{type:String,value:"",observer:"__helperTextChanged"}}}static get observers(){return["__getActiveErrorId(invalid, errorMessage, __errorId, helperText, __helperTextId, __hasSlottedHelper)","__getActiveLabelId(label, __labelId)","__toggleHasValue(value)"]}__invalidChanged(e){this.__setOrToggleAttribute("aria-invalid",e,this)}__errorMessageChanged(e){this.__setOrToggleAttribute("has-error-message",!!e,this)}__helperTextChanged(e){this.__setOrToggleAttribute("has-helper",!!e,this)}__toggleHasValue(e){null!==e&&""!==e.trim()?this.setAttribute("has-value",""):this.removeAttribute("has-value")}_labelChanged(e){""!==e&&null!=e?this.setAttribute("has-label",""):this.removeAttribute("has-label")}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){return!(this.inputs.filter(e=>!(e.validate||e.checkValidity).call(e)).length||this.required&&!this.value.trim())}__setOrToggleAttribute(e,t,i){e&&i&&i.hasAttribute(e)===!t&&(t?i.setAttribute(e,"boolean"==typeof t?"":t):i.removeAttribute(e))}__getActiveErrorId(e,t,i,r,n,a){var o=[];(r||a)&&o.push(n),t&&e&&o.push(i),o.length>0?this.setAttribute("aria-describedby",o.join(" ")):this.removeAttribute("aria-describedby")}__getActiveLabelId(e,t){this.__setOrToggleAttribute("aria-labelledby",e?t:void 0,this)}__getErrorMessageAriaHidden(e,t,i){return(!(t&&e?i:void 0)).toString()}}customElements.define(d.is,d)},,function(e,t,i){"use strict";i(11),i(62);var r,n=i(104),a=i(70),o=i(6).a`<dom-module id="vaadin-email-field-template">
  <template>
    <style>
      :host([dir="rtl"]) [part="input-field"] {
        direction: ltr;
      }

      :host([dir="rtl"]) [part="value"]::placeholder {
        direction: rtl;
        text-align: left;
      }

      :host([dir="rtl"]) [part="input-field"] ::slotted(input)::placeholder {
        direction: rtl;
        text-align: left;
      }

      :host([dir="rtl"]) [part="value"]:-ms-input-placeholder,
      :host([dir="rtl"]) [part="input-field"] ::slotted(input):-ms-input-placeholder {
        direction: rtl;
        text-align: left;
      }
    </style>
  </template>
  
</dom-module>`;document.head.appendChild(o.content);class s extends n.a{static get is(){return"vaadin-email-field"}static get version(){return"2.8.2"}static get template(){if(!r){r=super.template.cloneNode(!0);var e=a.a.import(this.is+"-template","template").content.querySelector("style");r.content.appendChild(e)}return r}ready(){super.ready(),this.inputElement.type="email",this.inputElement.autocapitalize="off"}_createConstraintsObserver(){this.pattern=this.pattern||"^([a-zA-Z0-9_\\.\\-+])+@[a-zA-Z0-9-.]+\\.[a-zA-Z0-9-]{2,}$",super._createConstraintsObserver()}}customElements.define(s.is,s)},function(e,t,i){"use strict";var r=i(11),n=(i(104),i(82)),a=i(17),o=i(171),s=(i(216),i(173)),l=i(21),d=i(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class h extends(Object(l.a)(Object(n.a)(Object(a.a)(Object(s.a)(Object(o.a)(r.a)))))){static get template(){return d.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([opened]) {
        pointer-events: auto;
      }

      [part="text-field"] {
        width: 100%;
        min-width: 0;
      }
    </style>

    <vaadin-text-field part="text-field" id="input" pattern="[[pattern]]" prevent-invalid-input="[[preventInvalidInput]]" value="{{_inputElementValue}}" autocomplete="off" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" helper-text="[[helperText]]" error-message="[[errorMessage]]" autocapitalize="none" autofocus="[[autofocus]]" on-change="_stopPropagation" on-input="_inputValueChanged" clear-button-visible="[[clearButtonVisible]]" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <slot name="helper" slot="helper">[[helperText]]</slot>

      <div part="toggle-button" id="toggleButton" slot="suffix" role="button" aria-label="Toggle"></div>

    </vaadin-text-field>

    <vaadin-combo-box-dropdown-wrapper id="overlay" opened="[[opened]]" renderer="[[renderer]]" position-target="[[_getPositionTarget()]]" _focused-index="[[_focusedIndex]]" _item-id-path="[[itemIdPath]]" _item-label-path="[[itemLabelPath]]" loading="[[loading]]" theme="[[theme]]">
    </vaadin-combo-box-dropdown-wrapper>
`}constructor(){super(),this.theme}static get is(){return"vaadin-combo-box"}static get version(){return"5.4.7"}static get properties(){return{label:{type:String,reflectToAttribute:!0},required:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1},preventInvalidInput:{type:Boolean},pattern:{type:String},errorMessage:{type:String},autofocus:{type:Boolean},placeholder:{type:String,value:""},helperText:{type:String,value:""},readonly:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1}}}static get observers(){return["_updateAriaExpanded(opened)"]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root&&Array.prototype.forEach.call(this.root.querySelectorAll("*"),e=>{e.style["-webkit-backface-visibility"]="visible",e.style["-webkit-backface-visibility"]=""})}ready(){super.ready(),this._nativeInput=this.inputElement.focusElement,this._toggleElement=this.$.toggleButton,this._clearElement=this.inputElement.shadowRoot.querySelector('[part="clear-button"]'),this.inputElement.addEventListener("keydown",e=>{this._isEventKey(e,"esc")&&(this._stopPropagation(e),this._onEscape(e))},!0),this._nativeInput.setAttribute("role","combobox"),this._nativeInput.setAttribute("aria-autocomplete","list"),this._updateAriaExpanded()}connectedCallback(){super.connectedCallback(),this._preventInputBlur()}disconnectedCallback(){super.disconnectedCallback(),this._restoreInputBlur()}_getPositionTarget(){return this.$.input}_updateAriaExpanded(){this._nativeInput&&(this._nativeInput.setAttribute("aria-expanded",this.opened),this._toggleElement.setAttribute("aria-expanded",this.opened))}get inputElement(){return this.$.input}get focusElement(){return this.inputElement||this}}customElements.define(h.is,h)},function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var r=i(15),n=i(19),a=i(34),o=i(54),s=i(129),l=i(106),d=i(42),h=i(97),c=e=>class extends e{static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:Boolean,disabled:{type:Boolean,value:!1,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array},value:{type:String,observer:"_valueChanged",notify:!0,value:""},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,name:{type:String},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_toggleElement:Object,_clearElement:Object,_inputElementValue:String,_closeOnBlurIsPrevented:Boolean,_previousDocumentPointerEvents:String,_itemTemplate:Object}}static get observers(){return["_filterChanged(filter, itemValuePath, itemLabelPath)","_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)","_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)","_templateOrRendererChanged(_itemTemplate, renderer)","_loadingChanged(loading)","_selectedItemChanged(selectedItem, itemLabelPath)","_toggleElementChanged(_toggleElement)"]}constructor(){super(),this._boundOnFocusout=this._onFocusout.bind(this),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundClose=this.close.bind(this),this._boundOnOpened=this._onOpened.bind(this),this._boundOnKeyDown=this._onKeyDown.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}ready(){super.ready(),this.addEventListener("focusout",this._boundOnFocusout),this._lastCommittedValue=this.value,s.a.requestAvailability(),this.$.overlay.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this.addEventListener("vaadin-combo-box-dropdown-closed",this._boundClose),this.addEventListener("vaadin-combo-box-dropdown-opened",this._boundOnOpened),this.addEventListener("keydown",this._boundOnKeyDown),this.addEventListener("click",this._boundOnClick),this.$.overlay.addEventListener("vaadin-overlay-touch-action",this._boundOnOverlayTouchAction),this.addEventListener("touchend",this._boundOnTouchend),this._observer=new d.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)});var e=e=>{var t=this.$.overlay,i=t&&t.$.dropdown;i&&i.$&&this.$.overlay.$.dropdown.$.overlay.bringToFront&&requestAnimationFrame(()=>{i.$.overlay.bringToFront()})};this.addEventListener("mousedown",e),this.addEventListener("touchstart",e)}render(){this.$.overlay._selector&&this.$.overlay._selector.querySelectorAll("vaadin-combo-box-item").forEach(e=>e._render())}_setTemplateFromNodes(e){this._itemTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._itemTemplate}_removeNewRendererOrTemplate(e,t,i,r){e!==t?this._itemTemplate=void 0:i!==r&&(this.renderer=void 0)}_templateOrRendererChanged(e,t){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for combo box items");this._oldTemplate=e,this._oldRenderer=t}open(){this.disabled||this.readonly||(this.opened=!0)}close(){this.opened=!1}_openedChanged(e,t){void 0!==t&&(this.opened?(this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring"),this.hasAttribute("focused")||this.$.overlay.touchDevice||this.focus()):(this._onClosed(),this._openedWithFocusRing&&this.hasAttribute("focused")&&this.focusElement.setAttribute("focus-ring","")))}_onOverlayTouchAction(e){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_onClick(e){this._closeOnBlurIsPrevented=!0;var t=e.composedPath();-1!==t.indexOf(this._clearElement)||"clear-button"===t[0].getAttribute("part")?(this._clear(),this.focus()):-1!==t.indexOf(this.inputElement)&&(t.indexOf(this._toggleElement)>-1&&this.opened?this.close():(t.indexOf(this._toggleElement)>-1||!this.autoOpenDisabled)&&this.open()),this._closeOnBlurIsPrevented=!1}_onKeyDown(e){this._isEventKey(e,"down")?(this._closeOnBlurIsPrevented=!0,this._onArrowDown(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):this._isEventKey(e,"up")?(this._closeOnBlurIsPrevented=!0,this._onArrowUp(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):this._isEventKey(e,"enter")?this._onEnter(e):this._isEventKey(e,"esc")&&this._onEscape(e)}_isEventKey(e,t){return l.a.keyboardEventMatchesKeys(e,t)}_getItemLabel(e){return this.$.overlay.getItemLabel(e)}_getItemValue(e){var t=e&&this.itemValuePath?this.get(this.itemValuePath,e):void 0;return void 0===t&&(t=e?e.toString():""),t}_onArrowDown(){this.opened?this.$.overlay._items&&(this._focusedIndex=Math.min(this.$.overlay._items.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel()):this.open()}_onArrowUp(){this.opened?(this._focusedIndex>-1?this._focusedIndex=Math.max(0,this._focusedIndex-1):this.$.overlay._items&&(this._focusedIndex=this.$.overlay._items.length-1),this._prefillFocusedItemLabel()):this.open()}_prefillFocusedItemLabel(){this._focusedIndex>-1&&(this._inputElementValue="",setTimeout(()=>{this._inputElementValue=this._getItemLabel(this.$.overlay._focusedItem),this._markAllSelectionRange()},1))}_setSelectionRange(e,t){var i=this._nativeInput||this.inputElement;if(this.hasAttribute("focused")&&i&&i.setSelectionRange)try{i.setSelectionRange(e,t)}catch(e){}}_markAllSelectionRange(){void 0!==this._inputElementValue&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(void 0!==this._inputElementValue){var e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_closeOrCommit(){this.opened||this.loading?this.close():this._commitValue()}_onEnter(e){(this.opened||this.autoOpenDisabled)&&(this.allowCustomValue||""===this._inputElementValue||this._focusedIndex>-1)&&(this._closeOrCommit(),e.preventDefault(),e.stopPropagation())}_onEscape(e){this.autoOpenDisabled?(this._focusedIndex=-1,this.cancel()):this.opened&&(this._stopPropagation(e),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",e=>e.preventDefault()),e.addEventListener("click",e=>{this.$.overlay.touchDevice&&!this.hasAttribute("focused")&&document.activeElement.blur()}))}_clear(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){Object(a.b)(),this.$.overlay.ensureItemsRendered(),this.$.overlay._selector.toggleScrollListener(!0),this.$.overlay.updateViewportBoundaries(),this.$.overlay._selector._increasePoolIfNeeded(),setTimeout(()=>this._resizeDropdown(),1),window.requestAnimationFrame(()=>this.$.overlay.adjustScrollPosition()),this._lastCommittedValue=this.value}_onClosed(){this.opened&&this.close(),this.loading&&!this.allowCustomValue||this._commitValue()}_commitValue(){if(this.$.overlay._items&&this._focusedIndex>-1){var e=this.$.overlay._items[this._focusedIndex];this.selectedItem!==e&&(this.selectedItem=e),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(""===this._inputElementValue||void 0===this._inputElementValue)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{var t=this.filteredItems&&this.filteredItems.filter(e=>this._getItemLabel(e)===this._inputElementValue)||[];if(this.allowCustomValue&&!t.length){var i=new CustomEvent("custom-value-set",{detail:this._inputElementValue,composed:!0,cancelable:!0,bubbles:!0});if(this.dispatchEvent(i),!i.defaultPrevented){var r=this._inputElementValue;this._selectItemForValue(r),this.value=r}}else this.allowCustomValue||this.opened||1!=t.length?this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||"":this.value=this._getItemValue(t[0])}this._detectAndDispatchChange(),this._clearSelectionRange(),this.dataProvider||(this.filter="")}get _propertyForValue(){return"value"}_inputValueChanged(e){-1!==e.composedPath().indexOf(this.inputElement)&&(this._inputElementValue=this.inputElement[this._propertyForValue],this._filterFromInput(e))}_filterFromInput(e){this.opened||e.__fromClearButton||this.autoOpenDisabled||this.open(),this.filter===this._inputElementValue?this._filterChanged(this.filter,this.itemValuePath,this.itemLabelPath):this.filter=this._inputElementValue}_itemLabelPathChanged(e,t){"string"!=typeof e&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e,t,i){void 0!==e&&(this.$.overlay.filterChanged=!0,this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged({path:"filteredItems",value:this.filteredItems},t,i))}_loadingChanged(e){e&&(this._focusedIndex=-1)}_revertInputValue(){""!==this.filter?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_resizeDropdown(){this.$.overlay.$.dropdown.notifyResize()}_updateHasValue(e){e?this.setAttribute("has-value",""):this.removeAttribute("has-value")}_selectedItemChanged(e,t){if(null==e)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._updateHasValue(""!==this.value),this._inputElementValue=this.value);else{var i=this._getItemValue(e);if(this.value!==i&&(this.value=i,this.value!==i))return;this._updateHasValue(!0),this._inputElementValue=this._getItemLabel(e),this.inputElement&&(this.inputElement[this._propertyForValue]=this._inputElementValue)}this.$.overlay._selectedItem=e,this.filteredItems&&this.$.overlay._items&&(this._focusedIndex=this.filteredItems.indexOf(e))}_valueChanged(e,t){if(""!==e||void 0!==t){var i;if(this._isValidValue(e))this._getItemValue(this.selectedItem)!==e?this._selectItemForValue(e):i=this.selectedItem,!i&&this.allowCustomValue&&(this._inputElementValue=e),this._updateHasValue(""!==this.value);else this.selectedItem=null;this._lastCommittedValue=void 0}}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.items=t})}_itemsOrPathsChanged(e,t,i){if("items"===e.path||"items.splices"===e.path){this.items?this.filteredItems=this.items.slice(0):this.__previousItems&&(this.filteredItems=null);var r=this._indexOfValue(this.value,this.items);this._focusedIndex=r;var n=r>-1&&this.items[r];n&&(this.selectedItem=n)}this.__previousItems=e.value}_filteredItemsChanged(e,t,i){"filteredItems"!==e.path&&"filteredItems.splices"!==e.path||(this._setOverlayItems(this.filteredItems),this._focusedIndex=this.opened||this.autoOpenDisabled?this.$.overlay.indexOfLabel(this.filter):this._indexOfValue(this.value,this.filteredItems),this.opened&&this._repositionOverlay())}_filterItems(e,t){return e?e.filter(e=>(t=t?t.toString().toLowerCase():"",this._getItemLabel(e).toString().toLowerCase().indexOf(t)>-1)):e}_selectItemForValue(e){var t=this._indexOfValue(e,this.filteredItems),i=this.selectedItem;this.selectedItem=t>=0?this.filteredItems[t]:this.dataProvider&&void 0===this.selectedItem?void 0:null,null===this.selectedItem&&null===i&&this._selectedItemChanged(this.selectedItem)}_setOverlayItems(e){this.$.overlay.set("_items",e)}_repositionOverlay(){this.__repositionOverlayDebouncer=n.a.debounce(this.__repositionOverlayDebouncer,r.d.after(500),()=>{var e=this.$.overlay._selector;e._isClientFull()||e._resetScrollPosition(e._physicalTop),this._resizeDropdown(),this.$.overlay.updateViewportBoundaries(),this.$.overlay.ensureItemsRendered(),e.notifyResize(),Object(a.b)()})}_indexOfValue(e,t){if(t&&this._isValidValue(e))for(var i=0;i<t.length;i++)if(this._getItemValue(t[i])===e)return i;return-1}_isValidValue(e){return null!=e}_overlaySelectedItemChanged(e){e.stopPropagation(),e.detail.item instanceof h.a||(this.opened?(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close()):this.selectedItem!==e.detail.item&&(this.selectedItem=e.detail.item,this._detectAndDispatchChange()))}_onFocusout(e){var t=this.$.overlay.$.dropdown;t&&t.$&&e.relatedTarget===t.$.overlay?e.composedPath()[0].focus():this._closeOnBlurIsPrevented||this._closeOrCommit()}_onTouchend(e){this._clearElement&&e.composedPath()[0]===this._clearElement&&(e.preventDefault(),this._clear())}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){if(this.inputElement.validate)return this.inputElement.validate()}get _instanceProps(){return{item:!0,index:!0,selected:!0,focused:!0}}_ensureTemplatized(){if(!this._TemplateClass){var e=this._itemTemplate||this._getRootTemplate();e&&(this._TemplateClass=Object(o.b)(e,this,{instanceProps:this._instanceProps,forwardHostProp:function(e,t){var i=this.$.overlay._selector.querySelectorAll("vaadin-combo-box-item");Array.prototype.forEach.call(i,i=>{i._itemTemplateInstance&&(i._itemTemplateInstance.set(e,t),i._itemTemplateInstance.notifyPath(e,t,!0))})}}))}}_getRootTemplate(){return Array.prototype.filter.call(this.children,e=>"TEMPLATE"===e.tagName)[0]}_preventInputBlur(){this._toggleElement&&this._toggleElement.addEventListener("click",this._preventDefault),this._clearElement&&this._clearElement.addEventListener("click",this._preventDefault)}_restoreInputBlur(){this._toggleElement&&this._toggleElement.removeEventListener("click",this._preventDefault),this._clearElement&&this._clearElement.removeEventListener("click",this._preventDefault)}_preventDefault(e){e.preventDefault()}_stopPropagation(e){e.stopPropagation()}}},function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));i(68);var r=i(30),n={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(e,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),t)if("document"===e)this.scrollTarget=this._doc;else if("string"==typeof e){var i=this.domHost;this.scrollTarget=i&&i.$?i.$[e]:Object(r.a)(this.ownerDocument).querySelector("#"+e)}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e)},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e)},scroll:function(e,t){var i;"object"==typeof e?(i=e.left,t=e.top):i=e,i=i||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(i,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var i=t===this._doc?window:t;e?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),i.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(i.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget)}}},function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var r=i(97),n=e=>class extends e{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new r.a}}}static get observers(){return["_dataProviderFilterChanged(filter, dataProvider)","_dataProviderClearFilter(dataProvider, opened, value)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}_dataProviderClearFilter(e,t,i){e&&!this.loading&&this.filter&&(this.size=void 0,this._pendingRequests={},this.filter="",this.clearCache())}ready(){super.ready(),this.clearCache(),this.$.overlay.addEventListener("index-requested",e=>{var t=e.detail.index,i=e.detail.currentScrollerPos,r=Math.floor(1.5*this.pageSize);if(!this._shouldSkipIndex(t,r,i)&&void 0!==t){var n=this._getPageForIndex(t);this._shouldLoadPage(n)&&this._loadPage(n)}})}_dataProviderFilterChanged(){this._shouldFetchData()&&(this.size=void 0,this._pendingRequests={},this.clearCache())}_shouldFetchData(){return!!this.dataProvider&&(this.opened||this.filter&&this.filter.length)}_ensureFirstPage(e){e&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(e,t,i){return 0!==i&&e>=i-t&&e<=i+t}_shouldLoadPage(e){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;var t=this.filteredItems[e*this.pageSize];return void 0!==t?t instanceof r.a:void 0===this.size}_loadPage(e){if(!this._pendingRequests[e]&&this.dataProvider){this.loading=!0;var t={page:e,pageSize:this.pageSize,filter:this.filter},i=(r,n)=>{if(this._pendingRequests[e]===i){if(this.filteredItems)this.splice("filteredItems",t.page*t.pageSize,r.length,...r);else{var a=[];a.splice(t.page*t.pageSize,r.length,...r),this.filteredItems=a}this._isValidValue(this.value)&&this._getItemValue(this.selectedItem)!==this.value&&this._selectItemForValue(this.value),this.opened||this.hasAttribute("focused")||this._commitValue(),this.size=n,delete this._pendingRequests[e],0===Object.keys(this._pendingRequests).length&&(this.loading=!1),0===e&&this.__repositionOverlayDebouncer&&r.length>(this.__maxRenderedItems||0)&&(setTimeout(()=>this.__repositionOverlayDebouncer.flush()),this.__maxRenderedItems=r.length)}};this._pendingRequests[e]||(this._pendingRequests[e]=i,this.dataProvider(t,i))}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){if(this.dataProvider){this._pendingRequests={};for(var e=[],t=0;t<(this.size||0);t++)e.push(this.__placeHolder);this.filteredItems=e,this._shouldFetchData()?this._loadPage(0):this._forceNextRequest=!0}}_sizeChanged(e=0){for(var t=(this.filteredItems||[]).slice(0,e),i=0;i<e;i++)t[i]=void 0!==t[i]?t[i]:this.__placeHolder;this.filteredItems=t,this._flushPendingRequests(e)}_pageSizeChanged(e,t){if(Math.floor(e)!==e||e<1)throw this.pageSize=t,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.dataProvider=t})}_ensureItemsOrDataProvider(e){if(void 0!==this.items&&void 0!==this.dataProvider)throw e(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(e,t){if(e&&""!==t&&(void 0===this.selectedItem||null===this.selectedItem)){var i=this._indexOfValue(t,this.filteredItems);(i<0||!this._getItemLabel(this.filteredItems[i]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(e){if(this._pendingRequests)for(var t=Math.ceil(e/this.pageSize),i=Object.keys(this._pendingRequests),r=0;r<i.length;r++){var n=parseInt(i[r]);n>=t&&this._pendingRequests[n]([],e)}}};
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/},function(e,t,i){"use strict";var r=i(104),n=document.createElement("template");
/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/n.innerHTML='<dom-module id="vaadin-date-picker-text-field-styles" theme-for="vaadin-date-picker-text-field">\n  <template>\n    <style>\n      :host([dir="rtl"]) [part="input-field"] {\n        direction: ltr;\n      }\n\n      :host([dir="rtl"]) [part="value"]::placeholder {\n        direction: rtl;\n        text-align: left;\n      }\n\n      :host([dir="rtl"]) [part="input-field"] ::slotted(input)::placeholder {\n        direction: rtl;\n        text-align: left;\n      }\n\n      :host([dir="rtl"]) [part="value"]:-ms-input-placeholder,\n      :host([dir="rtl"]) [part="input-field"] ::slotted(input):-ms-input-placeholder {\n        direction: rtl;\n        text-align: left;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(n.content);class a extends r.a{static get is(){return"vaadin-date-picker-text-field"}}customElements.define(a.is,a)},function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var r=i(42),n=i(102),a=i(19),o=i(15),s=e=>class extends e{static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("click",e=>this._onClick(e)),this._observer=new r.a(this,e=>{this._setItems(this._filterItems(Array.from(this.children)))})}_enhanceItems(e,t,i,r){if(!r&&e){this.setAttribute("aria-orientation",t||"vertical"),this.items.forEach(e=>{t?e.setAttribute("orientation",t):e.removeAttribute("orientation"),e.updateStyles()}),this._setFocusable(i);var n=e[i];e.forEach(e=>e.selected=e===n),n&&!n.disabled&&this._scrollToItem(i)}}get focused(){return this.getRootNode().activeElement}_filterItems(e){return e.filter(e=>e._hasVaadinItemMixin)}_onClick(e){if(!(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)){var t,i=this._filterItems(e.composedPath())[0];i&&!i.disabled&&(t=this.items.indexOf(i))>=0&&(this.selected=t)}}_searchKey(e,t){this._searchReset=a.a.debounce(this._searchReset,o.d.after(500),()=>this._searchBuf=""),this._searchBuf+=t.toLowerCase();this.items.some(e=>0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))||(this._searchBuf=t.toLowerCase());var i=1===this._searchBuf.length?e+1:e;return this._getAvailableIndex(i,1,e=>!(e.disabled||this._isItemHidden(e))&&0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))}get _isRTL(){return!this._vertical&&"rtl"===this.getAttribute("dir")}_onKeydown(e){if(!e.metaKey&&!e.ctrlKey){var t=e.key.replace(/^Arrow/,""),i=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(t)&&1===t.length){var r=this._searchKey(i,t);r>=0&&this._focus(r)}else{var n,a,o=this._isRTL?-1:1;this._vertical&&"Up"===t||!this._vertical&&"Left"===t?(a=-o,n=i-o):this._vertical&&"Down"===t||!this._vertical&&"Right"===t?(a=o,n=i+o):"Home"===t?(a=1,n=0):"End"===t&&(a=-1,n=this.items.length-1),(n=this._getAvailableIndex(n,a,e=>!(e.disabled||this._isItemHidden(e))))>=0&&(this._focus(n),e.preventDefault())}}}_getAvailableIndex(e,t,i){for(var r=this.items.length,n=0;"number"==typeof e&&n<r;n++,e+=t||1){if(e<0?e=r-1:e>=r&&(e=0),i(this.items[e]))return e}return-1}_isItemHidden(e){return"none"===getComputedStyle(e).display}_setFocusable(e){e=this._getAvailableIndex(e,1,e=>!e.disabled);var t=this.items[e]||this.items[0];this.items.forEach(e=>e.tabIndex=e===t?0:-1)}_focus(e){var t=this.items[e];this.items.forEach(e=>e.focused=e===t),this._setFocusable(e),this._scrollToItem(e),t.focus()}focus(){this._observer&&this._observer.flush();var e=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);e&&e.focus()}get _scrollerElement(){}_scrollToItem(e){var t=this.items[e];if(t){var i=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],r=this._scrollerElement.getBoundingClientRect(),n=(this.items[e+1]||t).getBoundingClientRect(),a=(this.items[e-1]||t).getBoundingClientRect(),o=0;!this._isRTL&&n[i[1]]>=r[i[1]]||this._isRTL&&n[i[1]]<=r[i[1]]?o=n[i[1]]-r[i[1]]:(!this._isRTL&&a[i[0]]<=r[i[0]]||this._isRTL&&a[i[0]]>=r[i[0]])&&(o=a[i[0]]-r[i[0]]),this._scroll(o)}}get _vertical(){return"horizontal"!==this.orientation}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{var t=n.a.detectScrollType(),i=n.a.getNormalizedScrollLeft(t,this.getAttribute("dir")||"ltr",this._scrollerElement)+e;n.a.setNormalizedScrollLeft(t,this.getAttribute("dir")||"ltr",this._scrollerElement,i)}}}},function(e,t,i){"use strict";i(62);var r=document.createElement("template");r.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: 'vaadin-upload-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild(r.content)},,,,,,,,,,function(e,t,i){"use strict";var r=i(11),n=e=>class extends e{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(e,t,i){var r=this._normalizeValue(e,t,i);this.style.setProperty("--vaadin-progress-value",r),this.updateStyles({"--vaadin-progress-value":String(r)})}_valueChanged(e,t){this.setAttribute("aria-valuenow",e)}_minChanged(e,t){this.setAttribute("aria-valuemin",e)}_maxChanged(e,t){this.setAttribute("aria-valuemax",e)}_normalizeValue(e,t,i){var r;return e||0==e?t>=i?r=1:(r=(e-t)/(i-t),r=Math.min(Math.max(r,0),1)):r=0,r}},a=i(17),o=i(21),s=i(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class l extends(Object(o.a)(Object(a.a)(n(r.a)))){static get template(){return s.a`
    <style>
      :host {
        display: block;
        width: 100%; /* prevent collapsing inside non-stretching column flex */
        height: 8px;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="bar"] {
        height: 100%;
      }

      [part="value"] {
        height: 100%;
        transform-origin: 0 50%;
        transform: scaleX(var(--vaadin-progress-value));
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="value"] {
        transform-origin: 100% 50%;
      }
    </style>

    <div part="bar">
      <div part="value"></div>
    </div>
`}static get is(){return"vaadin-progress-bar"}static get version(){return"1.3.0"}}customElements.define(l.is,l)},,function(e,t,i){"use strict";i(93),i(50),i(32),i(40),i(46);var r=i(6).a`<dom-module id="lumo-item" theme-for="vaadin-item">
  <template>
    <style>
      :host {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-xs);
        padding: 0.5em 1em;
        min-height: var(--lumo-size-m);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
      }

      /* Selectable items have a checkmark icon */
      :host([tabindex])::before {
        display: var(--_lumo-item-selected-icon-display, none);
        content: var(--lumo-icons-checkmark);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        font-weight: normal;
        width: 1em;
        height: 1em;
        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
        color: var(--lumo-primary-text-color);
        flex: none;
        opacity: 0;
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;
      }

      :host([selected])::before {
        opacity: 1;
      }

      :host([active]:not([selected]))::before {
        transform: scale(0.8);
        opacity: 0;
        transition-duration: 0s;
      }

      [part="content"] {
        flex: auto;
      }

      /* Disabled item */

      :host([disabled]) {
        color: var(--lumo-disabled-text-color);
        cursor: default;
        pointer-events: none;
      }

      /* Slotted icons */

      :host ::slotted(iron-icon) {
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content);i(191)},,function(e,t,i){"use strict";i(36),i(50),i(32),i(40),i(46);var r=i(6).a`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]:not([theme~="tertiary-inline"])) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="prefix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      :host([dir="rtl"]) [part="suffix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      :host([dir="rtl"][theme~="icon"]) [part="prefix"],
      :host([dir="rtl"][theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content)},function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var r=i(11),n=i(17),a=i(80),o=i(128),s=i(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class l extends(Object(o.a)(Object(n.a)(Object(a.a)(r.a)))){static get template(){return s.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>
    <div part="content">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-item"}static get version(){return"2.3.0"}constructor(){super(),this.value}}customElements.define(l.is,l)},,,function(e,t,i){"use strict";i(50),i(32),i(141);var r=i(6),n=r.a`<dom-module id="lumo-date-picker-overlay" theme-for="vaadin-date-picker-overlay">
  <template>
    <style include="lumo-menu-overlay">
      [part="overlay"] {
        /*
        Width:
            date cell widths
          + month calendar side padding
          + year scroller width
        */
        width:
          calc(
              var(--lumo-size-m) * 7
            + var(--lumo-space-xs) * 2
            + 57px
          );
        height: 100%;
        max-height: calc(var(--lumo-size-m) * 14);
        overflow: hidden;
        -webkit-tap-highlight-color: transparent;
      }

      [part="overlay"] {
        flex-direction: column;
      }

      [part="content"] {
        padding: 0;
        height: 100%;
        overflow: hidden;
        -webkit-mask-image: none;
        mask-image: none;
      }

      @media (max-width: 420px), (max-height: 420px) {
        [part="overlay"] {
          width: 100vw;
          height: 70vh;
          max-height: 70vh;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);i(36),i(40),i(46),i(138);var a=r.a`<dom-module id="lumo-date-picker-overlay-content" theme-for="vaadin-date-picker-overlay-content">
  <template>
    <style>
      :host {
        position: relative;
        background-color: transparent;
        /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
        background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
        background-size: 57px 100%;
        background-position: top right;
        background-repeat: no-repeat;
        cursor: default;
      }

      /* Month scroller */

      [part="months"] {
        /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
        --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
        --vaadin-infinite-scroller-buffer-offset: 20%;
        -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
        mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
        position: relative;
        margin-right: 57px;
      }

      /* Year scroller */

      [part="years"] {
        /* TODO get rid of fixed magic number */
        --vaadin-infinite-scroller-buffer-width: 97px;
        width: 57px;
        height: auto;
        top: 0;
        bottom: 0;
        font-size: var(--lumo-font-size-s);
        box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
        -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
        mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      }

      [part="year-number"],
      [part="year-separator"] {
        opacity: 0.5;
        transition: 0.2s opacity;
      }

      [part="years"]:hover [part="year-number"],
      [part="years"]:hover [part="year-separator"] {
        opacity: 1;
      }

      /* TODO unsupported selector */
      #scrollers {
        position: static;
        display: block;
      }

      /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the
       * width of the year scroller */
      #scrollers[desktop] [part="months"] {
        right: auto;
      }

      /* Year scroller position indicator */
      [part="years"]::before {
        border: none;
        width: 1em;
        height: 1em;
        background-color: var(--lumo-base-color);
        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
        transform: translate(-75%, -50%) rotate(45deg);
        border-top-right-radius: calc(var(--lumo-border-radius) / 2);
        box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
        z-index: 1;
      }

      [part="year-number"],
      [part="year-separator"] {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50%;
        transform: translateY(-50%);
      }

      [part="years"] [part="year-separator"]::after {
        color: var(--lumo-disabled-text-color);
        content: "•";
      }

      /* Current year */

      [part="years"] [part="year-number"][current] {
        color: var(--lumo-primary-text-color);
      }

      /* Toolbar (footer) */

      [part="toolbar"] {
        padding: var(--lumo-space-s);
        box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);
        border-bottom-left-radius: var(--lumo-border-radius);
        margin-right: 57px;
      }

      @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {
        [part="toolbar"] {
          box-shadow: none;
        }
      }

      [part="toolbar"] [part\$="button"] {
        margin: 0;
      }

      /* Narrow viewport mode (fullscreen) */

      :host([fullscreen]) [part="toolbar"] {
        order: -1;
        background-color: var(--lumo-base-color);
      }

      :host([fullscreen]) [part="overlay-header"] {
        order: -2;
        height: var(--lumo-size-m);
        padding: var(--lumo-space-s);
        position: absolute;
        left: 0;
        right: 0;
        justify-content: center;
      }

      :host([fullscreen]) [part="toggle-button"],
      :host([fullscreen]) [part="clear-button"],
      [part="overlay-header"] [part="label"] {
        display: none;
      }

      /* Very narrow screen (year scroller initially hidden) */

      [part="years-toggle-button"] {
        position: relative;
        right: auto;
        display: flex;
        align-items: center;
        height: var(--lumo-size-s);
        padding: 0 0.5em;
        border-radius: var(--lumo-border-radius);
        z-index: 3;
        color: var(--lumo-primary-text-color);
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      :host([years-visible]) [part="years-toggle-button"] {
        background-color: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
      }

      [part="years-toggle-button"]::before {
        content: none;
      }

      /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */
      @media screen and (max-width: 374px) {
        :host {
          background-image: none;
        }

        [part="years"] {
          background-color: var(--lumo-shade-5pct);
        }

        [part="toolbar"],
        [part="months"] {
          margin-right: 0;
        }

        /* TODO make date-picker adapt to the width of the years part */
        [part="years"] {
          --vaadin-infinite-scroller-buffer-width: 90px;
          width: 50px;
        }

        :host([years-visible]) [part="months"] {
          padding-left: 50px;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(a.content);var o=r.a`<dom-module id="lumo-month-calendar" theme-for="vaadin-month-calendar">
  <template>
    <style>
      :host {
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        font-size: var(--lumo-font-size-m);
        color: var(--lumo-body-text-color);
        text-align: center;
        padding: 0 var(--lumo-space-xs);
      }

      /* Month header */

      [part="month-header"] {
        color: var(--lumo-header-text-color);
        font-size: var(--lumo-font-size-l);
        line-height: 1;
        font-weight: 500;
        margin-bottom: var(--lumo-space-m);
      }

      /* Week days and numbers */

      [part="weekdays"],
      [part="weekday"],
      [part="week-numbers"] {
        font-size: var(--lumo-font-size-xs);
        line-height: 1;
        color: var(--lumo-tertiary-text-color);
      }

      [part="weekdays"] {
        margin-bottom: var(--lumo-space-s);
      }

      /* TODO should have part="week-number" for the cell in weekdays-container */
      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: var(--lumo-size-xs);
      }

      /* Date and week number cells */

      [part="date"],
      [part="week-number"] {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: var(--lumo-size-m);
        position: relative;
      }

      [part="date"] {
        transition: color 0.1s;
      }

      /* Today date */

      [part="date"][today] {
        color: var(--lumo-primary-text-color);
      }

      /* Focused date */

      [part="date"]::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 2em;
        min-height: 2em;
        width: 80%;
        height: 80%;
        max-height: 100%;
        max-width: 100%;
        border-radius: var(--lumo-border-radius);
      }

      [part="date"][focused]::before {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      :host(:not([focused])) [part="date"][focused]::before {
        animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
      }

      @keyframes vaadin-date-picker-month-calendar-focus-date {
        50% {
          box-shadow: 0 0 0 2px transparent;
        }
      }

      /* TODO should not rely on the role attribute */
      [part="date"][role="button"]:not([disabled]):not([selected]):hover::before {
        background-color: var(--lumo-primary-color-10pct);
      }

      [part="date"][selected] {
        color: var(--lumo-primary-contrast-color);
      }

      [part="date"][selected]::before {
        background-color: var(--lumo-primary-color);
      }

      [part="date"][disabled] {
        color: var(--lumo-disabled-text-color);
      }

      @media (pointer: coarse) {
        [part="date"]:hover:not([selected])::before,
        [part="date"][focused]:not([selected])::before {
          display: none;
        }

        [part="date"][role="button"]:not([disabled]):active::before {
          display: block;
        }

        [part="date"][selected]::before {
          box-shadow: none;
        }
      }

      /* Disabled */

      :host([disabled]) * {
        color: var(--lumo-disabled-text-color) !important;
      }
    </style>
  </template>
</dom-module><custom-style>
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 2px transparent;
      }
    }
  </style>
</custom-style>`;document.head.appendChild(o.content);i(93),i(116);var s=r.a`<dom-module id="lumo-date-picker" theme-for="vaadin-date-picker">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-calendar);
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      @media (max-width: 420px), (max-height: 420px) {
        [part="overlay-content"] {
          height: 70vh;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(s.content);i(112);var l=r.a`<dom-module id="lumo-date-picker-text-field" theme-for="vaadin-date-picker-text-field">
  <template>
    <style>
      :not(*):placeholder-shown, /* to prevent broken styles on IE */
      :host([dir="rtl"]) [part="value"]:placeholder-shown,
      :host([dir="rtl"]) [part="input-field"] ::slotted(input:placeholder-shown) {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([dir="rtl"]) [part="value"],
      :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(l.content);i(174),i(165)},,function(e,t,i){"use strict";i(32);var r=i(6).a`<dom-module id="lumo-form-layout" theme-for="vaadin-form-layout">
  <template>
    <style>
      :host {
        --vaadin-form-layout-column-spacing: var(--lumo-space-l);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content);i(163)},function(e,t,i){"use strict";i(36),i(50),i(32),i(46),i(140);var r=i(6).a`<dom-module id="lumo-custom-field" theme-for="vaadin-custom-field">
  <template>
    <style include="lumo-required-field">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        /* align with text-field height + vertical paddings */
        line-height: calc(var(--lumo-text-field-size) + 2 * var(--lumo-space-xs));
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: 0;
      }

      :host::before {
        margin-top: var(--lumo-space-xs);
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      /* align with text-field label */
      :host([has-label]) [part="label"] {
        padding-bottom: calc(0.5em - var(--lumo-space-xs));
      }

      :host(:not([has-label])) [part="label"],
      :host(:not([has-label]))::before {
        display: none;
      }

      /* align with text-field error message */
      :host([invalid]) [part="error-message"]:not(:empty)::before {
        height: calc(0.4em - var(--lumo-space-xs));
      }

      :host([focused]:not([readonly]):not([disabled])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      :host(:hover:not([readonly]):not([disabled]):not([focused])) [part="label"],
      :host(:hover:not([readonly]):not([disabled]):not([focused])) [part="helper-text"],
      :host(:hover:not([readonly]):not([disabled]):not([focused])) [part="helper-text"] ::slotted(*) {
        color: var(--lumo-body-text-color);
      }

      :host([has-helper]) [part="helper-text"]::before {
        content: "";
        display: block;
        height: 0.4em;
      }

      [part="helper-text"],
      [part="helper-text"] ::slotted(*) {
        display: block;
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-xs);
        margin-left: calc(var(--lumo-border-radius-m) / 4);
        transition: color 0.2s;
      }

      /* helper-text position */

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::before {
        display: none;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::after {
        content: "";
        display: block;
        height: 0.4em;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="label"] {
        order: 0;
        padding-bottom: 0.4em;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"] {
        order: 1;
      }

      :host([has-helper][theme~="helper-above-field"]) .inputs-wrapper {
        order: 2;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="error-message"] {
        order: 3;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([disabled]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }
      }

      /* Disabled style */

      :host([disabled]) [part="label"] {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content);i(167)},,,function(e,t,i){"use strict";var r=i(68),n=i(6),a=n.a`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;a.setAttribute("style","display: none;"),document.head.appendChild(a.content);var o=document.createElement("style");o.textContent="[hidden] { display: none !important; }",document.head.appendChild(o);i(154);var s=i(58),l=i(30);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(s.a)({_template:n.a`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:r.a.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Object(l.a)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Object(l.a)(this.root).appendChild(this._img))}})},,function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var r=i(11),n=i(54),a=i(19),o=i(34),s=i(15),l=i(13),d=i(9);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class h extends r.a{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=a.a.debounce(this.__renderDebouncer,s.c,()=>this.__render()),Object(o.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();var e=Object(d.a)(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Object(d.a)(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){Object(o.b)()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){var e=Object(d.a)(this).parentNode;if(e){if(!this.__ctor){var t=Object(d.a)(this).querySelector("template");if(!t){var i=new MutationObserver(()=>{if(!Object(d.a)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");i.disconnect(),this.__render()});return i.observe(this,{childList:!0}),!1}this.__ctor=Object(n.b)(t,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(l.g)(e)]=!0))}})}if(this.__instance){this.__syncHostProperties();var r=this.__instance.children;if(r&&r.length)if(Object(d.a)(this).previousSibling!==r[r.length-1])for(var a,o=0;o<r.length&&(a=r[o]);o++)Object(d.a)(e).insertBefore(a,this)}else this.__instance=new this.__ctor,Object(d.a)(e).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){var e=this.__invalidProps;if(e){for(var t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){var e=this.__instance.children;if(e&&e.length){var t=Object(d.a)(e[0]).parentNode;if(t){t=Object(d.a)(t);for(var i,r=0;r<e.length&&(i=e[r]);r++)t.removeChild(i)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){var e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(h.is,h)},function(e,t,i){"use strict";i(36),i(32),i(40),i(224),i(141);var r=i(6).a`<dom-module id="lumo-combo-box-overlay" theme-for="vaadin-combo-box-overlay">
  <template>
    <style include="lumo-overlay lumo-menu-overlay-core">
      [part="content"] {
        padding: 0;
      }

      :host {
        /* TODO: using a legacy mixin (unsupported) */
        --iron-list-items-container: {
          border-width: var(--lumo-space-xs);
          border-style: solid;
          border-color: transparent;
        };
      }

      /* TODO: workaround ShadyCSS issue when using inside of the dom-if */
      :host([opened]) {
        --iron-list-items-container_-_border-width: var(--lumo-space-xs);
        --iron-list-items-container_-_border-style: solid;
        --iron-list-items-container_-_border-color: transparent;
      }

      /* Loading state */

      /* When items are empty, the sinner needs some room */
      :host(:not([closing])) [part~="content"] {
        min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
      }

      [part~="overlay"] {
        position: relative;
      }

      :host([loading]) [part~="loader"] {
        box-sizing: border-box;
        width: var(--lumo-icon-size-s);
        height: var(--lumo-icon-size-s);
        position: absolute;
        z-index: 1;
        left: var(--lumo-space-s);
        right: var(--lumo-space-s);
        top: var(--lumo-space-s);
        margin-left: auto;
        margin-inline-start: auto;
        margin-inline-end: 0;
        border: 2px solid transparent;
        border-color:
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color)
          var(--lumo-primary-color);
        border-radius: calc(0.5 * var(--lumo-icon-size-s));
        opacity: 0;
        animation:
          1s linear infinite lumo-combo-box-loader-rotate,
          .3s .1s lumo-combo-box-loader-fade-in both;
        pointer-events: none;
      }

      @keyframes lumo-combo-box-loader-fade-in {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }

      @keyframes lumo-combo-box-loader-rotate {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }

      /* RTL specific styles */

      :host([loading][dir="rtl"]) [part~="loader"] {
        left: auto;
        margin-left: 0;
        margin-right: auto;
        margin-inline-start: 0;
        margin-inline-end: auto;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content)},function(e,t,i){"use strict";i(36),i(32),i(40),i(188);var r=i(6).a`<dom-module id="lumo-combo-box-item" theme-for="vaadin-combo-box-item">
  <template>
    <style include="lumo-item">
      /* TODO partly duplicated from vaadin-list-box styles. Should find a way to make it DRY */

      :host {
        cursor: default;
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        padding-left: calc(var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        transition: background-color 100ms;
        border-radius: var(--lumo-border-radius);
        overflow: hidden;
        --_lumo-item-selected-icon-display: block;
      }

      /* ShadyCSS workaround (show the selected item checkmark) */
      :host::before {
        display: block;
      }

      :host(:hover) {
        background-color: var(--lumo-primary-color-10pct);
      }

      :host([focused]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        :host(:hover) {
          background-color: transparent;
        }

        :host([focused]:not([disabled])) {
          box-shadow: none;
        }
      }

      /* RTL specific styles */
      :host([dir="rtl"]) {
        padding-right: calc(var(--lumo-border-radius) / 4);
        padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content)},function(e,t,i){"use strict";i(68),i(106);var r=i(76),n=i(172),a=i(152),o=i(58),s=i(30),l=i(151),d=i(15),h=i(19),c=i(34),u=i(6),p=i(13),m=(i(54),navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)),f=m&&m[1]>=8;Object(o.a)({_template:u.a`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        @apply --iron-list-items-container;
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:!1},selectedItem:{type:Object,notify:!0},selectedItems:{type:Object,notify:!0},multiSelection:{type:Boolean,value:!1},scrollOffset:{type:Number,value:0}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[l.a,r.a,n.a,a.a],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return(this.grid?this._physicalRows*this._rowHeight:this._physicalSize)-this._viewportHeight},get _itemsParent(){return Object(s.a)(Object(s.a)(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var e=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,e-this._physicalCount)},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this.grid&&(e-=e%this._itemsPerRow),this._virtualStartVal=e},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this.grid&&(e-=e%this._itemsPerRow),this._physicalStartVal=e},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(e){this._physicalCountVal=e},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var e=this._firstVisibleIndexVal;if(null==e){var t=this._physicalTop+this._scrollOffset;e=this._iterateItems((function(e,i){return(t+=this._getPhysicalSizeIncrement(e))>this._scrollPosition?this.grid?i-i%this._itemsPerRow:i:this.grid&&this._virtualCount-1===i?i-i%this._itemsPerRow:void 0}))||0,this._firstVisibleIndexVal=e}return e},get lastVisibleIndex(){var e=this._lastVisibleIndexVal;if(null==e){if(this.grid)e=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var t=this._physicalTop+this._scrollOffset;this._iterateItems((function(i,r){t<this._scrollBottom&&(e=r),t+=this._getPhysicalSizeIncrement(i)}))}this._lastVisibleIndexVal=e}return e},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),!0)},attached:function(){this._debounce("_render",this._render,d.a),this.listen(this,"iron-resize","_resizeHandler"),this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler"),this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(e){this.style.webkitOverflowScrolling=e===this?"touch":"",this.style.overflowY=e===this?"auto":"",this._lastVisibleIndexVal=null,this._firstVisibleIndexVal=null,this._debounce("_render",this._render,d.a)},updateViewportBoundaries:function(){var e=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),t=e-this._scrollPosition,i=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;var r=Math.round(t/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+r,this._physicalStart=this._physicalStart+r,this._physicalTop=Math.min(Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){var n=this._getReusables(i);i?(this._physicalTop=n.physicalTop,this._virtualStart=this._virtualStart+n.indexes.length,this._physicalStart=this._physicalStart+n.indexes.length):(this._virtualStart=this._virtualStart-n.indexes.length,this._physicalStart=this._physicalStart-n.indexes.length),this._update(n.indexes,i?null:n.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),d.c)}},_getReusables:function(e){var t,i,r,n=[],a=this._hiddenContentSize*this._ratio,o=this._virtualStart,s=this._virtualEnd,l=this._physicalCount,d=this._physicalTop+this._scrollOffset,h=this._physicalBottom+this._scrollOffset,c=this._scrollPosition,u=this._scrollBottom;for(e?(t=this._physicalStart,this._physicalEnd,i=c-d):(t=this._physicalEnd,this._physicalStart,i=h-u);i-=r=this._getPhysicalSizeIncrement(t),!(n.length>=l||i<=a);)if(e){if(s+n.length+1>=this._virtualCount)break;if(d+r>=c-this._scrollOffset)break;n.push(t),d+=r,t=(t+1)%l}else{if(o-n.length<=0)break;if(d+this._physicalSize-r<=u)break;n.push(t),d-=r,t=0===t?l-1:t-1}return{indexes:n,physicalTop:d-this._scrollOffset}},_update:function(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._manageFocus(),this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){var i=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(i)}this._positionItems(),this._updateScrollerSize()}},_createPool:function(e){var t,i;this._ensureTemplatized();var r=new Array(e);for(t=0;t<e;t++)i=this.stamp(null),r[t]=i.root.querySelector("*"),this._itemsParent.appendChild(i.root);return r},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(e){var t=this._clamp(this._physicalCount+e,3,this._virtualCount-this._virtualStart);if(t=this._convertIndexToCompleteRow(t),this.grid){var i=t%this._itemsPerRow;i&&t-i<=this._physicalCount&&(t+=this._itemsPerRow),t-=i}var r=t-this._physicalCount,n=Math.round(.5*this._physicalCount);if(!(r<0)){if(r>0){var a=window.performance.now();[].push.apply(this._physicalItems,this._createPool(r));for(var o=0;o<r;o++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+r,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+r),this._update(),this._templateCost=(window.performance.now()-a)/r,n=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===n||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,n)),d.b):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,n),d.c))}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){var e=this._getReusables(!0);this._physicalTop=e.physicalTop,this._virtualStart=this._virtualStart+e.indexes.length,this._physicalStart=this._physicalStart+e.indexes.length,this._update(e.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_ensureTemplatized:function(){if(!this.ctor){this._userTemplate=this.queryEffectiveChildren("template"),this._userTemplate||console.warn("iron-list requires a template to be provided in light-dom");var e={__key__:!0};e[this.as]=!0,e[this.indexAs]=!0,e[this.selectedAs]=!0,e.tabIndex=!0,this._instanceProps=e,this.templatize(this._userTemplate,this.mutableData)}},_gridChanged:function(e,t){void 0!==t&&(this.notifyResize(),Object(c.b)(),e&&this._updateGridMetrics())},_itemsChanged:function(e){if("items"===e.path)this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,d.a);else if("items.splices"===e.path){if(this._adjustVirtualIndex(e.value.indexSplices),this._virtualCount=this.items?this.items.length:0,e.value.indexSplices.some((function(e){return e.addedCount>0||e.removed.length>0}))){var t=this._getActiveElement();this.contains(t)&&t.blur()}var i=e.value.indexSplices.some((function(e){return e.index+e.addedCount>=this._virtualStart&&e.index<=this._virtualEnd}),this);this._isClientFull()&&!i||this._debounce("_render",this._render,d.a)}else"items.length"!==e.path&&this._forwardItemPath(e.path,e.value)},_forwardItemPath:function(e,t){var i,r,n,a=(e=e.slice(6)).indexOf(".");-1===a&&(a=e.length);var o=this.modelForElement(this._offscreenFocusedItem),s=parseInt(e.substring(0,a),10);(i=this._isIndexRendered(s))?(r=this._getPhysicalIndex(s),n=this.modelForElement(this._physicalItems[r])):o&&(n=o),n&&n[this.indexAs]===s&&(e=e.substring(a+1),e=this.as+(e?"."+e:""),n._setPendingPropertyOrPath(e,t,!1,!0),n._flushProperties&&n._flushProperties(),i&&(this._updateMetrics([r]),this._positionItems(),this._updateScrollerSize()))},_adjustVirtualIndex:function(e){e.forEach((function(e){if(e.removed.forEach(this._removeItem,this),e.index<this._virtualStart){var t=Math.max(e.addedCount-e.removed.length,e.index-this._virtualStart);this._virtualStart=this._virtualStart+t,this._focusedVirtualIndex>=0&&(this._focusedVirtualIndex=this._focusedVirtualIndex+t)}}),this)},_removeItem:function(e){this.$.selector.deselect(e),this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===e&&this._removeFocusedItem()},_iterateItems:function(e,t){var i,r,n,a;if(2===arguments.length&&t){for(a=0;a<t.length;a++)if(i=t[a],r=this._computeVidx(i),null!=(n=e.call(this,i,r)))return n}else{for(i=this._physicalStart,r=this._virtualStart;i<this._physicalCount;i++,r++)if(null!=(n=e.call(this,i,r)))return n;for(i=0;i<this._physicalStart;i++,r++)if(null!=(n=e.call(this,i,r)))return n}},_computeVidx:function(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_assignModels:function(e){this._iterateItems((function(e,t){var i=this._physicalItems[e],r=this.items&&this.items[t];if(null!=r){var n=this.modelForElement(i);n.__key__=null,this._forwardProperty(n,this.as,r),this._forwardProperty(n,this.selectedAs,this.$.selector.isSelected(r)),this._forwardProperty(n,this.indexAs,t),this._forwardProperty(n,"tabIndex",this._focusedVirtualIndex===t?0:-1),this._physicalIndexForKey[n.__key__]=e,n._flushProperties&&n._flushProperties(!0),i.removeAttribute("hidden")}else i.setAttribute("hidden","")}),e)},_updateMetrics:function(e){Object(c.b)();var t=0,i=0,r=this._physicalAverageCount,n=this._physicalAverage;this._iterateItems((function(e,r){i+=this._physicalSizes[e],this._physicalSizes[e]=this._physicalItems[e].offsetHeight,t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0}),e),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(i=1===this._itemsPerRow?i:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+t-i,this._itemsPerRow=1),this._physicalAverageCount!==r&&(this._physicalAverage=Math.round((n*r+t)/this._physicalAverageCount))},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200,this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200,this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var e=this._physicalTop;if(this.grid){var t=this._itemsPerRow*this._itemWidth,i=(this._viewportWidth-t)/2;this._iterateItems((function(t,r){var n=r%this._itemsPerRow,a=Math.floor(n*this._itemWidth+i);this._isRTL&&(a*=-1),this.translate3d(a+"px",e+"px",0,this._physicalItems[t]),this._shouldRenderNextRow(r)&&(e+=this._rowHeight)}))}else{var r=[];this._iterateItems((function(t,i){var n=this._physicalItems[t];this.translate3d(0,e+"px",0,n),e+=this._physicalSizes[t];var a=n.id;a&&r.push(a)})),r.length&&this.setAttribute("aria-owns",r.join(" "))}},_getPhysicalSizeIncrement:function(e){return this.grid?this._computeVidx(e)%this._itemsPerRow!=this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[e]},_shouldRenderNextRow:function(e){return e%this._itemsPerRow==this._itemsPerRow-1},_adjustScrollPosition:function(){var e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop=this._physicalTop-e;var t=this._scrollPosition;!f&&t>0&&this._resetScrollPosition(t-e)}},_resetScrollPosition:function(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(e){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((e=(e=(e=e||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||this.grid&&this.$.items.style.height<this._estScrollHeight)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToItem:function(e){return this.scrollToIndex(this.items.indexOf(e))},scrollToIndex:function(e){if(!("number"!=typeof e||e<0||e>this.items.length-1)&&(Object(c.b)(),0!==this._physicalCount)){e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=this.grid?e-2*this._itemsPerRow:e-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var t=this._physicalStart,i=this._virtualStart,r=0,n=this._hiddenContentSize;i<e&&r<=n;)r+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,i++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+r),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",(function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),d.a)},selectItem:function(e){return this.selectIndex(this.items.indexOf(e))},selectIndex:function(e){if(!(e<0||e>=this._virtualCount)){if(!this.multiSelection&&this.selectedItem&&this.clearSelection(),this._isIndexRendered(e)){var t=this.modelForElement(this._physicalItems[this._getPhysicalIndex(e)]);t&&(t[this.selectedAs]=!0),this.updateSizeForIndex(e)}this.$.selector.selectIndex(e)}},deselectItem:function(e){return this.deselectIndex(this.items.indexOf(e))},deselectIndex:function(e){if(!(e<0||e>=this._virtualCount)){if(this._isIndexRendered(e))this.modelForElement(this._physicalItems[this._getPhysicalIndex(e)])[this.selectedAs]=!1,this.updateSizeForIndex(e);this.$.selector.deselectIndex(e)}},toggleSelectionForItem:function(e){return this.toggleSelectionForIndex(this.items.indexOf(e))},toggleSelectionForIndex:function(e){(this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(e):this.$.selector.isSelected(this.items[e]))?this.deselectIndex(e):this.selectIndex(e)},clearSelection:function(){this._iterateItems((function(e,t){this.modelForElement(this._physicalItems[e])[this.selectedAs]=!1})),this.$.selector.clearSelection()},_selectionEnabledChanged:function(e){(e?this.listen:this.unlisten).call(this,this,"tap","_selectionHandler")},_selectionHandler:function(e){var t=this.modelForElement(e.target);if(t){var i,r,n=Object(s.a)(e).path[0],a=this._getActiveElement(),o=this._physicalItems[this._getPhysicalIndex(t[this.indexAs])];"input"!==n.localName&&"button"!==n.localName&&"select"!==n.localName&&(i=t.tabIndex,t.tabIndex=-100,r=a?a.tabIndex:-1,t.tabIndex=i,a&&o!==a&&o.contains(a)&&-100!==r||this.toggleSelectionForItem(t[this.as]))}},_multiSelectionChanged:function(e){this.clearSelection(),this.$.selector.multi=e},updateSizeForItem:function(e){return this.updateSizeForIndex(this.items.indexOf(e))},updateSizeForIndex:function(e){return this._isIndexRendered(e)?(this._updateMetrics([this._getPhysicalIndex(e)]),this._positionItems(),null):null},_manageFocus:function(){var e=this._focusedVirtualIndex;e>=0&&e<this._virtualCount?this._isIndexRendered(e)?this._restoreFocusedItem():this._createFocusBackfillItem():this._virtualCount>0&&this._physicalCount>0&&(this._focusedPhysicalIndex=this._physicalStart,this._focusedVirtualIndex=this._virtualStart,this._focusedItem=this._physicalItems[this._physicalStart])},_convertIndexToCompleteRow:function(e){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(e/this._itemsPerRow)*this._itemsPerRow:e},_isIndexRendered:function(e){return e>=this._virtualStart&&e<=this._virtualEnd},_isIndexVisible:function(e){return e>=this.firstVisibleIndex&&e<=this.lastVisibleIndex},_getPhysicalIndex:function(e){return(this._physicalStart+(e-this._virtualStart))%this._physicalCount},focusItem:function(e){this._focusPhysicalItem(e)},_focusPhysicalItem:function(e){if(!(e<0||e>=this._virtualCount)){this._restoreFocusedItem(),this._isIndexRendered(e)||this.scrollToIndex(e);var t,i=this._physicalItems[this._getPhysicalIndex(e)],r=this.modelForElement(i);r.tabIndex=-100,-100===i.tabIndex&&(t=i),t||(t=Object(s.a)(i).querySelector('[tabindex="-100"]')),r.tabIndex=0,this._focusedVirtualIndex=e,t&&t.focus()}},_removeFocusedItem:function(){this._offscreenFocusedItem&&this._itemsParent.removeChild(this._offscreenFocusedItem),this._offscreenFocusedItem=null,this._focusBackfillItem=null,this._focusedItem=null,this._focusedVirtualIndex=-1,this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var e=this._focusedPhysicalIndex;if(!(this._offscreenFocusedItem||this._focusedVirtualIndex<0)){if(!this._focusBackfillItem){var t=this.stamp(null);this._focusBackfillItem=t.root.querySelector("*"),this._itemsParent.appendChild(t.root)}this._offscreenFocusedItem=this._physicalItems[e],this.modelForElement(this._offscreenFocusedItem).tabIndex=0,this._physicalItems[e]=this._focusBackfillItem,this._focusedPhysicalIndex=e,this.translate3d(0,"-10000px",0,this._offscreenFocusedItem)}},_restoreFocusedItem:function(){if(this._offscreenFocusedItem&&!(this._focusedVirtualIndex<0)){this._assignModels();var e=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex),t=this._physicalItems[e];if(t){var i=this.modelForElement(t),r=this.modelForElement(this._offscreenFocusedItem);i[this.as]===r[this.as]?(this._focusBackfillItem=t,i.tabIndex=-1,this._physicalItems[e]=this._offscreenFocusedItem,this.translate3d(0,"-10000px",0,this._focusBackfillItem)):(this._removeFocusedItem(),this._focusBackfillItem=null),this._offscreenFocusedItem=null}}},_didFocus:function(e){var t=this.modelForElement(e.target),i=this.modelForElement(this._focusedItem),r=null!==this._offscreenFocusedItem,n=this._focusedVirtualIndex;t&&(i===t?this._isIndexVisible(n)||this.scrollToIndex(n):(this._restoreFocusedItem(),i&&(i.tabIndex=-1),t.tabIndex=0,n=t[this.indexAs],this._focusedVirtualIndex=n,this._focusedPhysicalIndex=this._getPhysicalIndex(n),this._focusedItem=this._physicalItems[this._focusedPhysicalIndex],r&&!this._offscreenFocusedItem&&this._update()))},_keydownHandler:function(e){switch(e.keyCode){case 40:this._focusedVirtualIndex<this._virtualCount-1&&e.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:this._focusedVirtualIndex>0&&e.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex),this.selectionEnabled&&this._selectionHandler(e)}},_clamp:function(e,t,i){return Math.min(i,Math.max(t,e))},_debounce:function(e,t,i){this._debouncers=this._debouncers||{},this._debouncers[e]=h.a.debounce(this._debouncers[e],i,t.bind(this)),Object(c.a)(this._debouncers[e])},_forwardProperty:function(e,t,i){e._setPendingProperty(t,i)},_forwardHostPropV2:function(e,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(i){i&&this.modelForElement(i).forwardHostProp(e,t)}),this)},_notifyInstancePropV2:function(e,t,i){if(Object(p.e)(this.as,t)){var r=e[this.indexAs];t==this.as&&(this.items[r]=i),this.notifyPath(Object(p.i)(this.as,"items."+r,t),i)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(e,t,i){0===t.indexOf(this.as+".")&&this.notifyPath("items."+e.__key__+"."+t.slice(this.as.length+1),i)},_forwardParentPath:function(e,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(i){i&&this.modelForElement(i).notifyPath(e,t)}),this)},_forwardParentProp:function(e,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(i){i&&(this.modelForElement(i)[e]=t)}),this)},_getActiveElement:function(){var e=this._itemsParent.node.domHost;return Object(s.a)(e?e.root:document).activeElement}})},function(e,t,i){"use strict";i(68);var r=i(154),n=i(58),a=i(30);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(n.a)({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new r.a({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(e){return this.name+":"+e}),this)},applyIcon:function(e,t){this.removeIcon(e);var i=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(i){var r=Object(a.a)(e.root||e);return r.insertBefore(i,r.childNodes[0]),e._svgIcon=i}return null},removeIcon:function(e){e._svgIcon&&(Object(a.a)(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===t.getAttribute("dir")}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&"rtl"===window.getComputedStyle(e).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var e=Object.create(null);return Object(a.a)(this).querySelectorAll("[id]").forEach((function(t){e[t.id]=t})),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,i){if(e){var r=e.cloneNode(!0),n=document.createElementNS("http://www.w3.org/2000/svg","svg"),a=r.getAttribute("viewBox")||"0 0 "+t+" "+t,o="pointer-events: none; display: block; width: 100%; height: 100%;";return i&&r.hasAttribute("mirror-in-rtl")&&(o+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),n.setAttribute("viewBox",a),n.setAttribute("preserveAspectRatio","xMidYMid meet"),n.setAttribute("focusable","false"),n.style.cssText=o,n.appendChild(r).removeAttribute("id"),n}return null}})},function(e,t,i){"use strict";var r=i(11),n=i(17),a=(i(186),i(176),i(6));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class o extends(Object(n.a)(r.a)){static get template(){return a.a`
    <style>
      :host {
        display: block;
      }

      [hidden] {
        display: none;
      }
    </style>

    <div part="row">
      <div part="info">
        <div part="done-icon" hidden\$="[[!file.complete]]"></div>
        <div part="warning-icon" hidden\$="[[!file.error]]"></div>

        <div part="meta">
          <div part="name" id="name">[[file.name]]</div>
          <div part="status" hidden\$="[[!file.status]]" id="status">[[file.status]]</div>
          <div part="error" id="error" hidden\$="[[!file.error]]">[[file.error]]</div>
        </div>
      </div>
      <div part="commands">
        <div part="start-button" file-event="file-start" on-click="_fireFileEvent" hidden\$="[[!file.held]]"></div>
        <div part="retry-button" file-event="file-retry" on-click="_fireFileEvent" hidden\$="[[!file.error]]"></div>
        <div part="clear-button" file-event="file-abort" on-click="_fireFileEvent"></div>
      </div>
    </div>

    <vaadin-progress-bar part="progress" id="progress" value\$="[[_formatProgressValue(file.progress)]]" error\$="[[file.error]]" indeterminate\$="[[file.indeterminate]]" uploading\$="[[file.uploading]]" complete\$="[[file.complete]]">
    </vaadin-progress-bar>
`}static get is(){return"vaadin-upload-file"}static get properties(){return{file:Object}}static get observers(){return["_fileAborted(file.abort)",'_toggleHostAttribute(file.error, "error")','_toggleHostAttribute(file.indeterminate, "indeterminate")','_toggleHostAttribute(file.uploading, "uploading")','_toggleHostAttribute(file.complete, "complete")']}_fileAborted(e){e&&this._remove()}_remove(){this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:this.file},bubbles:!0,composed:!0}))}_formatProgressValue(e){return e/100}_fireFileEvent(e){return e.preventDefault(),this.dispatchEvent(new CustomEvent(e.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}_toggleHostAttribute(e,t){var i=Boolean(e);this.hasAttribute(t)!==i&&(i?this.setAttribute(t,""):this.removeAttribute(t))}}customElements.define(o.is,o)},,,,,,,,,function(e,t,i){"use strict";var r=i(11),n=(i(205),i(17)),a=i(80),o=i(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class s extends(Object(n.a)(Object(a.a)(r.a))){static get template(){return o.a`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
         display: none;
      }
    </style>
    <div part="content" id="content"></div>
`}static get is(){return"vaadin-combo-box-item"}static get properties(){return{index:Number,item:Object,label:String,selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},_itemTemplateInstance:Object,renderer:Function,_oldRenderer:Function}}static get observers(){return["_rendererOrItemChanged(renderer, index, item.*)","_updateLabel(label, _itemTemplateInstance)",'_updateTemplateInstanceVariable("index", index, _itemTemplateInstance)','_updateTemplateInstanceVariable("item", item, _itemTemplateInstance)','_updateTemplateInstanceVariable("selected", selected, _itemTemplateInstance)','_updateTemplateInstanceVariable("focused", focused, _itemTemplateInstance)']}connectedCallback(){if(super.connectedCallback(),!this._itemTemplateInstance){var e=this.getRootNode().host.getRootNode().host.__dataHost.getRootNode().host;this._comboBox=e.getRootNode().host,this._comboBox._ensureTemplatized(),this._comboBox._TemplateClass&&(this._itemTemplateInstance=new this._comboBox._TemplateClass({}),this.$.content.textContent="",this.$.content.appendChild(this._itemTemplateInstance.root))}var t=this._comboBox.getAttribute("dir");t&&this.setAttribute("dir",t)}_render(){if(this.renderer){var e={index:this.index,item:this.item};this.renderer(this.$.content,this._comboBox,e)}}_rendererOrItemChanged(e,t,i){void 0!==i&&void 0!==t&&(this._oldRenderer!==e&&(this.$.content.innerHTML=""),e&&(this._oldRenderer=e,this._render()))}_updateLabel(e,t){void 0===t&&this.$.content&&!this.renderer&&(this.$.content.textContent=e)}_updateTemplateInstanceVariable(e,t,i){void 0!==e&&void 0!==t&&void 0!==i&&(i[e]=t)}}customElements.define(s.is,s);var l=i(130),d=i(114),h=i(76),c=i(77),u=document.createElement("template");u.innerHTML='<dom-module id="vaadin-combo-box-overlay-styles" theme-for="vaadin-combo-box-overlay">\n  <template>\n    <style>\n      :host {\n        width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(u.content);class p extends d.a{static get is(){return"vaadin-combo-box-overlay"}connectedCallback(){super.connectedCallback();var e=this.__dataHost.getRootNode().host,t=e&&e.getRootNode().host,i=t&&t.getAttribute("dir");i&&this.setAttribute("dir",i)}ready(){super.ready();var e=document.createElement("div");e.setAttribute("part","loader");var t=this.shadowRoot.querySelector('[part~="content"]');t.parentNode.insertBefore(e,t)}}customElements.define(p.is,p);class m extends(Object(l.a)(Object(c.b)(h.a,r.a))){static get template(){return o.a`
    <style>
      :host {
        display: block;
      }

      :host > #overlay {
        display: none;
      }
    </style>
    <vaadin-combo-box-overlay id="overlay" hidden\$="[[hidden]]" opened="[[opened]]" template="{{template}}" style="align-items: stretch; margin: 0;" theme\$="[[theme]]">
      <slot></slot>
    </vaadin-combo-box-overlay>
`}static get is(){return"vaadin-combo-box-dropdown"}static get properties(){return{opened:{type:Boolean,observer:"_openedChanged"},template:{type:Object,notify:!0},positionTarget:{type:Object},alignedAbove:{type:Boolean,value:!1},theme:String}}constructor(){super(),this._boundSetPosition=this._setPosition.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("iron-resize",this._boundSetPosition)}ready(){super.ready(),this.$.overlay.addEventListener("vaadin-overlay-outside-click",e=>{e.preventDefault()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("iron-resize",this._boundSetPosition),this.opened=!1}notifyResize(){super.notifyResize(),this.positionTarget&&this.opened&&(this._setPosition(),requestAnimationFrame(this._setPosition.bind(this)))}_openedChanged(e,t){!!e!=!!t&&(e?(this.$.overlay.style.position=this._isPositionFixed(this.positionTarget)?"fixed":"absolute",this._setPosition(),window.addEventListener("scroll",this._boundSetPosition,!0),document.addEventListener("click",this._boundOutsideClickListener,!0),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0}))):this.__emptyItems||(window.removeEventListener("scroll",this._boundSetPosition,!0),document.removeEventListener("click",this._boundOutsideClickListener,!0),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0}))))}_outsideClickListener(e){var t=e.composedPath();t.indexOf(this.positionTarget)<0&&t.indexOf(this.$.overlay)<0&&(this.opened=!1)}_isPositionFixed(e){var t=this._getOffsetParent(e);return"fixed"===window.getComputedStyle(e).position||t&&this._isPositionFixed(t)}_getOffsetParent(e){if(e.assignedSlot)return e.assignedSlot.parentElement;if(e.parentElement)return e.offsetParent;var t=e.parentNode;return t&&11===t.nodeType&&t.host?t.host:void 0}_verticalOffset(e,t){return this.alignedAbove?-e.height:t.height}_shouldAlignAbove(e){return(window.innerHeight-e.bottom-Math.min(document.body.scrollTop,0))/window.innerHeight<.3}_getCustomWidth(){return window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-combo-box-overlay-width"):getComputedStyle(this).getPropertyValue("--vaadin-combo-box-overlay-width")}_setOverlayWidth(){var e=this.positionTarget.clientWidth+"px",t=this._getCustomWidth();window.ShadyCSS&&!window.ShadyCSS.nativeCss?window.ShadyCSS.styleSubtree(this.$.overlay,{"--vaadin-combo-box-overlay-width":t,"--_vaadin-combo-box-overlay-default-width":e}):(this.$.overlay.style.setProperty("--_vaadin-combo-box-overlay-default-width",e),""===t?this.$.overlay.style.removeProperty("--vaadin-combo-box-overlay-width"):this.$.overlay.style.setProperty("--vaadin-combo-box-overlay-width",t))}_setPosition(e){if(!this.hidden){if(e&&e.target){var t=e.target===document?document.body:e.target,i=this.$.overlay.parentElement;if(!t.contains(this.$.overlay)&&!t.contains(this.positionTarget)||i!==document.body)return}var r=this.positionTarget.getBoundingClientRect();this.alignedAbove=this._shouldAlignAbove(r);var n=this.$.overlay.getBoundingClientRect();this._translateX=r.left-n.left+(this._translateX||0),this._translateY=r.top-n.top+(this._translateY||0)+this._verticalOffset(n,r);var a=window.devicePixelRatio||1;this._translateX=Math.round(this._translateX*a)/a,this._translateY=Math.round(this._translateY*a)/a,this.$.overlay.style.transform=`translate3d(${this._translateX}px, ${this._translateY}px, 0)`,this.$.overlay.style.justifyContent=this.alignedAbove?"flex-end":"flex-start",this._setOverlayWidth(),this.dispatchEvent(new CustomEvent("position-changed"))}}}customElements.define(m.is,m);var f=i(97),v=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})();
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class _ extends class extends r.a{}{static get template(){return o.a`
    <vaadin-combo-box-dropdown id="dropdown" hidden="[[_hidden(_items.*, loading)]]" position-target="[[positionTarget]]" on-template-changed="_templateChanged" on-position-changed="_setOverlayHeight" disable-upgrade="" theme="[[theme]]">
      <template>
        <style>
          #scroller {
            overflow: auto;

            /* Fixes item background from getting on top of scrollbars on Safari */
            transform: translate3d(0, 0, 0);

            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */
            -webkit-overflow-scrolling: touch;

            /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
            box-shadow: 0 0 0 white;
          }
        </style>
        <div id="scroller" on-click="_stopPropagation">
          <iron-list id="selector" role="listbox" items="[[_getItems(opened, _items)]]" scroll-target="[[_scroller]]">
            <template>
              <vaadin-combo-box-item on-click="_onItemClick" index="[[__requestItemByIndex(item, index, _resetScrolling)]]" item="[[item]]" label="[[getItemLabel(item, _itemLabelPath)]]" selected="[[_isItemSelected(item, _selectedItem, _itemIdPath)]]" renderer="[[renderer]]" role\$="[[_getAriaRole(index)]]" aria-selected\$="[[_getAriaSelected(_focusedIndex,index)]]" focused="[[_isItemFocused(_focusedIndex,index)]]" tabindex="-1" theme\$="[[theme]]">
              </vaadin-combo-box-item>
            </template>
          </iron-list>
        </div>
      </template>
    </vaadin-combo-box-dropdown>
`}static get is(){return"vaadin-combo-box-dropdown-wrapper"}static get properties(){return{touchDevice:{type:Boolean,value:v},opened:Boolean,positionTarget:{type:Object},renderer:Function,loading:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_setOverlayHeight"},theme:String,filterChanged:{type:Boolean,value:!1},_resetScrolling:{type:Boolean,value:!1},_selectedItem:{type:Object},_items:{type:Object},_focusedIndex:{type:Number,value:-1,observer:"_focusedIndexChanged"},_focusedItem:{type:String,computed:"_getFocusedItem(_focusedIndex)"},_itemLabelPath:{type:String,value:"label"},_itemValuePath:{type:String,value:"value"},_selector:Object,_itemIdPath:String,_oldScrollerPosition:{type:Number,value:0}}}static get observers(){return["_selectorChanged(_selector)","_loadingChanged(loading)","_openedChanged(opened, _items, loading)","_restoreScrollerPosition(_items)"]}_fireTouchAction(e){this.dispatchEvent(new CustomEvent("vaadin-overlay-touch-action",{detail:{sourceEvent:e}}))}_getItems(e,t){if(e){if(this._isNotEmpty(t)&&this._selector&&!this.filterChanged){var i=this._selector.firstVisibleIndex;0!==i&&(this._oldScrollerPosition=i,this._resetScrolling=!0)}return this.filterChanged=!1,t}return[]}_restoreScrollerPosition(e){this._isNotEmpty(e)&&this._selector&&0!==this._oldScrollerPosition&&(this._scrollIntoView(Math.min(e.length-1,this._oldScrollerPosition)),this._resetScrolling=!1,this._oldScrollerPosition=0)}_isNotEmpty(e){return!this._isEmpty(e)}_isEmpty(e){return!e||!e.length}_openedChanged(e,t,i){if(this.$.dropdown.hasAttribute("disable-upgrade")){if(!e)return;this._initDropdown()}this._isEmpty(t)&&(this.$.dropdown.__emptyItems=!0),this.$.dropdown.opened=!(!e||!i&&!this._isNotEmpty(t)),this.$.dropdown.__emptyItems=!1}_initDropdown(){this.$.dropdown.removeAttribute("disable-upgrade"),this._templateChanged(),this._loadingChanged(this.loading),this.$.dropdown.$.overlay.addEventListener("touchend",e=>this._fireTouchAction(e)),this.$.dropdown.$.overlay.addEventListener("touchmove",e=>this._fireTouchAction(e)),this.$.dropdown.$.overlay.addEventListener("mousedown",e=>e.preventDefault()),/Trident/.test(navigator.userAgent)&&this._scroller.setAttribute("unselectable","on")}_templateChanged(e){this.$.dropdown.hasAttribute("disable-upgrade")||(this._selector=this.$.dropdown.$.overlay.content.querySelector("#selector"),this._scroller=this.$.dropdown.$.overlay.content.querySelector("#scroller"))}_loadingChanged(e){this.$.dropdown.hasAttribute("disable-upgrade")||(e?this.$.dropdown.$.overlay.setAttribute("loading",""):this.$.dropdown.$.overlay.removeAttribute("loading"))}_selectorChanged(e){this._patchWheelOverScrolling()}_setOverlayHeight(){if(this.opened&&this.positionTarget&&this._selector){var e=this.positionTarget.getBoundingClientRect();this._scroller.style.maxHeight=(window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-combo-box-overlay-max-height"):getComputedStyle(this).getPropertyValue("--vaadin-combo-box-overlay-max-height"))||"65vh";var t=this._maxOverlayHeight(e);this.$.dropdown.$.overlay.style.maxHeight=t,this._selector.style.maxHeight=t,this.updateViewportBoundaries()}}_maxOverlayHeight(e){return this.$.dropdown.alignedAbove?Math.max(e.top-8+Math.min(document.body.scrollTop,0),116)+"px":Math.max(document.documentElement.clientHeight-e.bottom-8,116)+"px"}_getFocusedItem(e){if(e>=0)return this._items[e]}_isItemSelected(e,t,i){return!(e instanceof f.a)&&(i&&void 0!==e&&void 0!==t?this.get(i,e)===this.get(i,t):e===t)}_onItemClick(e){e.detail&&e.detail.sourceEvent&&e.detail.sourceEvent.stopPropagation&&this._stopPropagation(e.detail.sourceEvent),this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.model.item}}))}indexOfLabel(e){if(this._items&&e)for(var t=0;t<this._items.length;t++)if(this.getItemLabel(this._items[t]).toString().toLowerCase()===e.toString().toLowerCase())return t;return-1}__requestItemByIndex(e,t,i){return e instanceof f.a&&void 0!==t&&!i&&this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:t,currentScrollerPos:this._oldScrollerPosition}})),t}getItemLabel(e,t){t=t||this._itemLabelPath;var i=e&&t?this.get(t,e):void 0;return null==i&&(i=e?e.toString():""),i}_isItemFocused(e,t){return e==t}_getAriaSelected(e,t){return this._isItemFocused(e,t).toString()}_getAriaRole(e){return void 0!==e&&"option"}_focusedIndexChanged(e){e>=0&&this._scrollIntoView(e)}_scrollIntoView(e){if(this.opened&&e>=0){var t=this._visibleItemsCount();if(void 0!==t){var i=e;e>this._selector.lastVisibleIndex-1?(this._selector.scrollToIndex(e),i=e-t+1):e>this._selector.firstVisibleIndex&&(i=this._selector.firstVisibleIndex),this._selector.scrollToIndex(Math.max(0,i));var r=this._selector._getPhysicalIndex(e),n=this._selector._physicalItems[r];if(n){var a=n.getBoundingClientRect(),o=this._scroller.getBoundingClientRect(),s=a.bottom-o.bottom+this._viewportTotalPaddingBottom;s>0&&(this._scroller.scrollTop+=s)}}}}ensureItemsRendered(){this._selector._render()}adjustScrollPosition(){this.opened&&this._items&&this._scrollIntoView(this._focusedIndex)}_patchWheelOverScrolling(){var e=this._selector;e.addEventListener("wheel",t=>{var i=e._scroller||e.scrollTarget,r=0===i.scrollTop,n=i.scrollHeight-i.scrollTop-i.clientHeight<=1;(r&&t.deltaY<0||n&&t.deltaY>0)&&t.preventDefault()})}updateViewportBoundaries(){this._cachedViewportTotalPaddingBottom=void 0,this._selector.updateViewportBoundaries()}get _viewportTotalPaddingBottom(){if(void 0===this._cachedViewportTotalPaddingBottom){var e=window.getComputedStyle(this._selector.$.items);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map(e=>parseInt(e,10)).reduce((e,t)=>e+t)}return this._cachedViewportTotalPaddingBottom}_visibleItemsCount(){if(this._selector)return this._selector.flushDebouncer("_debounceTemplate"),this._selector.scrollToIndex(this._selector.firstVisibleIndex),this.updateViewportBoundaries(),this._selector.lastVisibleIndex-this._selector.firstVisibleIndex+1}_selectItem(e){e="number"==typeof e?this._items[e]:e,this._selector.selectedItem!==e&&this._selector.selectItem(e)}_preventDefault(e){e.cancelable&&e.preventDefault()}_stopPropagation(e){e.stopPropagation()}_hidden(e){return!this.loading&&this._isEmpty(this._items)}}customElements.define(_.is,_)},,function(e,t,i){"use strict";var r=i(6).a`<dom-module id="lumo-email-field" theme-for="vaadin-email-field">
  <template>
    <style>
      :not(*):placeholder-shown, /* to prevent broken styles on IE */
      :host([dir="rtl"]) [part="value"]:placeholder-shown,
      :host([dir="rtl"]) [part="input-field"] ::slotted(input:placeholder-shown) {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([dir="rtl"]) [part="value"],
      :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content);i(112),i(169)},function(e,t,i){"use strict";i(203),i(204),i(93),i(116),i(112);var r=i(6).a`<dom-module id="lumo-combo-box" theme-for="vaadin-combo-box">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-dropdown);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content);i(170)},,,function(e,t,i){"use strict";i(62),i(36),i(50),i(32),i(40);var r=i(6).a`<dom-module id="lumo-progress-bar" theme-for="vaadin-progress-bar">
  <template>
    <style>
      :host {
        height: calc(var(--lumo-size-l) / 10);
        margin: var(--lumo-space-s) 0;
      }

      [part="bar"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
      }

      [part="value"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-primary-color);
        /* Use width instead of transform to preserve border radius */
        transform: none;
        width: calc(var(--vaadin-progress-value) * 100%);
        will-change: width;
        transition: 0.1s width linear;
      }

      /* Indeterminate mode */

      :host([indeterminate]) [part="value"] {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        width: 100%;
        background-color: transparent !important;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        opacity: 0.75;
        will-change: transform;
        animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(.645, .045, .355, 1);
      }

      @keyframes vaadin-progress-indeterminate {
        0% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
        }

        25% {
          transform: scaleX(0.4);
        }

        50% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        }

        50.1% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }

        75% {
          transform: scaleX(0.4);
        }

        100% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }
      }

      :host(:not([aria-valuenow])) [part="value"]::before,
      :host([indeterminate]) [part="value"]::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: var(--lumo-primary-color);
        will-change: opacity;
        animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(.645, .045, .355, 1);
      }

      @keyframes vaadin-progress-pulse3 {
        0% { opacity: 1; }
        10% { opacity: 0; }
        40% { opacity: 0; }
        50% { opacity: 1; }
        50.1% { opacity: 1; }
        60% { opacity: 0; }
        90% { opacity: 0; }
        100% { opacity: 1; }
      }

      /* Contrast color */

      :host([theme~="contrast"]) [part="value"],
      :host([theme~="contrast"]) [part="value"]::before {
        background-color: var(--lumo-contrast-80pct);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-80pct));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-60pct));
      }

      /* Error color */

      :host([theme~="error"]) [part="value"],
      :host([theme~="error"]) [part="value"]::before {
        background-color: var(--lumo-error-color);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
      }

      /* Primary color */

      :host([theme~="success"]) [part="value"],
      :host([theme~="success"]) [part="value"]::before {
        background-color: var(--lumo-success-color);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
      }

      /* RTL specific styles */

      :host([indeterminate][dir="rtl"]) [part="value"] {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(.355, .045, .645, 1);
      }

      :host(:not([aria-valuenow])[dir="rtl"]) [part="value"]::before,
      :host([indeterminate][dir="rtl"]) [part="value"]::before {
        animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(.355, .045, .645, 1);
      }

      @keyframes vaadin-progress-indeterminate-rtl {
        0% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
        }

        25% {
          transform: scaleX(0.4);
        }

        50% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        }

        50.1% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }

        75% {
          transform: scaleX(0.4);
        }

        100% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }
      }

      /* Contrast color */

      :host([theme~="contrast"][dir="rtl"]) [part="value"],
      :host([theme~="contrast"][dir="rtl"]) [part="value"]::before {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-80pct));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-60pct));
      }

      /* Error color */

      :host([theme~="error"][dir="rtl"]) [part="value"],
      :host([theme~="error"][dir="rtl"]) [part="value"]::before {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
      }

      /* Primary color */

      :host([theme~="success"][dir="rtl"]) [part="value"],
      :host([theme~="success"][dir="rtl"]) [part="value"]::before {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
      }
    </style>
  </template>
</dom-module><custom-style>
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
</custom-style>`;document.head.appendChild(r.content);i(186)},,function(e,t,i){"use strict";i(145);var r=i(6).a`<dom-module id="lumo-vaadin-overlay" theme-for="vaadin-overlay">
  <template>
    <style include="lumo-overlay">
      /* stylelint-disable no-empty-source */
    </style>
  </template>
</dom-module>`;document.head.appendChild(r.content);i(114)},,,,,,,,function(e,t,i){"use strict";i.r(t);var r=i(86),n=(i(196),i(138),i(218),i(112),i(197),i(32),document.createElement("template"));n.innerHTML='<dom-module id="lumo-ordered-layout">\n  <template>\n    <style>\n      :host([theme~="margin"]) {\n        margin: var(--lumo-space-m);\n      }\n\n      :host([theme~="padding"]) {\n        padding: var(--lumo-space-m);\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(n.content);var a=i(6),o=a.a`<dom-module id="lumo-horizontal-layout" theme-for="vaadin-horizontal-layout">
  <template>
    <style include="lumo-ordered-layout">
      :host([theme~="spacing-xs"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-xs);
      }

      :host([theme~="spacing-s"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-s);
      }

      :host([theme~="spacing"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-m);
      }

      :host([theme~="spacing-l"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-l);
      }

      :host([theme~="spacing-xl"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-xl);
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([theme~="spacing-xs"])::before,
      :host([theme~="spacing-s"])::before,
      :host([theme~="spacing"])::before,
      :host([theme~="spacing-l"])::before,
      :host([theme~="spacing-xl"])::before {
        content: "";
      }

      :host([theme~="spacing-xs"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-xs) * -1);
      }

      :host([theme~="spacing-s"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-s) * -1);
      }

      :host([theme~="spacing"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-m) * -1);
      }

      :host([theme~="spacing-l"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-l) * -1);
      }

      :host([theme~="spacing-xl"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-xl) * -1);
      }

      /* RTL styles */
      :host([dir="rtl"][theme~="spacing-xs"]) ::slotted(*) {
        margin-right: var(--lumo-space-xs);
      }

      :host([dir="rtl"][theme~="spacing-s"]) ::slotted(*) {
        margin-right: var(--lumo-space-s);
      }

      :host([dir="rtl"][theme~="spacing"]) ::slotted(*) {
        margin-right: var(--lumo-space-m);
      }

      :host([dir="rtl"][theme~="spacing-l"]) ::slotted(*) {
        margin-right: var(--lumo-space-l);
      }

      :host([dir="rtl"][theme~="spacing-xl"]) ::slotted(*) {
        margin-right: var(--lumo-space-xl);
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([dir="rtl"][theme~="spacing-xs"])::before {
        margin-right: calc(var(--lumo-space-xs) * -1);
      }

      :host([dir="rtl"][theme~="spacing-s"])::before {
        margin-right: calc(var(--lumo-space-s) * -1);
      }

      :host([dir="rtl"][theme~="spacing"])::before {
        margin-right: calc(var(--lumo-space-m) * -1);
      }

      :host([dir="rtl"][theme~="spacing-l"])::before {
        margin-right: calc(var(--lumo-space-l) * -1);
      }

      :host([dir="rtl"][theme~="spacing-xl"])::before {
        margin-right: calc(var(--lumo-space-xl) * -1);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);var s=i(11),l=i(17),d=i(21);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class h extends(Object(d.a)(Object(l.a)(s.a))){static get template(){return a.a`
    <style>
      :host {
        display: flex;
        box-sizing: border-box;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Theme variations */
      :host([theme~="margin"]) {
        margin: 1em;
      }

      :host([theme~="padding"]) {
        padding: 1em;
      }

      :host([theme~="spacing"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: 1em;
      }

      :host([theme~="spacing"][dir="rtl"]) ::slotted(*) {
        margin-right: 1em;
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([theme~="spacing"])::before {
        content: "";
      }

      :host([theme~="spacing"]:not([dir="rtl"]))::before {
        margin-left: -1em;
      }

      :host([theme~="spacing"][dir="rtl"])::before {
        margin-right: -1em;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-horizontal-layout"}static get version(){return"1.4.0"}}customElements.define(h.is,h);i(219),i(194),i(36),i(46);var c=a.a`<dom-module id="lumo-app-layout" theme-for="vaadin-app-layout">
  <template>
    <style>
      [part="navbar"]::before {
        background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      }

      :host(:not([dir='rtl']):not([overlay])) [part='drawer'] {
        border-right: 1px solid var(--lumo-contrast-10pct);
      }

      :host([dir='rtl']:not([overlay])) [part='drawer'] {
        border-left: 1px solid var(--lumo-contrast-10pct);
      }

      :host([overlay]) [part="drawer"]::before {
        background: var(--lumo-base-color);
      }

      [part="navbar"]::before,
      :host([overlay]) [part="drawer"]::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        z-index: -1;
      }

      :host([overlay]) [part='drawer']::before {
        background: var(--lumo-base-color);
        height: var(--_vaadin-app-layout-drawer-scroll-size, 100%);
      }

      [part="backdrop"] {
        background-color: var(--lumo-shade-20pct);
        opacity: 1;
      }

      [part] ::slotted(h2),
      [part] ::slotted(h3),
      [part] ::slotted(h4) {
        margin-top: var(--lumo-space-xs) !important;
        margin-bottom: var(--lumo-space-xs) !important;
      }

      @supports (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)) {
        [part="navbar"]::before {
          opacity: 0.8;
        }

        [part="navbar"] {
          -webkit-backdrop-filter: blur(24px);
          backdrop-filter: blur(24px);
        }

        :host([overlay]) [part="drawer"]::before {
          opacity: 0.9;
        }

        :host([overlay]) [part="drawer"] {
          -webkit-backdrop-filter: blur(24px);
          backdrop-filter: blur(24px);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(c.content);i(62);var u=document.createElement("template");u.innerHTML="<custom-style>\n  <style>\n    /* stylelint-disable length-zero-no-unit */\n    /* Use units so that the values can be used in calc() */\n    html {\n      --safe-area-inset-top: constant(safe-area-inset-top, 0px);\n      --safe-area-inset-right: constant(safe-area-inset-right, 0px);\n      --safe-area-inset-bottom: constant(safe-area-inset-bottom, 0px);\n      --safe-area-inset-left: constant(safe-area-inset-left, 0px);\n    }\n\n    @supports (padding-left: env(safe-area-inset-left)) {\n      html {\n        --safe-area-inset-top: env(safe-area-inset-top, 0px);\n        --safe-area-inset-right: env(safe-area-inset-right, 0px);\n        --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);\n        --safe-area-inset-left: env(safe-area-inset-left, 0px);\n      }\n    }\n    /* stylelint-enable */\n  </style>\n</custom-style>",document.head.appendChild(u.content);var p=function(){if(window.navigator.userAgent.match(/iPhone|iPad/i)){var e=window.innerHeight,t=window.innerWidth>e,i=document.documentElement.clientHeight;t&&i>e?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",i-e+"px"):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}};p(),window.addEventListener("resize",p);var m=i(48),f=i(42);
/**
@license
Vaadin App Layout
Copyright (C) 2019 Vaadin Ltd
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class v extends(Object(d.a)(Object(l.a)(s.a))){static get template(){return a.a`
    <style>
      :host {
        display: block;
        box-sizing: border-box;
        height: 100%;
        --vaadin-app-layout-transition: 200ms;
        transition: padding var(--vaadin-app-layout-transition);
        --vaadin-app-layout-touch-optimized: false;
        --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
        --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
        padding-top: var(--vaadin-app-layout-navbar-offset-top);
        padding-bottom: var(--vaadin-app-layout-navbar-offset-bottom);
        padding-left: var(--vaadin-app-layout-navbar-offset-left);
      }

      :host([dir="rtl"]) {
        padding-left: 0;
        padding-right: var(--vaadin-app-layout-navbar-offset-left);
      }

      :host([hidden]),
      [hidden] {
        display: none !important;
      }

      :host([no-anim]) {
        --vaadin-app-layout-transition: none !important;
      }

      :host([drawer-opened]) {
        --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
      }

      :host([overlay]) {
        --vaadin-app-layout-drawer-offset-left: 0;
        --vaadin-app-layout-navbar-offset-left: 0;
      }

      :host(:not([no-scroll])) [content] {
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      [content] {
        height: 100%;
      }

      @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
        :host {
          --vaadin-app-layout-touch-optimized: true;
        }
      }

      [part="navbar"],
      [part="navbar"]::before {
        position: fixed;
        display: flex;
        align-items: center;
        top: 0;
        right: 0;
        left: 0;
        transition: left var(--vaadin-app-layout-transition);
        padding-top: var(--safe-area-inset-top);
        padding-left: var(--safe-area-inset-left);
        padding-right: var(--safe-area-inset-right);
        z-index: 1;
      }

      :host(:not([dir="rtl"])[primary-section="drawer"][drawer-opened]:not([overlay])) [part="navbar"] {
        left: var(--vaadin-app-layout-drawer-offset-left, 0);
      }

      :host([dir="rtl"][primary-section="drawer"][drawer-opened]:not([overlay])) [part="navbar"] {
        right: var(--vaadin-app-layout-drawer-offset-left, 0);
      }

      :host([primary-section="drawer"]) [part="drawer"] {
        top: 0;
      }

      [part="navbar"][bottom] {
        top: auto;
        bottom: 0;
        padding-bottom: var(--safe-area-inset-bottom);
      }

      [part="drawer"] {
        overflow: auto;
        position: fixed;
        top: var(--vaadin-app-layout-navbar-offset-top, 0);
        right: auto;
        bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
        left: var(--vaadin-app-layout-navbar-offset-left, 0);
        transition: transform var(--vaadin-app-layout-transition);
        transform: translateX(-100%);
        max-width: 90%;
        width: 16em;
        box-sizing: border-box;
        padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
        outline: none;
      }

      :host([drawer-opened]) [part="drawer"] {
        transform: translateX(0%);
        touch-action: manipulation;
      }

      [part="backdrop"] {
        background-color: #000;
        opacity: 0.3;
      }

      :host(:not([drawer-opened])) [part="backdrop"] {
        opacity: 0;
      }

      :host([overlay]) [part="backdrop"] {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        transition: opacity var(--vaadin-app-layout-transition);
        -webkit-tap-highlight-color: transparent;
      }

      :host([overlay]) [part="drawer"] {
        top: 0;
        bottom: 0;
      }

      :host([overlay]) [part="drawer"],
      :host([overlay]) [part="backdrop"] {
        z-index: 2;
      }

      :host([drawer-opened][overlay]) [part="backdrop"] {
        pointer-events: auto;
        touch-action: manipulation;
      }

      :host([dir="rtl"]) [part="drawer"] {
        left: auto;
        right: var(--vaadin-app-layout-navbar-offset-start, 0);
        transform: translateX(100%);
      }

      :host([dir="rtl"]) [part="navbar"],
      :host([dir="rtl"]) [part="navbar"]::before {
        transition: right var(--vaadin-app-layout-transition);
      }

      :host([dir="rtl"][drawer-opened]) [part='drawer'] {
        transform: translateX(0%);
      }

      :host(:not([dir="rtl"])[drawer-opened]:not([overlay])) {
        padding-left: var(--vaadin-app-layout-drawer-offset-left);
      }

      :host([dir="rtl"][drawer-opened]:not([overlay])) {
        padding-right: var(--vaadin-app-layout-drawer-offset-left);
      }

      @media (max-width: 800px),
      (max-height: 600px) {
        :host {
          --vaadin-app-layout-drawer-overlay: true;
        }

        [part="drawer"] {
          width: 20em;
        }
      }
    </style>
    <div part="navbar" id="navbarTop">
      <slot name="navbar"></slot>
    </div>
    <div part="backdrop" on-click="_close" on-touchstart="_close"></div>
    <div part="drawer" id="drawer">
      <slot name="drawer" id="drawerSlot"></slot>
    </div>
    <div content="">
      <slot></slot>
    </div>
    <div part="navbar" id="navbarBottom" bottom="" hidden="">
      <slot name="navbar-bottom"></slot>
    </div>
    <div hidden=""><slot id="touchSlot" name="navbar touch-optimized"></slot></div>
`}static get is(){return"vaadin-app-layout"}static get version(){return"2.2.0"}static get properties(){return{primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"_primarySectionObserver"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"_drawerOpenedObserver"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0}}}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.HTMLImports&&!window.HTMLImports.useNative?Array.from(this.querySelectorAll("*")).forEach(e=>{e.localName.indexOf("-")>-1&&window.customElements.whenDefined(e.localName).then(()=>{Object(m.b)(this,this._afterFirstRender)})}):Object(m.b)(this,this._afterFirstRender),this._updateTouchOptimizedMode();var e=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new f.a(e,e=>{this._updateTouchOptimizedMode()}),this._touchChildObserver=new f.a(this.$.touchSlot,e=>{this._updateTouchOptimizedMode()}),this._drawerChildObserver=new f.a(this.$.drawerSlot,e=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener)}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),this.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener)}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}_primarySectionObserver(e){-1!==["navbar","drawer"].indexOf(e)||this.set("primarySection","navbar")}_drawerOpenedObserver(){var e=this.$.drawer;e.removeAttribute("tabindex"),this.overlay&&this.drawerOpened&&(e.setAttribute("tabindex",0),e.focus(),this._updateDrawerHeight())}_isShadyCSS(){return window.ShadyCSS&&!window.ShadyCSS.nativeCss}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(e){e.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}_updateDrawerSize(){var e=this.querySelectorAll("[slot=drawer]").length,t=this.$.drawer;0===e?t.setAttribute("hidden",""):t.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){var e=this.shadowRoot.querySelector('[part="navbar"]').getBoundingClientRect(),t=this.shadowRoot.querySelector('[part="navbar"][bottom]').getBoundingClientRect();this._isShadyCSS()?window.ShadyCSS.styleSubtree(this,{"--_vaadin-app-layout-navbar-offset-size":e.height+"px","--_vaadin-app-layout-navbar-offset-size-bottom":t.height+"px"}):(this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",e.height+"px"),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",t.height+"px"));var i=this.$.drawer.getBoundingClientRect();this._isShadyCSS()?window.ShadyCSS.styleSubtree(this,{"--_vaadin-app-layout-drawer-offset-size":i.width+"px","--vaadin-app-layout-drawer-offset-left":"var(--_vaadin-app-layout-drawer-offset-size)"}):this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",i.width+"px")}_updateDrawerHeight(){var{scrollHeight:e,offsetHeight:t}=this.$.drawer,i=e>t?e+"px":"100%";this._isShadyCSS()?window.ShadyCSS.styleSubtree(this,{"--_vaadin-app-layout-drawer-scroll-size":i}):this.style.setProperty("--_vaadin-app-layout-drawer-scroll-size",i)}_updateOverlayMode(){var e="true"==this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay"),t=this.$.drawer;!this.overlay&&e&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(e),this.overlay?(t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","drawer")):(this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),t.removeAttribute("role"),t.removeAttribute("aria-modal"),t.removeAttribute("aria-label")),this._updateDrawerHeight()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(e){var t;return this._isShadyCSS()?(window.ShadyCSS.styleSubtree(this),t=window.ShadyCSS.getComputedStyleValue(this,e)):t=getComputedStyle(this).getPropertyValue(e),(t||"").trim().toLowerCase()}_updateTouchOptimizedMode(){var e="true"==this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized"),t=this.querySelectorAll('[slot*="navbar"]');t.length>0&&Array.from(t).forEach(t=>{t.getAttribute("slot").indexOf("touch-optimized")>-1&&(t.__touchOptimized=!0),e&&t.__touchOptimized?t.setAttribute("slot","navbar-bottom"):t.setAttribute("slot","navbar")}),0===this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),e?this.$.navbarBottom.removeAttribute("hidden"):this.$.navbarBottom.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),Object(m.a)(this,()=>{this.removeAttribute("no-anim"),this._isShadyCSS()&&window.ShadyCSS.styleSubtree(this)})}}customElements.define(v.is,v);i(95),i(200),i(206);var _=document.createElement("template");_.innerHTML='<iron-iconset-svg size="1000" name="lumo">\n<svg xmlns="http://www.w3.org/2000/svg">\n<defs>\n<g id="angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>\n<g id="angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>\n<g id="angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>\n<g id="angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>\n<g id="arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>\n<g id="arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>\n<g id="arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>\n<g id="arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>\n<g id="bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>\n<g id="bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>\n<g id="calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>\n<g id="checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>\n<g id="chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>\n<g id="chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>\n<g id="chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>\n<g id="chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>\n<g id="clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>\n<g id="cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>\n<g id="cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>\n<g id="download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>\n<g id="dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>\n<g id="edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>\n<g id="error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>\n<g id="eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>\n<g id="eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>\n<g id="menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>\n<g id="minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>\n<g id="ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>\n<g id="photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>\n<g id="play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>\n<g id="plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>\n<g id="redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>\n<g id="reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>\n<g id="search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>\n<g id="undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>\n<g id="unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>\n<g id="upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>\n<g id="user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>\n</defs>\n</svg>\n</iron-iconset-svg>',document.head.appendChild(_.content);i(50),i(40);var g=a.a`<dom-module id="lumo-vertical-layout" theme-for="vaadin-vertical-layout">
  <template>
    <style include="lumo-ordered-layout">
      :host([theme~="spacing-xs"]) ::slotted(*) {
        margin-top: var(--lumo-space-xs);
      }

      :host([theme~="spacing-s"]) ::slotted(*) {
        margin-top: var(--lumo-space-s);
      }

      :host([theme~="spacing"]) ::slotted(*) {
        margin-top: var(--lumo-space-m);
      }

      :host([theme~="spacing-l"]) ::slotted(*) {
        margin-top: var(--lumo-space-l);
      }

      :host([theme~="spacing-xl"]) ::slotted(*) {
        margin-top: var(--lumo-space-xl);
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
       :host([theme~="spacing-xs"])::before {
         content: "";
         margin-top: calc(var(--lumo-space-xs) * -1);
       }

       :host([theme~="spacing-s"])::before {
         content: "";
         margin-top: calc(var(--lumo-space-s) * -1);
       }

      :host([theme~="spacing"])::before {
        content: "";
        margin-top: calc(var(--lumo-space-m) * -1);
      }

      :host([theme~="spacing-l"])::before {
        content: "";
        margin-top: calc(var(--lumo-space-l) * -1);
      }

      :host([theme~="spacing-xl"])::before {
        content: "";
        margin-top: calc(var(--lumo-space-xl) * -1);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(g.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class b extends(Object(d.a)(Object(l.a)(s.a))){static get template(){return a.a`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Theme variations */
      :host([theme~="margin"]) {
        margin: 1em;
      }

      :host([theme~="padding"]) {
        padding: 1em;
      }

      :host([theme~="spacing"]) ::slotted(*) {
        margin-top: 1em;
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([theme~="spacing"])::before {
        content: "";
        margin-top: -1em;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-vertical-layout"}static get version(){return"1.4.0"}}customElements.define(b.is,b);var y=a.a`<dom-module id="lumo-tab" theme-for="vaadin-tab">
  <template>
    <style>
      :host {
        box-sizing: border-box;
        padding: 0.5rem 0.75rem;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-xs);
        font-weight: 500;
        opacity: 1;
        color: var(--lumo-contrast-60pct);
        transition: 0.15s color, 0.2s transform;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        transform-origin: 50% 100%;
        outline: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: hidden;
        min-width: var(--lumo-size-m);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      :host(:not([orientation="vertical"])) {
        text-align: center;
      }

      :host([orientation="vertical"]) {
        transform-origin: 0% 50%;
        padding: 0.25rem 1rem;
        min-height: var(--lumo-size-m);
        min-width: 0;
      }

      :host(:hover),
      :host([focus-ring]) {
        color: var(--lumo-body-text-color);
      }

      :host([selected]) {
        color: var(--lumo-primary-text-color);
        transition: 0.6s color;
      }

      :host([active]:not([selected])) {
        color: var(--lumo-primary-text-color);
        transition-duration: 0.1s;
      }

      :host::before,
      :host::after {
        content: "";
        position: absolute;
        display: var(--_lumo-tab-marker-display, block);
        bottom: 0;
        left: 50%;
        width: var(--lumo-size-s);
        height: 2px;
        background-color: var(--lumo-contrast-60pct);
        border-radius: var(--lumo-border-radius) var(--lumo-border-radius) 0 0;
        transform: translateX(-50%) scale(0);
        transform-origin: 50% 100%;
        transition: 0.14s transform cubic-bezier(.12, .32, .54, 1);
        will-change: transform;
      }

      :host([selected])::before,
      :host([selected])::after {
        background-color: var(--lumo-primary-color);
      }

      :host([orientation="vertical"])::before,
      :host([orientation="vertical"])::after {
        left: 0;
        bottom: 50%;
        transform: translateY(50%) scale(0);
        width: 2px;
        height: var(--lumo-size-xs);
        border-radius: 0 var(--lumo-border-radius) var(--lumo-border-radius) 0;
        transform-origin: 100% 50%;
      }

      :host::after {
        box-shadow: 0 0 0 4px var(--lumo-primary-color);
        opacity: 0.15;
        transition: 0.15s 0.02s transform, 0.8s 0.17s opacity;
      }

      :host([selected])::before,
      :host([selected])::after {
        transform: translateX(-50%) scale(1);
        transition-timing-function: cubic-bezier(.12, .32, .54, 1.5);
      }

      :host([orientation="vertical"][selected])::before,
      :host([orientation="vertical"][selected])::after {
        transform: translateY(50%) scale(1);
      }

      :host([selected]:not([active]))::after {
        opacity: 0;
      }

      :host(:not([orientation="vertical"])) ::slotted(a[href]) {
        justify-content: center;
      }

      :host ::slotted(a) {
        display: flex;
        width: 100%;
        align-items: center;
        height: 100%;
        margin: -0.5rem -0.75rem;
        padding: 0.5rem 0.75rem;
        outline: none;

        /*
          Override the CSS inherited from \`lumo-color\` and \`lumo-typography\`.
          Note: \`!important\` is needed because of the \`:slotted\` specificity.
        */
        text-decoration: none !important;
        color: inherit !important;
      }

      :host ::slotted(iron-icon) {
        margin: 0 4px;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      :host ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25rem;
        box-sizing: border-box !important;
      }

      :host(:not([dir="rtl"])) ::slotted(iron-icon:first-child) {
        margin-left: 0;
      }

      :host(:not([dir="rtl"])) ::slotted(iron-icon:last-child) {
        margin-right: 0;
      }

      :host([theme~="icon-on-top"]) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        padding-bottom: 0.5rem;
        padding-top: 0.25rem;
      }

      :host([theme~="icon-on-top"]) ::slotted(a) {
        flex-direction: column;
        align-items: center;
        margin-top: -0.25rem;
        padding-top: 0.25rem;
      }

      :host([theme~="icon-on-top"]) ::slotted(iron-icon) {
        margin: 0;
      }

      /* Disabled */

      :host([disabled]) {
        pointer-events: none;
        opacity: 1;
        color: var(--lumo-disabled-text-color);
      }

      /* Focus-ring */

      :host([focus-ring]) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
        border-radius: var(--lumo-border-radius);
      }

      /* RTL specific styles */

      :host([dir="rtl"])::before,
      :host([dir="rtl"])::after {
        left: auto;
        right: 50%;
        transform: translateX(50%) scale(0);
      }

      :host([dir="rtl"][selected]:not([orientation="vertical"]))::before,
      :host([dir="rtl"][selected]:not([orientation="vertical"]))::after {
        transform: translateX(50%) scale(1);
      }

      :host([dir="rtl"]) ::slotted(iron-icon:first-child) {
        margin-right: 0;
      }

      :host([dir="rtl"]) ::slotted(iron-icon:last-child) {
        margin-left: 0;
      }

      :host([orientation="vertical"][dir="rtl"]) {
        transform-origin: 100% 50%;
      }

      :host([dir="rtl"][orientation="vertical"])::before,
      :host([dir="rtl"][orientation="vertical"])::after {
        left: auto;
        right: 0;
        border-radius: var(--lumo-border-radius) 0 0 var(--lumo-border-radius);
        transform-origin: 0% 50%;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(y.content);var w=i(128);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class A extends(Object(d.a)(Object(l.a)(Object(w.a)(s.a)))){static get template(){return a.a`
    <slot></slot>
`}static get is(){return"vaadin-tab"}static get version(){return"3.2.0"}ready(){super.ready(),this.setAttribute("role","tab")}_onKeyup(e){var t=this.hasAttribute("active");if(super._onKeyup(e),t){var i=this.querySelector("a");i&&i.click()}}}customElements.define(A.is,A);i(93);var x=a.a`<dom-module id="lumo-tabs" theme-for="vaadin-tabs">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
      }

      :host(:not([orientation="vertical"])) {
        box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
        position: relative;
        min-height: var(--lumo-size-l);
      }

      :host([orientation="horizontal"]) [part="tabs"] ::slotted(vaadin-tab:not([theme~="icon-on-top"])) {
        justify-content: center;
      }

      :host([orientation="vertical"]) {
        box-shadow: -1px 0 0 0 var(--lumo-contrast-10pct);
      }

      :host([orientation="horizontal"]) [part="tabs"] {
        margin: 0 0.75rem;
      }

      :host([orientation="vertical"]) [part="tabs"] {
        width: 100%;
        margin: 0.5rem 0;
      }

      [part="forward-button"],
      [part="back-button"] {
        position: absolute;
        z-index: 1;
        font-family: lumo-icons;
        color: var(--lumo-tertiary-text-color);
        font-size: var(--lumo-icon-size-m);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.5em;
        height: 100%;
        transition: 0.2s opacity;
        top: 0;
      }

      [part="forward-button"]:hover,
      [part="back-button"]:hover {
        color: inherit;
      }

      :host(:not([dir="rtl"])) [part="forward-button"] {
        right: 0;
      }

      [part="forward-button"]::after {
        content: var(--lumo-icons-angle-right);
      }

      [part="back-button"]::after {
        content: var(--lumo-icons-angle-left);
      }

      /* Tabs overflow */

      [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: none;
        -webkit-mask-image: var(--_lumo-tabs-overflow-mask-image);
        /* For IE11 */
        min-height: var(--lumo-size-l);
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="tabs"] {
          mask-image: var(--_lumo-tabs-overflow-mask-image);
        }
      }

      /* Horizontal tabs overflow */

      /* Both ends overflowing */
      :host([overflow~="start"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em, #000 calc(100% - 4em), transparent calc(100% - 2em));
      }

      /* End overflowing */
      :host([overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
      }

      /* Start overflowing */
      :host([overflow~="start"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em);
      }

      /* Vertical tabs overflow */

      /* Both ends overflowing */
      :host([overflow~="start"][overflow~="end"][orientation="vertical"]) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em, #000 calc(100% - 2em), transparent);
      }

      /* End overflowing */
      :host([overflow~="end"][orientation="vertical"]) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(#000 calc(100% - 2em), transparent);
      }

      /* Start overflowing */
      :host([overflow~="start"][orientation="vertical"]) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em);
      }

      :host [part="tabs"] ::slotted(:not(vaadin-tab)) {
        margin-left: var(--lumo-space-m);
      }

      /* Centered */

      :host([theme~="centered"][orientation="horizontal"]) [part="tabs"] {
        justify-content: center;
      }

      /* Small */

      :host([theme~="small"]),
      :host([theme~="small"]) [part="tabs"] {
        min-height: var(--lumo-size-m);
      }

      :host([theme~="small"]) [part="tabs"] ::slotted(vaadin-tab) {
        font-size: var(--lumo-font-size-s);
      }

      /* Minimal */

      :host([theme~="minimal"]) {
        box-shadow: none;
        /* This doesn't work with ShadyCSS */
        --_lumo-tab-marker-display: none;
      }

      /* Workaround for the above ShadyCSS issue */
      :host([theme~="minimal"]) [part="tabs"] ::slotted(vaadin-tab[selected])::before,
      :host([theme~="minimal"]) [part="tabs"] ::slotted(vaadin-tab[selected])::after {
        display: none;
      }

      /* Hide-scroll-buttons */

      :host([theme~="hide-scroll-buttons"]) [part="back-button"],
      :host([theme~="hide-scroll-buttons"]) [part="forward-button"] {
        display: none;
      }

      :host([theme~="hide-scroll-buttons"][overflow~="start"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em, #000 calc(100% - 2em), transparent 100%);
      }

      :host([theme~="hide-scroll-buttons"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 2em), transparent 100%);
      }

      :host([theme~="hide-scroll-buttons"][overflow~="start"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em);
      }

      /* Equal-width tabs */
      :host([theme~="equal-width-tabs"]) {
        flex: auto;
      }

      :host([theme~="equal-width-tabs"]) [part="tabs"] ::slotted(vaadin-tab) {
        flex: 1 0 0%;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="forward-button"]::after {
        content: var(--lumo-icons-angle-left);
      }

      :host([dir="rtl"]) [part="back-button"]::after {
        content: var(--lumo-icons-angle-right);
      }

      :host([orientation="vertical"][dir="rtl"]) {
        box-shadow: 1px 0 0 0 var(--lumo-contrast-10pct);
      }

      :host([dir="rtl"]) [part="forward-button"] {
        left: 0;
      }

      :host([dir="rtl"]) [part="tabs"] ::slotted(:not(vaadin-tab)) {
        margin-left: 0;
        margin-right: var(--lumo-space-m);
      }

      /* Both ends overflowing */
      :host([dir="rtl"][overflow~="start"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent 2em, #000 4em, #000 calc(100% - 4em), transparent calc(100% - 2em));
      }

      /* End overflowing */
      :host([dir="rtl"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
      }

      /* Start overflowing */
      :host([dir="rtl"][overflow~="start"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent 2em, #000 4em);
      }

      :host([dir="rtl"][theme~="hide-scroll-buttons"][overflow~="start"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent, #000 2em, #000 calc(100% - 2em), transparent 100%);
      }

      :host([dir="rtl"][theme~="hide-scroll-buttons"][overflow~="end"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 2em), transparent 100%);
      }

      :host([dir="rtl"][theme~="hide-scroll-buttons"][overflow~="start"]:not([orientation="vertical"])) [part="tabs"] {
        --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent, #000 2em);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(x.content);var C=i(175),S=i(76),E=i(77),O=/Apple.* Version\/(9|10)/.test(navigator.userAgent);class I extends(Object(d.a)(Object(C.a)(Object(l.a)(Object(E.b)([S.a],s.a))))){static get template(){return a.a`
    <style>
      :host {
        display: flex;
        align-items: center;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([orientation="vertical"]) {
        display: block;
      }

      :host([orientation="horizontal"]) [part="tabs"] {
        flex-grow: 1;
        display: flex;
        align-self: stretch;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
      }

      /* This seems more future-proof than \`overflow: -moz-scrollbars-none\` which is marked obsolete
         and is no longer guaranteed to work:
         https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Mozilla_Extensions */
      @-moz-document url-prefix() {
        :host([orientation="horizontal"]) [part="tabs"] {
          overflow: hidden;
        }
      }

      :host([orientation="horizontal"]) [part="tabs"]::-webkit-scrollbar {
        display: none;
      }

      :host([orientation="vertical"]) [part="tabs"] {
        height: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      [part="back-button"],
      [part="forward-button"] {
        pointer-events: none;
        opacity: 0;
        cursor: default;
      }

      :host([overflow~="start"]) [part="back-button"],
      :host([overflow~="end"]) [part="forward-button"] {
        pointer-events: auto;
        opacity: 1;
      }

      [part="back-button"]::after {
        content: '◀';
      }

      [part="forward-button"]::after {
        content: '▶';
      }

      :host([orientation="vertical"]) [part="back-button"],
      :host([orientation="vertical"]) [part="forward-button"] {
        display: none;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="back-button"]::after {
        content: '▶';
      }

      :host([dir="rtl"]) [part="forward-button"]::after {
        content: '◀';
      }
    </style>
    <div on-click="_scrollBack" part="back-button"></div>

    <div id="scroll" part="tabs">
      <slot></slot>
    </div>

    <div on-click="_scrollForward" part="forward-button"></div>
`}static get is(){return"vaadin-tabs"}static get version(){return"3.2.0"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["_updateOverflow(items.*, vertical)"]}ready(){super.ready(),this.addEventListener("iron-resize",()=>this._updateOverflow()),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),Object(m.a)(this,()=>{this._updateOverflow()})}_scrollForward(){this._scroll(-this.__direction*this._scrollOffset)}_scrollBack(){this._scroll(this.__direction*this._scrollOffset)}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return this._vertical||"rtl"!==this.getAttribute("dir")?-1:1}_updateOverflow(){var e=this._vertical?this._scrollerElement.scrollTop:this.__getNormalizedScrollLeft(this._scrollerElement),t=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;t-=1;var i=e>0?"start":"";i+=e+this._scrollOffset<t?" end":"",1==this.__direction&&(i=i.replace(/start|end/gi,e=>"start"===e?"end":"start")),i?this.setAttribute("overflow",i.trim()):this.removeAttribute("overflow"),this._repaintShadowNodesHack()}_repaintShadowNodesHack(){if(O&&this.root){this.root.querySelectorAll("*").forEach(e=>{e.style["-webkit-backface-visibility"]="visible",e.style["-webkit-backface-visibility"]=""})}}}customElements.define(I.is,I);var k=a.a`<dom-module id="lumo-text-area" theme-for="vaadin-text-area">
  <template>
    <style include="lumo-text-field">
      [part="input-field"],
      [part="input-field"] ::slotted(textarea) {
        /* Equal to the implicit padding in vaadin-text-field */
        padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
        padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
        height: auto;
        box-sizing: border-box;
        transition: background-color 0.1s;
        line-height: var(--lumo-line-height-s);
      }

      :host(:not([readonly])) [part="input-field"]::after {
        display: none;
      }

      :host([readonly]) [part="input-field"] {
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      :host([readonly]) [part="input-field"]::after {
        border: none;
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"] {
        background-color: var(--lumo-contrast-20pct);
      }

      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="input-field"] {
          background-color: var(--lumo-contrast-10pct);
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      [part="value"],
      [part="input-field"] ::slotted(textarea) {
        line-height: inherit;
        --_lumo-text-field-overflow-mask-image: none;
      }

      /* Vertically align icon prefix/suffix with the first line of text */
      [part="input-field"] ::slotted(iron-icon) {
        margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
      }

      [part="input-field"] [part="value"],
      [part="input-field"] ::slotted(textarea) {
        white-space: pre-wrap; /* override \`nowrap\` from <vaadin-text-field> */
        align-self: stretch; /* override \`baseline\` from <vaadin-text-field> */
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(k.content);var P=i(127),T=i(82);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class z extends(Object(d.a)(Object(P.a)(Object(T.a)(Object(l.a)(s.a))))){static get template(){return a.a`
    <style include="vaadin-text-field-shared-styles">
      .vaadin-text-area-container {
        flex: auto;
        max-height: inherit; /* MSIE 11 */
        min-height: inherit; /* MSIE 11 */
      }

      /* The label, helper text and the error message should neither grow nor shrink. */
      [part="label"],
      [part="helper-text"],
      [part="error-message"] {
        flex: none;
      }

      [part="input-field"] {
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      [part="value"] {
        resize: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(*) {
        align-self: flex-start;
      }

      @keyframes vaadin-text-area-appear {
        to {
          opacity: 1;
        }
      }

      :host {
        animation: 1ms vaadin-text-area-appear;
      }
    </style>

    <div class="vaadin-text-area-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="textarea">
          <textarea part="value"></textarea>
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="helper-text" on-click="focus" id="[[_helperTextId]]">
        <slot name="helper">[[helperText]]</slot>
      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-area"}static get version(){return"2.8.2"}static get observers(){return["_textAreaValueChanged(value)"]}ready(){super.ready(),this._updateHeight(),this.addEventListener("animationend",this._onAnimationEnd)}_onAnimationEnd(e){0===e.animationName.indexOf("vaadin-text-area-appear")&&this._updateHeight()}get _slottedTagName(){return"textarea"}_textAreaValueChanged(e){this._updateHeight()}_updateHeight(){var e=this.root.querySelector("[part=input-field]"),t=e.scrollTop,i=this.inputElement,r=getComputedStyle(i).width,n=this.value?this.value.length:0;this._oldValueLength>=n&&(i.style.maxWidth=r,i.style.height="auto",e.style.display="block"),this._oldValueLength=n;var a=i.scrollHeight;a>i.clientHeight&&(i.style.height=a+"px"),i.style.removeProperty("max-width"),e.style.removeProperty("display"),e.scrollTop=t,this._dispatchIronResizeEventIfNeeded("InputHeight",a)}}customElements.define(z.is,z);i(116),i(222);var D=a.a`<dom-module id="lumo-upload" theme-for="vaadin-upload">
  <template>
    <style>
      :host {
        line-height: var(--lumo-line-height-m);
      }

      :host(:not([nodrop])) {
        overflow: hidden;
        border: 1px dashed var(--lumo-contrast-20pct);
        border-radius: var(--lumo-border-radius);
        padding: var(--lumo-space-m);
        transition: background-color 0.6s, border-color 0.6s;
      }

      [part="primary-buttons"] > * {
        display: inline-block;
        white-space: nowrap;
      }

      [part="drop-label"] {
        display: inline-block;
        white-space: normal;
        padding: 0 var(--lumo-space-s);
        color: var(--lumo-secondary-text-color);
        font-family: var(--lumo-font-family);
      }

      :host([dragover-valid]) {
        border-color: var(--lumo-primary-color-50pct);
        background: var(--lumo-primary-color-10pct);
        transition: background-color 0.1s, border-color 0.1s;
      }

      :host([dragover-valid]) [part="drop-label"] {
        color: var(--lumo-primary-text-color);
      }

      [part="drop-label-icon"] {
        display: inline-block;
      }

      [part="drop-label-icon"]::before {
        content: var(--lumo-icons-upload);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        vertical-align: -.25em;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-upload-file" theme-for="vaadin-upload-file">
  <template>
    <style include="lumo-field-button">
      :host {
        padding: var(--lumo-space-s) 0;
      }

      :host(:not(:first-child)) {
        border-top: 1px solid var(--lumo-contrast-10pct);
      }

      [part="row"] {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
      }

      [part="status"],
      [part="error"] {
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-s);
      }

      [part="info"] {
        display: flex;
        align-items: baseline;
        flex: auto;
      }

      [part="meta"] {
        width: 0.001px;
        flex: 1 1 auto;
      }

      [part="name"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      [part="commands"] {
        display: flex;
        align-items: baseline;
        flex: none;
      }

      [part="done-icon"],
      [part="warning-icon"] {
        margin-right: var(--lumo-space-xs);
      }

      /* When both icons are hidden, let us keep space for one */
      [part="done-icon"][hidden] + [part="warning-icon"][hidden] {
        display: block !important;
        visibility: hidden;
      }

      [part="done-icon"],
      [part="warning-icon"] {
        font-size: var(--lumo-icon-size-m);
        font-family: 'lumo-icons';
        line-height: 1;
      }

      [part="start-button"],
      [part="retry-button"],
      [part="clear-button"] {
        flex: none;
        margin-left: var(--lumo-space-xs);
      }

      [part="done-icon"]::before,
      [part="warning-icon"]::before,
      [part="start-button"]::before,
      [part="retry-button"]::before,
      [part="clear-button"]::before {
        vertical-align: -.25em;
      }

      [part="done-icon"]::before {
        content: var(--lumo-icons-checkmark);
        color: var(--lumo-primary-text-color);
      }

      [part="warning-icon"]::before {
        content: var(--lumo-icons-error);
        color: var(--lumo-error-text-color);
      }

      [part="start-button"]::before {
        content: var(--lumo-icons-play);
      }

      [part="retry-button"]::before {
        content: var(--lumo-icons-reload);
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      [part="error"] {
        color: var(--lumo-error-text-color);
      }

      [part="progress"] {
        width: auto;
        margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
        margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
      }

      [part="progress"][complete],
      [part="progress"][error] {
        display: none;
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild(D.content);var M=i(52);i(144),i(122),i(176),i(207);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class L extends(Object(d.a)(Object(l.a)(s.a))){static get template(){return a.a`
    <style>
      :host {
        display: block;
        position: relative;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }
    </style>

    <div part="primary-buttons">
      <div id="addFiles" on-touchend="_onAddFilesTouchEnd" on-click="_onAddFilesClick">
        <slot name="add-button">
          <vaadin-button part="upload-button" id="addButton" disabled="[[maxFilesReached]]">
            [[_i18nPlural(maxFiles, i18n.addFiles, i18n.addFiles.*)]]
          </vaadin-button>
        </slot>
      </div>
      <div part="drop-label" hidden\$="[[nodrop]]" id="dropLabelContainer">
        <slot name="drop-label-icon">
          <div part="drop-label-icon"></div>
        </slot>
        <slot name="drop-label" id="dropLabel">
          [[_i18nPlural(maxFiles, i18n.dropFiles, i18n.dropFiles.*)]]
        </slot>
      </div>
    </div>
    <slot name="file-list">
      <div id="fileList" part="file-list">
        <template is="dom-repeat" items="[[files]]" as="file">
          <vaadin-upload-file file="[[file]]"></vaadin-upload-file>
        </template>
      </div>
    </slot>
    <slot></slot>
    <input type="file" id="fileInput" on-change="_onFileInputChange" hidden="" accept\$="{{accept}}" multiple\$="[[_isMultiple(maxFiles)]]" capture\$="[[capture]]">
`}static get is(){return"vaadin-upload"}static get version(){return"4.4.1"}static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:function(){try{return!!document.createEvent("TouchEvent")}catch(e){return!1}}},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:function(){return[]}},maxFiles:{type:Number,value:1/0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,computed:"_maxFilesAdded(maxFiles, files.length)"},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value:function(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},cancel:"Cancel",error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled.",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Server Unavailable",unexpectedServerError:"Unexpected Server Error",forbidden:"Forbidden"}},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}}}}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-remove",this._onFileRemove.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this))}_formatSize(e){if("function"==typeof this.i18n.formatSize)return this.i18n.formatSize(e);var t=this.i18n.units.sizeBase||1e3,i=~~(Math.log(e)/Math.log(t)),r=Math.max(0,Math.min(3,i-1));return parseFloat((e/Math.pow(t,i)).toFixed(r))+" "+this.i18n.units.size[i]}_splitTimeByUnits(e){for(var t=[60,60,24,1/0],i=[0],r=0;r<t.length&&e>0;r++)i[r]=e%t[r],e=Math.floor(e/t[r]);return i}_formatTime(e,t){if("function"==typeof this.i18n.formatTime)return this.i18n.formatTime(e,t);for(;t.length<3;)t.push(0);return t.reverse().map(e=>(e<10?"0":"")+e).join(":")}_formatFileProgress(e){return e.totalStr+": "+e.progress+"% ("+(e.loaded>0?this.i18n.uploading.remainingTime.prefix+e.remainingStr:this.i18n.uploading.remainingTime.unknown)+")"}_maxFilesAdded(e,t){return e>=0&&t>=e}_onDragover(e){e.preventDefault(),this.nodrop||this._dragover||(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),e.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(e){e.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(e){this.nodrop||(e.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(e.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(e){if("string"==typeof this.headers)try{this.headers=JSON.parse(this.headers)}catch(e){this.headers=void 0}for(var t in this.headers)e.setRequestHeader(t,this.headers[t]);this.timeout&&(e.timeout=this.timeout),e.withCredentials=this.withCredentials}_setStatus(e,t,i,r){e.elapsed=r,e.elapsedStr=this._formatTime(e.elapsed,this._splitTimeByUnits(e.elapsed)),e.remaining=Math.ceil(r*(t/i-1)),e.remainingStr=this._formatTime(e.remaining,this._splitTimeByUnits(e.remaining)),e.speed=~~(t/r/1024),e.totalStr=this._formatSize(t),e.loadedStr=this._formatSize(i),e.status=this._formatFileProgress(e)}uploadFiles(e){e&&!Array.isArray(e)&&(e=[e]),e=(e=e||this.files).filter(e=>!e.complete),Array.prototype.forEach.call(e,this._uploadFile.bind(this))}_uploadFile(e){if(!e.uploading){var t,i=Date.now(),r=e.xhr=this._createXhr(e);r.upload.onprogress=n=>{clearTimeout(t);var a=(Date.now()-i)/1e3,o=n.loaded,s=n.total,l=~~(o/s*100);e.loaded=o,e.progress=l,e.indeterminate=o<=0||o>=s,e.error?e.indeterminate=e.status=void 0:e.abort||(l<100?(this._setStatus(e,s,o,a),t=setTimeout(()=>{e.status=this.i18n.uploading.status.stalled,this._notifyFileChanges(e)},2e3)):(e.loadedStr=e.totalStr,e.status=this.i18n.uploading.status.processing,e.uploading=!1)),this._notifyFileChanges(e),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:e,xhr:r}}))},r.onreadystatechange=()=>{if(4==r.readyState){if(clearTimeout(t),e.indeterminate=e.uploading=!1,e.abort)return void this._notifyFileChanges(e);if(e.status="",!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:e,xhr:r},cancelable:!0})))return;0===r.status?e.error=this.i18n.uploading.error.serverUnavailable:r.status>=500?e.error=this.i18n.uploading.error.unexpectedServerError:r.status>=400&&(e.error=this.i18n.uploading.error.forbidden),e.complete=!e.error,this.dispatchEvent(new CustomEvent("upload-"+(e.error?"error":"success"),{detail:{file:e,xhr:r}})),this._notifyFileChanges(e)}};var n=new FormData;if(e.uploadTarget=e.uploadTarget||this.target||"",e.formDataName=this.formDataName,this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:e,xhr:r},cancelable:!0})))n.append(e.formDataName,e,e.name),r.open(this.method,e.uploadTarget,!0),this._configureXhr(r),e.status=this.i18n.uploading.status.connecting,e.uploading=e.indeterminate=!0,e.complete=e.abort=e.error=e.held=!1,r.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:e,xhr:r}})),this._notifyFileChanges(e)},this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:e,xhr:r,formData:n},cancelable:!0}))&&r.send(n)}}_retryFileUpload(e){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&this._uploadFile(e)}_abortFileUpload(e){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&(e.abort=!0,e.xhr&&e.xhr.abort(),this._notifyFileChanges(e))}_notifyFileChanges(e){var t="files."+this.files.indexOf(e)+".";for(var i in e)e.hasOwnProperty(i)&&this.notifyPath(t+i,e[i])}_addFiles(e){Array.prototype.forEach.call(e,this._addFile.bind(this))}_addFile(e){if(this.maxFilesReached)this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.tooManyFiles}}));else if(this.maxFileSize>=0&&e.size>this.maxFileSize)this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.fileIsTooBig}}));else{var t=e.name.match(/\.[^\.]*$|$/)[0],i=new RegExp("^("+this.accept.replace(/[, ]+/g,"|").replace(/\/\*/g,"/.*")+")$","i");!this.accept||i.test(e.type)||i.test(t)?(e.loaded=0,e.held=!0,e.status=this.i18n.uploading.status.held,this.unshift("files",e),this.noAuto||this._uploadFile(e)):this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.incorrectFileType}}))}}_removeFile(e){this.files.indexOf(e)>-1&&this.splice("files",this.files.indexOf(e),1)}_onAddFilesTouchEnd(e){e.preventDefault(),this.__resetMouseCanceller(),this._onAddFilesClick()}__resetMouseCanceller(){Object(M.resetMouseCanceller)()}_onAddFilesClick(){this.maxFilesReached||(this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(e){this._addFiles(e.target.files)}_onFileStart(e){this._uploadFile(e.detail.file)}_onFileRetry(e){this._retryFileUpload(e.detail.file)}_onFileAbort(e){this._abortFileUpload(e.detail.file)}_onFileRemove(e){this._removeFile(e.detail.file)}_dragoverChanged(e){e?this.setAttribute("dragover",e):this.removeAttribute("dragover")}_dragoverValidChanged(e){e?this.setAttribute("dragover-valid",e):this.removeAttribute("dragover-valid")}_i18nPlural(e,t){return 1==e?t.one:t.many}_isMultiple(e){return 1!=e}}customElements.define(L.is,L);class F extends s.a{static get template(){return a.a`
      <style include="shared-styles">
        :host {
          display: block;
        }
      </style>

      <div>Test</div>
    `}static get is(){return"about-view"}}customElements.define(F.is,F);i(163),i(169),i(104),i(167),i(170),i(165);class N extends s.a{static get template(){return s.b`
<style include="shared-styles lumo-typography">
:host {
  display: block;
  height: 100%;
  padding: 0 var(--lumo-space-l);
}
</style>

<vaadin-vertical-layout id="content_container">
    <h1>Step 1:</h1>
    <vaadin-horizontal-layout id="upload_container" theme="spacing">
        <vaadin-upload id="upload" accept=".class" max-file-size="100000000">
            <span slot="drop-label" style="">Drop files or folder here</span>
        </vaadin-upload>
    </vaadin-horizontal-layout>
    <h1>Step 2:</h1>
    <vaadin-horizontal-layout id="compare_container">
        <vaadin-text-area id="before"></vaadin-text-area>
        <vaadin-text-area id="after"></vaadin-text-area>
    </vaadin-horizontal-layout>
    <h1>Step 3:</h1>
    <vaadin-horizontal-layout id="download_container">
        <vaadin-button id="download" theme="primary">
            <iron-icon icon="vaadin:download-alt" slot="prefix"></iron-icon>
            Download Files
        </vaadin-button>
    </vaadin-horizontal-layout>
</vaadin-vertical-layout>

<script>
  customElements.whenDefined('vaadin-upload').then(function() {
    const upload = document.querySelector('vaadin-upload');
    upload.addEventListener('file-reject', function(event) {
      window.alert(event.detail.file.name + ' error: ' + event.detail.error);
    });
  });
</script>

`}static get is(){return"obfuscate-view"}static get properties(){return{}}}customElements.define(N.is,N);i(141),i(145),i(140);var R=document.createElement("template");R.innerHTML='<dom-module id="lumo-badge">\n  <template>\n    <style>\n      [theme~="badge"] {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        box-sizing: border-box;\n        padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);\n        color: var(--lumo-primary-text-color);\n        background-color: var(--lumo-primary-color-10pct);\n        border-radius: var(--lumo-border-radius-s);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-s);\n        line-height: 1;\n        font-weight: 500;\n        text-transform: initial;\n        letter-spacing: initial;\n        min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);\n      }\n\n      /* Ensure proper vertical alignment */\n      [theme~="badge"]::before {\n        display: inline-block;\n        content: "\\2003";\n        width: 0;\n      }\n\n      [theme~="badge"][theme~="small"] {\n        font-size: var(--lumo-font-size-xxs);\n        line-height: 1;\n      }\n\n      /* Colors */\n\n      [theme~="badge"][theme~="success"] {\n        color: var(--lumo-success-text-color);\n        background-color: var(--lumo-success-color-10pct);\n      }\n\n      [theme~="badge"][theme~="error"] {\n        color: var(--lumo-error-text-color);\n        background-color: var(--lumo-error-color-10pct);\n      }\n\n      [theme~="badge"][theme~="contrast"] {\n        color: var(--lumo-contrast-80pct);\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      /* Primary */\n\n      [theme~="badge"][theme~="primary"] {\n        color: var(--lumo-primary-contrast-color);\n        background-color: var(--lumo-primary-color);\n      }\n\n      [theme~="badge"][theme~="success"][theme~="primary"] {\n        color: var(--lumo-success-contrast-color);\n        background-color: var(--lumo-success-color);\n      }\n\n      [theme~="badge"][theme~="error"][theme~="primary"] {\n        color: var(--lumo-error-contrast-color);\n        background-color: var(--lumo-error-color);\n      }\n\n      [theme~="badge"][theme~="contrast"][theme~="primary"] {\n        color: var(--lumo-base-color);\n        background-color: var(--lumo-contrast);\n      }\n\n      /* Links */\n\n      [theme~="badge"][href]:hover {\n        text-decoration: none;\n      }\n\n      /* Icon */\n\n      [theme~="badge"] iron-icon {\n        margin: -0.25em 0;\n        --iron-icon-width: 1.5em;\n        --iron-icon-height: 1.5em;\n      }\n\n      [theme~="badge"] iron-icon:first-child {\n        margin-left: -0.375em;\n      }\n\n      [theme~="badge"] iron-icon:last-child {\n        margin-right: -0.375em;\n      }\n\n      [theme~="badge"][icon] {\n        min-width: 0;\n        padding: 0;\n        font-size: 1rem;\n        --iron-icon-width: var(--lumo-icon-size-m);\n        --iron-icon-height: var(--lumo-icon-size-m);\n      }\n\n      [theme~="badge"][icon][theme~="small"] {\n        --iron-icon-width: var(--lumo-icon-size-s);\n        --iron-icon-height: var(--lumo-icon-size-s);\n      }\n\n      /* Empty */\n\n      [theme~="badge"]:not([icon]):empty {\n        min-width: 0;\n        width: 1em;\n        height: 1em;\n        padding: 0;\n        border-radius: 50%;\n        background-color: var(--lumo-primary-color);\n      }\n\n      [theme~="badge"][theme~="small"]:not([icon]):empty {\n        width: 0.75em;\n        height: 0.75em;\n      }\n\n      [theme~="badge"][theme~="contrast"]:not([icon]):empty {\n        background-color: var(--lumo-contrast);\n      }\n\n      [theme~="badge"][theme~="success"]:not([icon]):empty {\n        background-color: var(--lumo-success-color);\n      }\n\n      [theme~="badge"][theme~="error"]:not([icon]):empty {\n        background-color: var(--lumo-error-color);\n      }\n\n      /* Pill */\n\n      [theme~="badge"][theme~="pill"] {\n        --lumo-border-radius-s: 1em;\n      }\n\n      /* RTL specific styles */\n\n      [dir="rtl"][theme~="badge"] iron-icon:first-child {\n        margin-right: -0.375em;\n        margin-left: 0;\n      }\n\n      [dir="rtl"][theme~="badge"] iron-icon:last-child {\n        margin-left: -0.375em;\n        margin-right: 0;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(R.content);var j=document.createElement("template");j.innerHTML="\n<custom-style>\n<style>\n</style>\n</custom-style>\n\n\n",document.head.appendChild(j.content);var B=document.createElement("div");function V(e){var t=document.createElement("template");t.innerHTML=e,document.head.appendChild(t.content)}B.innerHTML='<custom-style><style include="lumo-color lumo-typography"></style></custom-style>',document.head.insertBefore(B.firstElementChild,document.head.firstChild),V(`<dom-module id="flow_css_mod_0" theme-for="vaadin-app-layout"><template><style>${r.a}</style></template></dom-module>`),V(`<custom-style><style>${r.a}</style></custom-style>`);document.getElementsByTagName("script");for(var H,$=document.getElementsByTagName("script"),q=0;q<$.length;q++){var Y=$[q];if("module"==Y.getAttribute("type")&&Y.getAttribute("data-app-id")&&!Y["vaadin-bundle"]){H=Y;break}}if(!H)throw new Error("Could not find the bundle script to identify the application id");H["vaadin-bundle"]=!0,window.Vaadin.Flow.fallbacks||(window.Vaadin.Flow.fallbacks={});var W=window.Vaadin.Flow.fallbacks;W[H.getAttribute("data-app-id")]={},W[H.getAttribute("data-app-id")].loadFallback=function(){return Promise.all([i.e(0),i.e(4),i.e(6)]).then(i.bind(null,490))}}]);