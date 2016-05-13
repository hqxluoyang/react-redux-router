
import {SET_RED , SET_GREEN} from '../constants'

const initialState = {
	val : 'red'
}

export default function setRedGreen (state = initialState, action) {
	if(action.type == SET_GREEN){
		return {val:'green'}
	}else if(action.type == SET_RED){
		return {val:'red'}
	}else {
		return state
	}
}