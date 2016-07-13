import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

var dataLeft =[{
  path:'home',
  name:'image',
  next :[{
    path:'path1',
    name : 'pic',
    next:[]
  }]
},{
  path:'foo',
  name:'feedback',
  next:[]
}]

class Treepanel extends Component {
    
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
      console.log("data:" , data , this)
    }

    render () {

        var data = [{
          name:1,
          next:[{name:4},{name:999}]
        }]

        function clickMod(){
            return function(){
              alert("hhhhhhhhh")
            }
        }

        function styleName(){
          return {
            background:'green',
            color:'red',
            marginBottom:'10px'
          }
        }

         function marginL(i){
          return {
            marginLeft:i * 10 + 'px',
            color:'red',
            marginBottom:'10px'
          }
        }

        var navIndex = 0;

        function createTreeDate(data){  
              if(data){
                  let lis=[];
                  navIndex ++ ;
                  for(let index in data){
                      console.log("index xx:" , navIndex)
                      let childrenDiv = null;

                      if(data[index].next){
                          let next= createTreeDate(data[index].next);
                          childrenDiv=<div onClick={clickMod()}>{next}</div>;
                      }

                      let li = <li style={styleName()} key={index}>
                          <div style={marginL(navIndex)}>{data[index].name}</div>
                          {childrenDiv}
                      </li>;

                      lis.push(li);
                  }
                  return <ul>{lis}</ul>
              }

          }

          let treeHtml =createTreeDate(data);
        
        return (
          <div>
              {treeHtml}
             
          </div>
        )
    }

}

export default connect()(Treepanel)
