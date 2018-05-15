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

//`this` edge-case
function makeObj_v1() {
    return {
        tag: "Johnny",
        ref: this,
    };
};

function makeObj_v2() {
    return {
        tag: "Johnny",
        ref() {
            return this;
        },
    };
}

let object = makeObj_v1();
console.log(object.ref);

object = makeObj_v2();
console.log(object.ref());

// new.target sample
function Account(name) {
    if (!new.target) {
        console.log("Creating new instance using new syntax...")
        return new Account(name);
    }
    this.name = name;
}

let john = Account("John");
console.log(john.name);
