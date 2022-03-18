import Todo from "./Todo.js"
import NewTodoButton from "./components/NewTodoButton.js"

NewTodoButton()
const form = document.getElementById("newTodo")

form.addEventListener("submit", (e) => {
	e.preventDefault()
})