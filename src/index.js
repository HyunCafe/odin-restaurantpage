import pageLoad, { createHeader, createFooter } from "./pageLoad";

pageLoad();

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    switch (link.textContent.toLowerCase()) {
      case "home":
        import("./main.js").then((module) => {
          module.default();
        });
        break;
      case "menu":
        import("./menu.js").then((module) => {
          module.default();
        });
        break;
      case "about":
        import("./about.js").then((module) => {
          module.default();
        });
        break;
      case "reservations":
        import("./reservations.js").then((module) => {
          module.default();
        });
        break;
      case "contact":
        import("./contact.js").then((module) => {
          module.default();
        });
        break;
      default:
        break;
    }
  });
});
