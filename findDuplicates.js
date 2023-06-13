const nums = [10,2,5,10,9,1,1,4,3,7]

function finDuplicates(nums) {
	let result = []
	for (let i = 0; i < nums.length; i++) {
		const index = Math.abs(nums[i]) - 1;
		const value = nums[index]

		if (value < 0) result.push(Math.abs(value))
		else {
			nums[index] = - nums[index]
		}
	}
	return result
}

console.log(finDuplicates(nums))