const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");
const lines = fileContent.split(/[\r\n]/gi).filter(item => item != '')
const k = parseInt(lines[0])
const string = lines[1]

const niceString = (k, string) => {
	let maxNiceString = 0
	for (let i = 0; i < string.length; i++) {
		const letter = string[i];
		let kLeft = k
		let left = 0
		let right = 0
		let current = 0
		while (right < string.length) {
			if (string[right] === letter && kLeft >= 0) {
				current++
				right++
			} else if (string[right] !== letter && kLeft > 0) {
				kLeft--
				right++
				current++
			} else {
				if (string[left] !== letter) {
					kLeft++
				}
				left++
				current--
			}
			maxNiceString = Math.max(maxNiceString, current)
		}
	}
	return maxNiceString
}
const result = niceString(k, string)
console.log(result)

fs.writeFileSync("output.txt", result.toString())


