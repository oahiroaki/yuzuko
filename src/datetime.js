var DateTimeFormat = require('./datetimeformat.js')

(function(definition){
  if (typeof exports === "object") {
    module.exports = definition() // CommonJS
  } else if (typeof define === "function" && define.amd) {
    define(definition) // RequireJS
  } else {
    MyModule = definition() // <script>
  }
})(function() {
  'use strict'

  function DateTime(year, month, day, hour, minite, second, millisecond) {
    this.year = year
    this.month = month
    this.day = day
    this.hour = hour
    this.minite = minite
    this.second = second
    this.millisecond = millisecond
  }

  DateTime.new = function new() {
    return DateTime.newByDate(new Date())
  }

  DateTime.newByDate = function newByDate(date) {
    return new DateTime(date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds())
  }

  DateTime.now = function() {
    return DateTime.new()
  }

  DateTime.parse = function parse() {
  }

  DateTime.prototype.toDate = function toDate() {
    return new Date(this.year, this.month - 1,
                    this.day, this.hour, this.minite,
                    this.second, this.millisecond);
  }

  DateTime.prototype.toString = function toString(format, locale) {
  }

  return DateTime;
});
