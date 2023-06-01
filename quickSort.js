function quickSort(arr) {
	if (arr.length <= 1) return arr
	const midInd = Math.floor((arr.length) / 2)
	const midPoint = arr[midInd]
	const high = []
	const low = []


	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == midPoint) continue
		if (arr[i] > midPoint) {
			high.push(arr[i])
		} else {
			low.push(arr[i])
		}
	}
	return [...quickSort(low), midPoint, ...quickSort(high)]
}

let arr = [4,9,9,49,121]
console.log(quickSort(arr))