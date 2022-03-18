function NewTodoButton() {
  const todoArea = document.querySelector("#todo-area");
  const newTodoButton = document.createElement("button");
  newTodoButton.classList.add("newTodoButton");
  newTodoButton.textContent = "+";
  newTodoButton.addEventListener("click", (e) => {
    console.log("newTodoButton clicked. Event", e);
    // This needs to open the modal to add a new Todo.
  });
  todoArea.appendChild(newTodoButton);
}

export default NewTodoButton