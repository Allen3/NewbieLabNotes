// 'use strict';
console.log(_name);

function man(name){
    var _name = name;
    this.age = 10;
    function getName(){
        return _name;
    }

}

let chaosi = new man("chaosi");
var _name = "AAA";
console.log(_name);

// function makeCounter() {
// 	let count = 0;
// 	// return function() {
// 	// 	 return count ++;
// 	// };
// }

// let counter1 = makeCounter();
// let counter2 = makeCounter();
// let counter3 = makeCounter();

// console.log(makeCounter()());	
// console.log(makeCounter()());	
// console.log(makeCounter()());	
// // console.log(counter2());	
// // console.log(counter3());	

// let person = {
//     name: 'AAA',
// };
// person = {};
