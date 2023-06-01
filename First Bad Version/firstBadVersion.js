while ( left < n ) {
	middle = Math.floor((left + right) / 2)
	if (!isBadVersion(middle)) {
			left = middle + 1
	} else if (isBadVersion(middle)) {
			right = middle - 1
	} 
}
return right