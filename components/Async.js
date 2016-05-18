/**
	date : 2016-05-18
	author : sailing
	fun : redux异步请求
**/

import React , {Component , ProtoTypes} from 'react'
import { connect } from 'react-redux'

import {getFetch , add_item} from '../actions/fetch'

class AsyncApp extends Component {
	
	constructor(props){
		super(props)
	}

	componentDidMount () {

	}

	componentWillReceiveProps () {

	}

	getFetch () {
		const { dispatch, fetchs  , add_item} = this.props
		console.log("dispatch, fetchs :" , this.props)
		dispatch(getFetch(fetchs))
	}

	add_item () {
		const {add_item} = this.props
		var a={id:'yui'}
		add_item(a)
	}

	render () {
		const {fetchs , dispatch , add_item} = this.props
		
		const item = fetchs.items.map(function(item){
			return <div>{item.id}</div>
		})
		
		console.log("fetchs.items:" , fetchs.items , add_item)
		return (
			<div>
				{fetchs.number} <br/>
				<button onClick = {this.getFetch.bind(this)}>fetch</button>
				<button onClick = {this.add_item.bind(this)}>add_item</button>
				{item}		
				
			</div>
		)
	}
}

AsyncApp.propTypes = {
	
}


export default connect(state => ({fetchs:state.fetch}) , {add_item})(AsyncApp)

