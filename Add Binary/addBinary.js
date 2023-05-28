const a = 1010
const b = 1011

function addBinary(a, b) {
	const aBin = `0b${a}`
  const bBin = `0b${b}`
  const sum = BigInt(aBin) + BigInt(bBin)
  return sum.toString(2)
}

const result = addBinary(a, b)
console.log(result)