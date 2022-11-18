# Binary Tree Inorder Traversal
- 이진트리 중위순회
Given the root of a binary tree, return the inorder traversal of its nodes' values.

## My solution
```js
// Using recursion 
const inorderTraversal = function(root) {
    
    let res = [];
    
    inT(root);
    
    function inT(root) {
        
        if (root != null) {
            inT(root.left);
            res.push(root.val);
            inT(root.right);
        }
        
    }
    
    return res;
}
```

```js
// Using stack 
const inorderTraversal = function(root) {
    
    let curNode = root;
    let stack = [];
    let returnVal = [];
    
    while (curNode != null || stack.length != 0) {
        
        while (curNode != null) {
            stack.push(curNode);
            curNode = curNode.left;
        }
        
        curNode = stack.pop();
        returnVal.push(curNode.val);
        curNode = curNode.right;

    };
    
    return returnVal;
}
```
