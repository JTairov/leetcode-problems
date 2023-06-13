const nums = [3,2,4]
const target =  6

function twoSum(nums, target) {
	const map = new Map()

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const component = target - num
		if (map.has(component)) {
			return [map.get(component), i]
		} else {
			map.set(num, i)
		}
	}
}

console.log(twoSum(nums, target))