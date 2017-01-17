/**
 * 外观模式
 */

function addEvent(dom, type, fn) {
	// 支持addEventListener
	if(dom.addEventListener) {
		dom.addEventListener(type, fn, false);
	}
	// 不支持addEventListener,支持attachEvent
	else if(dom.attachEvent) {
		dom.attachEvent('on' + type, fn);
	}
	// 不支持addEventListener,不支持attachEvent, 支持on + '事件名'
	else {
		dom['on' + type] = fn;
	}
}

// 小型代码库
var A = {
	g : function(id) {
		return document.getElementById(id);
	},
	css : function(id, key, value) {
		this.g(id).style[key] = value;
	},
	attr : function(id, key, value) {
		this.g(id).[key] = value;
	},
	html : function(id, html) {
		this.g(id).innerHTML = html;
	},
	on : function(id, type, fn) {
		this.g(id)['on' + type] = fn;
	}
};