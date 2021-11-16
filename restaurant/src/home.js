const rootDiv = document.getElementById("content");
// rewrite this module to export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.
function drawHome() {
  const title = document.createElement("h1");
  title.textContent = "Welcome to Applebeys";
  rootDiv.appendChild(title);
}

export default drawHome;
