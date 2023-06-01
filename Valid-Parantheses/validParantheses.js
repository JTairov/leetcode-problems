const s = "[()}}]["

function isValid(s) {
	const stack = []

	let prev = s[0]
	for (let i = 0; i < s.length; i++) {
		const current = s[i]

		if (current == '(' || current == '[' || current == '{') {
			stack.push(current)
			prev = current
		}			
		
		if (current == ')') {
			if (prev != '(') {
				return false
			} 
			stack.pop()
			prev = stack[stack.length - 1]
		}
		if (current == ']') {
			if (prev != '[') {
				return false
			} 
			stack.pop()
			prev = stack[stack.length - 1]
		}
		if (current == '}') {
			if (prev != '{') {
				return false
			} 
			stack.pop()
			prev = stack[stack.length - 1]
		}

	}

	if (stack.length) return false

	return true
}



const result = isValid(s)
console.log(result)