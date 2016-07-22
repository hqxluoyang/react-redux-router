webpackHotUpdate(0,{

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(62);

	var _treePanel = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./treeNode/treePanel\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _treePanel2 = _interopRequireDefault(_treePanel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	date : 2016-05-16
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	author : sailing
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	fun : link 路由跳转
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

	/*
		activeStyle,activeClassName :两个样式的用法是，一个直接设定style , 一个设定 className
	*/

	__webpack_require__(600);

	var Linkto = function (_Component) {
		_inherits(Linkto, _Component);

		function Linkto() {
			_classCallCheck(this, Linkto);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Linkto).apply(this, arguments));
		}

		_createClass(Linkto, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'contextMain' },
					_react2.default.createElement(_treePanel2.default, null)
				);
			}
		}]);

		return Linkto;
	}(_react.Component);

	exports.default = Linkto;

/***/ }

})