function NewTodoButton() {
	const todoArea = document.querySelector("#todo-area");
	const newTodoButton = document.createElement("button");
	const popup = document.querySelector("#modal")
	const popupMenu = document.querySelector("#modal-content")
	newTodoButton.classList.add("newTodoButton");
	newTodoButton.textContent = "+";
	todoArea.appendChild(newTodoButton);
}

export default NewTodoButton