const nums = [1,1,2]

const removeDuplicates = (nums) => {
	let current = nums[0]
	let i = 1
	while (i < nums.length) {
		if (current == nums[i]) {
			nums.splice(i, 1)
		} else {
			current = nums[i]
			i++
		}
	}
	return nums
}

const result = removeDuplicates(nums)
console.log(result)