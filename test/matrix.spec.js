const Canvas = require('../src/canvas.js')
var expect = require('chai').expect

describe('Canvas', function() {
  it('should return a canvas with the given size', function() {
    const myCanvas = new Canvas(5, 2)
    expect(myCanvas.getSize()).to.be.deep.equal([5, 2])
  })

  it('should return an empty canvas', function() {
  	const myCanvas = new Canvas(0,0)
  	expect(myCanvas.getSize()).to.be.deep.equal([0,0])
  })

  it('should colorize a pixel of the canvas that given coords', function() {
    const myCanvas = new Canvas(5, 2)
    myCanvas.colorizePixel(0, 0, 'C')
	expect(myCanvas.getPixelColor(0, 0)).to.be.equal('C')
  })

  it('should clean the canvas', function() {
  	const myCanvas = new Canvas(5, 2)
    myCanvas.colorizePixel(0, 0, 'C')
    myCanvas.clean(myCanvas)

    expect(myCanvas.getPixelColor(0, 0)).to.be.equal('O')
  })
})