/****
	date : 2016-05-16
	author : sailing
	fun : 工作界面
******/

import React , {Component , PropTypes} from 'react'
require('../css/container.less')

class Container extends Component {
	render () {
		const {chd} = this.props
		return (
			<div className='container'>{chd}</div>
		)
	}
}

Container.propTypes = {
	chd : PropTypes.object.isRequired
}

export default Container