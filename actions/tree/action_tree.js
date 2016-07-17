/**
	author : sailing
	date : 2016-7-14
	fun :
**/
import { GET_TREE , CHANGE_STATE} from '../../constants'

export function getTreeState (action) {
	return {
		type : GET_TREE
	}
}

export function changeTreeState (path){
	
	return {
		type : CHANGE_STATE,
		data :path
	}
} 