const arr = [1, 2, 3, 4]

function productExceptSelf(arr) {
	const result = []

	let multiplied = 1
	for (let i = 0; i < arr.length; i++) {
		multiplied *= arr[i]
	}

	for (let i = 0; i < arr.length; i++) {
		const num = arr[i];
		result.push(multiplied / num)		
	}
	return result
}

console.log(productExceptSelf(arr))