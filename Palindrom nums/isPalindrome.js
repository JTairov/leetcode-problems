const x = 10

function isPalindrome(x) {
	const str = x.toString().split('')
	
	let result = ''

	for (let i = str.length - 1; i >= 0; i--) {
		result += str[i]
	}

	const reverseNum = Number(result)
	

	if (!isNaN(reverseNum)) {
		if (x == reverseNum) return true
		else return false
	} else {
		return false
	}
}

const result = isPalindrome(x)
console.log(result)