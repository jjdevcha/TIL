# Search Insert

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

## My solution
```js
let searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        } else if (nums[i] > target) {
            return i - 1;
        }
    }
};
```

## Someone else's solution
Using binary search
```js
var searchInsert = function(nums, target) {
    var right = nums.length - 1;
    var left = 0;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }
    
    return left;
};
```
