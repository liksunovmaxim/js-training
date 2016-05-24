// Task 3 ==================================================

// function chessFx(rows, cols){
// 	var chess = '';

// 	for(var i = 0; i < rows; i++){
// 		for(var j = 0; j < cols; j++){
// 			if(i%2==0){
// 				if(j%2==0){
// 					chess += '#';
// 				} else {
// 					chess += ' ';
// 				}
// 			} else {
// 				if(j%2==1){
// 					chess += '#';
// 				} else {
// 					chess += ' ';
// 				}
// 			}
// 		}
// 		chess += '\n';
// 	}
// 	console.log(chess);
// }

// chessFx(10, 10);

// Task 4 ===================================================

// function stringFx(string, symbol){
// 	var number = 0;
// 	var length = string.length;

// 	for(var i = 0; i < length; i++){
// 		if(string.charAt(i) == symbol){
// 			number += 1;
// 		}
// 	}
// 	console.log(number);
// };

// stringFx('bakklas', 'k');

// Task 5 ==========дошел только до 0 и 1=========================================

function isEven(n){
	if(n >= 2){
		var c = isEven(n - 2);
		return c;
	} else {
		return n;
	}
};

console.log(isEven(54));