# Chapter 6 The Secret Life of Objects

## Object Oriented Programming
a set of techniques that use objects(and related concepts) as the central principle of program organization.

## Encasuplation
Separating interface from implementation <br>
- Dividing programs into smaller pieces and make each piece responsible for managing its own state
- <em>local</em> environment
- Different pieces of a program interact with each other through <em>interfaces</em>
- Properties that are part of the interface are called <b>public</b>
- The others, which outside code should not be touching, are called <b>private</b>

## Methods
Properties that hold function values
- `this` binding
- `call` method
- `this` directs the main object in stantard function
- `this` directs the winddow in arrow function

## Prototypes
A prototype is another object that is used as a fallback source of properties <br>
Almost all objects ancestral prototype, `Object.prototype`
- `Object.getPrototypeOf` returns the prototype of an object
- Functionis derive from `Function.prototype`
- Arrays derive from `Array.prototype`
- `Object.create`

## Classes
A class defines the shape of a type of object - what methods and properties it has. Such an object is called an <em>instance</em> of the class
- `new` in front of a function call, the function is treates as a constructor
- `Constructors` automatically get a property names `prototype`, which holds a plain, empty object that derives from `Object.prototype`
- The names of constructors are capitalized `ex)` `new Rabbit()`

## Class Notation
The `class` keyword starts a class declaration, which allows us to define a constructor and a set of methods all in a single place

## Overrideing derived properties
![alt text](https://eloquentjavascript.net/img/rabbits.svg)

## Maps
A map is a data structure that associates values(the keys) with other values.
- `Object.create(null)` - the resulting object will not derive from `Object.prototype` and can safely be uses as as map
- `Map()`
- `set`, `get`, and `has` are part of the the `Map` object
- `Object.keys` returns only an object's own keys, not those in the prototype
- `hasOwnProperty()` method also ignores the object's prototype

## Polymorphism
When a piece of code is written to work with objects that have a certain interface, any kind of object that happens to support this interface can be plugged into the code

## Symbols
Being unique and usable as property names makes symbols suitable for difining interfaces that can peacefully live alongside other properties.
- It is possible to include symbol properties in object expressions and classes by using square brackets around the property name.
** interface : 접속기
** prototype : 원형
** polymorphism : 동질 이상, 다형성

## The iterator interface
`Symbol.iterator`
- `next()` method
- `value` and `done` property

## Getters, Setters, and Statics

## Inheritance
The new class inherits properties and behavior from the old class
- `supaerclass` and `subclass`
- Inheritance allows us to build slightly different data types from existing data types with relatively little work

## The instanceof operator
Useful to know wheter an object was derived from a specific class

## Exercise
### A vector type
#### My solution
```js

class Vec {
	constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  	
  	//Method
  	plus(vec) {
      return new Vec(vec.x + this.x, vec.y + this.y);
    }
  	
  	minus(vec) {
      return new Vec(this.x - vec.x, this.y - vec.y);
      // Math.abs(this.x - vec.x) will be better to show actual difference
    }
  
  	// Getter
  	get length() {
    	return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
  	
}
```
