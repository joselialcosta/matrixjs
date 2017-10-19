const createMatrix = function createMatrix(rows, columns) {
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
module.exports.createMatrix = createMatrix
module.exports.colorizePixel = function(matrix, coordX, coordY, color) {
	return matrix[coordX][coordY] = color
}

module.exports.clean = function(matrix) {
	return createMatrix(matrix.length, matrix[0].length) 
}

