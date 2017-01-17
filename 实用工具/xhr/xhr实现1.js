function XHR() {
	var xhr;
	try{
		xhr = new XMLHttpRequest();
	}
	catch(e) {
		var IEXHRVers = ["Msxml3.XMLHTTP","Msxml2.XMLHTTP","Microsoft.XMLHTTP"];
		for (var i=0, len=IEXHRVers.length; i<len; i++) {
			try{
				xhr = new ActiveXObject(IEXHRVers[i]);
			}
			catch(e) {
				continue;
			}
		}
	}
	return xhr;
}



// 使用xhr

var xhr = XHR();

/**
 * 在readystatechange事件上绑定一个函数
 */
xhr.onreadystatechange = callback;

/**
 * 第一个参数请求方法, get|post
 * 第二个参数请求url
 * 第三个参数是否异步,true为异步
 */
xhr.open("get", "test.txt", true);

 //比GET请求多了一步
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

/**
 * 调用send方法才会发送请求
 * get方法send方法参数为null
 */
xhr.send(null);


function callback(){
	//在这里面没有使用this.readyState这是因为IE下面ActiveXObject的特殊性
	/**
	 * 0(未初始化),对象已创建,但尚未初始化(尚未调用open方法)
	 * 1(初始化), 对象已创建,尚未调用send方法
	 * 2(发送数据), send方法调用,但是当前状态及http头未知
	 * 3(数据发送中), 已经接受到部分数据,因为响应及http头不全,这时通过responseBody和responseText获取部分数据会出现错误
	 * 4(完成), 数据接收完毕,此时可以通过通过responseBody和responseText获取完整的回应数据
	 */
	if(xhr.readyState == 4) {
		alert(xhr.reponseText);
	}
}