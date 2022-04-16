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
if (!lists) {
  lists = {}
}

Modal();

// Setup new Todo modal
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

// Setup new list form
const listForm = document.getElementById("newList")

listForm.addEventListener("submit", (e) => {
  e.preventDefault()
  createList(lists)
  storageController.updateStorage(lists)
})

// Setup list change buttons
const listsContainer = document.querySelector(".lists-container")

listsContainer.addEventListener("click", (e) => {
  changeActiveList(e, lists)
})

// Setup todo details listing
const todoArea = document.querySelector("#todo-area")

todoArea.addEventListener("click", e => {
  Todo.prototype.viewTodoDetails(e, lists)
}
  // click to show todo details. Click anywhere else to stop showing.
)
