/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 */

const reverseList = (head) => {
    let prev = null
    let cur = head
    while (cur){
        let nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt
    }
    return prev
}