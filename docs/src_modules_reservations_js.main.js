"use strict";
(self["webpackChunkodin_restaurantpage"] = self["webpackChunkodin_restaurantpage"] || []).push([["src_modules_reservations_js"],{

/***/ "./src/modules/reservations.js":
/*!*************************************!*\
  !*** ./src/modules/reservations.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pageLoad */ "./src/pageLoad.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");





function reservations() {
  const reservationsSection = document.createElement("section");
  reservationsSection.className = "reservations";

  // Append the header
  reservationsSection.appendChild((0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.createHeader)());

  // Append the main content
  const header = document.createElement("h1");
  header.textContent = "Reservations";
  reservationsSection.appendChild(header);

  const reservationsHeader = document.createElement("div");
  reservationsHeader.classList.add("reservations__header");

  const reservationsTitle = document.createElement("h1");
  reservationsTitle.classList.add("reservations__title");
  reservationsTitle.textContent = "Reservations";

  const reservationsContent = document.createElement("div");
  reservationsContent.classList.add("reservations__content");

  const reservationsForm = document.createElement("form");
  reservationsForm.classList.add("reservations__form");

  const dateFormGroup = createFormGroup(
    "Date",
    "date",
    "reservations__input",
    true,
    null,
    "fas fa-calendar"
  );
  const timeFormGroup = createFormGroup(
    "Time",
    "time",
    "reservations__input",
    true,
    null,
    "fas fa-clock"
  );
  const guestsFormGroup = createFormGroup(
    "Guests",
    "number",
    "reservations__input",
    true,
    1
  );

  const makeReservationButton = createButton(
    "Make Reservation",
    "reservations__button btn btn-primary"
  );
  const checkAvailabilityButton = createButton(
    "Check Availability",
    "reservations__button reservations__button--secondary btn btn-secondary"
  );

  reservationsForm.append(
    dateFormGroup,
    timeFormGroup,
    guestsFormGroup,
    makeReservationButton,
    checkAvailabilityButton
  );
  reservationsContent.appendChild(reservationsForm);
  reservationsHeader.appendChild(reservationsTitle);
  reservationsSection.append(reservationsHeader, reservationsContent);

  // Append the footer
  const footer = (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.createFooter)();
  footer.classList.add("reservations-footer");
  reservationsSection.appendChild(footer);

  return reservationsSection;
}

function createFormGroup(
  labelText,
  inputType,
  inputClass,
  isRequired,
  minValue
) {
  const formGroup = document.createElement("div");
  formGroup.classList.add("reservations__form-group");

  const label = document.createElement("label");
  label.setAttribute("for", inputType);
  label.classList.add("reservations__label");
  label.textContent = labelText;

  const input = document.createElement("input");
  input.setAttribute("type", inputType);
  input.setAttribute("id", inputType);
  input.classList.add(inputClass);
  input.required = isRequired;

  // Add Font Awesome icons for date and time input types
  if (inputType === "date") {
    const calendarIcon = document.createElement("span");
    calendarIcon.innerHTML = `<i class="fas fa-calendar-alt"></i>`;
    formGroup.appendChild(calendarIcon);
  } else if (inputType === "time") {
    const clockIcon = document.createElement("span");
    clockIcon.innerHTML = `<i class="fas fa-clock"></i>`;
    formGroup.appendChild(clockIcon);
  }

  if (inputType === "number" && minValue) {
    input.setAttribute("min", minValue);
  }

  formGroup.append(label, input);
  return formGroup;
}


function createButton(buttonText, buttonClass) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.classList.add(...buttonClass.split(" "));
  button.textContent = buttonText;
  return button;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reservations);


/***/ })

}]);
//# sourceMappingURL=src_modules_reservations_js.main.js.map