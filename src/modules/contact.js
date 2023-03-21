import pageLoad, { createHeader, createFooter } from "../pageLoad";

function createForm() {
  const form = document.createElement("form");
  form.className = "contact__form";

  const label = document.createElement("label");
  label.textContent =
    "Have a comment, critique or suggestion? We’d love to hear from you.";
  form.appendChild(label);

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.className = "contact__input";
  nameInput.id = "name";
  nameInput.placeholder = "NAME";
  nameInput.required = true;
  form.appendChild(nameInput);

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.className = "contact__input";
  emailInput.id = "email";
  emailInput.placeholder = "EMAIL";
  emailInput.required = true;
  form.appendChild(emailInput);

  const messageInput = document.createElement("textarea");
  messageInput.className = "contact__textarea";
  messageInput.placeholder = "MESSAGE";
  messageInput.required = true;
  form.appendChild(messageInput);

  const submitButton = document.createElement("button");
  submitButton.className = "contact__submit btn btn-primary";
  submitButton.textContent = "SEND";
  form.appendChild(submitButton);

  return form;
}

function createInfo() {
  const info = document.createElement("div");
  info.className = "contact__info";

  const phoneListItem = document.createElement("li");
  phoneListItem.className = "contact__item";
  const phoneIcon = document.createElement("i");
  phoneIcon.className = "material-icons contact__icon";
  phoneIcon.textContent = "phone";
  phoneListItem.appendChild(phoneIcon);
  const phoneLink = document.createElement("a");
  phoneLink.href = "";
  phoneLink.textContent = "+12 34 56 78";
  const phoneText = document.createElement("span");
  phoneText.className = "contact__text";
  phoneText.appendChild(phoneLink);
  phoneListItem.appendChild(phoneText);

  const emailListItem = document.createElement("li");
  emailListItem.className = "contact__item";
  const emailIcon = document.createElement("i");
  emailIcon.className = "material-icons contact__icon";
  emailIcon.textContent = "email";
  emailListItem.appendChild(emailIcon);
  const emailLink = document.createElement("a");
  emailLink.href = "mailto:sakuraisushi@gmail.com";
  emailLink.textContent = "sakuraisushi@gmail.com";
  const emailText = document.createElement("span");
  emailText.className = "contact__text";
  emailText.appendChild(emailLink);
  emailListItem.appendChild(emailText);

  const facebookListItem = document.createElement("li");
  facebookListItem.className = "contact__item";
  const facebookIcon = document.createElement("i");
  facebookIcon.className = "material-icons contact__icon";
  facebookIcon.textContent = "share";
  facebookListItem.appendChild(facebookIcon);
  const facebookLink = document.createElement("a");
  facebookLink.href = "https://www.facebook.com/";
  facebookLink.target = "_blank";
  facebookLink.textContent = "Facebook";
  const facebookText = document.createElement("span");
  facebookText.className = "contact__text";
  facebookText.appendChild(facebookLink);
  facebookListItem.appendChild(facebookText);

  const twitterListItem = document.createElement("li");
  twitterListItem.className = "contact__item";
  const twitterIcon = document.createElement("i");
  twitterIcon.className = "material-icons contact__icon";
  twitterIcon.textContent = "share";
  twitterListItem.appendChild(twitterIcon);
  const twitterLink = document.createElement("a");
  twitterLink.href = twitterLink.target = "_blank";
  twitterLink.textContent = "Twitter";
  const twitterText = document.createElement("span");
  twitterText.className = "contact__text";
  twitterText.appendChild(twitterLink);
  twitterListItem.appendChild(twitterText);

  const instagramListItem = document.createElement("li");
  instagramListItem.className = "contact__item";
  const instagramIcon = document.createElement("i");
  instagramIcon.className = "material-icons contact__icon";
  instagramIcon.textContent = "share";
  instagramListItem.appendChild(instagramIcon);
  const instagramLink = document.createElement("a");
  instagramLink.href = "#";
  instagramLink.target = "_blank";
  instagramLink.textContent = "Instagram";
  const instagramText = document.createElement("span");
  instagramText.className = "contact__text";
  instagramText.appendChild(instagramLink);
  instagramListItem.appendChild(instagramText);

  const ul = document.createElement("ul");
  ul.className = "contact__list";
  ul.appendChild(phoneListItem);
  ul.appendChild(emailListItem);
  ul.appendChild(facebookListItem);
  ul.appendChild(twitterListItem);
  ul.appendChild(instagramListItem);

  info.appendChild(ul);

  return info;
}

function createMap() {
  const map = document.createElement("div");
  map.className = "map";

  const header = document.createElement("div");
  header.className = "map__header";
  header.textContent = "Visit Us!";

  const address = document.createElement("div");
  address.className = "map__address";

  const addressHeader = document.createElement("div");
  addressHeader.className = "map__address-header";
  addressHeader.textContent = "Sukari Sushi";

  const addressText = document.createElement("div");
  addressText.className = "map__address-text";
  addressText.textContent = "123 Main Street, City, State";

  address.appendChild(addressHeader);
  address.appendChild(addressText);

  const mapContainer = document.createElement("div");
  mapContainer.className = "map__map-container";

  const mapIframe = document.createElement("iframe");
  mapIframe.id = "map";
  mapIframe.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.196191148072!2d-71.06196368505134!3d42.35752683823448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652e2f2c491b%3A0xc4e4b4dd4d3505e5!2sBoston%20Common!5e0!3m2!1sen!2sus!4v1645156402613!5m2!1sen!2sus";
  mapIframe.frameborder = 0;
  mapIframe.style.border = "0";
  mapIframe.style.width = "100%";
  mapIframe.style.height = "100%";
  mapIframe.allowfullscreen = true;
  mapIframe.loading = "lazy";

  mapContainer.appendChild(mapIframe);

  map.appendChild(header);
  map.appendChild(address);
  map.appendChild(mapContainer);

  return map;
}

function contact() {
  const contactSection = document.createElement("section");
  contactSection.className = "contact";

  // Append the header
  contactSection.appendChild(createHeader());

  const header = document.createElement("h1");
  header.className = "contact__header";
  header.textContent = "Contact";
  const wrapper = document.createElement("div");
  wrapper.className = "contact__wrapper";

  wrapper.appendChild(createForm());
  wrapper.appendChild(createInfo());

  contactSection.appendChild(header);
  contactSection.appendChild(wrapper);
  contactSection.appendChild(createMap());

  // Append the footer
  contactSection.appendChild(createFooter());

  return contactSection;
}

export default contact;
