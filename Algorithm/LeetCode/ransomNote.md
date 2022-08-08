# Ransom Note
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

### Example
```js
canConstruct('a', 'b'); // false
canConstruct('aa', 'aab'); // true
```

## My solution
```js
var canConstruct = function(ransomNote, magazine) {
    
    let ransomObj = {};
    let magazineObj = {};
    
    for (let i = 0; i < ransomNote.length; i++) {
        if (ransomObj[ransomNote[i]]) {
            ransomObj[ransomNote[i]]++;
        } else {
            ransomObj[ransomNote[i]] = 1;
        }
    }
    
    for (let i = 0; i < magazine.length; i++) {
        if (magazineObj[magazine[i]]) {
            magazineObj[magazine[i]]++;
        } else {
            magazineObj[magazine[i]] = 1;
        }
    }
    
    for (let property in ransomObj) {
        if (ransomObj[property] > magazineObj[property] || !magazineObj[property]) {
            return false;
        }
    }
    
    return true;
    
};
```

## Someone else's solution
```js
var canConstruct = function(ransomNote, magazine) {
    const arr = magazine.split('');
    for (let i = 0; i < ransomNote.length; i++) {
        if (arr.indexOf(ransomNote[i]) === -1) {
            return false;
        } else {
            arr.splice(arr.indexOf(ransomNote[i]), 1);
        }
    }
    return true;
};
```

 
