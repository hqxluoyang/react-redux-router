import {SET_RED , SET_GREEN} from '../constants.js'

export function set_red (str) {
	return {
		type:SET_RED,
		val:str
	}
}

export function set_green (str) {
	return {
		type :SET_GREEN,
		val:str
	}
}