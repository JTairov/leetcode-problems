const nums = [2, 7, 11, 15]
const target = 9

function twoSum(nums, target, map =  new Map()) {
	for (let index = 0; index < nums.length; index++) {/* Time O(N) */
		const num = nums[index];
		const complement = (target - num);
		const sumIndex = map.get(complement);
		const isTarget = map.has(complement)
		if (isTarget) return [index, sumIndex];

		map.set(num, index);                                /* Space O(N) */
	}
}

console.log(twoSum(nums, target))
