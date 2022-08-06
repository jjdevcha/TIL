# Palindrome Linked List
Given the head of a singly linked list, return true if it is a palindrome
### Example
```js
1 -> 2 -> 2 -> 1 
// true

1 -> 2
// false
```
## My solution 1
Since there is no such thing as linked list in Javascript I thought I could pass this test with array method. But Leetcode wanted me to use the embedded node link method. So failed.
```js
let isPalindrome = function(head) {
    // head.length -> 4
    // head[0] === head[3]
    // head[1] === head[2]
    
    for (let i = 0; i < head.length / 2; i++) {
        if (head[i] !== head[head.length - 1 - i]) {
            return false;
        }
    }
    
    return true;
};

```

## My solution 2
It's a more C language way of solving the problem. There is no such thing as `link.val` in Js. But there was a pre-made function in Leetcode. 
```js
let isPalindrome = function(head) {
    let node = head;
    
    let forward = '';
    let reverse = '';
    
    while (node) {
        forward += node.val;
        reverse = node.val + reverse;
        node = node.next;
    }
    
    return forward === reverse;
};
```
