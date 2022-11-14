# Remove Duplicates from Sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

# My solution
I made new node every time to connect it to the previous node. 
```js
const deleteDuplicates = function(head) {
    
    if (!head) return head;
    
    let returnList = {val: head.val, next: null};
    let node = returnList;
    let prev = head.val;
    
    head = head.next;
    
    while (head) {
        if (head.val !== prev) {
            let newList = {val: head.val, next: null};
            node.next = newList;
            prev = head.val;
            node = node.next;
            head = head.next
        } else {
            head = head.next;
        }
    }
    
    return returnList;
    
};
```

## Someone else's
They didn't use any storage. Simple way to disconnect and connect node. 
```js
var deleteDuplicates = function(head) {
    if(!head) return head
    var cur = head
    
    while(cur!=null && cur.next != null) {
        if(cur.next.val === cur.val) {
            cur.next = cur.next.next
        }else {
            cur = cur.next
        }
    }
    return head
}
```
