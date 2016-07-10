'use strict';

function getSums(arr){
	var res = [];
	arr.reduce(function(prev, cur, i, arr){
		var sum = prev + cur;
		res.push(sum);
		return sum;
	}, 0);
	console.log(res);
};