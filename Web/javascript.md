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

