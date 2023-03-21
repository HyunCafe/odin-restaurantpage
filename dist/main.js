/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter),
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "createMain": () => (/* binding */ createMain)
/* harmony export */ });
// ---------------------------------------------- HEADER SECTION ---------------------------------------------- //
const createHeader = () => {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const home = document.createElement("li");
  const homeLink = document.createElement("a");
  const about = document.createElement("li");
  const aboutLink = document.createElement("a");
  const menu = document.createElement("li");
  const menuLink = document.createElement("a");
  const reservations = document.createElement("li");
  const reservationsLink = document.createElement("a");
  const contact = document.createElement("li");
  const contactLink = document.createElement("a");

  homeLink.href = "#";
  homeLink.textContent = "Home";
  home.classList.add("nav__item");
  homeLink.classList.add("nav__link");
  home.append(homeLink);

  menuLink.href = "#";
  menuLink.textContent = "Menu";
  menu.classList.add("nav__item");
  menuLink.classList.add("nav__link");
  menu.append(menuLink);

  aboutLink.href = "#";
  aboutLink.textContent = "About";
  about.classList.add("nav__item");
  aboutLink.classList.add("nav__link");
  about.append(aboutLink);

  reservationsLink.href = "#";
  reservationsLink.textContent = "Reservations";
  reservations.classList.add("nav__item");
  reservationsLink.classList.add("nav__link");
  reservations.append(reservationsLink);

  contactLink.href = "#";
  contactLink.textContent = "Contact";
  contact.classList.add("nav__item");
  contactLink.classList.add("nav__link");
  contact.append(contactLink);

  ul.classList.add("nav__list");
  ul.append(home);
  ul.append(menu);
  ul.append(about);
  ul.append(reservations);
  ul.append(contact);

  nav.classList.add("header__nav", "nav");
  nav.append(ul);

  header.classList.add("header");
  header.append(nav);

  return header;
};

// ---------------------------------------------- MAIN SECTION ---------------------------------------------- //
const createMain = () => {
  const main = document.createElement("main");
  const title = document.createElement("h1");

  title.textContent = "Welcome to Sukari Sushi";
  title.classList.add("main__title", "page-title");

  main.classList.add("main");
  main.append(title);

  const staggeredContainer = document.createElement("div");
  staggeredContainer.classList.add("staggered-container");

  const texts = [
    "For 20 years, Sukari Sushi has been serving the finest cuisine in the city with a unique dining experience. Our commitment to quality is evident in every dish, using only the freshest ingredients sourced from Japan's oceans. Our expert chefs blend traditional techniques with modern innovation to create an unforgettable dining experience.",
    "We understand the importance of atmosphere in creating a memorable dining experience. That's why we've created a warm and welcoming environment, complete with elegant aesthetics and thoughtful design. Our efforts have been recognized and awarded, making us a top choice for those seeking a one-of-a-kind dining experience.",
    "We invite you to come and experience the art of sushi with us. Our team of dedicated professionals is looking forward to serving you the finest cuisine in the city, in a warm and welcoming atmosphere.",
  ];

  for (let i = 1; i <= 3; i++) {
    const staggeredItem = document.createElement("div");
    staggeredItem.classList.add("staggered-item");

    const image = document.createElement("img");
    image.src = `../src/assets/bg${i}.jpg`;
    image.alt = "Restaurant Name";
    image.classList.add("staggered-image");

    const staggeredText = document.createElement("div");
    staggeredText.classList.add("staggered-text");
    staggeredText.textContent = texts[i - 1];

    if (i % 2 === 0) {
      staggeredItem.style.flexDirection = "row-reverse";
    }

    staggeredItem.append(image);
    staggeredItem.append(staggeredText);
    staggeredContainer.append(staggeredItem);
  }

  main.append(staggeredContainer);

  return main;
};

// ---------------------------------------------- FOOTER SECTION ---------------------------------------------- //
const createFooter = () => {
  const footer = document.createElement("footer");

  const column1 = createFooterColumn(
    [
      "Contact",
      "Sukrai Sushi",
      "123 Main Street, City, State",
      "SEE MAP",
      "+12 34 56 78",
      "sukarisushi@gmail.com",
    ],
    "footer-column-1"
  );
  const column2 = createFooterColumn(
    [
      "Hours",
      "TUESDAY - THURSDAY",
      "17:00 – 23:00",
      "FRIDAY",
      "12:30 – 17:30, 18:00 – 23:30",
      "SATURDAY, SUNDAY, MONDAY",
      "CLOSED",
    ],
    "footer-column-2"
  );

  const column3 = createFooterColumn(
    ["Careers", "JOIN OUR TEAM"],
    "footer-column-3"
  );
  const column4 = createFooterColumn(
    ["About", "PRIVACY POLICY", "TERMS OF USE", "HEALTH INSPECTION REPORT"],
    "footer-column-4"
  );
  const column5 = createFooterColumn(
    ["Follow", "ANNOUNCEMENTS", "NEWSLETTER", "INSTAGRAM", "TWITTER"],
    "footer-column-5"
  );

  footer.append(column1);
  footer.append(column2);
  footer.append(column3);
  footer.append(column4);
  footer.append(column5);

  return footer;
};

function createFooterColumn(items, className) {
  const column = document.createElement("div");
  column.classList.add("footer-column", className);

  items.forEach((item, index) => {
    const element = index === 0 ? "h4" : "a";
    const a = document.createElement(element);
    a.textContent = item;

    if (className === "footer-column-1") {
      if (item === "sukarisushi@gmail.com") {
        a.href = "mailto:sukarisushi@gmail.com";
      } else if (item === "SEE MAP") {
        a.href = "#";
      }
    } else if (
      className === "footer-column-3" ||
      className === "footer-column-4" ||
      className === "footer-column-5"
    ) {
      a.href = "#";
    }

    column.append(a);
  });

  return column;
}

const content = document.querySelector("#content");
content.append(createHeader());
content.append(createMain());
content.append(createFooter());


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "odin-restaurantpage:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkodin_restaurantpage"] = self["webpackChunkodin_restaurantpage"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ "./src/pageLoad.js");


const setupEventListeners = () => {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const content = document.querySelector("#content");
      content.innerHTML = "";
      switch (link.textContent.toLowerCase()) {
        case "home":
          content.append((0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)());
          content.append((0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.createMain)());
          content.append((0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)());
          setupEventListeners();
          break;
        case "menu":
          __webpack_require__.e(/*! import() */ "src_modules_menu_js").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/menu.js */ "./src/modules/menu.js")).then((module) => {
            content.append(module.default());
            setupEventListeners();
          });
          break;
        case "about":
          __webpack_require__.e(/*! import() */ "src_modules_about_js").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/about.js */ "./src/modules/about.js")).then((module) => {
            content.append(module.default());
            setupEventListeners();
          });
          break;
        case "reservations":
          __webpack_require__.e(/*! import() */ "src_modules_reservations_js").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/reservations.js */ "./src/modules/reservations.js")).then((module) => {
            content.append(module.default());
            setupEventListeners();
          });
          break;
        case "contact":
          __webpack_require__.e(/*! import() */ "src_modules_contact_js").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/contact.js */ "./src/modules/contact.js")).then((module) => {
            content.append(module.default());
            setupEventListeners();
          });
          break;
        default:
          break;
      }
    });
  });
};

setupEventListeners();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map