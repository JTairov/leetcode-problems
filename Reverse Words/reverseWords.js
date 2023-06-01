const string = "Let's take LeetCode contest"

function reverseWords(s) {
	let arrayedStr = s.split(' ')

	for (let i = 0; i < arrayedStr.length; i++) {
		const word = arrayedStr[i].split('')
		let right = word.length - 1

		for (let j = 0; j < Math.floor(word.length / 2); j++) {
			[word[j], word[right - j]] = [word[right - j], word[j]]		
		}
		arrayedStr[i] = word.join('')
	}
	
	return arrayedStr.join(' ')
}

// reverseWords(string)
console.log(reverseWords(string))
