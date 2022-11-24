# Symmetric Tree

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

# My solution

```js
const isSymmetric = function(root) {
    
    function checkF (leftHead, rightHead) {
        if (leftHead === null && rightHead === null) return true;
        if (leftHead === null || rightHead === null) return false;
        if (leftHead.val !== rightHead.val) return false;
        
        return checkF(leftHead.left, rightHead.right) && 
            checkF(leftHead.right, rightHead.left);
    }
    
    return checkF(root.left, root.right);
};
```
