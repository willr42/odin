class Gameboard {

  constructor(boardcells) {
    this.cellArray = [];
    for (let index = 0; index < boardcells; index++) {
      this.cellArray.push({ ticked: null });
    }
  }

  createBoard() {
    const boardDiv = document.createElement('div')
    boardDiv.id = 'gameboard'
    this.cellArray.forEach(element => {
      const cell = document.createElement('div')
      cell.className = 'cell'
      if (element.ticked === "player") {
        cell.textContent = 'O'
      } else if (element.ticked === "enemy") {
        cell.textContent = 'X'
      }
      boardDiv.appendChild(cell)
    });
    return boardDiv
  }
  drawBoard() {
    const boardAndChild = this.createBoard()
    const container = document.querySelector('#container')
    container.appendChild(boardAndChild)
  }

  redrawBoard() {
    //TODO: some sort of redraw function when gamestate changes.
  }
}
const board = new Gameboard(9);
board.drawBoard();