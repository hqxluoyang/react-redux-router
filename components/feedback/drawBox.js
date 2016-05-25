/**
	date : 2016-5-24
	author : sailing
	fun : 画模块
**/

import React , {Component , Prototype} from 'react'
import modMove from './modMov'

require('./drawBox.less')

class DrawBox extends Component {
	
	clickMod (index , item) {
		return function(e){
			console.log("index : " , index , item , e)
		}
	}

	mousedown (index , item) {
		const that = this ;
		return function (e){
			console.log("modMove:" , that.props.changeMod)
			modMove.startMove(index , item , that.props.changeMod);
		}
	}

	render () {
		const { box , changeMod} = this.props
		const that = this ;
		const items = box.map(function(item , index){

			function setStyle(item){
				return {
					left : item.left + 'px',
					top : item.left + 'px',
					width : item.width + 'px',
					height : item.height + 'px',
					position : 'absolute',
					background:item.bg
				}
			}
			console.log("index : " , index)
			return (
				<div className="_modStyle" onMouseDown={that.mousedown.call(that , index , item)} key={index} style={setStyle(item)} onClick={that.clickMod.call(that , index , item)}>
					{index}
				</div>
			)
		})

		return (
			<div className = '_drawBox'>
				{items}
			</div>
			)
	}
}

export default DrawBox