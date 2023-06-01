const nums = [2,2,1]

function singleNumber(nums) {
	let hash = {}
	for (let i = 0; i < nums.length; i++) {
		if (hash[nums[i]]) hash[nums[i]]++
		else hash[nums[i]] = 1
	}
	for (const num in hash) {
		if (hash[num] == 1) return +hash[num]		
	}
}

// XOR Solution

function singleNumberXOR(nums) {
	let mask = 0

	for (const num of nums) {
		mask = mask ^ num
	}
	return mask
}
console.log(singleNumberXOR(nums))
