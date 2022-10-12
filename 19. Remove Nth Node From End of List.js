class Node{
    constructor(val){
        this.val = val 
        this.next = null
        
    }
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
const e = new Node(5)

a.next = b
b.next = c
c.next = d
d.next = e


function removeNthFromEnd(head, n){
    const values = []
    
    while(head){
        values.push(head.val)
        head = head.next
    }
    const removed = values.splice(values.length - n, 1)
    return values 
}



alert(removeNthFromEnd(a, 2))


/**Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function (head, n) {
    let node = head;
    let temp = node;
    let arr = [];

    while (temp) {
        arr.push(temp);
        temp = temp.next;
    }

    let len = arr.length;
    let si = len - n - 1;
    let ei = len - n + 1;
    
    if(si < 0) node = node.next;
    else arr[si].next = arr[ei];

    return node;
};

