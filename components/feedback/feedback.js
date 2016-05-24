/****
	date : 2016-5-24
	author : sailing
	fun : 'feedback界面操作'
***/

import React , {Component , PropTypes} from 'react'
import Tooblbar from './toolbar'
import MainCanvas from './mainCanvas'
import DrawBox from './DrawBox'
import DrawLine from './DrawLine'

require('./feedback.less')

class Feedback extends Component {
	render () {
		return (
			<div className='_feedbackCon'>
				<Tooblbar />
				<MainCanvas>
					<DrawBox />
					<DrawLine />
				</MainCanvas>
			</div>
		)
	}
}

export default Feedback