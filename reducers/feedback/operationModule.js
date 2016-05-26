/**
	date : 2016-05-25
	author : sailing
	fun : 添加模块

**/

/***
	initState :[{
		code : xxxx ,     //string 自动生成,模块的唯一标示
		type : xxxx ,     //string 模块分类
		left : 0 ,       模块左偏移量
		top : 0 ,        模块top
		width : 0 ,      //模块大小
		height : 0,      //模块大小
		bg : xxx      模块颜色 
	}]
****/

import { ADD_MODULE , DEL_MODULE , CHANGE_MODULE } from '../../constants'
/*
const initState = [{
	code : 'kjfasdlkfjiefls',
	left :  100,
	top : 100,
	width : 200,
	height: 200,
	bg : 'red'
},{
	code : 'kjfasdlasdfkfjiefls',
	left :  350,
	top : 400,
	width : 100,
	height: 100,
	bg : 'red'
},{
	code : 'kjfasdlkdfgdfgfjiefls',
	left :  500,
	top : 400,
	width : 100,
	height: 100,
	bg : 'red'
}];
*/
export default function operationModel (state = [] , actions) {
	console.log("actions : " , actions)
	switch (actions.type){
		case 'ADD_MODULE' :
				return [...state , actions.data]
				break
		case 'DEL_MODULE' :
				var code = actions.data.code ;

				for(var i=0 ; i<state.length ; i++){
					if(code == state[i]['code']){
						break ;
					}
				}
				var item = [...state]
				item.splice(i , 1);
				return item	
				break
		case 'CHANGE_MODULE' :
				var code = actions.data.code ;

				for(var i=0 ; i<state.length ; i++){
					if(code == state[i]['code']){
						break ;
					}
				}
				var item = [...state]
				item[i] = actions.data ;
				return item
				break
		case 'GETLIST_SUCC' :          //获取box列表成功
				console.log("actions.itme:" , actions.item , actions)
				return actions.item 	

			default:

				return state ;					

	}
}