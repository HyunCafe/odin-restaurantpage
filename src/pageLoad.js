// ---------------------------------------------- HEADER SECTION ---------------------------------------------- //
export const createHeader = () => {
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
export const createMain = () => {
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
export const createFooter = () => {
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
