const nums = [1, 2, 3, 1]

function containsDuplicates(nums) {
	let set = new Set()
	
	for (let i = 0; i < nums.length; i++) {
		if (set.has(nums[i])) return true
		else set.add(nums[i])
	}

	return false

}

console.log(containsDuplicates(nums))