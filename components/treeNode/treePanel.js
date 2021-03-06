import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { Link, browserHistory , IndexLink} from 'react-router'
import { getTreeState  , changeTreeState} from '../../actions/tree/action_tree'
import { connect } from 'react-redux'

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
                          
                          let next= createTreeDate(data[index].next);
                          childrenDiv=<div className="divLeft" >{next}</div>;
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

