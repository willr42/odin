import { validate } from "webpack/node_modules/schema-utils"
import Todo from "./Todo.js"

const todoArea = document.querySelector("#todo-area")

// Create new todo button
const newTodoButton = document.createElement("button")
newTodoButton.classList.add("newTodoButton")
newTodoButton.textContent = "+"
newTodoButton.addEventListener("click", (e) => {
	console.log("newTodoButton clicked. Event", e)
})
todoArea.appendChild(newTodoButton)

const form = document.getElementById("newTodo")

function validateString(formElement) {
	if (formElement === "") {
		return false;
	} else {
		return true
	}
}

form.addEventListener("submit", (e) => {
	e.preventDefault()
	const formTitle = form.title
	const formDate = form.duedate
	const formDescription = form.description

	function formValidate(formTitle, formDate, formDescription) {
		let formErrors = [];
		// test each value in turn. If error, push to formErrors array. Once finished, if there are no formErrors, break. Otherwise, use form element to attach error message below.
		if (!validateString(formTitle.value)) {
			console.log("There is no form title.")
		} else {
			console.log("There is a form title.")
		}
	}
	// console.table([{"form": "formTitle", "value": formTitle},{"form": "formDate", "value": formDate},{"form":"formDescription", "value":formDescription}])
})