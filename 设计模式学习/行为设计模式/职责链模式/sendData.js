var sendData = function(data, dealType, dom) {
	var xhr = new XMLHttpRequest(),
		url = 'getData.php?mod=userInfo';

		xhr.onload = function(event){
			if((xhr.status >= 200 && xhr.status < 300) || 
				xhr.status == 304) {
				dealData(xhr.responseText, dealType, dom);
			} else {

			}
		}
		for(var i in data){
			url += '&'+i+'='+data[i];
		}
		xhr.open('get', url, true);
		xhr.send(null);
}