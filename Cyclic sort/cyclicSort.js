const nums = [4, 3, 2, 7, 8, 2, 3, 1]

function cyclicSort(nums) {
	let i = 0
	while (i < nums.length) {
		let pos = nums[i] - 1
		if (nums[i] !== nums[pos]) {
			[nums[i], nums[pos]] = [nums[pos], nums[i]]
		} else {
			i++
		}
	}
	console.log(nums)
	let missed = []
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== i + 1) {
			missed.push(i + 1)
		}
	}
	return missed
}

cyclicSort(nums)