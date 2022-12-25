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


# Exporting & Importing in ES6 Module
- Imported statement always gets hoisted on top (Doesn't matter the order of the statement)
- Variables are scoped to the module (private)
