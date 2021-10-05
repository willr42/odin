class Gameboard {
<<<<<<< HEAD
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

=======
  constructor(boardcells) {
    this.cellArray = [];
    for (let index = 0; index < boardcells; index++) {
      this.cellArray.push(new Gamecell());
    }
  }
}

class Gamecell {
  constructor() {
    this.ticked = 0;
  }
}
>>>>>>> 0968d0ca56da4a440e6fb2e40ece810e15a2eefb

const board = new Gameboard(9);
console.log(board);
