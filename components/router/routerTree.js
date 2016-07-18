/***
	author : sailing
	date : 2016-7-14
	fun :路由树
***/

import React , {Component , propTypes} from 'react'
import { connect } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

import { App, Home, Feedback, Bar} from '../'

var funHash = {
    '/':App,
    '/home':Home,
    '/foo':Feedback,
    '/bar':Bar
}

class TreeRouterPanel extends Component {
    
    constructor(props) {
      super(props)
    //  const bus = Config.eventBus ;
     
    }

    componentWillMount () {
     // alert("componentWillMount")
    }

    componentDidMount () {
     // alert("componentDidMount")
    }

    componentWillUnmount () {
      //alert("componentWillUnmount")
    }

    routerWillLeave (nextLocation) {
      alert("nextLocation")
    }

    homeTest (data) {

    }

    render () {

        const {tree , history} = this.props

       // console.log("xxxxxxxx:" , eval('Home'))

        const routes = {
                path: '/',
                component: App,
                childRoutes: [
                  { path: 'home', component: Home },
                  { path: 'foo', component: Feedback }
                ]
              }
       console.log("tree success :" , tree)
        return (
            <div><Router history={history} routes={routes} /></div>
        )
    }

}

export default connect(
   state => ({ tree: state.tree ,router:state.routing }),
  { }
)(TreeRouterPanel)
