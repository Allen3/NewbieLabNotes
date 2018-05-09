// NaN v.s. Infinity
console.log('NaN vs Infinity');
console.log("4px" - 2);
console.log(7 / 0);
//----

// Funny consequence
console.log('Funny consequence');
let a = 0;
console.log(Boolean(a));

let b = 0;
console.log(Boolean(b));

console.log( a == b);
//----

// null v.s. 0
console.log('null vs 0');
console.log( null > 0);
console.log( null == 0);
console.log( null >= 0);
//----

//OR special usage.
// Case 1
let currentUser = null;
let defaultUser = "Johnny";

let name = currentUser || defaultUser || "unamed";
console.log(name);

// Case 2
// name = currentUser;
(name === defaultUser) || (name = "unamed");
console.log(name); 