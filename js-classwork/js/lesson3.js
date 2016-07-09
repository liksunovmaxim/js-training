// Task 1=============================================

// function getNatNumbers(n) {
// 	var i = 0;
// 	if(i < n){
// 		i += n;
// 		getNatNumbers(n - 1);
// 		console.log(i);
// 	}
// }

// getNatNumbers(20);

// Task 2=============================================

// function isPow2(n){
// 	if(n == 2){
// 		return true;
// 	} 
// 	if(n < 2){
// 		return false;
// 	}
// 	return isPow2(n/2);
// };

// console.log(isPow2(9));

// Task 3=============================================

// function getRandom(n){
// 	console.log(parseInt(Math.random()*n));
// }

// getRandom(3);

// Task 4=============================================

// function getRandom(min, max){
// 	console.log(min + parseInt(Math.random()*(max-min)));
// }

// getRandom(3, 10);

// Task 5=============================================


function truncate(string, maxlength){
	if(string.length > maxlength){
		console.log(string.substring(0, maxlength) + '...');
	}
}

truncate('axsfgjkfghk', 5);