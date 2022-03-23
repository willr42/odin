import Modal from "./components/modal.js";
import { addTodoToList, createList, changeActiveList, renderList } from "./components/lists.js";
import Todo from "./components/Todo.js";

const lists = {};

// TODO Need conditional behaviour. If there isn't any lists from local storage (in a first run scenario) initialise defaultList, set it as active, render to DOM.
//If there are lists, show those in the sidebar with same render function as normal.
Modal();

const form = document.getElementById("newTodo");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const result = new Todo(
    form.title.value,
    form.description.value,
    form.duedate.value
  );
  addTodoToList(result, lists)
});

const listForm = document.getElementById("newList")

listForm.addEventListener("submit", (e) => {
  e.preventDefault()
  createList(lists)
})

const listsContainer = document.querySelector(".lists-container")

listsContainer.addEventListener("click", (e) => {
  changeActiveList(e, lists)
})
//TODO: load from & save to localStorage whenever state changes. New List. New Todo. Todo deleted. List deleted.
