"use strict";
(self["webpackChunkodin_restaurantpage"] = self["webpackChunkodin_restaurantpage"] || []).push([["src_modules_contact_js"],{

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pageLoad */ "./src/pageLoad.js");


function contact() {
  const contactSection = document.createElement("section");
  contactSection.className = "contact";

  // Append the header
  contactSection.append((0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.createHeader)());

  const header = document.createElement("h1");
  header.className = "contact__header";
  header.textContent = "Contact";

  const wrapper = document.createElement("div");
  wrapper.className = "contact__wrapper";

  const form = document.createElement("form");
  form.className = "contact__form";
  form.innerHTML = `Have a comment, critique or suggestion? We’d love to hear from you.
          <input type="text" class="contact__input" id="name" placeholder="NAME" required />
          <input type="email" class="contact__input" id="email" placeholder="EMAIL" required />
          <textarea class="contact__textarea" placeholder="MESSAGE" required></textarea>
          <button class="contact__submit btn btn-primary">SEND</button>`;

  const info = document.createElement("div");
  info.className = "contact__info";
  info.innerHTML = `
          <ul class="contact__list">
            <li class="contact__item">
              <i class="contact__icon fa fa-phone"></i>
              <span class="contact__text">
                <a href="tel:1-212-555-5555">+12 34 56 78</a>
              </span>
            </li>
            <li class="contact__item">
              <i class="contact__icon fa fa-envelope"></i>
              <span class="contact__text">
                <a href="mailto:hitmeup@gmail.com">food@food.co</a>
              </span>
            </li>
          </ul>
          <ul class="contact__social-media">
            <li class="contact__social-media-item">
              <a href="#" target="_blank" class="contact__social-media-link">Twitter
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li class="contact__social-media-item">
              <a href="#" target="_blank" class="contact__social-media-link">Instagram
                <i class="fa fa-instagram"></i>
              </a>
            </li>
          </ul>`;

  const map = document.createElement("div");
  map.className = "map";
  map.innerHTML = `
          <div class="map__header">Visit Us!
            <div class="map__address">
              <div class="map__address-header">Sukari Sushi
              </div>
              <div class="map__address-text">123 Main Street, City, State</div>
            </div>
          </div>
          <div class="map__map-container">
            <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.196191148072!2d-71.06196368505134!3d42.35752683823448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652e2f2c491b%3A0xc4e4b4dd4d3505e5!2sBoston%20Common!5e0!3m2!1sen!2sus!4v1645156402613!5m2!1sen!2sus"
              frameborder="0"
              style="border: 0; width: 100%; height: 100%;"
        allowfullscreen
        loading="lazy">
      </iframe>
    </div>`;

  wrapper.append(form);
  wrapper.append(info);

  contactSection.append(header);
  contactSection.append(wrapper);
  contactSection.append(map);

  // Append the footer
  contactSection.append((0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.createFooter)());

  return contactSection;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);


/***/ })

}]);
//# sourceMappingURL=src_modules_contact_js.main.js.map