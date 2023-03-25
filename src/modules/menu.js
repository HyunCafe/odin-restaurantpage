import { createHeader, createFooter } from "../pageLoad";

function menu() {
  const menuSection = document.createElement("section");
  menuSection.className = "menu";

  // Append the header
  menuSection.appendChild(createHeader());

  // Create the main title
  const title = document.createElement("h1");
  title.className = "menu__title";
  title.textContent = "Seasonal Tasting Menu — $295";
  menuSection.appendChild(title);

  // Create the first section for Amuse-Bouche

  const amuseBouche = document.createElement("div");
  amuseBouche.className = "menu__section";
  menuSection.appendChild(amuseBouche);

  const amuseBoucheTitle = document.createElement("h2");
  amuseBoucheTitle.className = "menu__section-title";
  amuseBoucheTitle.textContent = "Amuse-Bouche";
  amuseBouche.appendChild(amuseBoucheTitle);

  const amuseBoucheList = document.createElement("ul");
  amuseBoucheList.className = "menu__list";
  amuseBouche.appendChild(amuseBoucheList);

  const amuseBoucheItem1 = document.createElement("li");
  amuseBoucheItem1.className = "menu__item";
  amuseBoucheItem1.textContent = "Oyster and Yuzu Mignonette";
  amuseBoucheList.appendChild(amuseBoucheItem1);

  const amuseBoucheItem2 = document.createElement("li");
  amuseBoucheItem2.className = "menu__item";
  amuseBoucheItem2.textContent = "Salmon Tartare with Wasabi Foam";
  amuseBoucheList.appendChild(amuseBoucheItem2);

  // Create the photo section for Appetizers
  const appetizersPhoto = document.createElement("div");
  appetizersPhoto.className = "menu__section menu__section--photo";
  menuSection.appendChild(appetizersPhoto);

  const appetizersPhotoImg = document.createElement("img");
  appetizersPhotoImg.className = "menu__photo";
  appetizersPhotoImg.src = "../docs/assets/scallopTruffleMenu.jpg";
  appetizersPhotoImg.alt = "Scallop Dish Photo";
  appetizersPhoto.appendChild(appetizersPhotoImg);

  // Create the section for Appetizers
  const appetizers = document.createElement("div");
  appetizers.className = "menu__section";
  menuSection.appendChild(appetizers);

  const appetizersTitle = document.createElement("h2");
  appetizersTitle.className = "menu__section-title";
  appetizersTitle.textContent = "Appetizers";
  appetizers.appendChild(appetizersTitle);

  const appetizersList = document.createElement("ul");
  appetizersList.className = "menu__list";
  appetizers.appendChild(appetizersList);

  const appetizersItem1 = document.createElement("li");
  appetizersItem1.className = "menu__item";
  appetizersItem1.textContent = "Sashimi Trio: Toro, Hamachi, and Salmon";
  appetizersList.appendChild(appetizersItem1);

  const appetizersItem2 = document.createElement("li");
  appetizersItem2.className = "menu__item";
  appetizersItem2.textContent =
    "Seared Scallop with Miso-Butter Sauce and Wakame Salad";
  appetizersList.appendChild(appetizersItem2);

  // Create the section for Salads

  const salads = document.createElement("div");
  salads.className = "menu__section";
  menuSection.appendChild(salads);

  const saladsTitle = document.createElement("h2");
  saladsTitle.className = "menu__section-title";
  saladsTitle.textContent = "Salads";
  salads.appendChild(saladsTitle);

  const saladsList = document.createElement("ul");
  saladsList.className = "menu__list";
  salads.appendChild(saladsList);

  const saladsItem1 = document.createElement("li");
  saladsItem1.className = "menu__item";
  saladsItem1.textContent = "Japanese Seaweed Salad with Sesame Vinaigrette";
  saladsList.appendChild(saladsItem1);

  const saladsItem2 = document.createElement("li");
  saladsItem2.className = "menu__item";
  saladsItem2.textContent =
    "Lobster, Avocado and Mango Salad with Citrus Dressing";
  saladsList.appendChild(saladsItem2);

  // Create the section for Sushi

  const sushi = document.createElement("div");
  sushi.className = "menu__section";
  menuSection.appendChild(sushi);

  const sushiTitle = document.createElement("h2");
  sushiTitle.className = "menu__section-title";
  sushiTitle.textContent = "Sushi Selection";
  sushi.appendChild(sushiTitle);

  const sushiList = document.createElement("ul");
  sushiList.className = "menu__list";
  sushi.appendChild(sushiList);

  const sushiItem1 = document.createElement("li");
  sushiItem1.className = "menu__item";
  sushiItem1.textContent = "Chef's Omakase Nigiri (10 pieces)";
  sushiList.appendChild(sushiItem1);

  const sushiItem2 = document.createElement("li");
  sushiItem2.className = "menu__item";
  sushiItem2.textContent = "Dragon Roll";
  sushiList.appendChild(sushiItem2);

  const sushiItem3 = document.createElement("li");
  sushiItem3.className = "menu__item";
  sushiItem3.textContent = "Sakura Roll";
  sushiList.appendChild(sushiItem3);

  const sushiItem4 = document.createElement("li");
  sushiItem4.className = "menu__item";
  sushiItem4.textContent = "Gold Rush Roll";
  sushiList.appendChild(sushiItem4);

  const sushiItem5 = document.createElement("li");
  sushiItem5.className = "menu__item";
  sushiItem5.textContent = "Black Diamond";
  sushiList.appendChild(sushiItem5);

  const sushiPhoto = document.createElement("div");
  sushiPhoto.className = "menu__section menu__section--photo";
  sushi.appendChild(sushiPhoto);

  const sushiImg = document.createElement("img");
  sushiImg.className = "menu__photo";
  sushiImg.alt = "Sushi Dish Photo";
  sushiImg.src = "../docs/assets/sush1Menu.jpg";
  sushiPhoto.appendChild(sushiImg);

  // Create the Mains section
  const mains = document.createElement("div");
  mains.className = "menu__section";
  menuSection.appendChild(mains);

  const mainsTitle = document.createElement("h2");
  mainsTitle.className = "menu__section-title";
  mainsTitle.textContent = "Mains";
  mains.appendChild(mainsTitle);

  const mainsList = document.createElement("ul");
  mainsList.className = "menu__list";
  mains.appendChild(mainsList);

  const mainsItem1 = document.createElement("li");
  mainsItem1.className = "menu__item";
  mainsItem1.textContent =
    "Miso-Marinated Black Cod with Bok Choy and Shiitake Mushrooms";
  mainsList.appendChild(mainsItem1);

  const mainsItem2 = document.createElement("li");
  mainsItem2.className = "menu__item";
  mainsItem2.textContent =
    "Grilled A5 Wagyu Beef with Garlic Soy Sauce, Daikon Radish, and Microgreens";
  mainsList.appendChild(mainsItem2);

  // Create the photo section for Mains
  const mainsPhoto = document.createElement("div");
  mainsPhoto.className = "menu__section menu__section--photo";
  menuSection.appendChild(mainsPhoto);

  const mainsPhotoImg = document.createElement("img");
  mainsPhotoImg.className = "menu__photo";
  mainsPhotoImg.src = "../docs/assets/wagyuMenu.jpg";
  mainsPhotoImg.alt = "Wagyu Beef Dish Photo";
  mainsPhoto.appendChild(mainsPhotoImg);

  // Create the Intermezzo section
  const intermezzo = document.createElement("div");
  intermezzo.className = "menu__section";
  menuSection.appendChild(intermezzo);

  const intermezzoTitle = document.createElement("h2");
  intermezzoTitle.className = "menu__section-title";
  intermezzoTitle.textContent = "Intermezzo";
  intermezzo.appendChild(intermezzoTitle);

  const intermezzoList = document.createElement("ul");
  intermezzoList.className = "menu__list";
  intermezzo.appendChild(intermezzoList);

  const intermezzoItem = document.createElement("li");
  intermezzoItem.className = "menu__item";
  intermezzoItem.textContent = "Yuzu Sorbet";
  intermezzoList.appendChild(intermezzoItem);

  // Create the Desserts section
  const desserts = document.createElement("div");
  desserts.className = "menu__section";
  menuSection.appendChild(desserts);

  const dessertsTitle = document.createElement("h2");
  dessertsTitle.className = "menu__section-title";
  dessertsTitle.textContent = "Desserts";
  desserts.appendChild(dessertsTitle);

  const dessertsList = document.createElement("ul");
  dessertsList.className = "menu__list";
  desserts.appendChild(dessertsList);

  const dessertsItem1 = document.createElement("li");
  dessertsItem1.className = "menu__item";
  dessertsItem1.textContent = "Matcha Green Tea Tiramisu with Seasonal Berries";
  dessertsList.appendChild(dessertsItem1);

  const dessertsItem2 = document.createElement("li");
  dessertsItem2.className = "menu__item";
  dessertsItem2.textContent =
    "Black Sesame Panna Cotta with Raspberry Coulis and Candied Ginger";
  dessertsList.appendChild(dessertsItem2);

  // Create the photo section for Desserts
  const dessertsPhoto = document.createElement("div");
  dessertsPhoto.className = "menu__section menu__section--photo";
  menuSection.appendChild(dessertsPhoto);

  const dessertsPhotoImg = document.createElement("img");
  dessertsPhotoImg.className = "menu__photo";
  dessertsPhotoImg.src = "../docs/assets/desertMenu.jpg";
  dessertsPhotoImg.alt = " Dessert Photo";
  dessertsPhoto.appendChild(dessertsPhotoImg);

  // Create the Petit Fours section
  const petitFours = document.createElement("div");
  petitFours.className = "menu__section";
  menuSection.appendChild(petitFours);

  const petitFoursTitle = document.createElement("h2");
  petitFoursTitle.className = "menu__section-title";
  petitFoursTitle.textContent = "Petit Fours";
  petitFours.appendChild(petitFoursTitle);

  const petitFoursList = document.createElement("ul");
  petitFoursList.className = "menu__list";
  petitFours.appendChild(petitFoursList);

  const petitFoursItem1 = document.createElement("li");
  petitFoursItem1.className = "menu__item";
  petitFoursItem1.textContent = "Green Tea Macarons";
  petitFoursList.appendChild(petitFoursItem1);

  const petitFoursItem2 = document.createElement("li");
  petitFoursItem2.className = "menu__item";
  petitFoursItem2.textContent = "Chocolate Mochi Truffles";
  petitFoursList.appendChild(petitFoursItem2);

  // Create the Drink Pairing section
  const winePairing = document.createElement("div");
  winePairing.className = "menu__section";
  menuSection.appendChild(winePairing);

  const wineTitle = document.createElement("h2");
  wineTitle.className = "menu__section-title";
  wineTitle.textContent = "Wine Pairing";
  winePairing.appendChild(wineTitle);

  const wineList = document.createElement("ul");
  wineList.className = "menu__list";
  winePairing.appendChild(wineList);

  const wineItem1 = document.createElement("li");
  wineItem1.className = "menu__item";
  wineItem1.textContent = "Premium Sake and Wine Pairing: $175";
  wineList.appendChild(wineItem1);

  const wineItem2 = document.createElement("li");
  wineItem2.className = "menu__item";
  wineItem2.textContent = "Exclusive Sake and Wine Pairing: $325";
  wineList.appendChild(wineItem2);

  const drinkPhoto = document.createElement("div");
  drinkPhoto.className = "menu__section menu__section--photo";
  winePairing.appendChild(drinkPhoto);

  const drinkPhotoImg = document.createElement("img");
  drinkPhotoImg.src = "../docs/assets/drinkMenu.jpg";
  drinkPhotoImg.alt = "Menu Photo";
  drinkPhotoImg.className = "menu__photo";
  drinkPhoto.appendChild(drinkPhotoImg);

  const spiritFreePairing = document.createElement("div");
  spiritFreePairing.className = "menu__section";
  menuSection.appendChild(spiritFreePairing);

  const spiritTitle = document.createElement("h2");
  spiritTitle.className = "menu__section-title";
  spiritTitle.textContent = "Spirit-Free Pairing";
  spiritFreePairing.appendChild(spiritTitle);

  const spiritList = document.createElement("ul");
  spiritList.className = "menu__list";
  spiritFreePairing.appendChild(spiritList);

  const spiritItem1 = document.createElement("li");
  spiritItem1.className = "menu__item";
  spiritItem1.textContent = "Japanese-Inspired Mocktails and Tea Pairing: $95";
  spiritList.appendChild(spiritItem1);

  const menuNote = document.createElement("p");
  menuNote.className = "menu__note";
  menuNote.textContent =
    "Please inform your server of any dietary restrictions or allergies. Our chef will be happy to accommodate your needs.";
  menuSection.appendChild(menuNote);

  // Append the footer
  menuSection.appendChild(createFooter());

  return menuSection;
}

export default menu;
