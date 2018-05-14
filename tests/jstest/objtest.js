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