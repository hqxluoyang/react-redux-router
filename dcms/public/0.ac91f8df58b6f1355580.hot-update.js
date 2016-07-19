webpackHotUpdate(0,{

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = App;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(62);

	var _container = __webpack_require__(290);

	var _container2 = _interopRequireDefault(_container);

	var _left = __webpack_require__(301);

	var _left2 = _interopRequireDefault(_left);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	  date : 2016-05-16
	  author : sailing
	  fun : 程序入口

	**/

	function App(_ref) {
	  var children = _ref.children;

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_left2.default, null),
	    _react2.default.createElement(_container2.default, { chd: children })
	  );
	}

/***/ }

})