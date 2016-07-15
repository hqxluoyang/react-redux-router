/*
import React , {Component , Prototype} from 'react'
import {connect} from 'react-redux'
import {set_green , set_red} from '../actions/set'
import main from  '../main.css'

class Hset extends Component {
	
	componentWillUpdate () {
		console.log("start componentWillUpdate :...........:" , this.props.val)
	}

	componentWillReceiveProps () {
		console.log("start componentWillReceiveProps :...........:" , this.props.val)
	}

	render () {
		const {val , set_red , set_green} = this.props
		console.log("render start..... :" , val)
		return (
			<div>
				<p>{val}</p>
				<button onClick={()=>set_red()}>red</button>
				<button onClick={()=>set_green()}>green</button>
			</div>
		)
	}
}



export default connect(
	state => ({val:state.set.val , routing:state.routing , fetch:state.fetch}) , {set_green , set_red}
)(Hset)

*/


import React from 'react'

export default function Bar() {
  return <div>And I am Set!</div>
}
