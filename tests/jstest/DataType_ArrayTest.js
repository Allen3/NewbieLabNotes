// Array.Slice() Sample
let arr = ["t", "e", "s", "t"];

console.log(arr.slice(-2, -1));

// Array.find() Sample
let users = [
    {id: 1, name: "Johnny"},
    {id: 2, name: "Bradd"},
    {id: 3, name: "Christian"}
];

let user = users.find((item, index, elems) => {
    console.log("Internal Function")
    console.log(`index = ${index}`);
    console.log(`elem = ${elems[index]}`);    

    return item.id == 3;    
});

// Array.map() Sample(Move on from codes above)
console.log(user);
users.map((item) => {
    item.name = "Allen";
    return item;
});

for (let user of users) {
    console.log(user);
}

// Array.reduce() Sample
let numbers = [1, 2, 3, 4, 5];

let result = numbers.reduce( (sum, currentVal) => {
    return sum + currentVal;
}, 0
);

console.log(`result = ${result}`);

// thisArg Sample
let targetPerson = {
    age: 18,
    younger(otherPerson) {
        console.log(this);
        return otherPerson.age < this.age;
    }
}

let persons = [
    {age: 22},
    {age: 36},
    {age: 14},
];

let youngerPersons = persons.filter(targetPerson.younger, targetPerson);    //Remove the targetPerson and compare the results.

console.log(`There are ${youngerPersons.length} younger persons`);