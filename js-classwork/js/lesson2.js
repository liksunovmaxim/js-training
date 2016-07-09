'use strict';

// TASK 1 =====================================

// var star = '';

// function draw(h){
// 	for (var i = 0; i < h; i++) {
// 		star = star + '*';
// 		console.log(star);
// 	}
// }

// draw(10);

// TASK 2.1 ======================================

// function drawRectV1(w, h){
// 	var fullString = '';
// 	for (var i = 0; i < w; i++) {
// 		fullString += '*';
// 	}
// 	var spaceString = '';
// 	for (var i = 0; i < w; i++) {
// 		if(i == 0 || i == (w-1)){
// 			spaceString += '*';
// 		} else {
// 			spaceString += ' ';
// 		}
// 	}

// 	var rect = '';

// 	for (var i = 0; i < h; i++) {
// 		if(i == 0 || i == (h-1)){
// 			rect += fullString + '\n';
// 		} else {
// 			rect += spaceString + '\n';
// 		}
// 	}

// 	console.log(rect);
// }

// drawRectV1(5,10);

// TASK 2.2 ======================================

function drawRectV2(w, h){
	var rect = '', row;
	for (var i = 0; i < h; i++) {
		row= '';
		for (var j = 0; j < w; j++) {
			if(i == 0 || i == (h-1)){
				row += '*';
			} else {
				if(j == 0 || j == (w-1)){
					row += '*';
				} else {
					row += ' ';
				}
			}
		}
		rect += row + '\n';
	}
	console.log(rect);
}

drawRectV2(20,5);