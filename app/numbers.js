if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
		var binaryString = num.toString(2);
		return parseInt(binaryString[binaryString.length - bit]);
    },

    base10: function(str) {
		return parseInt(str, 2);
    },

    convertToBinary: function(num) {
		var BYTE_SIZE = 8;
		var binaryString = num.toString(2);
		var bitsLeft = (BYTE_SIZE - (binaryString.length % BYTE_SIZE));
		if ( bitsLeft !== 8 ) {
			for (var i = 0; i < bitsLeft; i++ ) {
				binaryString = "0" + binaryString;
			}
		}
		return binaryString;
    },

    multiply: function(a, b) {
		var bStr = b.toString();
		var precision = bStr.slice(bStr.indexOf(".")).length || 0;
		var result = a * b;
		return parseFloat(result.toFixed(precision));
    }
  };
});

