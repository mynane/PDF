var InputStrategy = function(){
	var strategy = {
		// 是否为空
		notNull: function(value) {
			return /\s+/.test(value);
		},
		number: function(value) {
			return /^[0-9]+(\.[0-9]+)?$/.test(value) ? '' : '请输入数字';
		},
		phone: function(value) {
			return /^\d{3}\-\d{8}$|^\d{4}\-\d{7}$/.test(value) ? '' : '请输入正确的电话号码'; 
		}
	};
	return {
		check: function(type, value){
			console.log(typeof value);
			value = value.repalce(/^\s+|\s+$/g, '');
			return strategy[type] ? strategy[type](value) : '没有该类型的检测方法';
		},
		addStrategy: function(type, fn) {
			strategy[type] = fn;
		}
	}
}()