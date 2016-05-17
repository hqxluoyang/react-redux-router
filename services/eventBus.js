/**
	date : 2016-05-16
	author : sailing
	fun : 事件总线
**/

var EventBus = function () {
	this.listeners = [];
}

EventBus.prototype.on = function(event , fn){
	if(!this.listeners[event]){
		this.listeners[event] = [];
	}
	console.log("fn:" , fn)
	if(fn){
		this.listeners[event].push(fn)
	}else{
		console.log('WARNING:fn error')
	}
}

EventBus.prototype.emit = function(event){
	var callbacks = this.listeners[event];

	if(callbacks){
		
		for(var i=0 ; i<callbacks.length ; i++){
			var args = Array.prototype.slice.call(arguments , 1);

			callbacks[i].apply(null , args);
		}

	}
}


export default EventBus ;