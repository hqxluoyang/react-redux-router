/**
	date : 2016-5-24
	author : sailing
	fun : 添加模块的工具栏
**/

import React , {Component , Prototype} from 'react'
import { Button } from 'react-bootstrap'
require('./toolbar.less')

class Toolbar extends Component {
	render (){
		return (
			<div className="_toolbar">
				 <Button>Default</Button>
				<hr/>
			</div>
		)
	}
}

export default Toolbar