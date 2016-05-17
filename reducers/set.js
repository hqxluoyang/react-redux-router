
import {SET_RED , SET_GREEN} from '../constants'

//const initialState = Immutable.fromJS({val:'red'})
const initialState = {val:'red'}

export default function setRedGreen (state = initialState, action) {
//	var con = Immutable.fromJS({val:'red'})
//	console.log("initialState:" , initialState , con.get('val'))
	if(action.type == SET_GREEN){
		console.log("state : " , state)
//		return state.set('val' , "GREEN")
		return {val : 'GREEN'}
	}else if(action.type == SET_RED){
		//return state.set('val' , 'RED')
		return {val : 'red'}
	}else {
		return state
	}
}