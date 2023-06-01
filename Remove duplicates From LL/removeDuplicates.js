/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


function removeDuplicates(head) {
	let dummy = ListNode(0, head)
	let current = dummy.next

	while (current) {
		if (current.val == current.next.val) {
			current = current.next.next
		} else {
			current = current.next
		}
	}

	return dummy.next
}