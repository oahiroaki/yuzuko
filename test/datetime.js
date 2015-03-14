var assert = require("assert")
var DateTimeFormat = require("../src/datetimeformat")

describe('DateTimeFormat', function() {
  describe('#formatFunc', function() {
    it('length 4', function() {
      var date = Date.parse('Thu May 01 2008 02:00:00 GMT+0900')
      console.log(date.getFullYear())
      var token = {
        type: 'Y',
        length: 4
      }
      var ret = DateTimeFormat.formatFunc.Y(token, date)
      assert.equal(ret, '2008')
    })
  })

  describe('#parse', function() {
    it('YYYYMMDD', function() {
      var format = DateTimeFormat.parse('YYYYMMDD')
      assert.deepEqual(format, [
        {type: 'Y', length: 4},
        {type: 'M', length: 2},
        {type: 'D', length: 2}
      ])
    })

    it('YYYY.MM.DD', function() {
      var format = DateTimeFormat.parse('YYYY.MM.DD')
      assert.deepEqual(format, [
        {type: 'Y', length: 4},
        {type: '.', length: 1},
        {type: 'M', length: 2},
        {type: '.', length: 1},
        {type: 'D', length: 2}
      ])
    })

    it('YY年MM月', function() {
      var format = DateTimeFormat.parse('YY年MM月')
      assert.deepEqual(format, [
        {type: 'Y', length: 2},
        {type: '年', length: 1},
        {type: 'M', length: 2},
        {type: '月', length: 1}
      ])
    })
  })
})
