'use strict';

function camelize(str){
	var arr = str.split('-');
	var res = '';
	for (var i = 0; i < arr.length; i++){
		var arr2 = arr[i].split('');
		arr2.splice(0, 1, arr[i].charAt(0).toUpperCase());
		res += arr2.join('');
	}
	console.log(res);
};