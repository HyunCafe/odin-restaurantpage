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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function pageLoad() {
  function createHeader() {
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
    ul.append(reservations);
    ul.append(contact);

    nav.classList.add("header__nav", "nav");
    nav.append(ul);

    header.classList.add("header");
    header.append(nav);

    return header;
  }

  function createMain() {
    const main = document.createElement("main");
    const title = document.createElement("h1");
    const image = document.createElement("img");
    const content = document.createElement("p");

    title.textContent = "Welcome to Restaurant Name";
    title.classList.add("main__title", "page-title");

    image.src = "path/to/image.jpg";
    image.alt = "Restaurant Name";
    image.classList.add("main__image");

    content.textContent = "We serve the finest cuisine in the city.";
    content.classList.add("main__content", "page-content");

    main.classList.add("main");
    main.append(title);
    main.append(image);
    main.append(content);

    return main;
  }

  function createFooter() {
    const footer = document.createElement("footer");

    const column1 = createFooterColumn(
      [
        "Contact",
        "Reserved",
        "Rehoover 23",
        "1234 COPENHAGEN K",
        "SEE MAP",
        "+12 34 56 78",
        "food@food.co",
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
  }

  function createFooterColumn(items, className) {
    const column = document.createElement("div");
    column.classList.add("footer-column", className);

    items.forEach((item, index) => {
      const element = index === 0 ? "h4" : "a";
      const a = document.createElement(element);
      a.textContent = item;

      if (className === "footer-column-1") {
        if (item === "food@food.co") {
          a.href = "mailto:food@food.co";
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
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);


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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");


(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map