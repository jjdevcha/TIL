# Maximum Depth of Binary Tree
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

## My first Approach 
I tried to reuse the mechanism of inorder Traversal (It didn't work with couple of cases)
```js
const maxDepth = function(root) {
    let curNode = root;
    let depArr = [];
    let curDep = 0;
    let stack = [];

    if (!root) return 0;
    if (root.left == null && root.right == null) return 1;

    while(curNode != null || stack.length != 0) {
        while(curNode != null) {
            curDep++;
            stack.push(curNode);
            curNode = curNode.left
        }
        
        depArr.push(curDep);
        curNode = stack.pop();
        if (curNode.left) curDep--;
        curNode = curNode.right;

    }
    
    return Math.max(...depArr);
};
```

## Approach with recursive
```js
var maxDepth = function(root) {
    if (root === null) return 0;

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return 1 + Math.max(leftDepth, rightDepth);
};
```
