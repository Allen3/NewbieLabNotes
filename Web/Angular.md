# Angular

![Angular](/assets/angular.png)

----


# Chapter 1. FUNDAMENTALS

## Section1. Architecture Overview

Angular is a platform and framework for building client applications in HTML and TypeScript.

![Architecture Overview](../assets/Angular_architecture_overview.png)

## Section 2. Intro to Modules

NgModules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities.

The module in Angular has a prefix 'Ng'(To distinguish it from JS module).

An NgModule is defined by a class decorated with `@NgModule()`. 

### NgModule metadata(important properties):

* `declarations`: The components, directives, and pipes that belong to this NgModule.

* `exports`: The subset of declarations that should be visible and usable in the component templates of other NgModules.

* `imports`: Other modules whose exported classes are needed by component templates declared in this NgModule.

* `providers`: Creators of services that this NgModule contributes to the global collection of services; they become accessible in all parts of the app. (You can also specify providers at the component level, which is often preferred.)

* `bootstrap`: The main application view, called the root component, which hosts all other app views. Only the root NgModule should set the bootstrap property.

### Angular Libraries v.s. Javascript modules
```typescript
import { Component } from '@angular/core';
```
The `import` statements imports Angular libraries.

```typescript
imports:      [ BrowserModule ],
```
Javascript imports modules by using `@NgModule` metadata `imports`.

## Section 3. Intro to Components

A component controls a patch of screen called a *view*.

The `@Component` decorator identifies the class immediately below it as a component class, and specifies its metadata.

### Component metadata
* `selector`: A CSS selector that tells Angular to create and insert an instance of this component wherever it finds the corresponding tag in template HTML. 

* `templateUrl`: The module-relative address of this component's HTML template. Alternatively, you can provide the HTML template inline, as the value of the template property. This template defines the component's host view.

* `providers`: An array of `providers` for services that the component requires.

### Templates and views

Views are typically arranged hierarchically, allowing you to modify or show and hide entire UI sections or pages as a unit. 

![Component tree](../assets/Angular_component-tree.png)

### [Template Syntax](TODO)

#### Data binding:
Normally there are four ways of data binding:

![Data Binding](../assets/Angular_Databinding.png)

* One-way:
    1. Interpolation
    2. Property binding
    3. Event binding

* 4. Two-way databinding

#### Directives:
* Structural directives

```html
<li *ngFor="let hero of heroes"></li>
```

* Attribute directives
```html
<input [(ngModel)]="hero.name">
```