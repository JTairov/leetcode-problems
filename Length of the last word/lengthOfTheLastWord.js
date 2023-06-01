const s = "   fly me   to   the moon  "

function lengthOfLastWord(s) {
	const splitted = s.trim().split(' ')

	return splitted[splitted.length - 1].length
}

const result = lengthOfLastWord(s)
console.log(result)