const container = document.getElementById("container")
const resetButton = document.getElementById("reset")
const resizeButton = document.getElementById("resize")
let containerField = document.getElementById("containerSize")
let root = document.documentElement;
let containerSize = 0;

function createGrid(size) {
	for (let i = 0; i < size * size; i++) {
		const gridSquare = document.createElement('div')
		gridSquare.setAttribute('class', 'gridSquare')
		container.appendChild(gridSquare)
		console.log("Square created.")
		gridSquare.addEventListener("mouseover", (e) =>
			changeColour(e, this)
		);
	}
}

function resetGrid() {
	const gridChildren = container.children
	for (const element of gridChildren) {
		element.style.backgroundColor = "#ffe8d6"
	}
}

function changeColour(event) {
	event.target.style.backgroundColor = "#a5a58d"
}

function resizeGrid(newSize) {
	if (!newSize) {
	root.style.setProperty('--gridsize',"16");
	container.replaceChildren();
	createGrid(16)
	} else {
	root.style.setProperty('--gridsize',`${newSize}`);
	container.replaceChildren();
	createGrid(newSize)
	}
}

createGrid(16)

// Event listeners
containerField.addEventListener("keyup", (e) => containerSize = e.target.value);
resetButton.addEventListener("click", (e) => resetGrid())
resizeButton.addEventListener("click", (e) => resizeGrid(containerSize))