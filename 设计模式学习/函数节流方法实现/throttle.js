var throttle = function (fn, interval ) {
	// 保存需要被延迟执行的函数引用
	var __self = fn,
	// 定时器
	timer,
	// 是否是第一次调用
	firstTime = true;

	return function () {
		var args = arguments,
		__me = this;

		if(firstTime) {
			// 如果第一次调用, 不需要延迟执行
			__self.apply(__me, args);
			return firstTime = false;
		}

		if (timer) {
			// 如果定时器还在,说明前一次延迟执行还没有完成
			return false;
		}

		// 延迟一段时间执行
		timer = setTimeout(function(){
			clearTimeout(timer);
			timer = null;
			__self.apply(__me, args);
		},interval || 500);
	};
};
