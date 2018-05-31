# Javascript

## Modern mode
According to ES5 standard, modern mode use a directive to explicitly declare the modern mode.
The directive looks like a string: "use strict" or 'use strict'. When it is located on the **top** of the script, then the whole script works the “modern” way.
```javascript
"use strict";

// Modern way code here
```

Difference between the "old-school" fashion and modern way, for example, contains `var` -> `let` and `const`.


## Type Conversions

* To string: `String( variable )`
* To number: `Number( variable )` or leave the conversion automatically
* To boolean: `Boolean( variable )`

Numeric conversion rules:

Value 		| 	Becomes		
----  		| 	----	  	
`undefined`	| 	`NaN`		
`null`		| 	`0`		
`true`&`false`	|	`1` & `0`
string		| Whitespaces from both sides are ignored. Then, if the remaining string is empty, the result is `0`. Otherwise, the number is "read" from the string. An error gives `NaN`

Boolean conversion rules:

Value 		| 	Becomes		
----  		| 	----	  	
`0`,`null`,`undefined`,`NaN`,`""`	| `false`
any other value				| `true`

> The string with "0" is `true`

> Refer to the [NaN v.s. Inifinity](../tests/jstest/valueTest.js)

Common fallible rules:
* `undefined` is `NaN` as a number, not `0`;
* `"0"` and space-only strings like `" "` are `true` as a boolean.
```javascript
console.log("4px" - 2);	// NaN
console.log(7 / 0);	// Infinity
```
Please note the diff between `NaN` and `Infinity`.


## Operators & Comparasions

* Exponentiation `**`: The result of `a ** b` is `a` multiplied by itself `b` times.
* ZERO-FILL RIGHT SHIFT `>>>`: Bitwise operator.
* Plain equality: `==` equality check converts using the **numeric conversion**, while `Boolean` conversion uses another set of rules.
> Refer to the [funny consequence](../tests/jstest/valueTest.js)
* Strict equality: `===` checks the euqality without type conversion.

* `null` v.s. `undefined` - a "sweet couple"
For math, Values `null`/`undefined` are converted to numbers: `null` -> `0`, while `undefined` -> `NaN`.

> `==` for `null`/`undefined` works without any conversions. They equal each other and don't equal anything else.

## Logical Operators

### OR(`||`)
Not only dealing with booleans. A chain of OR `||` returns the first truthy value or the last one if no such value is found.
And two typical interesting examples are as below:

1. Getting the first value from the list of variables or expressions.
2. Short-circuit evaluation. (A shortter way to do `if`)

See the [OR special usage](../tests/jstest/valueTest.js);

### AND(`&&`)
### NOT(`!`)
Sometimes we use `!!expression` to replace the `Boolean(expression)`.

## Loops: while and for
* Labels for break/continue

Sometimes we need to break out from multiple nested loops at once.
A *label* is an identifier with a colon before a loop:
```javascript
labelName: for (...) {

}
```
> The call to a break/continue is only possible from inside the loop, and the label must be somewhere upwards from the directive. It does not equal to GOTO.

## Functions

A function with an empty `return` or without it returns `undefined`.

* *Function Declaration*:

```javascript
function greet() {
    console.log("Hooli yeah!");
}
```

* *Function Expression*:

