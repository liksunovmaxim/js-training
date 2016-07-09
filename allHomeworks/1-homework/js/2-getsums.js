'use strict';

function getSums(arr){
	var res = arr.reduce(function(sum, cur, i, arr){
		cur += 1; 
		return cur;
	}, 0);
	console.log(res);
};