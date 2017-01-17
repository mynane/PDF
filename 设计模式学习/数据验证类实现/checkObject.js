var CheckObject = function() {};

CheckObject.prototype = {
	constructor: CheckObject,
	checkName: function(){

		return this;
	},
	checkEmail: function(){

		return this;
	},
	checkPassword: function(){

		return this;
	}
}


/**
 * 使用方法
 * var a = new CheckObject();
 * a.checkName().checkEmail();
 */