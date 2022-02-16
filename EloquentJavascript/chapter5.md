# Chapter 5 Higher Order Functions
Functions that operate on other functions, either by taking them as arguments or by returning them

- `filter`
- `forEach`
- `map`
- `reduce`
- `some`
- `every`

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
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}



function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}


function dominantDirection(text) {
  // Your code here.
  let scripts = countBy(text, char => {
  	let script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter(({name}) => name != 'none');
            
	let dominantScript = scripts.reduce((a, b) => a.count > b.count? a : b);
  
  return dominantScript.name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
```

##### Other person's solution
It specifies the length of the scripts so that they can catch errors
```js
function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  switch (scripts.length) {
    case 0:
      return 'no dominant direction found';
    case 1:
      return scripts[0].name;
    default:
      if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
        return 'no dominant direction found';
      } else {
        return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
      }
  }
}
```
