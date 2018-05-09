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
In javascript, a function is a value, so we can deal with it as a value.

> When using `console.log()` to print a function expression's variable, what I found is that in Chrome it shows the source code of the function while in node.js' V8 engine, it shows the function name inside a pair of brackets.

### Anonymous functions
The parameters inside the function declaration directive, if represent functions or not, should not be followed by `()`. It's like the pointer concept from C language.

See [Callback functions demo](../tests/jstest/functionTest.js)