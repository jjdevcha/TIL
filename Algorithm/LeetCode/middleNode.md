# Middle of the linked list

Given the head of a singly linked list, return the middle node of the linked list.
<br>
If there are two middle nodes, return the second middle node.

### Example
```
Input: head = [1, 2, 3, 4, 5, 6]
Output: [4, 5, 6]
```

## My solution 1
```js
var middleNode = function(head) {
    let node = head;
    let returnNode = head;
    let nodeArr = [];
    
    while(node) {
        nodeArr.push(node.val);
        node = node.next;
    }

    for (let i = 0; i <= (nodeArr.length / 2) - 1; i++) {
        returnNode = returnNode.next;
    }
    
    return returnNode;
};
```

## My solution 2
It's same mechanism with solution 1. But using less storage.
```js
let middleNode = function(head) {
    let node = head;
    let returnNode = head;
    let count = 0;
    
    while(node) {
        node = node.next;
        count++;
    }
    
    for (let i = 0; i <= (count / 2) - 1; i++) {
        returnNode = returnNode.next;
    }
    
    return returnNode;
 };
```

## Someone else's solution
```js
var middleNode = function(head) {
    let slow = head, fast = head
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};
```
