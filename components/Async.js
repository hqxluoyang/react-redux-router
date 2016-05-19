/**
	date : 2016-05-18
	author : sailing
	fun : redux异步请求
**/

import React , {Component , ProtoTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';

import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';


import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import {getFetch , add_item} from '../actions/fetch'

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import Slider from 'material-ui/Slider';


const iconStyles = {
  marginRight: 24,
};

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

class AsyncApp extends Component {
	
	constructor(props){
		super(props)
	}

	componentDidMount () {

	}

	componentWillReceiveProps () {

	}

	getFetch () {
		const { dispatch, fetchs} = this.props
		console.log("dispatch, fetchs :" , this.props)
		dispatch(getFetch(fetchs))
	}

	_add_item () {
		const {add_item} = this.props
		var a={id:'yui'}
		console.log("yyyyyyyyyyyyyyyy")
		add_item(a)
	}

	 handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

	render () {
		const {fetchs , dispatch , add_item} = this.props
		
		const item = fetchs.items.map(function(item , index){
			return <div key={index}>{item.id}</div>
		})

		const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

		
		console.log("fetchs.items:" , fetchs.items , add_item)
		return (
			<div>
				{fetchs.number} <br/>
				<RaisedButton className="MarginLest" label="Default" onClick = {this.getFetch.bind(this)} />
				<RaisedButton label="Default" onClick = {this._add_item.bind(this)} />
				{item}
				<RaisedButton label="Default" />
				
	 <DatePicker hintText="Portrait Inline Dialog" container="inline" />
    <DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" />

    <div>
    <HomeIcon style={iconStyles} />
    <HomeIcon style={iconStyles} color={blue500} />
    <HomeIcon style={iconStyles} color={red500} hoverColor={greenA200} />
  </div>

   <div>
    <CircularProgress />
    <CircularProgress size={1.5} />
    <CircularProgress size={2} />
  </div>

  	<LinearProgress mode="indeterminate" />
 <div style={style.container}>
    <RefreshIndicator
      size={40}
      left={10}
      top={0}
      status="loading"
      style={style.refresh}
    />
    <RefreshIndicator
      size={50}
      left={70}
      top={0}
      loadingColor={"#FF9800"}
      status="loading"
      style={style.refresh}
    />
  </div>

  <div>
    <Slider />
    <Slider defaultValue={0.5} />
    <Slider defaultValue={1} />
  </div>





			</div>
		)
	}
}

AsyncApp.propTypes = {
	
}

function mapStateToProps (state) {
	
	return {
		fetchs:state.fetch
	}
}

function mapDispatchToProps (dispatch) {

	return {
		add_item: bindActionCreators(add_item , dispatch),
		dispatch
	}
}


export default connect(mapStateToProps , mapDispatchToProps)(AsyncApp)

