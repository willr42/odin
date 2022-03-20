import Modal from "./components/modal.js";
import Todo from "./components/Todo.js";
const lists = {};
lists.defaultList = []

Modal();
const form = document.getElementById("newTodo");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form title:", form.title.value);
  const result = new Todo(
    form.title.value,
    form.description.value,
    form.duedate.value
  );
  defaultList.todos.push(result)
  console.log("Default List:", defaultList)
  // remove validation below. Check which list is "open" by looking at classlists of all lists in DOM (also need func to create new lists in DOM.) If there isn't one, it will be default - add to that list and re-render. Otherwise, add to the list that is open.
  
});

//TODO: load from & save to localStorage whenever state changes. New List. New Todo. Todo deleted. List deleted.
//TODO: initialise lists from local storage as options in select dropdown