```javascript
let greet = function() {
    console.log("Hooli Yeah!");
}
```
> In javascript engine, a *Function Expression* is created when the execution reaches it and is usable from then on. However, a *Function Declaration* is usable in the whole script/**code block**.(Js engine first looks for *Function Declaration* before executes exact code. And the **code block** means the scope of the funciton resides in)

In javascript, a function is a value, so we can deal with it as a value.

> When using `console.log()` to print a function expression's variable, what I found is that in Chrome it shows the source code of the function while in node.js' V8 engine, it shows the function name inside a pair of brackets.

### Anonymous Functions
The parameters inside the function declaration directive, if represent functions or not, should not be followed by `()`. It's like the pointer concept from C language.

See [Callback functions demo](../tests/jstest/functionTest.js)

Besides, another type of *Anonymous Function* is *Arrow Function(Lambda Expression)* and the form is 
```javascript
let func = (arg1, arg2, ...argN) => expression
```
and the `()` could be ignored if only one argument exists.

Arrow functions: 
* Do not have `this`.
* Do not have `arguments`.
* Can’t be called with `new`.

## Code Equality

### Coding style
Some example cheatsheets:
* [Google Javascript Style Guide](https://google.github.io/styleguide/jsguide.html)
* [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript)

Automated linters:

* [ESLint](https://eslint.org)

Comments style:

Try to avoid explanatory comments and these comments are good:

* **Describe the architecture**

Provide a high-level overview of compoenents, how they interact, what's the control flow in various situations... There's a special diagram language [UML](https://en.wikipedia.org/wiki/Unified_Modeling_Language) for high-level architecture diagrams.

* **Document a function usage**

There's a special syntax [JSDoc](https://en.wikipedia.org/wiki/JSDoc) to document a function: usage, parameters, returned value.

* **Why is the task solved this way?**

When the solution you give is not so intuitive and seems like "suboptimal" solution, you should write comments to explain.

Try to become a *Code Master*? Then follow this article and step on the [*Ninja Paths*](https://javascript.info/ninja-code).

## Automated Testing

Javascript libraries for tests(in-browser & server-side testing):

* [Mocha](https://mochajs.org) - the core framwork.
* [Chai](www.chaijs.com) - the library with many assertions.
* [Sinon](sinonjs.org) - a library to spy over functions, emulate buil-in functions and more.

Let's use a tecnhique named [Behavior Driven Development(BDD)](https://en.wikipedia.org/wiki/Behavior-driven_development): test & documentation & examples.

The development flow:

1. An initial *spec* is written, with tests for the most basic functionality.
2. An initial implementation is created.
3. To check whether it works, we run the testing framework **Mocha** that runs the *spec*. Errors are displayed. We make corrections until everything works.
4. Now we have a working initial implementation with tests.
5. We add more use casees to the *spec*, probably not yet supported by the implementations. Tests start to fail.
6. Go to 3, update the implementation till tests give no errors.
7. Repeat steps 3-6 till the functionality is ready.

See the [Automated Test Demo](../tests/jstest/mochaTest.html)

## Polyfills
As js evolves steadily, certain modern features are not fully supported by some engines. As a result, **Babel** comes to the rescue.

[Babel](https://babeljs.io) is a [transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler). It rewrites modern JavaScript code into the previous standard and has two features:

* The transpiler program, which rewrites the code.
* The **polyfill**, which helps to write a special script implements *new functions*

Two interesting polyfills are:

* [babel polyfill](https://babeljs.io/docs/usage/polyfill) that supports a lot, but is big.
* [polyfill.io](https://polyfill.io/v2/docs) service that allows to load/construct polyfills on-demand, depending on the features we need.

## Objects

Two ways to declare *empty object*:
```javascript
let user = new Object();
let user = {};
```

Two ways to retrieve objects' properties:
```javascript
user.name
user["last name"]   //user[key] mode
```
The second way(with square bracket) is much more flexible as the `key` variable could be calculated at run-time.

With square brackets, we can declare *Computed properties*
```javascript
let fruit = "apple";    //Or strings up to user's input

let bag = {
    [fruit] : 5
}

console.log( bag.fruit );
```
This is much more powerful but also cumbersome.

> A special name(`__proto__`) gets special treatment for historical reasons and couldn't be set to a non-object value.

For shorthand property value, see [Property value shorthand Sample](../tests/jstest/objtest.js)

### Existence check
A notable objects feature is that it's possible to access any propert. There will be no error if the property doesn't exist! With only `undefined` returned if so. And two ways to check.
```javascript
let user = {};

console.log( user.noSuchProperty === undefined );
console.log( "noSuchProperty" in user );  // Property name shall be quoted.
```

> The `in` syntax would fail if the property is explicitly assigned as `undefined`.

When trying to compare two objects(actually works on the references), the `==` and `===` behave exactly the same way.

### Cloning and merging, `Object.assign`

If we want to clone the object instead of just creating another reference pointing to it.
```javascript
Object.assign(dest[, src1, src2, src3...]) // The return value is also the dest.
```
This directive copies all the properties from `src` into `dest`. If the receiving object already has the same named property, it will be overwritten.

For *Deep Cloning*, a simply `Object.assign()` would not resolve the problem because the inner object won't be cloned, a reference **sharing the same object** being created instead. Thus, `Structured cloning algorithm` is required, and a library [lodash](https://lodash.com) supports such a feature.

## Symbol Type
"Symbol" value represents a unique identifier. Even created with same description, symbols do not equal each other.
```javascript
let id = Symbol("symbolName");  //symbolName is used to describe the symbol
```
> Symbols don't auto-convert to a string

Thus, symbols allow us to create "hidden" properties of an object, using `[]` to retrieve rather than `.` syntax.
```js
let id = Symbol("id");
user[id] = 111;     //Using user.id would return null however.
```
And symbolic properties do not participate in `for..in` loop, but work in `Object.assign()` method.
> Refer the [Symbol test](../tests/jstest/objtest.js)

### Global Symbols
Using `Symbol.for(key)`, we can retrieve the same-named symbols from *global symbol registry* which holds all the symbols globally. This call returns an existed or a new symbol by the given `key`.(This is for application-wide symbol)

Similarly, there exists a reverse call: `Symbol.keyFor(symbol)`.

Also, many system symbols are used by JavaScript internally, and we can check them out in the [Well-known symbols](https://tc39.github.io/ecma262/#sec-well-known-symbols) table.

## "this" from OOP
In JavaScript, `this` is calculated dynamically which means the it is up to the context instead of the place where it was initially declared. See the ['this' edge-case demo](../tests/jstest/objtest.js).

## Object to primitive conversion
A built-in symbol named `Symbol.toPrimitive` is used to name the conversion method
```js
obj[Symbol.toPrimitive] = function(hint) {
    //return a primitive value
    // hint = one of "string", "number", "default"
}
```
And 3 types of hints are available:

* `string` : for `alert` and other string conversions
* `number` : for maths
* `default` : few operators

> For concrete codes, refer to the [object to primitive conversion sample](../tests/jstest/objtest.js)

Thus, sometimes we use an unary `+` before a number primitive to coerce it into number type, like
```js
let num = +prompt("Enter a number", "");
```

After `Symbol.toPrimitive`, JavaScript engines tries to find the following methods in order:
* `toString` -> `valueOf` for "string" hint.
* `valueOf` -> `toString` otherwise.

*Only the `toString` method* shall be implemented by ourselves if we want to handle all primitive conversions.

## Constructor, operator "new"
Constructors are intended to implement reusable object creation code. And two *conventions*(not rules) of constructor functions:
* They are named with capital letter first
* They should be executed only with `new` operator

```js
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let personObj = new Person("Allen", "Yang");
```
Which, in other words, does something like:
```js
function Person(firstName, lastName) {
    // this = {};   (implicitly)

    // add properties to this
    this.firstName = firstName;
    this.lastName = lastName;

    // reurn this;  (implicitly)
}
```

If we have many lines of code all about creation of a single complex object, we can wrap them in constructor function, which can't be called again and aims to encapsulate the code constructing the single object.
```js
let target = new function() {
    this.propertyOne = ...;
    this.propertyTwo = ...;

    // Other complex logic and statements...
}
```

A special property `new.target` could be used to check whether the function is called through `new` syntax, refer to the [new.target sample](../tests/jstest/objtest.js)

Literally, `new` makes it obvious that new object is being created.


## Methods of primitives
Primitives also have methods, but unlike Java using *Object Wrappers*, JavaScript directly using `.method()` after primitives.

### Numbers
All numbers in JavaScript is represented in 64-bit IEEE-754 format.

Some common use methods are:

* `toString(base)` for string representations of numbers

Common use `base` are: `base=16` for hex, `base=2` for binary and `base=36`(maximum ,"0-9", "a-z") for make things shorter.

> If we directly call `toString(base)` after a number, we shall using *Two Dots syntax*, like `123456..toString(16)`.

* `isFinite()` to validate whether a string value is a regular number.

* `parseInt()`/`parseFloat()` to parse numbers with "soft" conversions, like `12px`, `31.4€`, etc.
* `Math.random()` returns a random number ranging from [0,1).

### Strings
Internal format for strings is always UTF-16, it is not tied to the page encoding.

* `length` property(Not a method)

Strings are immutable in JavaScript. To workaround it, creating a new string and concatenate part of the old one.

> The bitwise NOT(`~`) trick: when using `indexOf()` method to locate some required substring in `if` clause, the `0` means the first character and we can use `~n` which means `-(n+1)` to make the `if` clause works. :)
```js
if (~str.indexOf(...))
```
Though not so obvious, but rember this statements literally means "if found".

* `slice(start, end)` to select substring from `start` to `end`(not including `end`) of the string.

#### Diacritical marks and normalization
In many languages there are symbols that are composed of the base cahracter with a mark above/under it. For instance, the letter`a` can be the base character for: `àáâäãåā`.
```js
console.log("S\u0307\u0323");   // Ṩ, S + dot above + dot below
console.log("S\u0323\u0307");   // Ṩ, S + dot below + dot above
```
However, those two strings do not equal to each other as the mark order are different. To solve this, `str.normalize()` is here to help bring each string to the single "normal" form.

> See the [Special Character Sample](../tests/jstest/DataType_StringTest.js)

## Array
Internally, array is perceived as an object.

Both the declaration statements are acceptable.
```js
let arr = new Array();
let arr = [];
```

Loops in arrays syntax: `for..of`
```js
for (let fruit of fruits) {
    //...
}
```
> Syntax `for..in` is also acceptable for array loop but is **NOT RECOMMENDED** for the following reasons: 1. `for..in` iterates over *all properties*, not only the numeric ones; 2. `for..in` loop is optimized for generic objects, and much slower compared to its counterpart.

The `length` property of an array is to record the greatest index of existing elements and explicitly setting `length` may cause the truncation of the array. As a result, the simplest way to clear the array is: `arr.length = 0`.

Arrays do not have `Symbol.toPrimitive`, neither a viable `valueOf`, then implement only `toString` conversion.

Some of the common used methods:
* `push(...items)`: Add elements to the tail
* `pop()`: Extract an item from the end
* `shift()`: Extract an item from the head
* `unshift(...items)`: Add elements from the head
* `splice(index[, deleteCount, elem1, ..., elemN])`: Remove `deleteCount` elements and then inserts `elem1, ..., elemN` at their place. In addition, Return the array of removed elements.
* `slice(start, end)`: obtain subarray from `start` to `end`. Negative index assumes the start from tail. See [Array.slice() Sample](../tests/jstest/DataType_ArrayTest.js)
* `concat(para1, ...)`: Copies new elements into array. For object, `Symbol.isConcatSpreadable` property is used to check whether append its elements inside or the object only.
* `find((item, index, array) => {...}, thisArg)`: Provide a "predicate" function which returns `true` if meets the expected conditions. Only the first result will be returned. All the parameters of the function provided are optional. See [Array.find() Sample](../tests/jstest/DataType_ArrayTest.js)
* `filter((item, index, array) => {...}, thisArg)`: Similar to `find()` but return a list of results.
* `map((item, index, array) => {...}, thisArg)`: Return the new value instead of item. See [Array.map() Sample](../tests/jstest/DataType_ArrayTest.js)
* `sort((elemA, elemB) => {...})`: With giving "compare" function to sort the elements.
* `str.split(delim)`: Split the string into an array by the given delimiter `delim`.
* `reduce( (previousValue, item, index, arr) => {}, initial )`: A general [reduce](https://en.wikipedia.org/wiki/Fold_\(higher-order_function\)) function from functional programming. See the [Array.reduce() Sample](../tests/jstest/DataType_ArrayTest.js)

To help check the type of array, `Array.isArray(value)` is often used instead of `typeof` which may give unexpected result.

> All the `thisArg` above is optional, which is useful when the function is an object' method and passing the object as `thisArg` would be helpful. See [thisArg Sample](../tests/jstest/DataType_ArrayTest.js)

### Destructing assignment

Objects allow us to pack many pieces of information into a single entity and arrays allow us to store ordered collections. For example,
```js
let [firstName, surname] = "Ilya Kantor".split(' ');
```

## Iterables

Iterable objects are ones suitable for `for..of` and a method called `obj[Symbol.iterator]()` shall be implemented. The rules are as follows:

* When `for..of` starts, it calls that method (or errors if not found).
* The method must return an iterator - an object with the method `next`.
* When `for..of` wants the next value, it calls `next()` on that object.
* The result of `next()` must have the form `{done: Boolean, value: any}`, where `done=true` means that the iteration is finished, otherwise `value` must be the new value.

Check the [Iterable Sample](../tests/jstest/DataType_IterableTest.js) for an example of implementation.

> Note that the implementation has a **drawback** that multiple `for..of` loops running over the object simultaneously would cause unexpected faults, as there is only one iterator - the object itself.

 Iterables v.s. Array-likes

* *Iterables* are objects that implement the `Symbol.iterator` method.
* *Array-likes* are objects that have indexes and `length`, so they look like arrays.

Thus, an universal method `Array.from()` helps constructing an array from Iterables or Array-likes.
```js
Array.from(obj[, mapFn, thisArg]);
```
Where the mapFn is the function applied to each element.

## JSON
The [JSON](http://en.wikipedia.org/wiki/JSON) (JavaScript Object Notation) is a general format to represent values and objects. It is described as in [RFC 4627](http://tools.ietf.org/html/rfc4627) standard.

* `JSON.stringify()` to convert objects into JSON.
* `JSON.parse()` to convert JSON back into an object.

JSON is data-only cross-language specification, so some JavaScript-specific object properties are skipped by `JSON.stringify()`,namely:

* Function properties (methods).
* Symbolic properties.
* Properties that store undefined.

If an object has `toJSON()`, then it is called by `JSON.stringify()`.

## Rest parameters and spread operators
Sample for *rest parameters*:
```js
function sumAll(...args) { // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}
```
Rest parameters can only position at the last.

For the legacy's sake, we can also use `arguments[]` to access all the parameters but not in arrow functions.

Sample for *spread operators*
```js
let arr = [3, 5, 1];

alert( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)
```
The spread operator internally uses iterators to gather elements, the same way as `for..of` does.

> There’s a subtle difference between `Array.from(obj)` and `[...obj]`:
>
> * `Array.from` operates on both array-likes and iterables.
> * The *spread operator* operates only on iterables.

## Closure

### Lexical Environment

* A variable is a property of a special internal object, associated with the currently executing block/function/script.
* Working with variables is actually working with the properties of that object.

When code wants to access a variable – it is first searched for in the inner Lexical Environment, then in the outer one, then the more outer one and so on until the end of the chain.

![Lexical Environment](/assets/lexical_environment.png)

Thus, **A function gets outer variables as they are now; it uses the most recent values**.

### Nested Functions

A nested function can be returned: either as a property of a new object (if the outer function creates an object with methods) or as a result by itself. It can then be used somewhere else. No matter where, it still has access to the same outer variables.

An example with the constructor function
```js
// constructor function returns a new object
function User(name) {

  // the object method is created as a nested function
  this.sayHi = function() {
    alert(name);
  };
}

let user = new User("John");
user.sayHi(); // the method code has access to the outer "name"
```

An example with returning a function:
```js
function makeCounter() {
  let count = 0;

  return function() {
    return count++; // has access to the outer counter
  };
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2
```

### Environments in detail

1. When the script has just started, there is only global Lexical Environment:

    All functions “on birth” receive a hidden property [[Environment]] with a reference to the *Lexical Environment* of their creation.

    In other words, a function is “imprinted” with a reference to the *Lexical Environment* where it was born. And [[Environment]] is the hidden function property that has that reference.

2. The code runs on, and the call to `makeCounter()` is performed. Here’s a snapshot of the moment when the execution is on the first line inside `makeCounter()`:
![closure phase 2](/assets/closure_phase_2.png)

    As a *Lexical Environments*, it stores two things:

    * An *Environment Record* with local variables. In our case count is the only local variable (appearing when the line with `let count` is executed).
    * The outer lexical reference, which is set to [[Environment]] of the function. Here [[Environment]] of `makeCounter` references the global *Lexical Environment*.

3. During the execution of `makeCounter()`, a tiny nested function is created.
![closure phase 3](/assets/closure_phase_3.png)

    For our new nested function the value of [[Environment]] is the current *Lexical Environment* of makeCounter() (where it was born).

4. As the execution goes on, the call to `makeCounter()` finishes, and the result (the tiny nested function) is assigned to the global variable `counter`:
![closure phase 4](/assets/closure_phase_4.png)

5. When the `counter()` is called, an “empty” *Lexical Environment* is created for it. It has no local variables by itself. But the [[Environment]] of `counter` is used as the outer reference for it, so it has access to the variables of the former `makeCounter()` call where it was created:
![closure phase 5](/assets/closure_phase_5.png)

    Please note how memory management works here. Although `makeCounter()` call finished some time ago, its *Lexical Environment* was retained in memory, because there’s a nested function with [[Environment]] referencing it.

    Generally, a *Lexical Environment* object lives as long as there is a function which may use it. And only when there are none remaining, it is cleared.

6. The call to `counter()` not only returns the value of count, but also increases it. Note that the modification is done “in place”. The value of `count` is modified exactly in the environment where it was found.
![closure phase 6](/assets/closure_phase_6.png)

7. Next counter() invocations do the same.
![closure phase 7](/assets/closure_phase_7.png)

> There is a general programming term “closure”, that developers generally should know.
>
> A closure is a function that remembers its outer variables and can access them. In some languages, that’s not possible, or a function should be written in a special way to make it happen. But as explained above, in JavaScript all functions are naturally closures (there is only one exclusion, to be covered in The "new Function" syntax).
>
> That is: they automatically remember where they were created using a hidden [[Environment]] property, and all of them can access outer variables.
> 
> When on an interview, a frontend developer gets a question about “what’s a closure?”, a valid answer would be a definition of the closure and an explanation that all functions in JavaScript are closures, and maybe few more words about technical details: the [[Environment]] property and how Lexical Environments work.

### IIFE

IIFE stands for "Immediately-invoked function expressions". And the form is like this:
```js
(function() {

  let message = "Hello";

  alert(message); // Hello

})();
```

The *Function Expression* is wrapped with brackets `(function {...})`, because when JavaScript meets "function" in the main code flow, it understands it as the start of a *Function Declaration*. But a *Function Declaration* must have a name, so there will be an error:
```js
// Error: Unexpected token (
function() { // <-- JavaScript cannot find function name, meets ( and gives error

  let message = "Hello";

  alert(message); // Hello

}();
```

We can say “okay, let it be so *Function Declaration*, let’s add a name”, but it won’t work. JavaScript does not allow *Function Declarations* to be called immediately:
```js
// syntax error because of brackets below
function go() {

}(); // <-- can't call Function Declaration immediately
```

So, **round brackets are needed to show JavaScript that the function is created in the context of another expression**, and hence it’s a *Function Expression*. It needs no name and can be called immediately.


There are also other ways to tell js we mean *Function Expression*:
```js
// Ways to create IIFE
(function() {
  alert("Brackets around the function");
})();

(function() {
  alert("Brackets around the whole thing");
}());

!function() {
  alert("Bitwise NOT operator starts the expression");
}();

+function() {
  alert("Unary plus starts the expression");
}();
```

> As the *Lexical Environment* exists, *Closure* helps the tricks for declaration of private properties and the existence of inner variables.

As we’ve seen, in theory while a function is alive, all outer variables are also retained.

But in practice, JavaScript engines try to optimize that. They analyze variable usage and if it’s easy to see that an outer variable is not used – it is removed.

**An important side effect in V8 (Chrome, Opera) is that such variable will become unavailable in debugging.**

### The old `var`
1. `var` pierces through `if`, `for` or other code blocks. That’s because a long time ago in JavaScript blocks had no *Lexical Environments*. And var is a reminiscence of that.
2. `var` declarations are processed when the function starts (or script starts for globals).

## Global object
The initial purpose for *global object* is to link several in-browser scripts by sharing variables.

In a browser it is named “window”, for Node.JS it is “global”.
> `let`&`const` variables are invisible from `global object` as they are not designed to inherit from the old convention.

The usages are: 
1. To access exactly the global variable if the function has the local one with the same name.

2. To check if a certain global variable or a builtin exists.
```js
if (window.XMLHttpRequest) {    // call XMLHttpRequest directly would return undefined.
  alert('XMLHttpRequest exists!');  
}
```
Or we can use `typeof` to check the function, without *global object.*

3. To take the variable from the right window. That’s probably the most valid use case.

A browser may open multiple windows and tabs. A window may also embed another one in `<iframe>`. Every browser window has its own window object and global variables. JavaScript allows windows that come from the same site (same protocol, host, port) to access variables from each other.

> When a function with `this` is called in non-strict mode, it gets the global object as `this`.

## Function object, NFE
In JavaScript, functions are objects.

A good way to imagine functions is as callable “action objects”. We can not only call them, but also treat them as objects: add/remove properties, pass by reference etc.

A few usable properties:
* `name`: returns the name of the function.
* `length`: returns the number of function parameters.
* custom properties: for instance,
```js
function sayHi() {
  alert("Hi");

  // let's count how many times we run
  sayHi.counter++;
}
sayHi.counter = 0; // initial value

sayHi(); // Hi
sayHi(); // Hi

alert( `Called ${sayHi.counter} times` ); // Called 2 times
```
> A property is not a variable
A property assigned to a function like `sayHi.counter = 0` does not define a local variable `counter` inside it. In other words, a property `counter` and a variable `let counter` are two unrelated things.
>
> We can treat a function as an object, store properties in it, but that has no effect on its execution. Variables never use function properties and vice versa. These are just parallel words.

When compared to *Closure*, the property could be easily modified by external code thus is not recommended to use in most case.

### NFE
*Named Function Expression*, or NFE, is a term for *Function Expressions* that have a name.

There are two special things about the NFE:

* It allows the function to reference itself internally.
* It is not visible outside of the function.

> Also, functions may carry additional properties. Many well-known JavaScript libraries make great use of this feature.
> 
> They create a “main” function and attach many other “helper” functions to it. For instance, the **jquery** library creates a function named `$`. The **lodash** library creates a function `_`. And then adds `_.clone`, `_.keyBy` and other properties to . Actually, they do it to lessen their pollution of the global space, so that a single library gives only one global variable. That reduces the possibility of naming conflicts.

## `new` function syntax
There’s one more way to create a function. It’s rarely used, but sometimes there’s no alternative.

The syntax for creating a function:
```js
let func = new Function ([arg1[, arg2[, ...argN]],] functionBody)
```

All previous declarations required us, programmers, to write the function code in the script.

But *`new` Function* allows to turn any string into a function. For example, we can receive a new function from a server and then execute it.

Usually, a function remembers where it was born in the special property `[[Environment]]`. It references the *Lexical Environment* from where it’s created.

But when a function is created using new Function, its `[[Environment]]` references not the current *Lexical Environment*, but instead the global one.

See the [new function demo](../tests/jstest/new_functionTest.js)

Even if we could access outer *lexical environment* in *`new` Function*, we would have problems with minifiers.

The “special feature” of *`new` Function* saves us from mistakes.

And it enforces better code. If we need to pass something to a function created by *`new` Function*, we should pass it explicitly as an argument.

## Scheduling
* `setTimeout()`: allows to run a function once after the interval of time.
* `setInterval()`: allows to run a function regularly with the interval between the runs.

Using recursive `settimeout()` could implement running codes repeatedly like `setInterval()`, but with a slight difference.

* **The real delay between func calls for `setInterval()` is less than in the code** because the time taken by function's execution “consumes” a part of the interval.
![setInterval](/assets/diagram_setInterval.png)
* **The recursive `setTimeout()` guarantees a fixed delay**.
![recursively setTimeout](/assets/diagram_RecursivelysetTimeout.png)

A special use case: `setTimeout(function, 0)`.

This schedules the execution of function  as soon as possible. But scheduler will invoke it only after the current code is complete.

So the function is scheduled to run “right after” the current code. In other words, asynchronously.

See the example: [Scheduler Sample](/tests/jstest/schedulerTest.js)

> Minimal delay of nested timers in-browser
> 
> In the browser, there’s a limitation of how often nested timers can run. The HTML5 standard says: “after five nested timers, the interval is forced to be at least four milliseconds.”.
> See the example [Scheduler Min Interval](/tests/jstest/minIntervalTest.js)

## Decorators, Forwarding, Borrowing, Binding, Partial, Currying

Let’s say we have a function `slow(x)` which is CPU-heavy, but its results are stable. In other words, for the same x it always returns the same result.

If the function is called often, we may want to cache (remember) the results for different `x` to avoid spending extra-time on recalculations.
```js
function cachingWrapper(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x)
    }
    let result = func(x);

    cache.set(x, result);
    return result;
  }
}
```
For multi-args functions, we can add a hash function to wrap the arguments.

However, this won't work for object methods which relies on `this` property. Some built-in function methods could address this problem:
```js
function.call(context, ...args);  
function.apply(context, args);  
```
The `context` parameter (which is the object) helps to pass reference to `this`.

* The spread operator `...` allows to pass iterable args as the list to call.
* The `apply` accepts only array-like args.

So, these calls complement each other. Where we expect an iterable, `call` works, where we expect an array-like, `apply` works.


> For performance's sake, the optimization of `apply` is better than `call` in situations both work.

*Call Forwarding*:
```js
let wrapper = function() {
  return anotherFunction.apply(this, arguments);
};
```

*Method Borrowing*:
```js
function hash(arguments) {
  return [].join.call(arguments); //equals Array.prototype.join.call(arguments)
}
```

*Function Binding*
```js
let boundFunc = func.bind(context, ...args);
```

*Partial Function*
```js
function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);

double(3);
double(4);
```

*Currying Funciton*
```js
function curry(func) {
  return function(a) {
    return function(b) {
      return func(a, b);
    };
  };
}

func(a)(b);
```

## Property flags and descriptors
For Objects, there are three special attributes("flags"):
* `writable` – if `true`, can be changed, otherwise it’s read-only.
* `enumerable` – if `true`, then listed in loops, otherwise not listed. It decides whether the property shows in `for..in` loop or not.
* `configurable` – if `true`, the property can be deleted and these attributes can be modified, otherwise not. Making a property non-configurable is a **ONE-WAY ROAD**. We cannot change it back, because `defineProperty` doesn’t work on non-configurable properties.

To check the flags, we can use 
```js
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
```

To modify the flags, we can use
```js
Object.defineProperty(obj, propertyName, descriptor)
```

If the property exists, `defineProperty` updates its flags. Otherwise, it creates the property with the given value and flags; in that case, if a flag is not supplied, it is assumed `false`.

A “flags-aware” way of cloning an object:
```js
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
```

## Property getters/setters
* *Data Properties*. We already know how to work with them. Actually, all properties that we’ve been using till now were data properties.
* *Accessor Properties*. They are essentially functions that work on getting and setting a value, but look like regular properties to an external code.

```js
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  }
};
```
See the [example](/tests/jstest/Object_PropertyTest.js)

> *Accessor Properties* are only accessible with `get/set`
> 
> A property can either be a “data property” or an “accessor property”, but not both.

So an accessor descriptor may have:

* `get` – a function without arguments, that works when a property is read,
* `set` – a function with one argument, that is called when the property is set,
* `enumerable` – same as for data properties,
* `configurable` – same as for data properties.

`getters/setters` can be used as wrappers over “real” property values to gain more control over them.

For instance, if we want to forbid too short names for `user`, we can store name in a special property `_name`. And filter assignments in the setter:
```js
let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
alert(user.name); // Pete

user.name = ""; // Name is too short...
```
Technically, the external code may still access the name directly by using `user._name`. But there is a widely known agreement that properties starting with an underscore "_" are internal and should not be touched from outside the object.

## Prototypal Inheritance

### [[Prototype]]
In JavaScript, objects have a special hidden property `[[Prototype]]` (as named in the specification), that is either null or references another object. That object is called “a prototype”:
![prototype](/assets/prototype_proto.png)

That `[[Prototype]]` has a “magical” meaning. When we want to read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, such thing is called “prototypal inheritance”.

To set it, `__proto__` is the `getter/setter` for it.

There are actually three limitations:

* The references can’t go in circles. JavaScript will throw an error if we try to assign `__proto__` in a circle.
* The value of `__proto__` can be either an object or null. All other values (like primitives) are ignored.
* There can be only one `[[Prototype]]`. An object may not inherit from two others.

### F.prototype
In the old times, there was another (and the only) way to set `__proto__`: to use a "prototype" property of the constructor function.

As we know already, `new F()` creates a new object.

When a new object is created with `new F()`, the object’s `[[Prototype]]` is set to `F.prototype`.

![F.prototype results](/assets/F_prototype.png)

In other words, if `F` has a prototype property with a value of the object type, then `new` operator uses it to set `[[Prototype]]` for the new object.

For example:

```js
let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true
```

The default "prototype" is an object with the only property `constructor` that points back to the function itself.

```js
function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

alert( Rabbit.prototype.constructor == Rabbit ); // true
```

**JavaScript itself does not ensure the right "constructor" value.**

Compare the following to code snippets.
```js
function Rabbit() {}
Rabbit.prototype = {
  jumps: true
};

let rabbit = new Rabbit();
alert(rabbit.constructor === Rabbit); // false
```

```js
function Rabbit() {}

// Not overwrite Rabbit.prototype totally
// just add to it
Rabbit.prototype.jumps = true
// the default Rabbit.prototype.constructor is preserved
```

### Native Prototypes
```js
let obj1 = {};
let obj2 = new Object(); 
```

That two statements above equal. `Object` – is a built-in object constructor function.

By specification, all built-in prototypes have `Object.prototype` on the top. Sometimes people say that “everything inherits from objects”.

> During the process of development we may have ideas which new built-in methods we’d like to have. And there may be a slight temptation to add them to native prototypes. But that is generally a bad idea.
> 
> In modern programming, there is only one case when modifying native prototypes is approved. That’s *polyfills*. In other words, if there’s a method in JavaScript specification that is not yet supported by our JavaScript engine (or any of those that we want to support), then may implement it manually and populate the built-in prototype with it.

### Methods for prototypes
* `Object.create(proto[, descriptors])` – creates an empty object with given proto as `[[Prototype]]` and optional property descriptors.
* `Object.getPrototypeOf(obj)` – returns the `[[Prototype]]` of `obj`.
* `Object.setPrototypeOf(obj, proto)` – sets the `[[Prototype]]` of `obj` to proto.

A truly exact cloning, including all properties: enumerable and non-enumerable, data properties and setters/getters – everything, and with the right [[Prototype]].
```js
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
```

**Technically, we can get/set `[[Prototype]]` at any time. But usually we only set it once at the object creation time, and then do not modify**

### “Very plain” Objects

If we try to store user-provided keys in aobject (for instance, a user-entered dictionary), we can see an interesting glitch: all keys work fine except `__proto__`.
For instance:

```js
let obj = {};

let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";

alert(obj[key]); // [object Object], not "some value"!
```

That shouldn’t surprise us. The `__proto__` property is special: it must be either an object or null, a string can not become a prototype.

But we did not intend to implement such behavior, right? We want to store key/value pairs, and the key named `__proto__` was not properly saved. So that’s a bug. Here the consequences are not terrible. But in other cases the prototype may indeed be changed, so the execution may go wrong in totally unexpected ways.

What’s worst – usually developers do not think about such possibility at all. That makes such bugs hard to notice and even turn them into vulnerabilities, especially when JavaScript is used on server-side.

To evade this problem, we can use `Map`. But `Object` also can serve us well here, because language creators gave a thought to that problem long ago.

The `__proto__` is not a property of an object, but an accessor property of `Object.prototype`:
![True prototype](/assets/prototype_polymorph.png)

So, if `obj.__proto__` is read or assigned, the corresponding getter/setter is called from its prototype, and it gets/sets `[[Prototype]]`.

As it was said in the beginning: `__proto__` is a way to access `[[Prototype]]`, it is not `[[Prototype]]` itself.

And we can update the code snippet by changing the declaring statement into:
```js
let obj = Object.create(null);
```
The `[[prototype]]` is null and apparently, no setter/getter inherited for `__proto__`.

We can call such object “very plain” or “pure dictionary objects”, because they are even simpler than regular plain object `{...}`.(On the otherside, this sort of objects lack any built-in object methods.)

## Class Patterns
Firstly, we'll cover several patterns implementing the idea of **Class** without `class` keyword expliclty.

* *Functional class pattern*: 
```js
function Obj(...innerProperties) {
  function privateMethod() {  
  }

  this.publicMethod = function() {
    // operate on inner properties
  }
}

let obj = new Obj(...params);
obj.publicMethod();
```
* It is a “program-code-template” for creating objects (callable with `new`).
* It provides initial values for the state.
* It provides methods.

This way we can hide internal implementation details and helper methods from the outer code. Only what’s assigned to `this` becomes visible outside.

* *Factory class pattern:*
```js
function Obj(...innerProperties) {
  function innerFunction() {

  }

  return {
    publicMethod() {
      // Operate on inner properties.
    }
  };
}
```
As we can see, the function `Obj` returns an object with public properties and methods. The only benefit of this method is that we can omit `new`.

* *Prototype-based classes*
```js
function Obj(...innerProperties) {
  this._innerProp1 = innerProperties[0];
  this._innerProp2 = innerProperties[1];
  //...
}

Obj.prototype._privateMethod = function() {
}

OBj.prototype.publicMethod = function() {

}
```
* The constructor `Obj` only initializes the current object state.
* Methods are added to `Obj.prototype`.

As for inherritence, we can declare:
```js
Obj.prototype.__proto__ = ParentObj.prototype;
```

As we can see, methods are lexically not inside function `Obj`, they do not share a common *lexical environment*. If we declare variables inside function `Obj`, then they won’t be visible to methods.

So, there is a widely known agreement that internal properties and methods are prepended with an underscore "_". Like `_name` or `_calcAge()`. Technically, that’s just an agreement, the outer code still can access them. But most developers recognize the meaning of "_" and try not to touch prefixed properties and methods in the external code.

> The *Prototypal pattern* is more memory-efficient than *Function class pattern*  as different objects share the same function instead of creating a copy on each instance.

### Class
The new syntax is as follows:
```js
class MyClass {
  constructor(...) {
    // ...
  }
  method1(...) {}
  method2(...) {}
  get something(...) {}
  set something(...) {}
  static staticMethod(..) {}
  // ...
}
```

The `class MyClass {...}` here actually does two things:

* Declares a variable User that references the function named "constructor".
* Puts methods listed in the definition into `MyClass.prototype`.

Here are some features of `class` syntax:
* Constructors require `new`
* Class methods are non-enumerable
* Classes have a default `constructor() {}`
* Classes always `use strict`
* Only methods: Unlike object literals, no `property:value` assignments are allowed inside `class`. There may be only methods and getters/setters.(We can use getters/setters to achieve that goal)


*Class Expression*: 

Just like functions, classes can be defined inside another expression, passed around, returned etc as they are just a special form of a function-with-prototype definition.

*Static Methods*:

We can also assign methods to the class function, not to its `prototype`. 

```js
class Obj {
  static staticMethod() {

  }
}
```
equals
```js
function Obj() {};
Obj.staticMethod = function() {

}
```

