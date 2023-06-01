const s = "III"

function romanToInt(s) {
	const roman = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000
	}
	let result = roman[s[0]]

	let currentInt = roman[s[0]]
	for (let i = 1; i < s.length; i++) {
		let nextInt = roman[s[i]]
		if (nextInt < currentInt) {
			result += nextInt
		} else if (nextInt == currentInt) {
			result +=nextInt
		} else {
			result = result - 2 * currentInt + nextInt
		}
		currentInt = roman[s[i]]
	}

	return result
}

const result = romanToInt(s)
console.log(result)