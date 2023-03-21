import pageLoad, { createHeader, createFooter } from "../pageLoad";

function menu() {
  // Append the header
  contactSection.appendChild(createHeader());

  
  // Append the footer
  contactSection.appendChild(createFooter());

}
export default menu;