import Modal from "./components/modal.js";
import { addTodoToList, createList, changeActiveList } from "./components/lists.js";
import Todo from "./components/Todo.js";
import './sass/styles.scss'
import './assets/fonts/Body-SudburyBook.ttf'
import './assets/fonts/Heading-CasablancaAntique.ttf'
import './assets/fonts/Subhead-UniversBlack.ttf'
import './assets/images/orks.svg'
import StorageController from "./utils/localStorage.js";

const storageController = new StorageController();
let lists = storageController.loadStorage()
if(!lists){
  lists = {}
}

// TODO Need conditional behaviour. If there isn't any lists from local storage (in a first run scenario), do nothing. 
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
  storageController.updateStorage(lists)
});

const listForm = document.getElementById("newList")

listForm.addEventListener("submit", (e) => {
  e.preventDefault()
  createList(lists)
  storageController.updateStorage(lists)
})

const listsContainer = document.querySelector(".lists-container")

listsContainer.addEventListener("click", (e) => {
  changeActiveList(e, lists)
})
//TODO: load from & save to localStorage whenever state changes. New List. New Todo. Todo deleted. List deleted.
