const nums = [1, 1, 2]
var removeDuplicates = function(nums) {
	let i = 0;
	for (let j = 0; j < nums.length; j++) {
			if (nums[j] != nums[i]) 
					nums[++i] = nums[j];
			// console.log("i: ", i, "j: ", j)
			console.log(nums)
	}
	return ++i;
};

console.log(removeDuplicates(nums))