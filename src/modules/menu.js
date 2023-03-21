import { createHeader, createFooter } from '../pageLoad';

function menu() {
  const menuSection = document.createElement("section");
  menuSection.className = "menu";

  // Append the header
  menuSection.appendChild(createHeader());

  // Append the footer
  menuSection.appendChild(createFooter());

  return menuSection;
}

export default menu;
