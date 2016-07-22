webpackHotUpdate(0,{

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(91);

	var _reactRouter = __webpack_require__(62);

	var _action_tree = __webpack_require__(290);

	var _reactRedux = __webpack_require__(53);

	var _reactWebAnimation = __webpack_require__(528);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(601);

	var Treepanel = function (_Component) {
	    _inherits(Treepanel, _Component);

	    function Treepanel(props) {
	        _classCallCheck(this, Treepanel);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Treepanel).call(this, props));
	        //  const bus = Config.eventBus ;
	    }

	    _createClass(Treepanel, [{
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
	        value: function homeTest(data) {
	            console.log("data:", data, this);
	        }
	        /*
	        clickLeaf (path) {
	          alert(path)
	          //const {dispatch , change_state} = this.props
	            return function(){
	           // dispatch(change_state(path))
	          }
	          
	        }
	        */

	    }, {
	        key: 'getKeyFrames',
	        value: function getKeyFrames() {
	            return [{ transform: 'scale(1)', opacity: 1 }, { transform: 'scale(.5)', opacity: 0.5 }, { transform: 'scale(1)', opacity: 0.667 }, { transform: 'scale(1)', opacity: 0.6 }];
	        }
	    }, {
	        key: 'getTiming',
	        value: function getTiming(duration) {
	            return {
	                duration: duration,
	                easing: 'ease-in-out',
	                delay: 0,
	                iterations: 1,
	                direction: 'alternate',
	                fill: 'forwards'
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var that = this;
	            function clickMod(data, index) {
	                return function () {
	                    data[index].state ? data[index].state = false : data[index].state = true;
	                };
	            }

	            function clickList() {
	                return function () {
	                    alert("li");
	                };
	            }

	            function getPath(data, index) {
	                console.log(data, data[index].path);
	                var path = data[index].path || '';

	                return path;
	            }

	            var _props = this.props;
	            var tree = _props.tree;
	            var dispatch = _props.dispatch;


	            function createTreeDate(data) {
	                if (data) {
	                    var lis = [];

	                    for (var index in data) {

	                        var childrenDiv = null;

	                        if (data[index].next && data[index].state) {

	                            var next = createTreeDate(data[index].next);
	                            childrenDiv = _react2.default.createElement(
	                                'div',
	                                { className: 'divLeft' },
	                                next
	                            );
	                        }

	                        var li = _react2.default.createElement(
	                            'li',
	                            { key: index },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'leafli', onClick: clickMod(data, index) },
	                                _react2.default.createElement('img', { src: data[index].icon }),
	                                _react2.default.createElement(
	                                    _reactRouter.Link,
	                                    { activeClassName: 'linkActive', to: getPath(data, index) },
	                                    data[index].name
	                                )
	                            ),
	                            childrenDiv
	                        );

	                        lis.push(li);
	                    }

	                    return _react2.default.createElement(
	                        'ul',
	                        null,
	                        lis
	                    );
	                }
	            }

	            var treeHtml = createTreeDate(tree);

	            return _react2.default.createElement(
	                'div',
	                { className: 'treePanel' },
	                _react2.default.createElement(
	                    _reactWebAnimation.Animation,
	                    { keyframes: this.getKeyFrames(),
	                        timing: this.getTiming(1000) },
	                    treeHtml
	                )
	            );
	        }
	    }]);

	    return Treepanel;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	    return { tree: state.tree, router: state.routing };
	}, {})(Treepanel);

/***/ }

})