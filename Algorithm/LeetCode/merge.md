# Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
```

# My solution
Have to think about how to handel the last indexes from each array.
```js
var merge = function(nums1, m, nums2, n) {
    m--; n--;
    let index = nums1.length - 1;
    
    while (index >= 0) {
        if (m < 0) {
            nums1[index] = nums2[n--];
        } else if (n < 0) {
            nums1[index] = nums1[m--];
        } else {
            if (nums1[m] > nums2[n]) {
                nums1[index] = nums1[m--];
            } else {
                nums1[index] = nums2[n--];
            }
        }
        index--;
    }
};
```
