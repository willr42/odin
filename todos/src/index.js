import Modal from "./components/modal.js";
import { addTodoToList, createList, renderLists } from "./components/lists.js";
import Todo from "./components/Todo.js";

const lists = {};

// TODO Need conditional behaviour. If there isn't any lists from local storage (in a first run scenario) initialise defaultList, set it as active, render to DOM.
//If there are lists, show those in the sidebar with same render function as normal.
Modal();
renderLists(lists)

const form = document.getElementById("newTodo");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form title:", form.title.value);
  const result = new Todo(
    form.title.value,
    form.description.value,
    form.duedate.value
  );
  addTodoToList(result, lists)
});

const submitList = document.getElementById("add-list")

submitList.addEventListener("click", () => {
  createList(lists)
})
//TODO: load from & save to localStorage whenever state changes. New List. New Todo. Todo deleted. List deleted.
