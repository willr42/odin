import getRandomInt from "../utils/getRandomInt"

class Todo {

	constructor(title, description, dueDate, id) {
		//TODO handle absence of name and description 
		if(id !== null && id !== undefined) {
			this.id = id
		} else {
		const _ = new Date()
		const _encoded = btoa(_.toISOString()) + getRandomInt(1, 99999)
		this.id = _encoded
		}
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
	}

	getParsedDateString() {
	const tempDate = new Date(this.dueDate)
	let options = { weekday: "long" }
	const locale = navigator.language
	const weekDay = new Intl.DateTimeFormat(locale, options).format(tempDate)

	options = { month: "long" }
	const month = new Intl.DateTimeFormat(locale, options).format(tempDate)

	return `${weekDay} ${tempDate.getDate().toString()} ${month} ${tempDate.getFullYear().toString()}`
}


}

export default Todo