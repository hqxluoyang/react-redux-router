/**
	date : 2016-5-25
	author : sailing 
	fun : 模块移动操作的所有actions
***/

import { ADD_MODULE, DEL_MODULE , CHANGE_MODULE , GETLIST_START , GETLIST_ERROR , GETLIST_SUCC} from '../constants'
import axios from 'axios'
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

export function getModeList () {
	return dispatch => {
		dispatch(fetchStart())

		return axios.get('text.json')
			  .then(function (response) {
			    const json = response.data;
			    console.log("json :" , json)
			    dispatch(fetchSucc(json))

			  })
			  .catch(function (response) {
			    console.log(response);
			  });

	}
}

/*********从后台读取数据**************/
function fetchStart() {
	return {
		type : 'GETLIST_START'
	}
}


function fetchSucc (item){
	return {
		type : 'GETLIST_SUCC',
		item : item
	}
}

function fetchErr () {
	return {
		type : 'FETCH_ERR'
	}
}

/**************************************/
