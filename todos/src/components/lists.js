function addTodoToList(newTodo, lists) {
  const activeList = document.querySelector(".activeList").textContent
  lists[activeList].push(newTodo)
  renderList(activeList, lists)

}

function createList(lists) {
  const listInput = document.getElementById("list_name")
  const addListContainer = document.querySelector(".addList-container")
  if (listInput.value === "" & !addListContainer.classList.contains("openError")) {
    const errorElement = document.createElement("p")
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
      const existingErrorElement = document.querySelector("#newList > p")
      addListContainer.removeChild(existingErrorElement)
      addListContainer.classList.remove("openError")
    }
    lists[listInput.value] = []
    addNewListToDOM(listInput.value)
  }
}

function addNewListToDOM(listName) {
  const listContainer = document.querySelector(".lists-container")
  const newListing = document.createElement("li")
  newListing.textContent = listName
  listContainer.appendChild(newListing)
}

function changeActiveList(e, globalLists) {
  const eventTarget = e.target
  if (eventTarget.classList.contains("activeList")) {
    return
  } else {
    const listsInDOM = document.querySelector(".lists-container").children
    for (const child of listsInDOM) {
      if (eventTarget !== child) {
        child.classList.remove("activeList")
      } else {
        child.classList.add("activeList")
        renderList(e.target.textContent, globalLists)
        const newTodoButton = document.querySelector(".newTodoButton")
        newTodoButton.classList.remove("hidden")
      }
    }
  }
}

function renderList(selectedList, globalLists) {
  const todoArea = document.querySelector("#todo-area")
  const newTodoButton = document.querySelector(".newTodoButton")
  while (todoArea.children[0] !== newTodoButton) {
    todoArea.removeChild(todoArea.children[0])
  }
  renderTodosInList(globalLists[selectedList])
}

function renderTodosInList(activeList) {
  for (const listItem of activeList) {
    if (!listItem) {
      console.log("List empty. Finishing early")
      return
    }
    attachTemplate(listItem)
  }
}

function attachTemplate(newTodo) {
  const todoArea = document.querySelector("#todo-area")
  const template = document.querySelector("#todo-template")

  const clone = template.content.cloneNode(true)
  const heading = clone.querySelector(".todo-heading")
  const body = clone.querySelector(".todo-content")
  const date = clone.querySelector(".todo-date")
  const idDiv = clone.querySelector(".todo-container")

  heading.textContent = newTodo.title;
  body.textContent = newTodo.description;
  date.setAttribute("datetime", newTodo.dueDate)
  date.textContent = newTodo.getParsedDateString()
  idDiv.dataset.todoId = newTodo.id;

  const todoButton = document.querySelector(".newTodoButton")
  todoArea.insertBefore(clone, todoButton)
}


export { addTodoToList, createList, changeActiveList, renderList, addNewListToDOM}