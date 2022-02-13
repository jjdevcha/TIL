# Chapter 4 Data structures: Objects and arrays

#### Properties

#### Methods
Properties that contain functions are genereally called methods
`string.toUpperCase()`
<br>
`array.push()`

#### Mutability
Object values can be modified - The types such as numbers, strings, and Booleans, are all immutable. 

#### Correlation
`0` : The variables are not related
`1` : Two are perfectly related
`-1` : The variables are perfectly related but that they are opposites - one is true, the other is false

##### Phi coefficient 
ϕ =	
n11n00 − n10n01
√ n1•n0•n•1n•0

#### Rest parameters
`function max(...numbers)`
<br>
The rest parameter is bound to an array containing all further arguments

#### JSON
Serialized data. JavaScript Object Notation

##### JSON.stringify()
Makes a object to a string value

##### JSON.parse()
Makes a string to a object

### Exercises
#### The sum of a range

##### My solution
```js
// Your code here.
const range = (start, end, step = start < end ? 1 : -1) => {
  	let arr = [];
	if (step > 0) {
    	for (let i = start; i < end + 1; i += step) {
        	arr.push(i);
        }
      return arr;
    } else {
    	for (let i = start; i > end - 1; i += step) {
        	arr.push(i);
        }
      return arr;
    }
}

const sum = arr => {
  	let total = 0;
	for (let el of arr) {
    	total += el;
    }
  return total;
}
```

##### Book solution
```js
function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}
```

#### Reversing an array
##### My solution
```js
const reverseArray = arr => {
	let returnArr = [];
  	for (let i = arr.length - 1; i >= 0 ; i--) {
    	returnArr.push(arr[i]);
    }
  	return returnArr;
}

const reverseArrayInPlace = arr => {
	for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    	let curVal = arr[i];
      	arr[i] = arr[arr.length - 1 - i];
      	arr[arr.length - 1 - i] = curVal;
    }
  	return arr;
}
```

#### List
##### My solution
```js
const arrayToList = arr => {
  	let obj = {value: arr[arr.length -1], rest: null};
	for (let i = arr.length - 2; i >= 0; i--) {
    	obj = {value: arr[i], rest: obj};
    }
	return obj;
}

const prepend = (val1, val2) => {
	return {value: val1, rest: val2};
}

function nth(list, n) {
 if (n) {
 	let arr = listToArray(list);
   	return arr[n];
 } else {
 	return undefined;
 }
}
```

##### Book solution
```js
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}
```

#### Deep comparison
##### My solution
```js
function deepEqual(obj1, obj2) {
	let obj1Keys = Object.keys(obj1);
  	let obj2Keys = Object.keys(obj2);
  	
  	for (let i = 0; i < obj1Keys.length; i++) {
    	if (obj1Keys[i] === obj2Keys[i]) {
        	if (typeof obj1[obj1Keys[i]] !== 'object' && obj1[obj1Keys[i]] === obj2[obj2Keys[i]]) {
            	continue;
            } else {
                if(obj1[obj1Keys[i]] && obj2[obj2Keys[i]]) {
            		return deepEqual(obj1[obj1Keys[i]], obj2[obj2Keys[i]]);
            	} else {
                  if (obj1[obj1Keys[i]] === null && obj2[obj2Keys[i]] === null) {
                  	continue;
                  } else {
                  	return false;
                  }
                }
            }
    } else {
        	return false;
        	}
    	}
  return true;
}
```

##### Book solution
```js
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}
```

