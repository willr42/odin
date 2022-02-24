import drawHome from "./home";
import "./style.css";
import drawMenu from "./menu";
import drawContact from "./contact";


const contentDiv = document.querySelector("#content")

drawHome();

document.querySelectorAll("button").forEach(button => {
	button.addEventListener('click', event => {
		const buttonText = event.target.textContent.toLowerCase()
		const buttonList = document.querySelectorAll("button")

		buttonList.forEach(button => {
			if (button.textContent.toLowerCase() !== buttonText) {
				button.classList.remove("active")
			}
			if(button.textContent.toLowerCase() === buttonText){
				button.classList.add("active")
			}
		})
		while (contentDiv.hasChildNodes()) {
			contentDiv.removeChild(contentDiv.lastChild)
		}

		switch (buttonText) {
			case "menu":
				drawMenu()
				break;
			case "contact":
				drawContact()
				break;
			case "home":
				drawHome()
				break;
			default:
				drawHome()
				break;
		}

	})
})
