"use strict";

var charsNumbers = '0123456789';
var charsLower   = 'abcdefghijklmnopqrstuvwxyz';
var charsUpper   = charsLower.toUpperCase();

var crypto = require('crypto');


exports.generate = function(length) {
    var chars = charsNumbers + charsLower + charsUpper;
  length = length || 32;
  var string = '';
  while(string.length < length){
    var bf = crypto.randomBytes(length);
    for(var i = 0; i < bf.length; i++){
      var index = bf.readUInt8(i) % chars.length;
      string += chars.charAt(index);
    }
  }

  return string;
}

exports.generateNumber = function(length) {
    var chars = charsNumbers;
    length = length || 32;
    var string='';
    while(string.length < length) {
        var bf = crypto.randomBytes(length);
        for (var i=0;i<bf.length; i++) {
            var index=bf.readUInt8(i) % chars.length;
            string+=chars.charAt(index);
        }
    }
    return string;
}

exports.generateNumberAndString = function(length) {
    var chars = charsNumbers + charsLower;
    length = length || 32;
    var string='';
    while(string.length < length) {
        var bf = crypto.randomBytes(length);
        for (var i=0;i<bf.length; i++) {
            var index=bf.readUInt8(i) % chars.length;
            string+=chars.charAt(index);
        }
    }
    return string;
}
