const nums = [1,3,5,6]
const target = 4

function binarySearch(nums, target) {
	
	let position = -1
	let found = false
	let start = 0
	let end = nums.length - 1

	while (!found && start <= end) {

		let middle = Math.floor((start + end) / 2)

		if (nums[middle] == target) {
			position = middle
			found = true
		}
		if (target > nums[middle] && !found) {
			position = middle + 1
			start = middle + 1
		} else if (target < nums[middle] && !found) {
			// position = middle
			end = middle - 1
		}
	}	

	return position
}



const result = binarySearch(nums, target)
console.log(result)