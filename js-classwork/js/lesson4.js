//------- FIZZBUZZ -------------------------

// for(var i = 1; i <= 100; i++){
// 	if(i % 3 == 0 && i % 5 == 0){
// 		console.log('fizzbuzz');
// 	} else {
// 		if(i % 3 == 0){
// 			console.log('fizz');
// 		}
// 		if(i % 5 == 0){
// 			console.log('buzz');
// 		}
// 		console.log(i);
// 	}
// }

// Salaries --------------------

var Salaries = {
	'Andrew': 10,
	'Nick': 0,
	'Alexa': 0
};

var max = 0;
var objVal = 0;

for (var key in Salaries) {
	if(max < Salaries[key]){
		max = Salaries[key];
		objVal += 1;
	}
};


if(objVal >= 0){
	console.log(max);
} else {
	console.log('max');
}
