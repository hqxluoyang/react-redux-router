webpackHotUpdate(0,{

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getTree;

	var _constants = __webpack_require__(35);

	/*
	var tree1 = [{
	          name:'home',
	          icon:'../image/fly.png',
	          path:'/',
	          state :'false',
	          next:[{name:'alerts',
	                 icon:'../image/desktop.png',
	                 state :'false',
	                 path:'/foo'
	                },{name:'Messages',
	                  path:'/bar',
	                  state :'false',
	                 icon:'../image/fly.png'
	                }]
	        },
	        { name:'照片',
	          state :'false',
	          icon:'../image/desktop.png',
	          next:[{name:'Comments' ,
	              icon:'../image/fly.png',
	              state :'false',
	              next:[{name:666,
	                    icon:'../image/fly.png',
	                    state :'false',
	                    path:'/set',
	                    next:[]}]},

	                    {name:999,
	                       path:'/set',
	                       state :'false',
	                      icon:'../image/fly.png'
	                    }


	                    ]}

	    ]

	*/

	var treey = [{
	  name: 'home',
	  icon: '../image/fly.png',
	  path: '/',
	  state: 'false',
	  component: 'App',
	  next: [{
	    name: 'Feedback',
	    icon: '../image/fly.png',
	    path: '/foo',
	    state: 'false',
	    component: 'Feedback'
	  }, {
	    name: 'Bar',
	    icon: '../image/fly.png',
	    path: '/bar',
	    state: 'false',
	    component: 'Bar'
	  }]
	}]; /**
	    	author : sailing
	    	date : 2016-7-14
	    	fun:"树列表实现"
	    ***/

	var tree = [{
	  name: 'home',
	  icon: '../image/fly.png',
	  path: '/',
	  state: false
	}, {
	  name: 'Feedback',
	  icon: '../image/fly.png',
	  path: '/foo',
	  state: false
	}, {
	  name: 'Bar',
	  icon: '../image/fly.png',
	  path: '',
	  state: false,

	  next: [{
	    name: 'Feedback',
	    icon: '../image/fly.png',
	    path: '/foo',
	    state: false
	  }, {
	    name: 'shebei',
	    icon: '../image/fly.png',
	    path: '/foo',
	    state: false
	  }]
	}];

	function getTree() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? tree : arguments[0];
	  var action = arguments[1];

	  console.log("action :", action);
	  if (action.type == _constants.GET_TREE) {
	    return state;
	  } else if (action.type == _constants.CHANGE_STATE) {
	    //var obj = Object.assign(state);
	    alert("hehe");
	    return state;
	  } else {
	    return state;
	  }
	}

/***/ }

})