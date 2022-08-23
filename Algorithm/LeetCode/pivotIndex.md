# Find Pivot Index

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

### Example
```
Input: [1, 7, 3, 6, 5, 6]
Output: 3
```

## My solution
```js
var pivotIndex = function (nums) {

    if (nums.slice(1).reduce((a, c) => a + c, 0) === 0) {
        return 0;
    } else {
        for (let i = 1; i < nums.length - 1; i++) {
            if (nums.slice(0, i).reduce((a, c) => a + c, 0) === nums.slice(i + 1).reduce((a, c) => a + c, 0)) {
                return i;
            }
        }
    }
    if (nums.slice(0, nums.length - 1).reduce((a, c) => a + c, 0) === 0) {
        return nums.length - 1;
    }
    return -1;
};
```

## Someone else's solution
```js
var pivotIndex = function(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    let leftSum = 0;
    for(let i = 0; i < nums.length; i++) {
        if(leftSum == sum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};
```
