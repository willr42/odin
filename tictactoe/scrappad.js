// scrap
// multi-dimensional array - too clever?
		this.cellArray.push([], [], [])
		for (let index = 0; index < boardcells; index++) {
			if (index < 3) {
				this.cellArray[0].push(new Gamecell());
			} else if (index < 6) {
				this.cellArray[1].push(new Gamecell());
			} else {
				this.cellArray[2].push(new Gamecell());
			}
