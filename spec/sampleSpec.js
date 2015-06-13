var sample = require('../src/sample.js');

describe("sample", function() {
  it("#addition", function() {
    expect(sample.addition(2, 3)).toEqual(5)
  })
  it("#minus", function() {
    expect(sample.minus(3, 2)).toEqual(1)
  })
})

