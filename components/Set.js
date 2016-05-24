import React from 'react'
import {connect} from 'react-redux'
import {set_green , set_red} from '../actions/set'
import main from  '../main.css'



function hset ({val , routing ,fetch ,  set_green , set_red}) {
	function set_state() {
		setTimeout(function(){
			set_red()
		} , 2000)
	}
	//console.log("fetch:" , fetch , getFetch)
	return (
		<div>
			<p>{val}</p>
			<p >hhhhhhhhhhhhhhhhhhhh</p>
			<button onClick={()=>set_state()}>red</button>
			<button onClick={()=>set_green()}>green</button>
		</div>
	)
}

export default connect(
	state => ({val:state.set.val , routing:state.routing , fetch:state.fetch}) , {set_green , set_red}
)(hset)

