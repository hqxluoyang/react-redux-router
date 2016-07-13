/**
	date : 2016-5-24
	author : sailing
	fun : 主页画布
**/

import React , {Component , Prototype} from 'react'
import Tools from '../../services/tools'
import DrawBox from './DrawBox'
import DrawLine from './DrawLine'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import Config from '../../services/config'
import {change_module , getModeList} from '../../actions/operationModel'

require('./mainCanvas.less')

var divStyle = function () {
	console.log("窗口 :" , Tools.getPageHeight())
	const h = (Tools.getPageHeight() - 90) + 'px';
	return {
		height:h,
		width:'100%',
		background:'#e6e6e6'
	}
}


class MainCanvas extends Component {
	
	constructor (props) {
		super (props)
		Config.eventBus.on('windowResize' , this.resize.bind(this))
	}

	resize () {
		this.setState({});
	}

	render () {
		const { operModule , change_module , dispatch} = this.props
		return (
			<div className="mainCanvas" style={divStyle()}>
				<DrawBox 
					box={operModule}
					changeMod = {change_module}
					dispatch = {dispatch}
					getModeList = {getModeList}
				/>
				<DrawLine    
				/>
			</div>
		)
	}
}

function mapStateToProps(state) {        //主要是给这个模块传递store状态
	return {
		operModule:state.operModule 
	}
}

function mapDispatchToProps(dispatch) {
	return {
		change_module : bindActionCreators(change_module , dispatch),
		dispatch
	}
}

export default MainCanvas

export default connect(
  state => (mapStateToProps),
  mapDispatchToProps
)(MainCanvas)

//export default connect ( state => (mapStateToProps) ,  mapDispatchToProps)(MainCanvas)