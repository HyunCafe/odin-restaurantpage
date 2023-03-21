import { createHeader, createFooter } from '../pageLoad';

function about() {
  const aboutSection = document.createElement("section");
  aboutSection.className = "about";

  // Append the header
  aboutSection.appendChild(createHeader());

  // Append the footer
  aboutSection.appendChild(createFooter());

  return aboutSection;
}

export default about;
