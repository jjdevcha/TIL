# Length of the last word

Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

## My solution
```js
let lengthOfLastWord = function(s) {
    let arr = s.split(' ');
    
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i].length !== 0) {
            return arr[i].length;
        }
    }
    
    return -1;
};
```

## Someone else's
```js
var lengthOfLastWord = function(s) {
    s = s.replace(/^\s+|\s+$/g,'');
    var arr = s.split(' ');
    return arr[arr.length-1].length;
};
```
