function formateString(str, data){
	return str.replace(/\{#(\w+)#\}/g, function(match, key){
		return typeof data[key] === undefined ? '' : data[key]
	});
}

var Nav = function (data){
	this.item = '<a href ="{#href#}" title="{#title#}">{#name#}</a>';
	this.html = '';
	for(var i=0, len = data.length; i < len; i++ ){
		console.log(data[i]);
		this.html += formateString(this.item, data[i]);
	}
	return this.html;
};

var NumNav = function (data){
	var tpl = '<b>{#num#}</b>';
	for(var i = data.length - 1; i >= 0; i--){
		data[i].name += data[i].name + formateString(tpl, data[i]);
	}
	return Nav.call(this, data);
};

var LinkNav = function (data){
	var tpl = '<span>{#link#}</span>';
	for(var i = data.length - 1; i >= 0; i--){
		data[i].name += data[i].name + formateString(tpl, data[i]);
	}
	return Nav.call(this, data);
};