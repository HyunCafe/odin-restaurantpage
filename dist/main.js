(()=>{"use strict";var e,t,n={34:(e,t,n)=>{n.d(t,{CY:()=>r,dc:()=>a,vE:()=>o});const a=()=>{const e=document.createElement("header"),t=document.createElement("nav"),n=document.createElement("ul"),a=document.createElement("li"),r=document.createElement("a"),o=document.createElement("li"),i=document.createElement("a"),s=document.createElement("li"),c=document.createElement("a"),d=document.createElement("li"),l=document.createElement("a"),u=document.createElement("li"),p=document.createElement("a");r.href="#",r.textContent="Home",a.classList.add("nav__item"),r.classList.add("nav__link"),a.append(r),c.href="#",c.textContent="Menu",s.classList.add("nav__item"),c.classList.add("nav__link"),s.append(c),i.href="#",i.textContent="About",o.classList.add("nav__item"),i.classList.add("nav__link"),o.append(i),l.href="#",l.textContent="Reservations",d.classList.add("nav__item"),l.classList.add("nav__link"),d.append(l),p.href="#",p.textContent="Contact",u.classList.add("nav__item"),p.classList.add("nav__link"),u.append(p),n.classList.add("nav__list"),n.append(a),n.append(s),n.append(o),n.append(d),n.append(u),t.classList.add("header__nav","nav"),t.append(n);const m=document.createElement("button");m.classList.add("hamburger-btn");const h=()=>{const e=document.createElement("span");return e.classList.add("hamburger-line"),e};return m.appendChild(h()),m.appendChild(h()),m.appendChild(h()),m.addEventListener("click",(()=>{n.classList.toggle("nav__list--open"),m.classList.toggle("hamburger-btn--open")})),e.classList.add("header"),e.append(t),e.append(m),e},r=()=>{const e=document.createElement("main"),t=document.createElement("h1");t.textContent="Welcome to Sukari Sushi",t.classList.add("main__title","page-title"),e.classList.add("main"),e.append(t);const n=document.createElement("div");n.classList.add("staggered-container");const a=["For 20 years, Sukari Sushi has been serving the finest cuisine in the city with a unique dining experience. Our commitment to quality is evident in every dish, using only the freshest ingredients sourced from Japan's oceans. Our expert chefs blend traditional techniques with modern innovation to create an unforgettable dining experience.","We understand the importance of atmosphere in creating a memorable dining experience. That's why we've created a warm and welcoming environment, complete with elegant aesthetics and thoughtful design. Our efforts have been recognized and awarded, making us a top choice for those seeking a one-of-a-kind dining experience.","We invite you to come and experience the art of sushi with us. Our team of dedicated professionals is looking forward to serving you the finest cuisine in the city, in a warm and welcoming atmosphere."];for(let e=1;e<=3;e++){const t=document.createElement("div");t.classList.add("staggered-item");const r=document.createElement("img");r.src=`./assets/bg${e}.jpg`,r.alt="Restaurant Name",r.classList.add("staggered-image");const o=document.createElement("div");o.classList.add("staggered-text"),o.textContent=a[e-1],t.append(r),t.append(o),n.append(t)}return e.append(n),e},o=()=>{const e=document.createElement("footer"),t=i(["Contact","Sukrai Sushi","123 Main Street, City, State","SEE MAP","+12 34 56 78","sukarisushi@gmail.com"],"footer-column-1"),n=i(["Hours","MONDAY - THURSDAY","17:30 – 22:00","FRIDAY - SATURDAY","17:30 – 23:00","SUNDAY","CLOSED"],"footer-column-2"),a=i(["Careers","JOIN OUR TEAM"],"footer-column-3"),r=i(["About","PRIVACY POLICY","TERMS OF USE","HEALTH INSPECTION REPORT"],"footer-column-4"),o=i(["Follow","ANNOUNCEMENTS","NEWSLETTER","INSTAGRAM","TWITTER"],"footer-column-5");return e.append(t),e.append(n),e.append(a),e.append(r),e.append(o),e};function i(e,t){const n=document.createElement("div");return n.classList.add("footer-column",t),e.forEach(((e,a)=>{const r=0===a?"h4":"a",o=document.createElement(r);o.textContent=e,"footer-column-1"===t?"sukarisushi@gmail.com"===e?o.href="mailto:sukarisushi@gmail.com":"SEE MAP"===e&&(o.href="#"):"footer-column-3"!==t&&"footer-column-4"!==t&&"footer-column-5"!==t||(o.href="#"),n.append(o)})),n}const s=document.querySelector("#content");s.append(a()),s.append(r()),s.append(o())}},a={};function r(e){var t=a[e];if(void 0!==t)return t.exports;var o=a[e]={exports:{}};return n[e](o,o.exports,r),o.exports}r.m=n,r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>e+".main.js",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="odin-restaurantpage:",r.l=(n,a,o,i)=>{if(e[n])e[n].push(a);else{var s,c;if(void 0!==o)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+o){s=u;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+o),s.src=n),e[n]=[a];var p=(t,a)=>{s.onerror=s.onload=null,clearTimeout(m);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(a))),t)return t(a)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={179:0};r.f.j=(t,n)=>{var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise(((n,r)=>a=e[t]=[n,r]));n.push(a[2]=o);var i=r.p+r.u(t),s=new Error;r.l(i,(n=>{if(r.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}}),"chunk-"+t,t)}};var t=(t,n)=>{var a,o,[i,s,c]=n,d=0;if(i.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);c&&c(r)}for(t&&t(n);d<i.length;d++)o=i[d],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunkodin_restaurantpage=self.webpackChunkodin_restaurantpage||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{var e=r(34);const t=()=>{document.querySelectorAll("nav a").forEach((n=>{n.addEventListener("click",(a=>{a.preventDefault();const o=document.querySelector("#content");switch(o.innerHTML="",n.textContent.toLowerCase()){case"home":o.append((0,e.dc)()),o.append((0,e.CY)()),o.append((0,e.vE)()),t();break;case"menu":r.e(953).then(r.bind(r,953)).then((e=>{o.append(e.default()),t()}));break;case"about":r.e(122).then(r.bind(r,122)).then((e=>{o.append(e.default()),t()}));break;case"reservations":r.e(7).then(r.bind(r,7)).then((e=>{o.append(e.default()),t()}));break;case"contact":r.e(542).then(r.bind(r,542)).then((e=>{o.append(e.default()),t()}))}}))}))};t()})()})();
//# sourceMappingURL=main.js.map