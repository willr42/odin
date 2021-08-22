const container = document.getElementById("container")
const resetButton = document.getElementById("reset")

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
		element.style.backgroundColor = "white"
	}
}

function changeColour(event) {
	event.target.style.backgroundColor = "black"
}

resetButton.addEventListener("click",(e) => resetGrid())

createGrid(16)