class Gameboard {
	constructor(boardcells) {
		this.cellArray = [];
		for (let index = 0; index < boardcells; index++) {
		this.cellArray.push(new Gamecell());
		}
}
}

class Gamecell {
}

const board = new Gameboard(9);
console.log(board)