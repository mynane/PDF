var A = function(selector, context) {
	return new A.fn.init(selector, context);
};

A.fn = A.prototype = {
	constructor: A,
	init: function(selector, context){
		this.length = 0;
		context = context || document;
		if(~selector.indexOf('#')){
			this[0] = document.getElementById(selector.slice(1));
			this.length = 1;
		} else {
			var dom = context.getElementsByTagName(selector),
				i = 0,
				len = doms.length;

			for(; i < len; i++){
				this[i] = dom[i];
			}
			
			this.length = len;
		}

		this.context = context;
		this.selector = selector;

		return this;
	}
};


A.extend = A.fn.extend = function() {
	var i =1,
		len = arguments.length,
		target = arguments[0],
		j;
	if(i == len){
		target = this;
		i--;
	}
	for(; i < len; i++){
		for(j in arguments[i]){
			target[j] = arguments[i][j];
		}
	}
	return target;
}

var demo = A.extend({first: 1}, {second: 2}, {third: 3});

A.extend({
	camelCase: function(str){
		return str.replace(/\-(\w)/g, function(all, letter){
			return letter.toUpperCase();
		});
	}
})

A.extend({
	html: function(){
		var arg = arguments,
			len = arg.length;
		if(len === 0) {
			return this[0] && this[0].innerHTML;
		}
		else {
			for(var i=this.length-1; i>= 0; i--){
				this[i].innerHTML = arg[0];
			}
		}
		return this;
	}
});