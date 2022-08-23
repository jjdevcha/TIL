#  Running Sum of 1d Array

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
<br>
Return the running sum of nums.

### Example
```
Input: nums = [1, 2,3 ,4]
Output: [1, 3, 6, 10]
Explanation: [1, 1+2, 1+2+3, 1+2+3+4]
```

## My solution
```js
let runningSum = function(nums) {
    let numArr = [];
    
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = 0; j <= i; j++) {
            sum += nums[j];
        }
        numArr.push(sum);
    }
    return numArr;
};
```

## Someone else's solution
```js
var runningSum = function(nums) {
    for(let i=1;i<nums.length;i++){
        nums[i]+=nums[i-1]
    }
    return nums
};
```
