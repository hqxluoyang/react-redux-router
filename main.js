/******
	date : 2016-05-17
	author : sailing
	fun : 程序入口
******/
import ReactDOM from 'react-dom'
import React , {Component , PropTypes} from 'react'


import Config from './services/config'
import eventBus from './services/eventBus'
import Approuter from './app'
import WindowResize  from './services/windowResize'

Config.eventBus = new eventBus();    // 生成Bus对象
WindowResize.init();

ReactDOM.render(
  <Approuter />,
  document.getElementById('mount')
)
