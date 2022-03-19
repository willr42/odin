import Modal from "./components/modal.js"

Modal()
const form = document.getElementById("newTodo")

form.addEventListener("submit", (e) => {
	e.preventDefault()
})