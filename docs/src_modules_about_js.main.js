"use strict";
(self["webpackChunkodin_restaurantpage"] = self["webpackChunkodin_restaurantpage"] || []).push([["src_modules_about_js"],{

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pageLoad */ "./src/pageLoad.js");


function about() {
  const aboutSection = document.createElement("section");
  aboutSection.className = "about";

  // Append the header
  aboutSection.appendChild((0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.createHeader)());

  const aboutTitle = document.createElement("h1");
  aboutTitle.classList.add("about__title");
  aboutTitle.textContent = "About Our Restaurant";
  aboutSection.appendChild(aboutTitle);

  const aboutContent = document.createElement("div");
  aboutContent.classList.add("about__content");
  aboutSection.appendChild(aboutContent);

  const aboutImages = [
    { src: "/src/assets/about1.jpg", alt: "Bamboo Trees" },
    { src: "/src/assets/about2.jpg", alt: "Sushi Chef" },
  ];

  const aboutTexts = [
    `For the past twenty years, Sukari Sushi has been a restaurant devoted to curiosity, growth, and the pursuit of excellence in Japanese cuisine. Our origins are deeply rooted in the exploration of authentic Japanese ingredients and the adherence to the traditional practices that define our culinary art form.
  
      At Sukari Sushi, our journey began with the simple desire to rediscover the natural flavors of Japan by sourcing the finest ingredients from local producers and following the rhythm of the seasons.`,
    `Throughout the years, we have expanded our expertise in various areas; we have dedicated teams for culinary innovation, fermentation techniques, and ingredient research. Our full-time foragers and gardeners ensure we use only the freshest and most authentic ingredients. We've traveled to Japan and beyond in search of inspiration, techniques, friendships, and unique ingredients. Our team has grown from an intimate group of twelve to over one hundred passionate individuals.`,
    `Our renowned sushi chef has been instrumental in shaping our identity, bringing years of experience and an unwavering dedication to the art of sushi. Their expertise and attention to detail have played a significant role in making Sukari Sushi the esteemed establishment it is today.
  
      Our constant pursuit of knowledge, boundless creativity, relentless teamwork, and commitment to surprising and delighting our guests are integral to the Sukari Sushi experience. We strive to share our love for authentic Japanese cuisine with every dish we create and look forward to welcoming you on this culinary journey.`,
  ];

  aboutTexts.forEach((text, index) => {
    if (index % 2 === 0) {
      const aboutImage = document.createElement("img");
      aboutImage.src = aboutImages[index / 2].src;
      aboutImage.alt = aboutImages[index / 2].alt;
      aboutImage.classList.add("about__image");
      aboutContent.appendChild(aboutImage);
    }

    const aboutText = document.createElement("p");
    aboutText.classList.add("about__text");
    aboutText.classList.add(`about__text--${index + 1}`);
    aboutText.textContent = text;
    aboutContent.appendChild(aboutText);
  });

  // Append the footer
  aboutSection.appendChild((0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.createFooter)());

  return aboutSection;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);


/***/ })

}]);
//# sourceMappingURL=src_modules_about_js.main.js.map