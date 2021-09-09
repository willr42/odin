let myLibrary = [];
const form = document.getElementById("bookForm")

const containerDiv = document.querySelector('#container')
const libraryDiv = document.createElement('div')
libraryDiv.id = 'library'
containerDiv.appendChild(libraryDiv)

class Book {
	constructor(title, author, pageCount, read) {
		this.title = title;
		this.author = author;
		this.pageCount = pageCount;
		this.read = read;
	}
	info() {
		let infoString = `${this.title} by ${this.author}, ${this.pageCount} pages, `
		if (this.read) {
			return infoString + "read this one"
		} else {
			return infoString + "not read yet"
		}

	}
}

function addBooktoLibrary(title, author, pageCount, read) {
	const newBook = new Book(title, author, pageCount, read)
	myLibrary.push(newBook)
}

function displayBook(Book) {
	const bookCard = document.createElement('div')
	bookCard.classList.add('bookCard')
	const title = document.createElement('h2')
	title.textContent = Book.title;
	const author = document.createElement('p')
	author.textContent = Book.author;
	const pageCount = document.createElement('p')
	pageCount.textContent = `${Book.pageCount} pages`;
	let read = document.createElement('p');
	if (Book.read) {
		read.textContent = 'Read'
	} else {
		read.textContent = 'Not read'
	}
	bookCard.append(title, author, pageCount, read)
	libraryDiv.appendChild(bookCard)
}

function displayLibrary() {
	libraryDiv.replaceChildren()
	myLibrary.forEach(book => {
		displayBook(book)
	});
}
addBooktoLibrary('The Hobbit', 'J.R.R. Tolkien', 100, true)
displayLibrary(myLibrary)

form.addEventListener('submit', (event) => {
	event.preventDefault()
	const checkbox = document.getElementById('bookRead')
	addBooktoLibrary(form.elements['title'].value, form.elements['author'].value, form.elements['pageCount'].value, checkbox.checked)
})