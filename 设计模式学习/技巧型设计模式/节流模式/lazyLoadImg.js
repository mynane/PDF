function LazyLoad(id) {
	this.container = document.getElementById(id);
	this.imgs = this.getImgs();
	this.init();
}

LazyLoad.prototype = {
	constructor: LazyLoad,
	init: function(){
		this.update();
		this.bindEvent();
	},
	getImgs: function(){
		var arr = [];
		var imgs = this.container.getElementsByTagName('img');
		for(var i = 0, len = img.length; i < len; i++){
			arr.push(imgs[i]);
		}
		return arr;
	},
	update: function(){
		if(!this.imgs.length){
			return;
		}
		var i = this.imgs.length;
		for(--i; i >= 0; i--){
			this.img[i].src = this.imgs[i].getAttribute('data-src');
			this.imgs.splice(i, 1);
		}
	},
	shouldShow: function(i){
		var img = this.imgs[i],
			scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
			scrollBottom = scrollTop + document.documentElement.clientHeight;
			imgTop = this.pageY(img),
			imgBottom = imgTop + img.offsetHeight;
		if(imgBottom > scrollTop && imgBottom < scrollBottom || (imgTop > scrollTop && imgTop < scrollBottom)){
			return true;
		}
		return false;
	},
	pageY: function(element){
		if(element.offsetParent){
			return element.offsetTop + this.pageY(element.offsetParent);
		} else {
			return element.offsetTop;
		}
	},
	on: function(element, type, fn){
		if(element.addEventListener){
			addEventListener(type, fn, false);
		} else {
			element.attachEvent('on' + type, fn, false);
		}
	},
	bindEvent: function(){
		var that = this;
		this.on(window, 'resize', function(){
			throttle(that.update, {context: that});
		});
		this.on(window, 'scroll', function(){
			throttle(that.update, {context: that});
		});
	}
};


/**
 * <img src="img/loading.gif" alt="" data-src="img/1.jpg">
 * 
 * 延迟加载container 容器内的图片
 * 使用： new LazyLoad('container')
 */