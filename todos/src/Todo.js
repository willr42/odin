class Todo {

	constructor(name, description, list = "default") {
		//TODO handle absence of name and description 
		this.name = name;
		this.description = description;
		this.list = list;
	}


}

export default { Todo }