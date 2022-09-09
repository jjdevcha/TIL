# Palindrome Number

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

### Example
```
Input: x = 121
Output: true
```

## My solution
```js
let isPalindrome = function (x) {
    
    let xArray = String(x).split('');
    
    if (x >= 0) {
        for (let i = 0; i < Math.round(xArray.length / 2); i++) {
        if (parseInt(xArray[i]) !== parseInt(xArray[xArray.length - 1 - i])) {
            return false;
        }
    }
    return true;
    }
    return false;
    
};
```

## Someone else's solution
```js
var isPalindrome = function(x) {
    const s = x.toString();
    if (s.length === 1) {
        return true;
    }
    const start = s[0];
    const end = s[s.length - 1];
    if (start !== end) {
        return false;
    }
    if (s.length === 2) {
        return true;
    }
    const subStr = s.substring(1, s.length - 1);
    return isPalindrome(subStr);
};
```
