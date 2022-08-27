# Longest Palindrome

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

### Example
```
Input: s = "abccccdd"
Output: 7
```

## My solution
Very heavy and slow method
```js
let longestPalindrome = function (s) {
    let length = 0;
    let stringObj = {};
    let bigOdd = 0;
    let bigOddProp = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] in stringObj) {
            stringObj[s[i]]++;
        } else {
            stringObj[s[i]] = 1;
        }
    }

    for (const property in stringObj) {
        if (stringObj[property] % 2 !== 0) {
            bigOdd = stringObj[property] > bigOdd ? stringObj[property] : bigOdd;
            if (stringObj[property] === bigOdd) {
                bigOddProp = property;
            }
        } else {
            length += stringObj[property];
        }
    }

    for (const property in stringObj) {
        if (stringObj[property] % 2 !== 0 && property !== bigOddProp) {
            length += stringObj[property] - 1;
        }
    }

    return length + bigOdd;


    // Make dictionary object with the count of letter
    // if count is even add the count to the length
    // if cound is odd, find the longest odd letter and include into length as it is
    // if it's an odd larger than 1, but it's not the largestOddNum

};
```

## Someone else's solution
- Solution 1
```js
var longestPalindrome = function(s) {
    const set = new Set();
    let count = 0;
    
    for (const char of s) {
        if (set.has(char)) {
			count += 2;
            set.delete(char);
        } 
		else {
            set.add(char);
        }
    }

    return count + (set.size > 0 ? 1 : 0);
};
```
- Solution 2
```js
var longestPalindrome = function(s) {
  const map = new Map()
  for(const c of s){
    map.set(c, (map.get(c) || 0) + 1)
  }
  let count = 0
  let oddCount = 0
  for(const [k, v] of map){
    if(v % 2 === 0){
      count+=v
    }else{
      count+=v
      oddCount++
    }
  }

  return oddCount ? count - oddCount + 1 : count
};
```
