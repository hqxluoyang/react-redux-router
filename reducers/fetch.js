import { FETCH_START, FETCH_SUCC , FETCH_ERR } from '../constants'

var initState = {
	fetch:'nihao',
	number:0,
	items:[]
}

export default function fetchDataState (state = initState , actions) {
	switch (actions.type){
		case 'FETCH_START' :
			return Object.assign({} , state , {
				fetch : actions.fetch
			})
	
			break
		case 'FETCH_SUCC':
		
			return Object.assign({} , state , {
				items : [actions.items]
			})
			break ;
		case 'FETCH_ERR':
			var old = [...state] ;
				old.fetch = 'ERROR'
			return old
			break
		case 'ADD_ITEM':
			
			return {fetch:'add' ,number:state.number + 1 ,  items:[...state.items , actions.items]}
		
			break	
		default :
			return state			
	}
}