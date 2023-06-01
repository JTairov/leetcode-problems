const num = 145

function getFactorial(num) {
	let result = 1
	while (num > 0) {
		result *= num
		num--
	}
	return result
}

function sumOfDigitFactorials(num) {
	const arr = String(num).split('')
	let sum = 0
	for (let i = 0; i < arr.length; i++) {
		let number = Number(arr[i])		
		sum += getFactorial(number)
	}

	return sum == num
}

function sumOfFactorialNums() {
	let sum = 0
	let num = 3

	while (num <= 10000000) {
		if (sumOfDigitFactorials(num)) {
			sum += num
		}
		num++
	}

	return sum
}

const result = sumOfFactorialNums()
console.log(result)