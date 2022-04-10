import { addNewListToDOM } from "../components/lists"
import Todo from "../components/Todo"

class StorageController {
	constructor() {
		console.log("Storage Controller constructed")
	}

	updateStorage(globalLists) {
		window.localStorage.setItem("lists", JSON.stringify(globalLists))
	}

	loadStorage() {
		const storedLists = JSON.parse(window.localStorage.getItem("lists"))
		let listOfTodos = []
		if (!storedLists) {
			console.log("No stored lists.")
			return
		}
		let newLists = {}
		for (const list in storedLists) {
			// cycle through lists in parsed JSON, create new list of lists with proper Todo objects.
			if (Object.hasOwnProperty.call(storedLists, list)) {
				const listOfPlainObjects = storedLists[list]
				listOfTodos = listOfPlainObjects.map((todoObject) => {
					return new Todo(todoObject.title, todoObject.description, todoObject.dueDate, todoObject.id)
				}
				)
			}
			newLists[list] = listOfTodos
			addNewListToDOM(list)
		}
		return newLists
	}



}

export default StorageController

// check if there is a lists object in localStorage.
// if there is, check activeList.
// recreate objects

// recreation function
// let lists = JSON.parse(window.localStorage.getItem('savedLists'));
//foreach on lists, call addNewListtoDOM on each