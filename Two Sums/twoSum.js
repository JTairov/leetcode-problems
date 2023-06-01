const nums = [2, 7, 11, 15]
const target = 9

function twoSum(nums, target) {
	const result = []
	
	let firstInd = 0
	let secondInd = -1

	for (let i = firstInd + 1; i < nums.length; i++) {
		if (nums[firstInd] + nums[i] == target) {
			secondInd = i
			break
		}	

		if (i == nums.length - 1) {
			if (secondInd == -1) {
				firstInd++
				i = firstInd				
			}
		}
		
	}	

	result.push(firstInd, secondInd)

	return result
}

const result = twoSum(nums, target)
console.log(result)

// tests: nums = [3, 2, 4] target = 6
// nums = [3, 2, 3] target= 6
// nums = [3, 3] target= 6