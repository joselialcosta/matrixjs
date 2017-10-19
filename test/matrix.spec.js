const matrix = require('../src/matrix.js')
var assert = require('assert')


describe('Matrix', function() {
  it('should return a matrix with the given size', function() {
    const myMatrix = matrix.createMatrix(5, 2)

    assert.equal(myMatrix.length, 5)

    assert.equal(myMatrix[0].length, 2)
    assert.equal(myMatrix[1].length, 2)
    assert.equal(myMatrix[2].length, 2)
    assert.equal(myMatrix[3].length, 2)
    assert.equal(myMatrix[4].length, 2)
  })

  it('should return an empty matrix', function() {
  	const myMatrix = matrix.createMatrix(0,0)
  	assert.equal(myMatrix.length,0)
  })

  it('should colorize the matrix given coords', function() {
    const myMatrix = matrix.createMatrix(5, 2)
    const newColorMatrix = matrix.colorizePixel(myMatrix, 0, 0, 'C')

    assert.equal(newColorMatrix[0][0], 'C')

  })

  it('should clean the matrix', function() {
  	const myMatrix = matrix.createMatrix(5, 2)
    matrix.colorizePixel(myMatrix, 0, 0, 'C')
    const newMatrix = matrix.clean(myMatrix)

    assert.equal(newMatrix[0][0], 'O')
  })
})