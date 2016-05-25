/**
	date : 2016-5-24
	author : sailing
	fun : 主页画布
**/

import React , {Component , Prototype} from 'react'
import Tools from '../../services/tools'
import DrawBox from './DrawBox'
import DrawLine from './DrawLine'

require('./mainCanvas.less')

var divStyle = function () {
	const h = (Tools.getPageHeight() - 90) + 'px';
	return {
		height:h,
		width:'100%',
		background:'#e6e6e6'
	}
}

class MainCanvas extends Component {
	render () {
		const { box , changeMod } = this.props
		return (
			<div className="mainCanvas" style={divStyle()}>
				<DrawBox 
					box={box}
					changeMod = {changeMod}
				/>
				<DrawLine  />
			</div>
		)
	}
}

export default MainCanvas