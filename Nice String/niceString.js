const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");
const lines = fileContent.split(/[\r\n]/gi).filter(item => item != '')
const k = parseInt(lines[0])
const string = lines[1]


const niceString = (k, string) => {
	let maxLength = 1
	let left = 1
	let current = 1
	let kLeft = k
	for (let i = 0; i < string.length; i++) {
		
		maxLength = Math.max(maxLength, current)
	}
	return maxLength
}
const result = niceString(k, 'helto')
console.log(result)

fs.writeFileSync("output.txt", result.toString())


