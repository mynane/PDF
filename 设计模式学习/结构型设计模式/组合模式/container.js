/**
 * 寄生式继承,继承原型
 * 传参subClass 子类
 * 传参superClass 父类
 */
function inheritPrototype(subClass, superClass) {
	var p = inheritObject(superClass.prototype);
	p.constructor = subClass;
	subClass.prototype = p;
}

// 原型式继承
function inheritObject(o) {
	function F(){}
	F.prototype = o;
	return new F();
}

var News = function() {
	this.children = [];
	this.element = null;
};

News.prototype = {
	init: function() {
		throw new Error("请填写你的方法");
	},
	add: function() {
		throw new Error("请填写你的方法");
	},
	getElement: function() {
		throw new Error("请填写你的方法");
	}
};

var Container = function(id, parent) {
	News.call(this);
	this.id = id;
	this.parent = parent;
	this.init();
};

inheritPrototype(Container, News);

Container.prototype.init = function() {
	this.element = document.createElement('ul');
	this.element.id = this.id;
	this.element.className = 'new-container';
};

Container.prototype.add = function(child) {
	this.children.push(child);
	this.element.appendChild(child.getElement());
	return this;
};

Container.prototype.getElement = function() {
	return this.element;
};

Container.prototype.show = function() {
	this.parent.appendChild(this.element);
};



var Item = function(className) {
	News.call(this);
	this.className = className || '';
	this.init();
};

inheritPrototype(Item, News);

Item.prototype.init = function() {
	this.element = document.createElement('li');
	this.element.className = this.className;
};

Item.prototype.add = function(child) {
	this.children.push(child);
	this.element.appendChild(child.getElement());
	return this;
};

Item.prototype.getElement = function() {
	return this.element;
};

var NewsGroup = function(className) {
	News.call(this);
	this.className = className || '';
	this.init();
};

inheritPrototype(NewsGroup, News);

NewsGroup.prototype.init = function() {
	this.element = document.createElement('div');
	this.element.className = this.className;
};

NewsGroup.prototype.add = function(child) {
	this.children.push(child);
	this.element.appendChild(child.getElement());
	return this;
};

NewsGroup.prototype.getElement = function() {
	return this.element;
};

var ImageNews = function(url, href, className) {
	News.call(this);
	this.url = url || '';
	this.href = href || '#';
	this.className = className || 'normal';
	this.init();
};

inheritPrototype(ImageNews, News);

ImageNews.prototype.init = function() {
	this.element = document.createElement('a');
	var img = new Image();
	img.src = this.url;
	this.element.appendChild(img);
	this.element.className = 'image-news ' + this.className;
	this.element.href = this.href;
};

ImageNews.prototype.add = function() {};

ImageNews.prototype.getElement = function() {
	return this.element;
};

var IconNews = function(text, href, type) {
	News.call(this);
	this.text = text || '';
	this.href = href || '#';
	this.type = type || 'video';
	this.init();
};

inheritPrototype(IconNews, News);

IconNews.prototype.init = function() {
	this.element = document.createElement('a');
	this.element.innerHTML = this.text;
	this.element.href = this.href;
	this.element.className = 'icon ' + this.type;
};

IconNews.prototype.add = function() {};

IconNews.prototype.getElement = function() {
	return this.element;
};

var EasyNews = function(text, href) {
	News.call(this);
	this.text = text || '';
	this.href = href || '#';
	this.init();
};

inheritPrototype(EasyNews, News);

EasyNews.prototype.init = function() {
	this.element = document.createElement('a');
	this.element.innerHTML = this.text;
	this.element.href = this.href;
	this.element.className = 'text';
};

EasyNews.prototype.add = function() {};

EasyNews.prototype.getElement = function() {
	return this.element;
};

var TypeNews = function(text, href, type, pos) {
	News.call(this);
	this.text = text || '';
	this.href = href || '#';
	this.type = type || '';
	this.pos = pos || 'left';
	this.init();
}

TypeNews.prototype.init = function() {
	this.element = document.createElement('a');
	if(this.pos === 'left') {
		this.element.innerHTML = '[' + this.type + '] ' + this.text;
	}
	else {
		this.element.innerHTML = this.text + ' [' + this.type + ']';
	}
	this.element.href = this.href;
	this.element.className = 'text';
};

TypeNews.prototype.add = function() {};

TypeNews.prototype.getElement = function() {
	return this.element;
};