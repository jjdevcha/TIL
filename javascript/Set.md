# Set
Set objects stores unique values of any type.

## How to declare
`new Set(iterable);`<br>

```js
const s1 = new Set([1, 2, 3]);
console.log(s1) // {1, 2, 3}

// You can also put in string since string's iterable and array-like
const s2 = new Set('aaaabbbbccccc');
console.log(s2) // {'a', 'b', 'c'}
```

### How to use 

Since it stores unique values, it can be used when I want to deal with repetition 
```js
let s = 'sadidsssslvvvvjjff';
console.log([...new Set(s)].join('')); 
// "sadilvjf"
```

