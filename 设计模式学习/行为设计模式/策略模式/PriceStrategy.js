var PriceStrategy = function(){
	var stragtegy = {
		return30: function(price){
			return price;
		},
		return50: function(price){
			return price;
		},
		return90: function(price){
			return price;
		}
	}
	return function(algorithm, price){
		return stragtegy[algorithm] && stragtegy[algorithm](price);
	}
}();