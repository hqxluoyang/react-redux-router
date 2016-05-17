/*
	date : 2016-05-16
	author : sailing
	fun : link 路由跳转
*/

/*
	activeStyle,activeClassName :两个样式的用法是，一个直接设定style , 一个设定 className
*/

import React , {Component , PropTypes} from 'react'
import { Link, browserHistory } from 'react-router'
require("../css/link.less")

class Linkto extends Component {
	render () {
		return (
			<div className="contextMain">
				<p><Link activeClassName="linkActive" to="/">Home</Link></p>
				<p><Link activeClassName="linkActive" to="/foo">列表1</Link></p>
				<p><Link activeClassName="linkActive" to="/bar">列表2</Link></p>
				<p><Link activeClassName="linkActive" to="/set">配置</Link></p>
			</div>
		)
	}
}


export default Linkto