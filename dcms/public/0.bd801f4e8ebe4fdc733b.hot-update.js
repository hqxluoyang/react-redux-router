webpackHotUpdate(0,{

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _header = __webpack_require__(299);

	var _header2 = _interopRequireDefault(_header);

	var _tools = __webpack_require__(152);

	var _tools2 = _interopRequireDefault(_tools);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /****
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	date : 2016-05-16
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	author : sailing
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	fun : 工作界面
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ******/

	__webpack_require__(582);

	var divStyle = function divStyle() {
		var h = _tools2.default.getPageHeight() - 40 + 'px';
		return {
			height: h,
			background: '#FDFDFD'
		};
	};

	var setContainer = function setContainer() {
		var h = _tools2.default.getPageHeight() + 'px';
		return {
			height: h,
			position: "relative"
		};
	};

	var Container = function (_Component) {
		_inherits(Container, _Component);

		function Container() {
			_classCallCheck(this, Container);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Container).apply(this, arguments));
		}

		_createClass(Container, [{
			key: 'render',
			value: function render() {
				var chd = this.props.chd;

				console.log("chd :", chd);
				return _react2.default.createElement(
					'div',
					{ className: '_container' },
					_react2.default.createElement(_header2.default, null),
					_react2.default.createElement(
						'div',
						{ style: divStyle() },
						chd
					)
				);
			}
		}]);

		return Container;
	}(_react.Component);

	Container.propTypes = {
		chd: _react.PropTypes.object.isRequired
	};

	exports.default = Container;

/***/ }

})