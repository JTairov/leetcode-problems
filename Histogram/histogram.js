// const fs = require('fs')
// let fileContent = fs.readFileSync("input.txt", "utf8");
// const arrayOfSym = fileContent.split(/[\s\r\n]/gi).join('').split('')
// fs.writeFileSync("output.txt", result.toString())

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin
});

const histogram = (arrayOfSym) => {
	const vocabulary = {}
	let maxSymCount = 0
	for (let i = 0; i < arrayOfSym.length; i++) {
		vocabulary[arrayOfSym[i]] ? vocabulary[arrayOfSym[i]]++ : vocabulary[arrayOfSym[i]] = 1
		maxSymCount = Math.max(maxSymCount, vocabulary[arrayOfSym[i]])
	}
	const quickSort = (array) => {
		if (array.length <= 1) {
			return array
		}
		const middle = array[Math.floor(array.length / 2)]
		const less = []
		const greater = []
		for (let i = 0; i < array.length; i++) {
			if (array[i] === middle) continue
			if (array[i] < middle) {
				less.push(array[i])
			}
			else {
				greater.push(array[i])
			}
		}
		return [...quickSort(less), middle, ...quickSort(greater)]
	}

	const sortedArrayOfSym = quickSort(arrayOfSym)
	let result = ''

	for (let i = maxSymCount; i > 0; i--) {
		for (let j = 0; j < sortedArrayOfSym.length; j++) {
			if (vocabulary[sortedArrayOfSym[j]] >= i) {
				result += '#'
			} else {
				result += ' '
			}
		}
		result += '\n'
	}

	return result += sortedArrayOfSym.join('')
}

let lines = [];
rl.on('line', (line) => {
	lines.push(line);
}).on('close', () => {
	const arrayOfSym = lines.join('').split(/[\s\r\n]/gi).join('').split('')
	const result = histogram(arrayOfSym)
	process.stdout.write(result.toString());
});
