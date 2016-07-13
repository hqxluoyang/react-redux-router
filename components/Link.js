/*
	date : 2016-05-16
	author : sailing
	fun : link 路由跳转
*/

/*
	activeStyle,activeClassName :两个样式的用法是，一个直接设定style , 一个设定 className
*/

import React , {Component , PropTypes} from 'react'
import { Link, browserHistory , IndexLink} from 'react-router'
import TreePanel from './treeNode/treePanel'
require("../css/link.less")

class Linkto extends Component {
	render () {
		return (
			<div className="contextMain">
				<TreePanel />
			</div>
		)
	}
}


export default Linkto