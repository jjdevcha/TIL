# N-ary Tree Preorder Traversal

Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

### Example
```
Input: root = [1,null,3,2,4,null,5,6]
Output: [1,3,5,6,2,4]
```

## My solution 
I didn't solve this by myself. I had to refer to someone else's solution since I couldn't figure out the method. <br>
So for this problem I have to understand the idea of below
- Tree Preorder Traversal : NLR
- Stack memory 
<br>
In this solution, we store the children values in reverse at stack and pop the latest value from stack. (Like actual stack memory)
```js
let preorder = function(root) {
    
    if (!root) {
        return [];
    }
    
    let order = [];
    let stack = [];
    stack.push(root);
    
    while (stack.length > 0) {
        let node = stack.pop(); //The latest value that got added gets push to the order
        order.push(node.val);
        let children = node.children;
        
        for (let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i]);
        }
    }
    return order;
    
};

```
