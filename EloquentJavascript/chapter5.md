# Chapter 5 Higher Order Functions
Functions that operate on other functions, either by taking them as arguments or by returning them

- `filter`
- `forEach`
- `map`
- `reduce`
- `some`

#### Composability
`reduce`

### Exercises
#### Flattening
##### My solution
```js
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
const resultArr = arrays.reduce((totalArr, concatArr) => totalArr.concat(concatArr))
console.log(resultArr);
// → [1, 2, 3, 4, 5, 6]
```
##### Book solution
```js
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));
// → [1, 2, 3, 4, 5, 6]
```

#### Your own loop
##### My solution
```js
function loop(start, test, update, func) {

  while(test(start)) {
    func(start);
    start = update(start);
	}	
}
```
##### Book solution
```js
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}
```

#### Everything
##### My solution
```js
// using loop
function every(array, test) {
  // Your code here.
  for (let i = 0; i < array.length; i++) {
  	if (!test(array[i])) return false;
  }
  return true;
}

// using some method
function every(array, test) {
  // Your code here.
	return !array.some(el => !test(el));
}
```
##### Book solution
```js
function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}

```
#### Dominant writing direction
##### My solution
```js

```
