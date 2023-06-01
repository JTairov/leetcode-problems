let nums = [-4,-1,0,3,10]  
var sortedSquares = function (nums) {
	let left = 0
	let right = nums.length - 1
	let result = new Array(nums.length)
	for (let i = nums.length - 1; i >= 0; i--) {
		if (Math.abs(nums[left]) < Math.abs(nums[right])) {
			result[i] = nums[right] ** 2
			right--
		} else {
			result[i] = nums[left] ** 2
			left++;
		}
	}
	return result;
}

console.log(sortedSquares(nums))
