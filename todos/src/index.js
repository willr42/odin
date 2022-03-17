import Todo from "./Todo.js"

const todoArea = document.querySelector("#todo-area")
const newTodoButton = document.createElement("button")
newTodoButton.classList.add("newTodoButton")
newTodoButton.textContent = "+"
newTodoButton.addEventListener("click", (e) => {
	console.log("newTodoButton clicked. Event", e)
})
todoArea.appendChild(newTodoButton)

const form = document.getElementById("newTodo")

form.addEventListener("submit", (e) => {
	e.preventDefault()
})