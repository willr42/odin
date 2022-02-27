import applebees from '../src/applebees.jpg'

function drawHomepage() {
  const rootDiv = document.getElementById("content");
  const title = document.createElement("h1");
  const description = document.createElement("p")
  const image = document.createElement("img")
  title.textContent = "Welcome to Applebeys";
  description.textContent = "Pepper jack emmental cheese strings. Cheese strings queso brie cheese triangles danish fontina everyone loves fromage say cheese. Babybel blue castello cauliflower cheese dolcelatte st. agur blue cheese cheese on toast dolcelatte cottage cheese. Melted cheese goat jarlsberg cheesecake cheese strings stinking bishop."
  image.src = applebees;
  const content = [title, image, description]
  content.forEach(element => {
    rootDiv.appendChild(element)
  });
}

export default drawHomepage;
