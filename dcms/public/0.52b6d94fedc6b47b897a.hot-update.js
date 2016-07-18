webpackHotUpdate(0,{

/***/ 594:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.changeState = changeState;
	/**
		author : sailing
		date : 2016-7-14
		fun :tree改变闭合状态
	**/

	function setState(data) {
	  if (data) {
	    var lis = [];

	    for (var index in data) {

	      if (data[index].path == path) {
	        data[index].state ? data[index].state = false : data[index].state = true;
	        return;
	      }
	      if (data[index].next && data[index].state) {
	        var next = setState(data[index].next);
	      }
	    }

	    return;
	  }
	}

	function changeState(obj, path) {}

/***/ }

})