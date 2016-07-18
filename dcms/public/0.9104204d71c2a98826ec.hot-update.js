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

	      var childrenDiv = null;
	      //console.log("index index : " , index)
	      if (data[index].next && data[index].state) {
	        var next = setState(data[index].next);
	        childrenDiv = React.createElement(
	          "div",
	          { className: "divLeft" },
	          next
	        );
	      }

	      var li = React.createElement(
	        "li",
	        { key: index },
	        React.createElement(
	          "div",
	          { className: "leafli", onClick: clickMod(data, index) },
	          React.createElement("img", { src: data[index].icon }),
	          React.createElement(
	            Link,
	            { activeClassName: "linkActive", to: getPath(data, index) },
	            data[index].name
	          )
	        ),
	        childrenDiv
	      );

	      lis.push(li);
	    }

	    return React.createElement(
	      "ul",
	      null,
	      lis
	    );
	  }
	}

	function changeState(obj, path) {}

/***/ }

})