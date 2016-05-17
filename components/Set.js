import React from 'react'
import {connect} from 'react-redux'
import {set_green , set_red} from '../actions/set'
import main from  '../main.css'

function hset ({val , routing ,  set_green , set_red}) {
	console.log("routing:" , routing)
	return (
		<div>
			<p>{val}</p>
			<p >hhhhhhhhhhhhhhhhhhhh</p>
			<button onClick={()=>set_red()}>red</button>
			<button onClick={()=>set_green()}>green</button>
		</div>
	)
}

export default connect(
	state => ({val:state.set.val , routing:state.routing}) , {set_green , set_red}
)(hset)