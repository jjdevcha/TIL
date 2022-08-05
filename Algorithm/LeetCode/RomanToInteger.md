# Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

**Symbol**    =   **Value** <br>
----------------------------
I       =       1 <br>
V        =      5<br>
X         =     10<br>
L          =    50<br>
C           =   100<br>
D            =  500<br>
M             = 1000<br>
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

## My solution
```js
let romanToInt = function(s) {
    
    let result = 0;
    let roman = s;
    
    const romanInteger = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500, 
        M: 1000
    };
    
    // exceptions
    // IV, IX, XL, XC, CD, CM
    // I'm not too sure if I should hard code like this or I should find a mechanism to filter the exceptions
    if (/IV/.test(roman)) {
        result += 4;
        roman = roman.replace(/IV/g, '');
        
    }
    
    if (/IX/.test(roman)) {
        result += 9;
        roman = roman.replace(/IX/g, '');
        
    }
    
    if (/XL/.test(roman)) {
        result += 40;
        roman = roman.replace(/XL/g, '');
        
    }
    
    if (/XC/.test(roman)) {
        result += 90;
        roman = roman.replace(/XC/g, '');
        
    }
    
    if (/CD/.test(roman)) {
        result += 400;
        roman = roman.replace(/CD/g, '');
        
    }
    
    if (/CM/.test(roman)) {
        result += 900;
        roman = roman.replace(/CM/g, '');
        
    }
    
    
    
    
    return roman.split('').reduce((a, c) => a + romanInteger[`${c}`], result);
    
};

romanToInt('III') // 3
romanToInt('LVIII') // 58
romanToInt('MCMXCIV') // 1994
```
## Someone else's solution
```js
var romanToInt = function(s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const curr = map[s[i]], next = map[s[i + 1]];
        result += curr < next ? - curr : curr;
    }
    return result;
};
```
