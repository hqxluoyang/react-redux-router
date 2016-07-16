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
/*
const rootRoute = {
  childRoutes: [ {
    path: '/',
    component: App,
    childRoutes: [
      Home,
      Feedback,
      Bar
    ]
  } ]
}
*/
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

        function clickMod(data , index){
            return function(){
            }
        }

        function clickList () {
            return function () {
              alert("li")
            }
        }

        function getPath (data , index) {
          console.log(data, data[index].path)
          var path = data[index].path.substr(1) || '/';

          return path;
        }

        function getComponent (data , index) {
         
          var Com = data[index].path;
         // console.log("component :" , Com , funHash[Com] , funHash)
          return funHash[Com];
        }


        const {tree , history} = this.props

        
        console.log("this.props :" , tree)
       
        return (
            <div>
        )
    }

}

export default connect(
   state => ({ tree: state.tree ,router:state.routing }),
  { }
)(TreeRouterPanel)
