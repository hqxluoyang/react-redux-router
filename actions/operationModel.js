/**
	date : 2016-5-25
	author : sailing 
	fun : 模块移动操作的所有actions
***/

import { ADD_MODULE, DEL_MODULE , CHANGE_MODULE} from '../constants'

export function add_module(mod){
	return {
		type:ADD_MODULE,
		data : mod
	}
}


export function del_module(mod){
	return {
		type : DEL_MODULE,
		data : mod
	}
}

export function change_module(mod){
	return {
		type : CHANGE_MODULE,
		data : mod
	}
}
