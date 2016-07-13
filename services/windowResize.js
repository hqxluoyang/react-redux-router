/**
	date : 2016-5-27
	author : sailing
	fun : 当window窗口改变 大小的时候调用
**/

import Config from './config'

export default {

	_resize () {
		
		if(this.resizeTimer == null){
			this.resizeTimer = setTimeout(function(){
				Config.eventBus.emit('windowResize');
			} , 1000)
		}
	},

	init(){
		this.resizeTimer = null ;
		document.body.onresize = this._resize	
	}

	
}
