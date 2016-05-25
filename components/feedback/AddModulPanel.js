/**
	date : 2016-05-25
	author : sailing
	fun : 添加模块按钮弹出框
**/


import React , { Component , Prototype} from 'react'
import { Button , Modal } from 'react-bootstrap'
import Config from '../../services/config'

class AddModelPanel extends Component {
	
	constructor(props){
		super(props)
		this.state = {showModal : false}
		this.initBus();
	}

	componentWillUpdate () {
		console.log("start componentWillUpdate :...........:" , this.state.showModal)
	}

	componentWillReceiveProps () {
		console.log("start componentWillReceiveProps :...........:" , this.state.showModal)
	}
/*
	shouldComponentUpdate () {
		console.log("start shouldComponentUpdate :...........:" , this.state.showModal)
	}
*/
	close () {
		this.setState({ showModal: false });
	}

	open () {
		this.setState({ showModal: true });
	}

	initBus () {
		Config.eventBus.on("msgAddmodel" , this.open.bind(this))
	}

	addModule () {
		this.setState({ showModal: false });
	}

	render () {
		console.log("render start ....")
		return (
			<div>
				<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
					<Modal.Header closeButton>
            			<Modal.Title>Modal heading</Modal.Title>
          			</Modal.Header>

          			<Modal.Body>
          				<h4>Overflowing text to show scroll behavior</h4>
          			</Modal.Body>

          			<Modal.Footer>
            			<Button onClick={this.addModule.bind(this)}>添加模块</Button>
          			</Modal.Footer>
				</Modal>
			</div>
		)
	}
}


export default AddModelPanel