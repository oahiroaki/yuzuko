var sample = require('../src/sample.js');

describe("addition", function() {
  it("2 + 3 = 5", function() {
    expect(sample.addition(2, 3)).toEqual(5)
  })
})
