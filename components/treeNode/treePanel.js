import React, { Component, PropTypes } from 'react'
import { Link, browserHistory , IndexLink} from 'react-router'
import { connect } from 'react-redux'

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
          name:'home',
          icon:'../image/fly.png',
          path:'/',
          next:[{name:'alerts',
                 icon:'../image/desktop.png',
                 path:'/foo'
                },{name:'Messages',
                  path:'/bar',
                 icon:'../image/fly.png'
                }]
        },
        { name:'照片',
          icon:'../image/desktop.png',
          next:[{name:'Comments' ,
              icon:'../image/fly.png',
              next:[{name:666,
                    icon:'../image/fly.png',
                    path:'/set',
                    next:[]}]},

                    {name:999,
                       path:'/set',
                      icon:'../image/fly.png'
                    }


                    ]}

        ]

        function clickMod(){
            return function(){
              alert("hhhhhhhhh")
            }
        }

        function styleName(){
          return {
            color:'red',
          //  background:'#525252',
            borderBottom:'1px solid gray',
            marginBottom:'0px'
          }
        }

         function marginL(i){
          console.log(i)
          return {
            color:'red',
            position:"relative",
            marginBottom:'0px'
          }
        }

        function divLeft () {
          return {
            marginLeft:"30px"
          }
        }

        function getPath (data , index) {
          console.log(data, data[index].path)
          var path = data[index].path || '';

          return path;
        }

        function createTreeDate(data){  
              if(data){
                  let lis=[];
                  
                  for(let index in data){
                     
                      let childrenDiv = null;

                      if(data[index].next){
                          let next= createTreeDate(data[index].next);
                          childrenDiv=<div style={divLeft()} onClick={clickMod()}>{next}</div>;
                      }

                      let li = <li style={marginL(index)}  key={index}>
                          <div style={styleName()}><img src={data[index].icon} /><Link activeClassName="linkActive" to={getPath(data , index)}>{data[index].name}</Link></div>
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
