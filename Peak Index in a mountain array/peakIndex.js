const arr = [0,1,0]

var peakIndexInMountainArray = function(arr) {
	let left = 0
	let right = arr.length - 1
	let peak

	while (left <= right) {
		middle = Math.floor((right + left) / 2)
		if (arr[middle] > arr[middle - 1] && arr[middle] > arr[middle + 1]) return middle
		if (arr[middle] < arr[middle + 1]) {
			left = middle + 1
		} else if (arr[middle] < arr[middle - 1]) {
			right = middle - 1
		}
	}
	return middle
};

console.log(peakIndexInMountainArray(arr))