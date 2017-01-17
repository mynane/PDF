var Observer = (function(){
	var __messages = {};
	return {
		regist : function(type, fn){
			if(typeof __messages[type] === 'undefined') {
				__messages[type] = [fn];
			}
			else {
				__messages[type].push(fn);
			}
		},
		fire : function(type, args){
			if(!__messages[type]){
				return;
			}
			var events = {
				type: type,
				args: args || {}
			},
			i = 0,
			len = __messages[type].length;
			for(; i < len; i++){
				__messages[type][i].call(this, events);
			}
		},
		remove : function(type, fn){
			if(__messages[type] instanceof Array){
				var i = __messages[type].length - 1;
				for(; i >= 0; i--){
					__messages[type][i] === fn && 
					__messages[type].splice(i, 1);
				}
			}
		}
	};
})();