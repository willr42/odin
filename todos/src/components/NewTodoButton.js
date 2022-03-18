function NewTodoButton() {
	const todoArea = document.querySelector("#todo-area");
	const newTodoButton = document.createElement("button");
	const popup = document.querySelector("#popup-background")
	newTodoButton.classList.add("newTodoButton");
	newTodoButton.textContent = "+";
	newTodoButton.addEventListener("click", (e) => {
		console.log("newTodoButton clicked. Event", e);
		popup.classList.remove("hidden")
		popup.addEventListener("click", () => {
			popup.classList.add("hidden")
		})
		// This needs to open the modal to add a new Todo.
	});
	todoArea.appendChild(newTodoButton);
}

export default NewTodoButton