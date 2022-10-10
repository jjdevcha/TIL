# Remove Duplicates
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.



## My solution
```js
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};
```

## Someone else's solution
```js
var removeDuplicates = function(nums) {
    let start = 0     //O(1)
    for(i=0;i<nums.length;i++){   //O(n)
        if(nums[i] != nums[i+1]){
            nums[start] = nums[i]
            start++
        }
    }
    return start
};
```
