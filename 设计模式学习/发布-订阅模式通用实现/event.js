var event = {
	clientList: [],
	listen: function(key, fn) {
		if(!this.clientList[key]) {
			this.clientList[key] = [];
		}
		this.clientList[key].push(fn);
	},
	trigger: function(){
		var key = Array.prototype.shift.call(arguments),
			fns = this.clientList[key];

		if(!fns || fns.length === 0){
			return false;
		}

		for(var i = 0, fn; fn = fns[i++];){
			fn.apply(this, arguments);
		}
	},
	remove: function(key, fn){
		var fns = this.clientList[key];
		if(!fns){
			return false;
		}
		if(!fn){
			fns && (fns.length = 0);
		}
		else {
			for(var l = fns.length-1; l >= 0; l--){
				var _fn = fns[l];
				if(_fn === fn){
					fns.splice(l, 1);
				}
			}
		}
	}
};

var installEvent = function(obj){
	for(var i in event) {
		obj[i] = event[i];
	}
	console.log(obj);
}