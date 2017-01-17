var Promise = require('promise');

// Promise.resolve(43).then(function(value){
// 	console.log(value);
// });

var promise = new Promise(function(resolve, reject){
	reject(new Error('出错了'));
})