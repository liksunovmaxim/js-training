// task 1

// function makeBuffer(){

//     var currValue = '';

//     function localBuffer(value){
//         if (value != undefined){
//             return currValue += value;
//         } else {
//             return currValue;
//         }
//     }

//     localBuffer.clear = function(){
//         return currValue = '';
//     };

//     return localBuffer;

// };

// var buffer = makeBuffer();

// buffer('asfasf');
// buffer(' asfasf');

// // buffer.clear();

// console.log(buffer());

// task 2

// var calculator = {
//     read: function(){
//         this.a = parseInt(prompt('введите первое число'));
//         this.b = parseInt(prompt('введите второе число'));  
//     },
//     sum: function(){
//         return this.a + this.b;
//     },
//     mul: function(){
//         return this.a * this.b;
//     }
    
// }

// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );

// task 3

// var ladder = {
//     step: 0,
//     up: function(){
//         this.step += 1;
//         return this;
//     },
//     down: function(){
//         this.step -= 1;
//         return this;
//     },
//      showStep: function() {
//         alert( this.step );
//     }
// };

// ladder.up().up().down().up().down().showStep();

// task 4

// function Calculator(){
//     this.read = function(){
//         this.a = parseInt(prompt('введите первое число'));
//         this.b = parseInt(prompt('введите второе число'));  
//     },
//     this.sum = function(){
//         return this.a + this.b;
//     },
//     this.mul = function(){
//         return this.a * this.b;
//     }
// };

// var calculator = new Calculator();

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// task 5

// function Accumulator(value){
//     this.value = value;

//     this.read = function(){
//         var a = parseInt(prompt('введите первое число'));
//         this.value += a;
//     }
// };

// var accumulator = new Accumulator(4);

// accumulator.read()

// accumulator.read()

// alert(accumulator.value);