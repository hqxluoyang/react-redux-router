import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { Link, browserHistory , IndexLink} from 'react-router'
import { getTreeState  , changeTreeState} from '../../actions/tree/action_tree'
import { connect } from 'react-redux'
import {Animation} from 'react-web-animation';


require ("../../css/treePanel.less")

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
    /*
    clickLeaf (path) {
      alert(path)
      //const {dispatch , change_state} = this.props

      return function(){
       // dispatch(change_state(path))
      }
      
    }
    */


    getKeyFrames() {
        return [
            { transform: 'scale(1)',    opacity: 1 },
            { transform: 'scale(.5)',   opacity: 0.5},
            { transform: 'scale(1)', opacity: 0.667},
            { transform: 'scale(1)',   opacity: 0.6}
        ];
    }

    getTiming( duration ) {
        return {
            duration,
            
            delay: 0,
            iterations: 1,
            direction: 'alternate',
            fill: 'forwards'
        };
    }

    render () {
        var that = this ;
        function clickMod(data , index){
            return function(){
             data[index].state ? data[index].state=false : data[index].state = true;
            }
        }

        function clickList () {
            return function () {
              alert("li")
            }
        }

        function getPath (data , index) {
          console.log(data, data[index].path)
          var path = data[index].path || '';

          return path;
        }

       
        const {tree , dispatch} = this.props
      
        function createTreeDate(data){  
              if(data){
                  let lis=[];

                  for(let index in data){
                     
                      let childrenDiv = null;
                      
                      if(data[index].next && data[index].state){
                          
                          var next= createTreeDate(data[index].next);
                          
                          childrenDiv=<div className="divLeft" >
                          <Animation keyframes={that.getKeyFrames()}
                              timing={that.getTiming(1000)}>
                             {next}
                          </Animation>
                          </div>;
                          
                      }

                      let li = <li key={index}>
                          <div className="leafli" onClick={clickMod(data , index)} ><img src={data[index].icon} /><Link activeClassName="linkActive" to={getPath(data , index)}>{data[index].name}</Link></div>
                          {childrenDiv}
                      </li>

                      lis.push(li);
                  }

                  return <ul>{lis}</ul>
              }

          }

          let treeHtml =createTreeDate(tree);
        
        return (
          <div className="treePanel">
               
                  {treeHtml} 
              
          </div>
        )
    }

}



export default connect(
   state => ({ tree: state.tree ,router:state.routing }),
  { }
)(Treepanel)

