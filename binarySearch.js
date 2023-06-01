const arr =  Array(100)

for (let i = 0; i < arr.length; i++) {
	arr[i] = i + 1
}


function binarySearch(arr, item) {
	let start = 0
	let end = arr.length - 1
	let middle
	let found = false
	let position = -1
	let counter = 0
	while (!found && start <= end) {
		middle = Math.floor((start + end) / 2)

		if (arr[middle] == item) {
			found = true
			position = middle
		} 

		if (item < arr[middle]) {
			end = middle - 1
			counter++
		} else {
			start = middle + 1
			counter++
		}

	}
	return {position, counter}
}

console.log(binarySearch(arr, 65))