class Gameboard {

  /**
   * Gameboard with cellArray representing a Tic-Tac-Toe grid.
   * @param {int} boardcells : number of cells to be created.
   */
  constructor(boardcells) {
    this.cellArray = [];
    for (let index = 0; index < boardcells; index++) {
      this.cellArray.push("");
    }
  }

  /**
   * 
   * @returns A div filled with board cells.
   */
  createBoard() {
    const boardDiv = document.createElement('div')
    boardDiv.id = 'gameboard'
    this.cellArray.forEach(element => {
      const cell = document.createElement('div')
      cell.className = 'cell'
      if (element === "O") {
        cell.textContent = 'O'
      } else if (element === "X") {
        cell.textContent = 'X'
      }
      boardDiv.appendChild(cell)
    });
    return boardDiv
  }

  checkWin(letter) {
    if (this.cellArray[0] === letter && this.cellArray[1] === letter && this.cellArray[2] === letter // horizontals
      || this.cellArray[3] === letter && this.cellArray[4] === letter && this.cellArray[5] === letter
      || this.cellArray[6] === letter && this.cellArray[7] === letter && this.cellArray[8] === letter
      || this.cellArray[0] === letter && this.cellArray[3] === letter && this.cellArray[6] === letter // verticals
      || this.cellArray[1] === letter && this.cellArray[4] === letter && this.cellArray[7] === letter
      || this.cellArray[2] === letter && this.cellArray[5] === letter && this.cellArray[8] === letter
      || this.cellArray[0] === letter && this.cellArray[4] === letter && this.cellArray[5] === letter // diagonals
      || this.cellArray[2] === letter && this.cellArray[4] === letter && this.cellArray[6] === letter
    ) {
      return true
    }
  }

  move(event) {
 // implement playermove. Need to know which player's turn it is and which symbol they're using... 
    this.cellArray
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