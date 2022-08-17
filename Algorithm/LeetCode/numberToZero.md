# Number of steps to reduce a number to zero
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

### Example
```js
numberOfSteps(14)
// 6
```

## My solution
```js
const numberOfSteps = function(num) {
    let count = 0;
    let number = num;
    
    while (number !== 0) {
        if (number % 2 === 0) {
            number = number / 2;
            count++;
        } else {
            number = number - 1;
            count++;
        }
    }
    
    return count;
    
};
```

## Someone else's solution
```js
var numberOfSteps  = function(num) {
    var res = 0;
    while (num != 0) {
        num = num % 2 == 0 ? num / 2 : --num; // This person used ternary operator to make it look simpler
        res++;
    }
    return res;     
};
```
