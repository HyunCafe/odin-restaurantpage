function pageLoad() {
    console.log('hello')
  function createHeader() {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const home = document.createElement("li");
    const homeLink = document.createElement("a");
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
    const p = document.createElement("p");
    const ul = document.createElement("ul");
    const terms = document.createElement("li");
    const termsLink = document.createElement("a");
    const privacy = document.createElement("li");
    const privacyLink = document.createElement("a");
    const cookie = document.createElement("li");
    const cookieLink = document.createElement("a");
    const socialMedia = document.createElement("div");
    const facebook = document.createElement("a");
    const twitter = document.createElement("a");
    const instagram = document.createElement("a");

    footer.classList.add("footer");

    p.classList.add("footer__text", "footer-text");
    p.textContent = "2023 Company Name";

    ul.classList.add("footer__links", "footer-links");

    termsLink.href = "#";
    termsLink.textContent = "Terms of Service";
    terms.classList.add("footer-links__item", "footer-item");
    termsLink.classList.add("footer-links__link", "footer-link");
    terms.append(termsLink);
    ul.append(terms);

    privacyLink.href = "#";
    privacyLink.textContent = "Privacy Policy";
    privacy.classList.add("footer-links__item", "footer-item");
    privacyLink.classList.add("footer-links__link", "footer-link");
    privacy.append(privacyLink);
    ul.append(privacy);

    cookieLink.href = "#";
    cookieLink.textContent = "Cookie Policy";
    cookie.classList.add("footer-links__item", "footer-item");
    cookieLink.classList.add("footer-links__link", "footer-link");
    cookie.append(cookieLink);
    ul.append(cookie);

    socialMedia.classList.add("footer__social-media", "social-media");

    facebook.href = "#";
    facebook.textContent = "Facebook";
    facebook.classList.add("social-media__link", "social-link");
    socialMedia.append(facebook);

    twitter.href = "#";
    twitter.textContent = "Twitter";
    twitter.classList.add("social-media__link", "social-link");
    socialMedia.append(twitter);

    instagram.href = "#";
    instagram.textContent = "Instagram";
    instagram.classList.add("social-media__link", "social-link");
    socialMedia.append(instagram);

    footer.append(p);
    footer.append(ul);
    footer.append(socialMedia);

    return footer;
  }

  const content = document.querySelector("#content");
  content.append(createHeader());
  content.append(createMain());
  content.append(createFooter());
}
export default pageLoad;
