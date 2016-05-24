/**
	date : 2016-5-24
	author : sailing
	fun : 主页画布
**/

import React , {Component , Prototype} from 'react'
import Tools from '../../services/tools'

require('./mainCanvas.less')

var divStyle = function () {
	const h = (Tools.getPageHeight() - 90) + 'px';
	return {
		height:h,
		width:'100%',
		background:'#898989'
	}
}

class MainCanvas extends Component {
	render () {
		return (
			<div className="mainCanvas" style={divStyle()}>
				
			</div>
		)
	}
}

export default MainCanvas