/**
	date : 2016-05-17
	author : sailing
	fun : 工具包
**/

var tools = {
	getPageWidth : function(){
		window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	},

	getPageHeight : function () {
		return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	}
}


export default tools