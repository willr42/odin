import Todo from "./Todo.js"

const todoArea = document.querySelector("#todo-area")

// collect input for new todo

const form = document.getElementById("newTodo")

form.addEventListener("submit", (e) => {
	e.preventDefault()
})