webpackHotUpdate(0,{

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _tools = __webpack_require__(152);

	var _tools2 = _interopRequireDefault(_tools);

	var _DrawBox = __webpack_require__(292);

	var _DrawBox2 = _interopRequireDefault(_DrawBox);

	var _DrawLine = __webpack_require__(293);

	var _DrawLine2 = _interopRequireDefault(_DrawLine);

	var _redux = __webpack_require__(91);

	var _reactRedux = __webpack_require__(53);

	var _config = __webpack_require__(49);

	var _config2 = _interopRequireDefault(_config);

	var _operationModel = __webpack_require__(282);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	date : 2016-5-24
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	author : sailing
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	fun : 主页画布
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               **/

	__webpack_require__(580);

	var divStyle = function divStyle() {
		console.log("窗口 :", _tools2.default.getPageHeight());
		var h = _tools2.default.getPageHeight() - 90 + 'px';
		return {
			height: h,
			width: '100%',
			background: '#e6e6e6'
		};
	};

	var MainCanvas = function (_Component) {
		_inherits(MainCanvas, _Component);

		function MainCanvas(props) {
			_classCallCheck(this, MainCanvas);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MainCanvas).call(this, props));

			_config2.default.eventBus.on('windowResize', _this.resize.bind(_this));
			return _this;
		}

		_createClass(MainCanvas, [{
			key: 'resize',
			value: function resize() {
				this.setState({});
			}
		}, {
			key: 'render',
			value: function render() {
				var _props = this.props;
				var operModule = _props.operModule;
				var change_module = _props.change_module;
				var dispatch = _props.dispatch;

				return _react2.default.createElement(
					'div',
					{ className: 'mainCanvas', style: divStyle() },
					_react2.default.createElement(_DrawBox2.default, {
						box: operModule,
						changeMod: change_module,
						dispatch: dispatch,
						getModeList: _operationModel.getModeList
					}),
					_react2.default.createElement(_DrawLine2.default, null)
				);
			}
		}]);

		return MainCanvas;
	}(_react.Component);

	function mapStateToProps(state) {
		//主要是给这个模块传递store状态
		return {
			operModule: state.operModule
		};
	}

	function mapDispatchToProps(dispatch) {
		return {
			change_module: (0, _redux.bindActionCreators)(_operationModel.change_module, dispatch),
			dispatch: dispatch
		};
	}

	exports.default = MainCanvas;
	exports.default = (0, _reactRedux.connect)(function (state) {
		return mapStateToProps;
	}, mapDispatchToProps)(MainCanvas);

	//export default connect ( state => (mapStateToProps) ,  mapDispatchToProps)(MainCanvas)

/***/ }

})