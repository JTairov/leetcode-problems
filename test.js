function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

let head = [1, 2, 3, 4, 5]

// function removeElements(head,  val) {
// 	let dummyNode = new ListNode(-1, head)
// 	let current = dummyNode

// 	console.log(dummyNode)

// 	while (current.next !== null) {
// 		if (current.next.val === val) {
// 			current.next = current.next.next
// 		} else {
// 			current = current.next
// 		}
// 	}

// 	return dummyNode.next
// }

// function middleNode(head) {
// 	let counter = 0
// 	let current = head
// 	while (current.next !== null) {
// 		counter++ 
// 		current = current.next
// 	}

// 	let middle = Math.floor(counter / 2)
// 	let step = 0
// 	let result = []
// 	current = head
// 	while (current.next !== null) {
// 		if (step >= counter - middle) {
// 			result.push(head.val)
// 		}
// 		current = head.next
// 	}

// 	return new ListNode(-1, result).next
// }

// console.log(middleNode(head))

console.log(Math.pow(16, 0.5))