// rewrite this module to export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.
function drawHomepage(rootDiv) {
  const title = document.createElement("h1");
  const description = document.createElement("p")
  const content = [title,description]
  title.textContent = "Welcome to Applebeys";
  description.textContent = "Pepper jack emmental cheese strings. Cheese strings queso brie cheese triangles danish fontina everyone loves fromage say cheese. Babybel blue castello cauliflower cheese dolcelatte st. agur blue cheese cheese on toast dolcelatte cottage cheese. Melted cheese goat jarlsberg cheesecake cheese strings stinking bishop."
  content.forEach(element => {
    rootDiv.appendChild(element)
  });
}

export default drawHomepage;
