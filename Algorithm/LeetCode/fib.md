# Fibonacci Number

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
```
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
```
Given n, calculate F(n).

## My solution
```js
let fib = function(n) {
    let fib = [0, 1];
    
    for (let i = 0; i < n - 1; i++) {
        fib.push(fib[i] + fib[i+1]); 
    }
    
    return fib[n];
    
};
```

## Someone else's solution
```js
var fib = function(N) {
  if (N === 0 || N === 1) return N;
  let a = 0;
  let b = 1;
  while (N--) {
    [a, b] = [b, a + b];
  }
  return a;
};
```
