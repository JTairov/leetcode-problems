const s = 'rat'
const t = 'car'

function validateAnagram(s, t) {
	if (s.length !== t.length ) return false
	const dict = {}

	for (let i = 0; i < s.length; i++) {
		dict[s[i]] ? dict[s[i]]++ : dict[s[i]] = 1 
	}

	for (let i = 0; i < t.length; i++) {
		const letter = t[i];
		if (dict[letter]) dict[letter]--		
	}
	for (const letter of Object.keys(dict)) {
		const isEqual = dict[letter] === 0
		if (!isEqual) return false
	}
	return true
}

console.log(validateAnagram(s, t))

// function validateAnagram(s, t) {
// 	const sortedS = s.split('').sort().join('')
// 	const sortedT = t.split('').sort().join('')
	
// 	if (sortedS === sortedT) return true
// 	return false
// }
