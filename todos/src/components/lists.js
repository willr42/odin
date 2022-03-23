function addTodoToList(newTodo, lists) {
  const activeList = document.querySelector(".activeList").textContent
  lists[activeList].push(newTodo)
  renderList(activeList, lists)

}

function createList(lists) {
  const listInput = document.getElementById("list_name")
  const addListContainer = document.querySelector(".addList-container")
  const errorElement = document.createElement("p")
  if (listInput.value === "" & !addListContainer.classList.contains("openError")) {
    errorElement.textContent = "HEY! No empty bukkits."
    errorElement.style.color = "red"
    addListContainer.classList.add("openError")
    addListContainer.appendChild(errorElement)
    listInput.focus()
    return
  } else if (listInput.value === "" & addListContainer.classList.contains("openError")) {
    listInput.focus()
    return
  } else {
    if (addListContainer.classList.contains("openError")) {
      addListContainer.removeChild(errorElement)
      addListContainer.classList.remove("openError")
    }
    lists[listInput.value] = []
    // need to create new list object in sidebar.
    console.log(lists)
  }
}

function changeList(e) {
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

export { addTodoToList, createList, renderLists }