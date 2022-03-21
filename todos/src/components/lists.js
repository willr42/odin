import isEmpty from "../utils/objectIsEmpty"

function addTodoToList(newTodo, lists) {
  const activeListName = document.querySelector(".activeList").textContent
  if (!lists[activeListName]) {
    lists[activeListName] = []
  }
  lists[activeListName].push(newTodo)

}

function createList(e) {
  const listContainer = document.querySelector(".list-container")
// add new list input to html
// on submit, read current value of input
// use that current value to create a new list and append to lists array
}

// need a createList function

// add .activeList class to the list that is being actively displayed. This fires when a list is selected in the sidebar.
// On first load, this should be set to default.
// Only after that can we render the list to the Todo area.

function renderLists(lists) {
  if (isEmpty(lists)) {
    lists.defaultList = []
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