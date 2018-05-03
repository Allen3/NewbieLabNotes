# jQuery

## DOM

the Document Object Model (DOM) is the method by which JavaScript (and jQuery) interact with the HTML in a browser.

Each HTML element is considered a node in the DOM - an object that JavaScript can touch. 

> **DOM** v.s. **TML Source**

> The page source is exactly what is written in the HTML file. It is static and will not change, and will not be affected by JavaScript.
The DOM is dynamic, and can change. The outermost layer of the DOM, the layer that wraps the entire `<html>` node, is the document object. 

```javascript
$(document).ready(function() {
   // all custom jQuery will go here
});

```

All jQuery code you write will be wrapped in the above code.
jQuery will detect this state of readiness so that code included inside this function will only run once the DOM is ready for JavaScript code to execute. 
Even if in some cases JavaScript won't be loaded until elements are rendered, including this block is considered to be best practice.

jQuery is called with and represented by the dollar sign `$`. We access the "DOM" with jQuery using mostly CSS syntax, and apply an action with a method. A basic jQuery example follows this format.

```javascript
$("selector").method();
```

Since an ID is represented by a hash symbol `#` in CSS, we will access the **demo ID** with the selector `#demo.html()` is a method that changes the HTML within an element.

----

## Selector

Selectors are how we tell jQuery which elements we want to work on. 
Most jQuery selectors are the same as what you're familiar with in CSS, with a few jQuery-specific additions. 
You can view the [full list of jQuery selectors](https://api.jquery.com/category/selectors/) on their official documentation pages.

```javascript
$("selector")
```

Double-quoted strings are preferred by the [jQuery style guide](https://contribute.jquery.org/style-guide/js/), though single-quoted strings are often used as well.

Below is a brief overview of some of the most commonly used selectors.

* `$(*)` - Wildcard: selects every element on the page.

* `$(this)` - Current: selects the current element being operated on within a function.

* `$(p)` - Tag: selects every instance of the `<p>` tag.

* `$(.example)` - Class: selects every element that has the example class applied to it.

* `$(#example)` - Id: selects a single instance of the unique example id.

* `$([type='text'])` - Attribute: selects any element with text applied to the type attribute.

* `$(p:first-of-type)` - Pseudo Element: selects the first <p>.

Generally, classes and ids are what you will encounter the most — classes when you want to select multiple elements, and ids when you want to select only one.

----

## jQuery Events

An event is any time the user interacts with the browser.

You can view a [full list of jQuery event methods](https://api.jquery.com/category/events/).
Below is a brief overview of some of the most commonly used event methods.

* `click()` - Click: executes on a single mouse click.

* `hover()` - Hover: executes when the mouse is hovered over an element. mouseenter() and mouseleave() apply only to the mouse entering or leaving an element, respectively.

* `submit()` - Submit: executes when a form is submitted.

* `scroll()` - Scroll: executes when the screen is scrolled.

* `keydown()` - Keydown: executes when you press down on a key on the keyboard.

----

## jQuery Effects

[jQuery effects](http://api.jquery.com/category/effects/) work hand-in-hand with events by allowing you to add animations and otherwise manipulate elements on the page.

> For example refer to the [jQuerytest](./tests/jQuerytest/index.html)
