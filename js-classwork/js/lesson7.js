// task 1 ===============================================

// function sum(){
// 	var res = 0;
// 	for(var i = 0; i < arguments.length; i++){
// 		res += arguments[i];
// 	}
// 	console.log(res);
// };

// sum(1, 5, 10);

// task 2 ===============================================

// var date = new Date(2016, 6, 10, 3, 12);

// function getWeekDay(date){

// 	var day = date.getDay()

// 	switch(day) {
// 		case 0:
// 			day = 'Воскресенье';
// 			break;
// 		case 1:
// 			day = 'Понедельник';
// 			break;
// 		case 2:
// 			day = 'Вторник';
// 			break;
// 		case 3:
// 			day = 'Среда';
// 			break;
// 		case 4:
// 			day = 'Четверг';
// 			break;
// 		case 5:
// 			day = 'Пятница';
// 			break;
// 		case 6:
// 			day = 'Суббота';
// 			break;
// 	}

// 	return day;

// }

// console.log(getWeekDay(date));

// task 3 ===============================================

// var date = new Date(2016, 6, 10, 3, 12);

// function getDateAgo(date, dayAgo){

// 	var agoDate = new Date();

// 	agoDate.setDate(date.getDate() - dayAgo);

// 	return agoDate;
// };

// console.log(getDateAgo(date, 2));