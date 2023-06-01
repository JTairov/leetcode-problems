const s = ["h","e","l","l","o"]

function reverse(s) {
	let right = s.length - 1
	for (let i = 0; i < Math.floor(s.length / 2); i++) {
		[s[i], s[right - i]] = [s[right - i], s[i]]		
	}
	
	// while (left < right) {
	// 	[s[left], s[right]] = [s[right], s[left]]
	// 	left++
	// 	right--
	// }


}

reverse(s)
console.log(s)