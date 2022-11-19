# Same Tree

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

## My solution
< Recursion>
```js
let isSameTree = function(p, q) {
    
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;
    
    return isSameTree(p.left, q.left) & isSameTree(p.right, q.right);
};
```

I want to solve this problem in iteration but haven't figured out how to yet. 
