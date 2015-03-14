(function(definition){
  if (typeof exports === "object") {
    module.exports = definition() // CommonJS
  } else if (typeof define === "function" && define.amd) {
    define(definition) // RequireJS
  } else {
    DateTimeFormat = definition() // <script>
  }
})(function() {
  'use strict'

  /**
   * Symbol  Meaning                      Presentation  Examples
   * ------  -------                      ------------  -------
   * G       era                          text          AD
   * C       century of era (>=0)         number        20
   * Y       year of era (>=0)            year          1996
   * x       weekyear                     year          1996
   * w       week of weekyear             number        27
   * e       day of week                  number        2
   * E       day of week                  text          Tuesday; Tue
   * y       year                         year          1996
   * D       day of year                  number        189
   * M       month of year                month         July; Jul; 07
   * d       day of month                 number        10
   * a       halfday of day               text          PM
   * K       hour of halfday (0~11)       number        0
   * h       clockhour of halfday (1~12)  number        12
   * H       hour of day (0~23)           number        0
   * k       clockhour of day (1~24)      number        24
   * m       minute of hour               number        30
   * s       second of minute             number        55
   * S       fraction of second           number        978
   * z       time zone                    text          Pacific Standard Time; PST
   * Z       time zone offset/id          zone          -0800; -08:00; America/Los_Angeles
   * '       escape for text              delimiter
   * ''      single quote                 literal       '
   *
   * Text: If the number of pattern letters is 4 or more, the full form is used; otherwise a short or abbreviated form is used if available.
   * Number: The minimum number of digits. Shorter numbers are zero-padded to this amount.
   * Year:
   *  Numeric presentation for year and weekyear fields are handled specially.
   *  For example, if the count of 'y' is 2, the year will be displayed as the zero-based year of the century, which is two digits.
   * Month: 3 or over, use text, otherwise use number.
   * Zone: 'Z' outputs offset without a colon, 'ZZ' outputs the offset with a colon, 'ZZZ' or more outputs the zone id.
   * Zone names: Time zone names ('z') cannot be parsed.
   */
  function createFormatObject(format) {
    return {
      format: format,
      position: 0,
      start: 0,
      tokenLength: 0,
      tokens: []
    }
  }

  function parse(str) {
    var obj = createFormatObject(str)

    for (obj.tokens = []; !isFinish(obj); ) {
      var c = peek(obj)
      switch (c) {
        case 'G':
        case 'E':
        case 'a':
        case 'z':
        case 'Y':
        case 'x':
        case 'y':
        case 'M':
        case 'C':
        case 'w':
        case 'e':
        case 'D':
        case 'd':
        case 'K':
        case 'H':
        case 'h':
        case 'k':
        case 'm':
        case 's':
        case 'S':
        case 'Z':
        case '\'':
          if (hasToken(obj)) {
            saveWord(obj)
            reset(obj)
          }
          parseToken(obj, c)
          break
        default:
          step(obj)
          break
      }
    }
    if (hasToken(obj)) {
      saveWord(obj)
    }
    return obj.tokens
  }

  function isFinish(obj) {
    return obj.format.length <= obj.position
  }

  function hasToken(obj) {
    return obj.tokenLength > 0
  }

  function seek(obj) {
    step(obj)
    return peek(obj)
  }

  function peek(obj) {
    return obj.format.charAt(obj.position)
  }

  function parseToken(obj, c) {
    if (c === seek(obj)) {
      parseToken(obj, c)
    } else {
      saveToken(obj, c)
      reset(obj)
    }
  }

  function reset(obj) {
    obj.start = obj.position
    obj.tokenLength = 0
  }

  function step(obj) {
    obj.position++
    obj.tokenLength++
  }

  function saveWord(obj) {
    obj.tokens.push({
      type: obj.format.slice(obj.start, obj.position),
      length: obj.tokenLength
    })
  }

  function saveToken(obj, c) {
    obj.tokens.push({
      type: c,
      length: obj.tokenLength
    })
  }

  var formatFunc = {
    Y: function(token, date) {
      var baseNumber = 10 * token.length
      console.log(date.toString())
      var year = date.getYear() % baseNumber
      var s = year.toString()
      var r = ''
      for (var i = 0, len = token.length - s.length; i < len; i++) {
        r += '0'
      }
      return r + s
    },
    M: function() {

    },
    D: function() {

    }
  }

  function toString(obj) {
  }

  return {
    parse: parse,
    toString: toString,
    formatFunc: formatFunc
  }
});
