class Gameboard {
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

const board = new Gameboard(9);
console.log(board);
