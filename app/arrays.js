if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    indexOf : function (arr, item) {
		for (var i = 0; i < arr.length; i++) {
		  if (arr[i] === item) {
			return i;
		  }
		}
		return -1;
    },

    sum : function (arr) {
		var sum = 0;
		for (var i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		return sum;
    },

    remove : function (arr, item) {
		var pos;
		do {
			pos = this.indexOf(arr, item);
			if (pos >= 0) {
				arr.splice(pos, 1);
			}
		} while (pos != -1);
		
		return arr;		
    },

    removeWithoutCopy : function (arr, item) {
		return this.remove(arr, item);
    },

    append : function (arr, item) {
		arr.push(item);
		return arr;
    },

    truncate : function (arr) {
		arr.pop();
		return arr;
    },

    prepend : function (arr, item) {
		arr.splice(0, 0, item);
		return arr;
    },

    curtail : function (arr) {
		arr.splice(0, 1);
		return arr;
    },

    concat : function (arr1, arr2) {
		return arr1.concat(arr2);
    },

    insert : function (arr, item, index) {
		arr.splice(index, 0, item);		
		return arr;
    },

    count : function (arr, item) {
		var count = 0;
		for (var i = 0; i < arr.length; i++) {
		  if (arr[i] === item) {
			count++;
		  }
		}
		return count;
    },

    duplicates : function (arr) {
		var results = [];
		for (var i = 0; i < arr.length; i++) {
			if (results.length === 0 || this.indexOf(results, arr[i]) === -1) {
				if (this.findAllOccurrences(arr, arr[i]).length > 1) {
					results.push(arr[i]);
				}
			}
		}
		return results;
    },

    square : function (arr) {
		var results = []
		for (var i = 0; i < arr.length; i++) {
			results.push(arr[i] * arr[i]);
		}
		return results;
    },

    findAllOccurrences : function (arr, target) {
		var results = [],
		    pos,
		    counter = 0;
		do {
			pos = this.indexOf(arr, target);
			if (pos > -1) {
				results.push(pos + counter);
				arr = arr.slice(pos + 1);
			}
			counter++;
		} while (pos !== -1);
		return results;
    }
  };
});
