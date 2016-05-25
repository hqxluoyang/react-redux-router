/**
	data : 2016-5-25
	author : sailing
	fun ： 移动事件的注册和销毁
**/

export default {
	register (mousemove , mouseup , self){
		var mousemove = function(e){
			self.mousemove.call(self , e)
		}

		var mouseup = function (e){
			document.removeEventListener("mouseup" , mouseup , false);
			document.removeEventListener("mousemove" , mousemove , false);
			self.mouseup.call(self , e);
		}


		document.addEventListener("mouseup" , mouseup , false);
		document.addEventListener("mousemove" , mousemove , false)
	}
}