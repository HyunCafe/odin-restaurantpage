import { createHeader, createFooter } from "../pageLoad";

function reservations() {
  const reservationsSection = document.createElement("section");
  reservationsSection.classList.add("reservations");

  // Append the header
  reservationsSection.appendChild(createHeader());

  // Append the main content
  const reservationsWrapper = document.createElement("div");
  reservationsWrapper.classList.add("reservations__wrapper");

  const reservationsHeader = document.createElement("div");
  reservationsHeader.classList.add("reservations__header");

  const reservationsTitle = document.createElement("h1");
  reservationsTitle.classList.add("reservations__title");
  reservationsTitle.textContent = "Reservations";
  reservationsHeader.appendChild(reservationsTitle);

  const reservationsContent = document.createElement("div");
  reservationsContent.classList.add("reservations__content");

  const reservationsForm = document.createElement("form");
  reservationsForm.classList.add("reservations__form");

  const dateFormGroup = createFormGroup(
    "Date",
    "date",
    "reservations__input",
    true
  );
  const timeFormGroup = createFormGroup(
    "Time",
    "time",
    "reservations__input",
    true
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
  reservationsWrapper.append(reservationsHeader, reservationsContent);
  reservationsSection.appendChild(reservationsWrapper);

  // Append the footer
  const footer = createFooter();
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

export default reservations;
