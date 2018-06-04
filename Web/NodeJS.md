# Node.js

Basically, *Node* is **evented** and **asynchronous**.

There actually is an acronym for the types of applications Node is designed for: **DIRT**y. It stands for *Data-Intensive Real-Time* applications. 

> *PLATFORM* v.s. *FRAMEWORK*
> 
> Node is a platform for JavaScript applications, and it’s not to be confused with a framework. A popular framework for Node called **Express** later will be covered in this book.

In browser, we often use *jQuery* to make an Ajax request while in server end, *Node* can handle this. 

Some examples are:
* [A simple asynchronous example](/tests/nodejs/asyncDemo.js)
* [A simple http image server](/tests/nodejs/imageServer.js)
* [A multipersons chatroom application](/tests/nodejs/chatRoomsDemo)

> A note about `require` and synchronous I/O
>
> `require` is one of the few synchronous I/O operations available in Node. Because
modules are used often and are typically included at the top of a file, having `require`
be synchronous helps keep code clean, ordered, and readable.
> 
> But avoid using `require` in I/O-intensive parts of your application. Any synchronous
call will block Node from doing anything until the call has finished. For example, if
you’re running an HTTP server, you would take a performance hit if you used `require`
on each incoming request. This is typically why `require` and other synchronous operations
are used only when the application initially loads.

`module.exports` v.s. `exports`
What ultimately gets exported in your application is `module.exports`. `exports` is set
up simply as a global reference to `module.exports`, which initially is defined as an
empty object that you can add properties to. So `exports.myFunc` is just shorthand
for `module.exports.myFunc`.

As a result, if `exports` is set to anything else, it breaks the reference between
`module.exports` and `exports`. Because `module.exports` is what really gets
exported, `exports` will no longer work as expected—it doesn’t reference `module
.exports` anymore.

Here are the diagram of steps finding a module:
![steps_finding_a_node](/assets/steps_to_finding_a_module.png)

Two caveats:

* First, if a module is a directory, the file in the module directory that will be evaluated must be named `index.js`, unless specified otherwise by a file in the module directory named `package.json`, using the syntax:
```js
{
    "main": "./otherName.js"
}
```

* The other thing to be aware of is Node’s ability to cache modules as objects. If two
files in an application require the same module, the first require will store the data
returned in application memory so the second require won’t need to access and evaluate
the module’s source files. The second require will, in fact, have the opportunity
to alter the cached data. This “monkey patching” capability allows one module to
modify the behavior of another, freeing the developer from having to create a new
version of it.