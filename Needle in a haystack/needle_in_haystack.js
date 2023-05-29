const haystack = 'sadbutsad'
const needle = 'sad'

function needleFn(needle, haystack) {
	let resultIndex = -1
	for (let i = 0; i < haystack.length; i++) {
		const letter = haystack[i];
		
		if (letter == needle[0]) {
			if (haystack.slice(i, i + needle.length) === needle) {
				resultIndex = i
				break
			}
		}
	}

	return resultIndex
}

console.log(needleFn(needle, haystack))


// if (haystack.toLowerCase().indexOf(needle.toLowerCase()) === -1) {
// 	return -1
// } else {
// 	return  haystack.toLowerCase().indexOf(needle.toLowerCase())
// }