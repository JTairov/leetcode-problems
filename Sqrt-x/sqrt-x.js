const x = 8

function mySqrt(x) {
	let left = 1
	let right = Math.floor(x / 2) + 1
	let middle

  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    if (middle * middle > x) {
      right = middle - 1;
    } else if (middle * middle < x) {
      left = middle + 1;
    } else {
      return middle;
    }
  }

	return right
}

console.log(mySqrt(x))

console.log(Math.floor(Math.pow(x, 0.5)))