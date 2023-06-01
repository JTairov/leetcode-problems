const s1 = 'ab'
const s2 = 'eidbaooo'

function checkInclusion(s1, s2) {

	if (s1.length > s2.length) return false 

	const dict = {}

	for (let i = 0; i < s1.length; i++) {
		dict[s1[i]] = (dict[s1[i]] || 0) + 1
	}

	let left = 0,
		right = 0,
		requiredLength = s1.length

	while (right < s2.length) {

		if (dict[s2[right]] > 0) requiredLength--

		dict[s2[right]]--
		right++

		if (requiredLength === 0) return true

		if (right - left === s1.length) {

			if (dict[s2[left]] >= 0) requiredLength++
				
			dict[s2[left]]++
			left++
		}
	}
	return false
}

console.log(checkInclusion(s1, s2))

