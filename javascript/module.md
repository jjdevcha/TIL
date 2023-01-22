# Module in Modern Javascript Developent

## Module
- Reusable piece of code that encapsulates implementation details
- Usually a standalone file, but it doesn't have to be

## Advantage of Module
- Compose SW : small building blocks for complex applications
- Isolate components : Can be developed in isolation w/out thinking about the entire code base
- Abstract code : Implement low-level code in modules and import these abstractions into other modules
- Organized code
- Reuse code


|| ES6 Module  | Script |
|------------| ------------- | ------------- |
|Top-level variable| Scoped to Module  | Global  |
|Default mode| Strict mode  | "Sloppy" mode  |
|Top-level `this`| undefined | window |
| Imports & Exports | Yes | No |
| HTML linking | `<script type="module">` | `<script>`|
| File downloading | Asynchronous | Synchronous |


## Exporting & Importing in ES6 Module
- Imported statement always gets hoisted on top (Doesn't matter the order of the statement)
- Variables are scoped to the module (private)


## Top-level await
- You can use await outside of async function (script type has to be `module`)
- Top-level await can block the entire execution of the module
- (Remember async function only returns Promise not Object)
- If importing module imports top-level await module, it waits for the imported module to be executed first (Imported module blocks the entire importing module to be executed) 

## Module pattern
- Encapsulate functionality to have private data and to expose a public API ---> We normally use `function`: private datas are available/ can return data
- We use IIFE(Immediately invoked function expression) ---> 1) Can ensure that it's only called once 2) Don't have to call it seperately
- When the IIFE function is executed earlier why is it available to call the return data that was returned earlier? ---> **closure**
- It has some limits (that's why we use native module) 

### closure
allow a function to have access to all the variables that were present at it's birthplace

## CommonJs Module
The original way to package Javascript for Node.js. In Node.js each file is treated as a seperate module

## Command Line
`ls` : list of files of current directory
`cd` : move to the directory
`mkdir` : make a new directory(folder)
`touch` or `edit` : make a file
`rm` or `del` : remove the file
`rmdir` : remove the directory
`mv` : move a file to another directory
`rm -R` : recursive remove (remove the directory and all the files inside)

## npm (Node Package Manager)
The default package manager for the Javascript runtime environment *Node.js*. npm can manage packages that are local dependencies of a particular project. 
(Even though you delete `node_modules` file when you save the project, if you have dependencies written in `package.json`, `npm i` will re-install all the dependecies you need)

`npm -v` : checking the version of npm
`npm init` : makes package file 

## Bundling with parcel and npm scripts
Parcel.js is an open-source bundler. It supports many popular languages like Typescript and SASS, and can also handle file types like images and fonts. Parcel comes with a few extra tools built-in: a development server, diagnostics, minification, and even image compression. (In short, a bundler)

devDependencies : a dependency that you need to use for building projects but doesn't use it in the code *e.g.*  `parcel`
- [How to bundle a web app with parcel](https://www.digitalocean.com/community/tutorials/how-to-bundle-a-web-app-with-parcel-js)
- `npx parcel index.html`
- `script` start and build

## Configuring Babel and Polyfilling
Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ (ES6+) code into backwards-compatible JavaScript code that can be run by older JavaScript engines. It allows web developers to take advantage of the newest features of the language (es6 -> es5 버전을 컴파일해 다양한 웹브라우저에서 자바스크립트를 편하게 사용할 수 있도록 함)

a polyfill is code that implements a feature on web browsers that do not natively support the feature.

## Modern and Clean Code
### Readable code
- Write code so that others can understand it
- Write code so that you can understand it in 1 year
- Avoid too "clever" and overcomplicated solutions
- Use descriptive variable names: what they contain
- Use descriptive function names: what they do

### General
- Use DRY principle (refactor you code)
- Don't pollute global namespace, encapsulate instead
- Don't use var
- Use strong type checks (=== and !==)

### Functions
- Generally, functions should do only one thing
- Don't use mor than 3 function parameters
- Use default parameters whenever possible
- Generally, reutrn same data type as received
- Use arrow functions when they make code more readable

### OOP
- Use ES6 classes
- Encapsulate data and don't mutate it form outside the class
- Implement method chaining
- Do not use arrow functions as methods (in regular objects)

### Avoid Nested Code
- Use early return (guard clauses)
- Use ternary (conditional) or logical operators instead of if
- Use multiple if instead of if/else-if
- Avoid for loops, use array methods instead
- Avoid callback-based asynchronous APIs

### Asynchronouse code
- Consume promises with async/await for best readability
- Whenver possible, run promises in parallel(Promise.all)
- Handle errors and promise rejections

## Declarative and Functional Js principles
### Declarative
- Programmer tells "What to do"
- e.g. `const doubled = arr.map(n => n * 2)`
- Imperative way e.g. using for loop

### Functional Programming
- Declarative programming paradigm
- Based on the idea of writing software by combining many pure functions, avoiding side effects and mutating data

* side effect : Modification (mutation) of any data outside of the function (mutating external variables, logging to console, writing to DOM, etc.)
* Pure function: Function without side effects. Does not depend on external variavles. Given the same inputs, always returns the same outputs.
* Immutability: State(data) is never modified! Instead, state is copied and the copy is mutated and returned.

#### Functional programming techniques
- Try to avoid data mutations
- Use built-in methods that don't produce side effects
- Do data transformations with methods such as .map(), .filter() and .reduce()
- Try to avoid side effects in functions: this is of course not always possible

#### Declarative syntax
- Use array and object destructuring
- Use the spread operator(...)
- Use the ternary (conditioonal) operator
- Use template literals
