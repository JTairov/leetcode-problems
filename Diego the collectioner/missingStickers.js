const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
const lines = fileContent.split(/[\r\n]/gi).filter(item => item != '')
const dStickersCount = parseInt(lines[0])
const dStickers = lines[1].split(' ').map(item => +item) 
const collsCount = parseInt(lines[2])
const collsStickers = lines[3].split(' ').map(item => +item)

const missingStickers = (dStickersCount, dStickers, collsCount, collsStickers) => {
	let set = new Set(dStickers)
	let sorted = Array.from(set).sort((a, b) => a - b) 
	let result = []
	outer: for (let i = 0; i < collsCount; i++) {
		const pi = collsStickers[i]
		let start = 0
		let end = sorted.length - 1
		let middle
		while (start <= end) {
			middle = Math.floor((start + end) / 2)
			if (sorted[middle] === pi) {
				result.push(middle)
				continue outer
			}
			if (sorted[middle] > pi) end = middle - 1 
			else start = middle + 1
		}
		result.push(start)
	}
	return result.join('\r\n')
}
const result = missingStickers(dStickersCount, dStickers, collsCount, collsStickers)

fs.writeFileSync("output.txt", result.toString())


