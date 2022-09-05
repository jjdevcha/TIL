# Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### Example
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

## Solution 1
```js
var twoSum = function(nums, target) {
    // loop through nums array, find two numbers that add up to target
    
    let resultIndex = [];

nums.forEach((cur, index) => {
        if ((nums.includes(target-cur)) && (index !== nums.indexOf(target - cur)) && (resultIndex.length == 0))  {
            resultIndex.push(index, nums.indexOf(target - cur));
        }
    });
    return resultIndex.sort((a, b) => a - b);
};

 // Can't avoid same index with this method
//     nums.forEach((cur, index) => {
//         if (nums.includes(target-cur) && resultIndex.length < 2)  {
//             resultIndex.push(index, nums.indexOf(target - cur));
//         }
//     });
//     return resultIndex;
// };

```

## Solution 2 Using Hash Map -> trading space complexity with time
```js
var twoSum = function(nums, target) {
    let numsMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        numsMap.set(nums[i], i);
    }
    
    for (let i = 0; i < nums.length; i++) {
        let n = target - nums[i];
        let nIndex = numsMap.get(n);
        if (nIndex !== undefined && nIndex !== i) {
            return [nIndex, i];
        }
    }
};
```

## Solution 3 Simple for loop -> time complexity big(n^2)
```js
let twoSum = function(nums, target) {
    for (let i = nums.length - 1; i >= 0; i--) {
        let otherHalf = target - nums[i];
        let indexOfHalf = nums.indexOf(otherHalf);
        if (indexOfHalf !== i && indexOfHalf !== -1) {
            return [indexOfHalf, i];
        } 
    }
};
```
   
