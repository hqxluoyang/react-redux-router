/**
	date : 2016-5-24
	author : sailing
	fun : 添加模块的工具栏
**/

import React , {Component , Prototype} from 'react'
import { Button } from 'react-bootstrap'
import Config from '../../services/config'
require('./toolbar.less')

class Toolbar extends Component {

	click () {
		Config.eventBus.emit('msgAddmodel')
	}

	render (){
		return (
			<div className="_toolbar">
				 <Button className="_buttonPosition" onClick={this.click}>Default</Button>
				<hr/>
			</div>
		)
	}
}

export default Toolbar