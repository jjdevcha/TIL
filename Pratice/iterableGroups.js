// Eloquent JS
// Chapter 6
// Iterable Groups

class GroupIterator {
    constructor(iter) {
        return this.iter = iter[Symbol.iterator]();
    }
}

let hello = new GroupIterator("Hello");

for (const a of hello) {
console.log(a);
}