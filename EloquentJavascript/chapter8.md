# Chapter 8 Bugs and errors

## Strict mode
`"use strict"`

## Types
Javascript is untyped. So with raw JS we normally use commentation.
Otherwise we can use `TypeScript` to support this issue

## Exception handling
A mechanism that makes it possible for code that runs into a problem to raise an exception
- unwinding the stack :  Jumping out of not just the current function but also it's callers, all the way down to the first clal that started the current execution

## Exercise
### Retry
#### My (wrong) Solution
```js
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  try {
  	primitiveMultiply(a, b);
  } catch(e) {
  	if (e instanceof MultiplicatorUnitFailure) {
    	primitiveMultiply(a, b);
    } else {
    	reliableMultiply(a, b);
    }
  }
}

console.log(reliableMultiply(8, 8));
```

#### Book solution
```js
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure))
        throw e; // throwing an exception will not terminate the program
    }
  }
}

```
