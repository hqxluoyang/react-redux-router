/**
	date : 2016-05-17
	author : sailing
	fun : 路由设置
**/

import React , {Component , PropTypes} from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

function func () {
	alert("dfdddd")
}

class Router_com extends Component {
	render () {

		function funx () {
			alert("ssdfe")
		}
		return (
			<div>
		      <Router history={history} onEnter ={func}>
		        <Route path="/" component={App}>
		          <IndexRoute component={Home}/>
		          <Route path="foo" component={Foo}/>
		          <Route path="bar" component={Bar}/>
		          <Route path="set" component={Set}/>
		        </Route>
		      </Router>
		    </div>
		)
	}
}


export default Router_com