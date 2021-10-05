class Gameboard {
	constructor(boardcells) {
		this.cellArray = [];
		for (let index = 0; index < boardcells; index++) {
			this.cellArray.push({ ticked: 0 });
		}
	}
	drawCell(cell) {
		const cellDiv = document.createElement("div")
		cellDiv.textContent('')
		cellDiv.className = 'blankCell'
	}
}


const board = new Gameboard(9);
console.log(board);
