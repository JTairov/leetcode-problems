// const str = 'dvdf'
// const str = 'pwwkew'
// const str = 'nfpdmpi'
// const str = 'abba'

function longestSubstr(str) {
	const dic = {}

	let start = 0
	let end = 0
	let maxLength = 0
	
	while (end < str.length) {
		const letter = str[end]
		if (dic[letter] == undefined) {
			dic[letter] = end
		} else {
			start = Math.max(dic[letter] + 1, start)
			dic[letter] = end
		}
		maxLength = Math.max(end + 1 - start, maxLength)
		end++
	}
	return maxLength
}

console.log(longestSubstr(str))