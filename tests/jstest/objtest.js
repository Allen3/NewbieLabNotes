// __proto__ test
let obj = {};
obj.__proto__ = 4;
console.log( obj.__proto__ );

// shorthand test
function makeUser(name, age) {
    return {
        name,
        age,
        // name: name,
        // age: age,
    };
}

let user = makeUser("Johnny", 20);
console.log(user);

// Symbol test
let id = Symbol("id");
let person = {    
    "First Name" : "Allen",
    "Last Name" : "Yang",
    age : 23,
};
person[id] = 123;

for (let property in person) {
    console.log(property);
}

console.log(person[id]);