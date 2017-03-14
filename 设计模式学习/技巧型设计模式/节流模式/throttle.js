var value = function() {
	var isClear = arguments[0], fn;
	if(type isClear === 'boolean') {
		fn = arguments[1];
		fn.__throttleID && clearTimeout(fn.__throttleID);
	} else {
		fn = isClear;
		param = arguments[1];
		var p = extend({
			context: null,
			args: [],
			time: 300
		}, param);
		arguments.callee(true, fn);
		fn.__throttleID = setTimeout(fucntion(){
			fn.apply(p.context, p.args);
		}, p.time);
	};
}