# Is Subsequence

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

### Example
```
Input: s = "abc", t = "ahbgdc"
Output: true
```

## My solution
```js
let isSubsequence = function (s, t) {
    let sArr = s.split('');
    let tArr = t.split('');

    for (let i = 0; i < s.length; i++) {
        if (tArr.indexOf(sArr[i]) !== -1) {
            tArr.splice(0, tArr.indexOf(sArr[i]) + 1); // Using indexOf inside of for loop can result in high Big O 
        } else {
            return false;
        }
    }

    return true;
}
```

## Someone else's solution
```js
const isSubsequence = (s, t) => {
  //! Edge case
  if (s.length > t.length) return false; //! if len of s is greater than len of t, return false because s cant be a subsequence of t
  `
  Example:
    s='Leetcode'
    t='Code'
    here we are trying to find if 'Leetcode' is a subsequence of 'Code' which is not possible because 'Leetcode' is longer than 'Code'

  `;
  const t_length = t.length;
  let subsequence = 0;
  for (let i = 0; i < t_length; i++) {
    if (s[subsequence] === t[i]) {
      // ! if it is matching, increment subsequence
      subsequence++;
    }
  }
  return subsequence === s.length
};
```
