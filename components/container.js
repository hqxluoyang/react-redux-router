/****
	date : 2016-05-16
	author : sailing
	fun : 工作界面
******/

import React , {Component , PropTypes} from 'react'
import Header from './header'
import Tools from '../services/tools'
require('../css/container.less')

var divStyle = function () {
	const h = (Tools.getPageHeight() - 40) + 'px';
	return {
		height:h,
		background:'#FDFDFD'
	}
}

var setContainer = function(){
	const h = Tools.getPageHeight() + 'px';
	return {
		height:h,
		position:"relative"
	}
}

class Container extends Component {
	render () {
		const {chd} = this.props
		return (
			<div className='_container'>
				<Header />
				<div style={divStyle()}>{chd}</div>
			</div>
			
		)
	}
}

Container.propTypes = {
	chd : PropTypes.object.isRequired
}

export default Container