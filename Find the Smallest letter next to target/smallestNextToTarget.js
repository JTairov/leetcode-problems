const letters =  ["c","f","j"]
const target = "c"

function smallestNextToTarget(letters, target) {
	let left = 0
	let right = letters.length - 1
	let middle

	while(left <= right) {
		middle = Math.floor((left + right) / 2)
		if (letters[middle] > target) {
			right = middle - 1
		} else {
			left = middle + 1
		}
	}
	return letters[left % letters.length]
}

smallestNextToTarget(letters, target)