# Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

## My solution
```js
let isValid = function(s) {
    let stackArr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stackArr.push(s[i]);
        } else { 
            if (s[i] === ')') {
                if (stackArr[stackArr.length - 1] === '(') {
                    stackArr.pop();
                } else {
                    return false
                }
            } else if (s[i] === '}') {
                if (stackArr[stackArr.length - 1] === '{') {
                    stackArr.pop();
                } else {
                    return false
                }
            } else {
                if (stackArr[stackArr.length - 1] === '[') {
                    stackArr.pop();
                } else {
                    return false
                }
            }
        }
    }
    
    return stackArr.length === 0 ? true : false;
};
```

## Someone else's solution
Use Object to store the pair
```js
function isValid(s) {
  const left = [];
  const legend = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      left.push(s[i]);    
    } else if (legend[left.pop()] !== s[i]) {
      return false;
    }
  }
  return left.length ? 0 : 1;
};
```
