function addTodoToList(newTodo, lists) {
  const activeListName = document.querySelector(".activeList").textContent
  if (!lists[activeListName]) {
    lists[activeListName] = []
  }
    lists[activeListName].push(newTodo)

}

export {addTodoToList}