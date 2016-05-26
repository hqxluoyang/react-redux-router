/****
	date : 2016-5-24
	author : sailing
	fun : 'feedback界面操作'
***/

import React , {Component , PropTypes} from 'react'
import {connect} from 'react-redux'
import Tooblbar from './toolbar'
import MainCanvas from './mainCanvas'


import AddModulPanel from './AddModulPanel'

require('./feedback.less')

class Feedback extends Component {
	render () {
		const {operModule}  = this.props
	//	console.log("sta :" , change_module)
		return (
			<div className='_feedbackCon'>
				<Tooblbar />
				<MainCanvas />
				<AddModulPanel />
			</div>
		)
	}
}

export default Feedback
/*
export default connect(
	state => ({operModule:state.operModule})
)(Feedback)
*/