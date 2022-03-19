import Modal from "./components/modal.js"
import Todo from "./components/Todo.js"
Modal()
const form = document.getElementById("newTodo")

form.addEventListener("submit", (e) => {
	e.preventDefault()
	console.log("form title:", form.title.value)
	const result = new Todo(form.title.value, form.description.value, form.duedate.value)
	console.log("New Todo:", result)
})