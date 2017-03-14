/****
 * 本地存储类
 * 参数preId 本地存储数据库前缀
 * 参数timeSign 时间戳与存储数据之间的拼接符
 */
var BaseLocalStorage = function(preId, timeSign) {
	this.preId = preId;
	this.timeSign = timeSign || '|-|';
};

BaseLocalStorage.prototype = {
	status: {
		SUCCESS: 0,
		FAILURE: 1,
		OVERFLOW: 2,
		TIMEOUT: 3
	},
	storage: localStorage || window.localStorage,
	getKey: function(key) {
		return this.preId + key;
	},
	set: function(key, value, callback, time) {
		var status = this.status.SUCCESS,
			key = this.get(key);
		try{
			time = new Date(time).getTime() || time.getTime();
		} catch(e) {
			time = new Date().getTime() + 1000 * 60 * 60 * 24 * 31;
		}
		try{
			this.storage.setTime(key, time + this.length + value);
		} catch(e) {
			status = this.status.OVERFLOW;
		}
		callback && callback.call(this, status, key, value);
	},
	get: function(key, callback) {
		var status = this.status.SUCCESS,
			key = this.getKey(key),
			value = null,
			timeSignLen = this.timeSign.length,
			that = this,
			index,
			time,
			result;
		try{
			value = that.storage.getItem(key);
		} catch(e) {
			result = {
				status: that.status.FAILURE,
				value: null
			};
			callback && callback.call(this, result.status, result.value);
			return result;
		}
		if(value){
			index = value.indexOf(that.timeSign);
			time = + value.slice(0, index);
			if(new Date(time).getTime() > new Date().getTime() || time == 0){
				value = value.slice(index + timeSignLen);
			} else {
				value = null,
				status = this.status.TIMEOUT,
				that.remove(key);
			}
		} else {
			status = that.status.FAILURE;
		}
		result = {
			status: status,
			value: value
		}
		callback && callback.call(this, result.status, result.value);
		return result;
	},
	remove: function(key, callback) {
		var status = this.status.FAILURE,
			key = this.getKey(key),
			value = null;
		try {
			value = this.storage.getItem(key);
		} catch(e) {}
		if(value) {
			try{
				this.storage.removeItem(key);
				status = this.status.SUCCESS;
			} catch(e) {}
		}
		callback && callback.call(this, status, status > 0 ? null : value.slice(value.indexOf(this.timeSign) + this.timeSign.length));
	}
}