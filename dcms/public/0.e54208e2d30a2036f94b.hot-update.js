webpackHotUpdate(0,{

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(53);

	var _reactRouter = __webpack_require__(62);

	var _ = __webpack_require__(300);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /***
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	author : sailing
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	date : 2016-7-14
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	fun :路由树
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ***/

	var funHash = {
	    '/': _.App,
	    '/home': _.Home,
	    '/foo': _.Feedback,
	    '/bar': _.Bar
	};

	var TreeRouterPanel = function (_Component) {
	    _inherits(TreeRouterPanel, _Component);

	    function TreeRouterPanel(props) {
	        _classCallCheck(this, TreeRouterPanel);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TreeRouterPanel).call(this, props));
	        //  const bus = Config.eventBus ;
	    }

	    _createClass(TreeRouterPanel, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            // alert("componentWillMount")
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            // alert("componentDidMount")
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            //alert("componentWillUnmount")
	        }
	    }, {
	        key: 'routerWillLeave',
	        value: function routerWillLeave(nextLocation) {
	            alert("nextLocation");
	        }
	    }, {
	        key: 'homeTest',
	        value: function homeTest(data) {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var tree = _props.tree;
	            var history = _props.history;


	            console.log("xxxxxxxx:", eval('Home'));

	            var routes = {
	                path: '/',
	                component: _.App,
	                childRoutes: [{ path: 'home', component: _.Home }, { path: 'foo', component: _.Feedback }, { path: 'foo', component: _.Feedback }]
	            };
	            console.log("tree success :", tree);
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_reactRouter.Router, { history: history, routes: routes })
	            );
	        }
	    }]);

	    return TreeRouterPanel;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	    return { tree: state.tree, router: state.routing };
	}, {})(TreeRouterPanel);

/***/ }

})