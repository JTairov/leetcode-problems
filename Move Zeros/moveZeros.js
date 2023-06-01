let nums = [0, 1, 0, 3, 12]

function moveZeros(nums) {
	let pos = 0
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			nums[pos++] = nums[i];
		}
	}
	for (i = pos; i < nums.length; i++) {
		nums[i] = 0; 
	}
	// let zeros = []
	// for (let i = nums.length - 1; i >= 0; i--) {
	// 	if (nums[i] == 0) {
	// 		zeros.push(nums[i])
	// 		nums.splice(i, 1)
	// 	}
	// }

	// nums.push(...zeros)
	
}
// let diff = nums.length - i
// console.log(diff)
// nums[i + diff] = nums[i]

moveZeros(nums)
console.log(nums.push(89, 78))