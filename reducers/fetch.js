import { FETCH_START, FETCH_SUCC , FETCH_ERR } from '../constants'

var initState = {
	fetch:'nihao',
	number:0,
	items:[]
}

export default function fetchDataState (state = initState , actions) {
	switch (actions.type){
		case 'FETCH_START' :
			var old = [...state]
				old.fetch = 'starting'
			return 
			break
		case 'FETCH_SUCC':
			var old = [...state] ;
				old.fetch = 'SUCC';
				old.items = actions.items;
			return old
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