import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'
import Config from '../services/config'


class Home extends Component {
    
    constructor(props) {
      super(props)
    //  this.handleChange = this.handleChange.bind(this)
     // this.handleRefreshClick = this.handleRefreshClick.bind(this)
      console.log("dfdfdffeeeee:" , this , this.homeTest)
      Config.eventBus.on('homeTest' , this.homeTest.bind(this))
      setTimeout(function(){
        Config.eventBus.emit('homeTest' , {val:4})
      } , 1000)
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
  state => ({ number: state.count.number }),
  { increase, decrease }
)(Home)
