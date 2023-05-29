const num = [1,2,0,0]
const k = 34

function addInteger(num, k) {
	return String(BigInt(num.join('')) + BigInt(k)).split('')
}

const result = addInteger(num, k)
console.log(result)
