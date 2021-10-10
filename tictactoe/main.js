class Gameboard {

  constructor(boardcells) {
    this.cellArray = [];
    for (let index = 0; index < boardcells; index++) {
      this.cellArray.push({ ticked: 0 });
    }
  }

  drawBoard() {
    const boardDiv = document.createElement('div')
    this.cellArray.forEach(element => {
      this.drawCell(element)
    });
  }

  redrawBoard() {
    //TODO: some sort of redraw function when gamestate changes.
  }
}
const board = new Gameboard(9);