
class Canvas {
	constructor(width, height) {
		this.width = width
		this.height = height
		this.matrix = createEmptyMatrix(width, height)
	}

	getSize(){
		return [this.width, this.height]
	}

	colorizePixel(coordX, coordY, color) {
		this.matrix[coordX][coordY] = color
	}

	getPixelColor(coordX, coordY) {
		return this.matrix[coordX][coordY]
	}

	clean() {
		this.matrix = createEmptyMatrix(this.width, this.height)
	}
}

module.exports = Canvas

function createEmptyMatrix(rows, columns) {
	matrix = []

	for(let rowIndex = 0; rowIndex < rows; rowIndex++ ) {
		columnsList = []
		for(let columnIndex = 0; columnIndex < columns; columnIndex++){
			columnsList.push('O')
		}
		matrix.push(columnsList)
	}
  return matrix

}
