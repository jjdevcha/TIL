# Chapter 3 Functions

#### Function definition
Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope.
#### Bindings and Scopes
Each binding has a scope

##### Global scope

##### Local scope
Bindings created for function parameters or declared inside a function can be referenced only in that function
<br>
Every time the function is called, new instances of these bindings are created.

##### Nested scope

##### Lexical scope
A variable defined outside a function can be accessible inside another  function defined after the variable declaration. But the variables defined inside a function will not be accessible outside that function.
<br>
쉽게 말해서, function (lexical environment) 밖에 있는 variables 들은 function 내에서 접근이 가능한데, function 밖에서 function 내의 variables를 접근할 수 는 없다

#### Arrow Functions
```js
const square1 = (x) => {return x * x;};
const square2 = x => x * x;
```

#### The call stack
It is a mechanism for an interpreter to keep track of its place in a script that calls multiple functions. If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.

#### Closure
It is a combination of a function bundled together with references to its surrounding state. A closure gives you access to an outer function's scope from an inner function.
<br>
The function that was returned by a bigger function

#### Recursion
A function that calls itself is called recursive.
<br>
IT IS THREE TIMES SLOWER than the looping version.

### Exercises

#### Minimum
##### My solution
```js
let min = (...num) => {
  let min = num[0];
	for (let i = 1; i < num.length; i++) {
    	if (num[i] < min) {
          min = num[i];
        }
    }
  return min;
}
```
##### Book solution
```js
function min(a, b) {
  if (a < b) return a;
  else return b;
}
```

#### Recursion
##### My solution
```js
const isEven = (number) => {
	if (number === 0) {
    	return true;
    } else if (number === 1) {
    	return false;
    } else if (number > 1) {
    	return isEven(number - 2);
    } else {
    	return '??';
    }
}
```
##### Book solution
```js
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}
```

#### Bean counting
##### My solution
```js
const countBs = (string) => {
  	let count = 0;
	for (let alph of string) {
    	if (alph === 'B'){
        	count++;
        }
	}
  return count;
};

const countChar = (string, char) => {
	let count = 0;
  	for (let alph of string) {
    	if (alph === char) {
        	count++;
        }
    }
  return count;
}
```

##### Book solution
```js
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}
```



