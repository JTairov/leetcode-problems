const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", "utf8");
const lines = fileContent.split(/[\r\n]/gi).filter(item => item != '')
const studentsNum = parseInt(lines[0])
const varNum = parseInt(lines[1])
const petyasRow = parseInt(lines[2])
const petyasCol = parseInt(lines[3])

const findPlaceToSeat = (studentsNum, varNum, petyasRow, petyasCol) => {
	let petyasInd = petyasRow * 2
	if (petyasCol == 1) {
		petyasInd = petyasInd - 1
	}
	const diffFront = Math.abs(petyasRow - Math.ceil((petyasInd - varNum) / 2)) - 1
	const diffBehind = Math.abs(petyasRow - Math.ceil((petyasInd + varNum) / 2)) - 1
	let vasyasInd
	if (diffBehind > diffFront) {
		vasyasInd = petyasInd - varNum
		if (vasyasInd < 1) {
			vasyasInd = petyasInd + varNum	
		}
		if (vasyasInd > studentsNum) {
			return -1
		}
	} 
	if (diffBehind <= diffFront) {
		vasyasInd = petyasInd + varNum
		if (vasyasInd > studentsNum) {
			vasyasInd = petyasInd - varNum
		}
		if (vasyasInd < 1) {
			return -1
		}
	} 

	const vasyasRow = Math.ceil(vasyasInd / 2)
	const vasyasCol = vasyasInd % 2 === 0 ? 2 : 1
	return [vasyasRow, vasyasCol].join(' ')
}
const result = findPlaceToSeat(studentsNum, varNum, petyasRow, petyasCol)

fs.writeFileSync("output.txt", result.toString())


