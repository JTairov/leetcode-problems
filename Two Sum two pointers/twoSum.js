const numbers = [2, 7, 11, 15]
const target = 9

function twoSum(numbers, target) {
	let left = 0
	let right = numbers.length - 1
	let result = []
	
	while (numbers[left] + numbers[right] !== target) {
		if (numbers[left] + numbers[right] < target) {
			left++
		} else if (numbers[left] + numbers[right] > target) {
			right--
		}
	}
	result.push(left, right)
	return result
}

console.log(twoSum(numbers, target))