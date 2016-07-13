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

import { ADD_MODULE , DEL_MODULE , MOV_MODULE } from '../../constants'

const initState = [{
	code : 'kjfasdlkfjiefls',
	left :  100,
	top : 100,
	width : 200,
	height: 200,
	bg : 'red'
}];

export default function operationModel (state = initState , actions) {
	
	switch (actions.type){
		case 'ADD_MODULE' :
				return [...state , actions.data]
				break
		case 'DEL_MODULE' :
				
				break
		case 'MOV_MODULE' :
				
				break
			default:

				return state ;					

	}
}