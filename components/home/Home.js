import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../../actions/count'
import Config from '../../services/config'


class Home extends Component {
    
    constructor(props) {
      super(props)
      const bus = Config.eventBus ;
     
      bus.on('homeTest' , this.homeTest.bind(this))
      /*
       this.router.setRouteLeaveHook(
      this.props.route,
      this.routerWillLeave
    )
    */
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
      console.log("data:" , data , this)
    }

    render () {
        const {number , increase , decrease} = this.props
        console.log("number :" , number , increase , decrease , this.props)
        return (
          <div>
            Some state changes:
            {number}
            <button onClick={() => increase(1)}>Increase</button>
            <button onClick={() => decrease(1)}>Decrease</button>
          </div>
        )
    }

}

export default connect(
 // console.log("hello world")
  state => ({ number: state.count.number ,router:state.routing }),
  { increase, decrease }
)(Home)
