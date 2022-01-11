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
// todo: dummy content for createmenuitem

function drawMenu() {
  const rootDiv = document.getElementById("content");
  const title = document.createElement("h1");
  const entreeHeading = document.createElement("h2")
  const mainHeading = document.createElement("h2")
  const dessertHeading = document.createElement("h2")
  title.textContent = "Menu";
  entreeHeading.textContent = "Entrée"
  mainHeading.textContent = "Main"
  dessertHeading.textContent = "Dessert"
  const content = [title, entreeHeading, emailHeading, emailDescription]
  content.forEach(element => {
    rootDiv.appendChild(element)
  });

  // integrate createMenuItem into this function. I think attaching a node should attach all child nodes so should be able to call it on the heading object.
}

export default drawMenu;
