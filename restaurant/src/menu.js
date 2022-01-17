function createMenuItem(name, description, price, parentElem) {
  let itemName = document.createElement("h3")
  let itemDescription = document.createElement("p")
  let itemPrice = document.createElement("p")
  itemName.textContent = name;
  itemDescription.textContent = description;
  itemPrice.textContent = "$ " + price;
  itemName.appendChild(itemDescription);
  itemName.appendChild(itemPrice)
  parentElem.appendChild(itemName)
}

function drawMenu(entrees, main, dessert){
  const rootDiv = document.getElementById("content");
  const title = document.createElement("h1");
  const entreeHeading = document.createElement("h2")
  const mainHeading = document.createElement("h2")
  const dessertHeading = document.createElement("h2")
  const content = [title, entreeHeading, mainHeading, dessertHeading] 
  content.forEach(element => {
    rootDiv.appendChild(element)
  })
  title.textContent = "Menu";
  entreeHeading.textContent = "Entrée"
  for (const item of entrees) {
    createMenuItem(item.name, item.description, item.price, entreeHeading)
  }
  mainHeading.textContent = "Main"
  for (const item of main) {
    createMenuItem(item.name, item.description, item.price, mainHeading)
  }
  dessertHeading.textContent = "Dessert"
  for (const item of dessert) {
    createMenuItem(item.name, item.description, item.price, dessertHeading)
  }

}

export default drawMenu;
