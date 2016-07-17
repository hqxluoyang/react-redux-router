/**
	author : sailing
	date : 2016-7-14
	fun:"树列表实现"
***/

import { GET_TREE , CHANGE_STATE} from '../../constants'
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

var treey= [{
          name:'home',
          icon:'../image/fly.png',
          path:'/',
          state :'false',
          component:'App',
          next:[{
            name:'Feedback',
            icon:'../image/fly.png',
            path:'/foo',
            state :'false',
            component:'Feedback'
          },{
            name:'Bar',
            icon:'../image/fly.png',
            path:'/bar',
            state :'false',
            component:'Bar'
          }]
        }]

var tree= [{
          name:'home',
          icon:'../image/fly.png',
          path:'/',
          state :false
          },{
            name:'Feedback',
            icon:'../image/fly.png',
            path:'/foo',
            state :false
          },{
            name:'Bar',
            icon:'../image/fly.png',
            path:'',
            state :false,
        
            next:[{
              name:'Feedback',
              icon:'../image/fly.png',
              path:'/foo',
              state :false
            },{
              name:'shebei',
              icon:'../image/fly.png',
              path:'/foo',  
              state :false
            }]
          }
        ]        

export default function getTree (state = tree , action) {
  console.log("action :" , action)
	if(action.type == GET_TREE){
		return state ;
	}else if(action.type == CHANGE_STATE){
		//var obj = Object.assign(state);
    alert(action.data)
		return state
	}else {
		return state;
	}
}