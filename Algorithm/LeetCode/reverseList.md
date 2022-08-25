# Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

### Example
```
Input: 1->2->3->4->5
Output: 5->4->3->2->1
```

## My Solution
```js
// I actually didn't use the mechanism of the linked list
let reverseList = function(head) {
     let newList = null;
        
        while(head) {
            newList = {val: head.val, next: newList};
            head = head.next;
        }
    
    return newList;
};
```

## Someone else's solution
[Refer this page](https://www.geeksforgeeks.org/reverse-a-linked-list/)
```js
var reverseList = function(head) {
    if(head === null) return head;   
    
    let node = head;     
    let prev = null;
    
    while (node) {
        let saveNext = node.next
        node.next = prev;
        prev = node;        
        node = saveNext;        
    }
    
    return prev;
};
```
