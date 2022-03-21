import isEmpty from "../utils/objectIsEmpty"

function addTodoToList(newTodo, lists) {
  const activeListName = document.querySelector(".activeList").textContent
  lists[activeListName].push(newTodo)

}

function createList(e) {
  const listContainer = document.querySelector(".list-container")
// add new list input to html
// on submit, read current value of input
// use that current value to create a new list and append to lists array
}

function changeList(e){
// take in event object. See which list is being clicked on - e.target. 
// check the currently active list. If it matches the one that's been clicked, don't allow a change.
// loop through list of lists on DOM. Remove .activeList class from all.
// Add .activeList class to the one that matches e.target.textContent
// then run renderList which removes todos from DOM.
}

function renderLists(selectedList, lists) {
  // refactor to be purely about DOM manipulation. Take in a list, output its todo contents to DOM.
}

function renderTodosInList(activeList) {
  for (const listItem of activeList) {
    if (!listItem) {
      console.log("List empty. Finishing early")
      break
    }
    attachTemplate(listItem)
  }
}

function attachTemplate(listItem) {
  const todoArea = document.querySelector("#todo-area")
  const template = document.querySelector("#todo-template")
  const clone = template.content.cloneNode(true)
  const heading = clone.querySelector(".todo-heading")
  const body = clone.querySelector(".todo-content")
  console.log("heading is: ", heading, "body is:", body)
  heading.textContent = listItem.title;
  body.textContent = listItem.description;
  todoArea.appendChild(clone)
  console.log("Clone appended:", clone)

}

export { addTodoToList, renderLists }