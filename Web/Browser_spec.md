# Browser: Document, Events, Interfaces

Learning how to manage the browser page: add elements, manipulate their size and position, dynamically create interfaces and interact with the visitor.

# Document

The browser platform hierarchy:

![Browser_hierarchy](/assets/browser_hierarchy.png)

* **DOM** : The `document` object gives access to the page content.

    Two groups working on the standards:

    * *W3C* – the documentation is at https://www.w3.org/TR/dom.      
    * *WhatWG*, publishing at https://dom.spec.whatwg.org.

* **BOM**: Additional objects provided by the browser (host environment) to work with everything except the `document`.

    For instance:

    * The `navigator` object provides background information about the browser and the operating system. There are many properties, but the two most widely known are: `navigator.userAgent` – about the current browser, and `navigator.platform` – about the platform (can help to differ between Windows/Linux/Mac etc).
    * The `location` object allows us to read the current URL and can redirect the browser to a new one.

For *DOM*, The topmost tree nodes are available directly as `document` properties:

* `<html>` = `document.documentElement`
* `<body>` = `document.body`
* `<head>` = `document.head`

Differences between *nodes* and *elements*:

Types       | Usage
----        | ----
Nodes       | Including the text nodes, element nodes, and even comment nodes if there exist.
Elements    | Only elements included.

There are 6 main methods to search for nodes in *DOM*:
Method                  | Searches by...    | Can call on an element?   | Live?
----                    | ----              | ----                      | ----
`getElementById`        | `id`              | -                         | -
`getElementsByName`     | `name`            | -                         | :white_check_mark:
`getElementsByTagName`  | tag or `*`        | :white_check_mark:        | :white_check_mark:
`getElementsByClassName`| `class`           | :white_check_mark:        | :white_check_mark:
`querySelector`         | CSS-selector      | :white_check_mark:        | -
`querySelectorAll`      | CSS-selector      | :white_check_mark:        | -