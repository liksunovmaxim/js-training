// Task 1 ============================================

// function eratoSieve(n){
// 	var arr = [],
// 		p   = 2;

// 	for (var i = 0; i <= n; i++) {
// 		arr.push(true);
// 	}
	
// 	while(p*p < n){
// 		for(i = p*2; i < n; i += p){
// 			arr[i] = false;
// 		}

// 		for(i = p + 1; i < n; i++){
// 			if(arr[i]){
// 				p = i;
// 				break;
// 			}
// 		}
// 	}

// 	var simpleNumbers = [];

// 	for(i = 2; i < n; i++){
// 		if(arr[i]){
// 			simpleNumbers.push(i);
// 		}
// 	}

// 	console.log(simpleNumbers);
// };

// eratoSieve(100);

// Task 2 ============================================

// var obj = {
// 	className: 'open menu active'
// };

// function addClass(object, newClass){
// 	var a = true;
// 	var classArr = object.className.split(' ');
// 	for (var i = 0; i < classArr.length; i++){
// 		if(newClass == classArr[i]){
// 			console.log('idi nahuy');
// 			a = false;
// 		}
// 	}
// 	if(a == true){
// 		classArr.push(newClass);
// 		object.className = classArr.join(' ');
// 		console.log(object.className);
// 	} 

// };

// addClass(obj, 'open');

// Task 3 ============================================

var vasya   = { name: 'Вася', age: 23 };
var masha   = { name: 'Маша', age: 18 };
var volodya = { name: 'Владимир', age: 6 };

var people  = [ vasya, masha, volodya ];

people.sort(function(a, b){
	if (a.age > b.age) return 1;
	if (a.age < b.age) return -1;
});

console.log(people);