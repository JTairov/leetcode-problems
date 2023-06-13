const strs = ["eat","tea","tan","ate","nat","bat"]

function group(strs) {
	const map = new Map()
	const result = []
	for (const str of strs) {
		const sorted = str.split('').sort().join('')
		if (!map.has(sorted)) {
			map.set(sorted, [str])
		} else {
			const mapped = map.get(sorted)
			mapped.push(str)
			map.set(sorted, mapped)
		}
	}
	return Array.from(map.values())
}

console.log(group(strs))
