const nums = [2, 7, 11, 15]
const target = 6


var twoSum = function(nums, target) {
	let map = new Map();
	
	for(let i = 0; i < nums.length; i ++) {
			if(map.has(target - nums[i])) {
					return [map.get(target - nums[i]), i];
			} else {
					map.set(nums[i], i);
			}
	}
	return [];
};

const result = twoSum(nums, target)
console.log(result)

// var twoSum = function(nums, target) {
// 	let hash = {};
	
// 	for(let i = 0; i < nums.length; i++) {
// 		const n = nums[i];
// 		if(hash[target - n] !== undefined) {
// 			return [hash[target - n], i];
// 		}
// 		hash[n] = i;
// 	}
// 	return [];
// }