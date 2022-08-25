# Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

### Example
```
Input: list1 = 1->2->4, list2 = 1->3->4
Output: 1->1->2->3->4->4
```

## My solution
```js
var mergeTwoLists = function(list1, list2) {
    let list1Arr = [];
    let list2Arr = [];
    
    while(list1) {
        list1Arr.push(list1.val);
        list1 = list1.next;
    }
    
    while(list2) {
        list2Arr.push(list2.val);
        list2 = list2.next;
    }
    
    function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { val: array[i], next: list };
    }
    return list;
}
    
    return arrayToList(list1Arr.concat(list2Arr).sort((a, b) => a - b));
};
```

## Someone else's solution
```js
var mergeTwoLists = function(l1, l2) {
    let list = new ListNode()
    let head = list
    
    while (l1 !== null && l2 !== null) {
	
		// Select the smallest value from either linked list,
		// then increment that list forward.
        if (l1.val < l2.val) {
            list.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            list.next = new ListNode(l2.val)
            l2 = l2.next
        }
        
        list = list.next
    }
    
	// It's possible that one linked list is shorter than the other so we just
	// add on the remainder of the last linked list. It's already sorted :)
    if (l1 !== null)
        list.next = l1
    if (l2 !== null)
        list.next = l2
    
	// return .next because this first element in the linkedlist is empty
    return head.next
};
```
