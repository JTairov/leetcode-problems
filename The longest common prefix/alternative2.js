const strs = ["flower","flow","flight"]

var longestCommonPrefix = function(strs) {
	'use strict';
	if (strs === undefined || strs.length === 0) { return ''; }
	
	return strs.reduce((prev, next) => {
			let i = 0;
			while (prev[i] && next[i] && prev[i] === next[i]) i++;
			console.log(prev)
			console.log(next)
			return prev.slice(0, i);
	});
};

console.log(longestCommonPrefix(strs))