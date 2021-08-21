const container = document.getElementById("container")


function createGrid(size){
	for (let i = 0; i < size * size; i++) {
	const gridSquare = document.createElement('div')
	gridSquare.setAttribute('class', 'gridSquare')
	container.appendChild(gridSquare)
	console.log("Square created.")		
	}
}

createGrid(16)