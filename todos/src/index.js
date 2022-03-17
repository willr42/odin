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
	console.log("formElement value:", formElement)
	if (formElement === "") {
		console.log("No formElement value, returning false.")
		return false;
	} else {
console.log("Returning ture.")
return true
}}

form.addEventListener("submit", (e) => {
	e.preventDefault()
	const formTitle = form.title.value
	const formDate = form.duedate.value
	const formDescription = form.description.value
	if (!validateString(formTitle)) {
	console.log("There is no form title.")
	} else {
		console.log("There is a form title.")
	}
	// console.table([{"form": "formTitle", "value": formTitle},{"form": "formDate", "value": formDate},{"form":"formDescription", "value":formDescription}])
})