const myLibrary = [];
let bookID = 0;
const form = document.getElementById('bookForm');
const newBookButton = document.getElementById('addBook');
const containerDiv = document.querySelector('#container');
const libraryDiv = document.createElement('div');
libraryDiv.id = 'library';
containerDiv.appendChild(libraryDiv);

/**
 * Generates an ID to be used in book's dataset.
 * @returns incrementing ID.
 */
const generateID = () => {
  bookID += bookID;
  return bookID;
};

/**
 * Book class.
 * @param {string} title - the title of the book
 * @param {string} author - the author of the book
 * @param {number} pageCount - the number of pages
 * @param {boolean} read - book is read or not
 */
class Book {
  constructor(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
    this.id = generateID();
  }

  info() {
    const infoString = `${this.title} by ${this.author}, ${this.pageCount} pages, `;
    if (this.read) {
      return `${infoString}read this one`;
    }
    return `${infoString}not read yet`;
  }

  toggleRead() {
    this.read = !this.read;
  }
}

/**
 * Pushes a new Book object to the stack.
 * @param {string} title
 * @param {string} author
 * @param {number} pageCount
 * @param {boolean} read
 */
function addBooktoLibrary(title, author, pageCount, read) {
  const newBook = new Book(title, author, pageCount, read);
  myLibrary.push(newBook);
}

function displayLibrary() {
  libraryDiv.replaceChildren();
  myLibrary.forEach((book) => {
    // eslint-disable-next-line no-use-before-define
    displayBook(book);
  });
}

function displayBook(Book) {
  // create initial elements
  const bookCard = document.createElement('div');
  bookCard.classList.add('bookCard');
  bookCard.dataset.bookid = Book.id;
  const title = document.createElement('h2');
  title.textContent = Book.title;
  const author = document.createElement('p');
  author.textContent = Book.author;
  const pageCount = document.createElement('p');
  pageCount.textContent = `${Book.pageCount} pages`;
  const read = document.createElement('p');
  if (Book.read) {
    read.textContent = 'Read';
  } else {
    read.textContent = 'Not read';
  }
  // set up delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', (event) => {
    for (let index = 0; index < myLibrary.length; index++) {
      const element = myLibrary[index];
      if (element.id === parseInt(event.target.parentElement.dataset.bookid, 10)) {
        myLibrary.splice(index, 1);
      }
    }
    event.target.parentElement.remove();
  });

  // set up read button
  const readButton = document.createElement('button');
  readButton.textContent = 'Change read?';
  readButton.addEventListener('click', (event) => {
    for (let index = 0; index < myLibrary.length; index++) {
      const element = myLibrary[index];
      if (element.id === parseInt(event.target.parentElement.dataset.bookid, 10)) {
        element.toggleRead();
        displayLibrary(myLibrary);
      }
    }
  });
  bookCard.append(title, author, pageCount, read, deleteButton, readButton);
  libraryDiv.appendChild(bookCard);
}

addBooktoLibrary('The Hobbit', 'J.R.R. Tolkien', 100, true);
displayLibrary(myLibrary);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const checkbox = document.getElementById('bookRead');
  addBooktoLibrary(form.elements.title.value, form.elements.author.value,
    form.elements.pageCount.value, checkbox.checked);
  displayLibrary(myLibrary);
});
// button popup
function open() {
  newBookButton.onclick = close;
  form.style.visibility = 'visible';
  newBookButton.textContent = 'Close form';
}

function close() {
  newBookButton.onclick = open;
  form.style.visibility = 'hidden';
  newBookButton.textContent = 'Add new book';
}

// set initial state
newBookButton.onclick = open;
