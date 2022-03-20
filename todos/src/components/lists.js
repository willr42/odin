import Todo from "./Todo";
function addTodoToList(newTodo, lists) {
  const activeListName = document.querySelector(".activeList").textContent
  if (!lists[activeListName]) {
    lists[activeListName] = []
  }
  lists[activeListName].push(newTodo)

}

function isEmpty(lists){
  return Object.keys(lists).length === 0;
}

// add .activeList class to the list that is being actively displayed. This fires when a list is selected in the sidebar.
// On first load, this should be set to default.
// Only after that can we render the list to the Todo area.

function renderLists(lists) {
  if (isEmpty(lists)) {
    let temp = new Todo("test todo", "This is my test todo", "1999-01-01")
    lists.defaultList = []
    lists.defaultList.push(temp)
  }
  for (const list in lists) {
    if (Object.hasOwnProperty.call(lists, list)) {
      const singleListArray = lists[list];
      const todoArea = document.querySelector("#todo-area")
      const template = document.querySelector("#todo-template")
      for (const listItem of singleListArray) {
        if (!listItem) {
          console.log("List empty. Finishing early")
          break
        }
        const clone = template.content.cloneNode(true)
        const heading = clone.querySelector(".todo-heading")
        const body = clone.querySelector(".todo-content")
        console.log("heading is: ", heading, "body is:", body)
        heading.textContent = listItem.title;
        body.textContent = listItem.description;
        todoArea.appendChild(clone)
        console.log("Clone appended:", clone)
      }
    }
  }
}


export { addTodoToList, renderLists }