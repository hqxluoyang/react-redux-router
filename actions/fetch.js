/*****
	date : 2016-05-18
	author : sailing
	fun : 验证middware
****/

import { FETCH_START, FETCH_SUCC , FETCH_ERR , ADD_ } from '../constants'

//import fetch from 'isomorphic-fetch'
import 'whatwg-fetch'   //兼容到 ie9


const url = 'text.json'

function fetchStart(items) {
	return {
		type : 'FETCH_START',
		fetch : 'Start......',
		items
	}
}


function fetchSucc (items){
	return {
		type : 'FETCH_SUCC',
		fetch: 'SUCC',
		items
	}
}

function fetchErr (items) {
	return {
		type : 'FETCH_ERR',
		fetch :'ERROR' ,
		items	
	}
}

function fetchPosts (text) {
	return dispatch =>{
		dispatch(fetchStart(text))
       // console.log("fetch check:" , fetch)
		return fetch(url)
				.then(response => response.json())
				.then(json =>{
					console.log("json xxxxxxxxxxx:" , json)
					dispatch(fetchSucc(json))
				} )
				.catch(function(err){
					console.log("fetch error : " , err)
					dispatch(fetchErr('error'))
				})
	}
}

function shouldFetchPosts(state , text){
	return true
}

export function getFetch (text) {
	return (dispatch , getState) =>{
		if(shouldFetchPosts(getState() , text)){
			return dispatch(fetchPosts(text))
		}
	}	
}

export function add_item (items) {
	return {
		type : 'ADD_ITEM',
		items:items	
	}
}