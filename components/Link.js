/*
	date : 2016-05-16
	author : sailing
	fun : link 路由跳转
*/

import React , {Component , PropTypes} from 'react'
import { Link, browserHistory } from 'react-router'

class Linkto extends Component {
	render () {
		return (
			<div className="left-panel">
				<p><Link to="/">Home</Link></p>
				<p><Link to="/foo">  Foo</Link></p>
				<p><Link to="/bar">Bar</Link></p>
				<p><Link to="/set">set</Link></p>
			</div>
		)
	}
}


export default Linkto