var ResultState = function() {
	var States = {
		state0 : function(){
			console.log('第一种情况');
		},
		state1 : function(){
			console.log('第二种情况');
		},
		state2 : function(){
			console.log('第三种情况');
		},
		state3 : function(){
			console.log('第四种情况');
		},
		state4 : function(){
			console.log('第五种情况');
		}
	}
	function show(result){
		States['state' + result] && States['state' + result]();
	}
	return {
		show : show
	}
}();