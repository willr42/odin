class Todo {

	constructor(title, description, dueDate) {
		//TODO handle absence of name and description 
		const _ = new Date()
		this.id = _.toISOString()
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.list = list;
	}


}

export default Todo