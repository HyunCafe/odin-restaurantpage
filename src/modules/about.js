import { createHeader, createFooter } from '../pageLoad';

function about() {
  // Append the header
  contactSection.appendChild(createHeader());

  
  // Append the footer
  contactSection.appendChild(createFooter());

}
export default about;