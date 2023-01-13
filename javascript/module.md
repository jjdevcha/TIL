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

## npm
`npm -v` : checking the version of npm
`npm init` : makes package file 
