/**
	author : sailing
	date : 2016-7-14
	fun:"树列表实现"
***/

import { GET_TREE , CHANGE_STATE} from '../../constants'

var tree = [{
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

var initialState = {
	treeList:tree
}

var arr = initialState.treeList


export default function getTree (state = tree , action) {
	if(action == GET_TREE){
		return state ;
	}else if(action == CHANGE_STATE){
		
		return state
	}else {
		return state;
	}
}