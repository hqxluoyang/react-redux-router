import React from 'react'
import {connect} from 'react-redux'
import {set_green , set_red} from '../actions/set'

function hset ({val , set_green , set_red}) {
	
	return (
		<div>
			<p>{val}</p>
		bbbbbbbbbbbbbbbbbbbbbbbbbb
			<p>hhhhhhhhhhhhhhhhhhhh</p>
			<button onClick={()=>set_red()}>red</button>
			<button onClick={()=>set_green()}>green</button>
		</div>
	)
}

export default connect(
	state => ({val:state.set.val}) , {set_green , set_red}
)(hset)