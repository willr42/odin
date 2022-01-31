import drawHome from "./home";
import menuitems from "./menu-items.json"
import drawMenu from "./menu";
const entrees = menuitems.entrees;
const main = menuitems.main;
const dessert = menuitems.dessert;

function createButton(buttonText, buttonPage, buttonClass = "nav-button") {
	const newButton = document.createElement("button")
	newButton.classList.add(buttonClass);
	newButton.textContent = buttonText;
	newButton.addEventListener("click", (e) => {
		if (e.target.classList.contains("active")) return;
		setActiveButton(e.target)
		buttonPage(entrees, main, dessert)
	}
	)
	return newButton
}

function setActiveButton(button) {
	const buttonList = document.getElementsByClassName("nav-button")	
	buttonList.forEach(element => {
		if (element = button) {
			element.classList.add("active")
		}	
	});
}

function drawHeader() {
	const rootDiv = document.getElementById("header")
	const homeButton = createButton("Home", drawHome)
	const menuButton = createButton("Menu", drawMenu)
	const contactButton = createButton("Contact Us")

	const content = [homeButton, menuButton, contactButton]

	content.forEach(element => {
		rootDiv.appendChild(element)
	});
}

export default drawHeader;