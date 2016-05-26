/**
	date : 2016-5-24
	author : sailing
	fun : 画模块
**/

import React , {Component , Prototype} from 'react'
import modMove from './modMov'

require('./drawBox.less')

function getBoxStyle (item) {
	return {
			left : item.left + 'px',
			top : item.left + 'px',
			width : item.width + 'px',
			height : item.height + 'px',
			position : 'absolute',
			background:item.bg
	}
}

class DrawBox extends Component {

	constructor(props){
		super(props)
		this.initBus();
		this.getBoxList();
	}

	getBoxList () {
		const { dispatch ,  getModeList} = this.props
		dispatch(getModeList())
	}
	
	initBus () {

	}

	clickMod (index , item) {
		return function(e){
			console.log("index : " , index , item , e)
		}
	}

	mousedown (index , item) {
		const that = this ;
		return function (e){
			modMove.startMove(index , item , that.props.changeMod);
		}
	}

	render () {
		const { box , changeMod , dispatch , getModeList} = this.props
		const that = this ;
		const items = box.map(function(item , index){

			return (
				<div className="_modStyle" onMouseDown={that.mousedown.call(that , index , item)} key={index} style={getBoxStyle(item)} onClick={that.clickMod.call(that , index , item)}>
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