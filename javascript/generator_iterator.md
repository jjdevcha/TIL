# The Iterator Interface

for/of loop expects the given object to be iterable. Which means it has method named with the **Symbol.iterator**.<br>
When it is called, the method should return an object that provides a second interface, *iterator*.

```js
let catIterator = "CAT"[Symbol].iterator]();
console.log(okIterator.next());
// {value: "C", done: false}
console.log(okIterator.next());
// {value: "A", done: false}
console.log(okIterator.next());
// {value: "T", done: false}
console.log(okIterator.next());
// {value: undefined, done: true}
```
**value** property provides the next result, **done** property provides the **true** or **false** whether there are no more
results.
