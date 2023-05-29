// const prices = [7, 1, 5, 3, 6, 4]
const prices = [7, 6, 4, 3, 1]

function buySellStock(prices) {
	let maxProfit = 0
	let minPrice = prices[0]

	for (let i = 0; i < prices.length; i++) {
		const price = prices[i];

		minPrice = Math.min(minPrice, price)
		maxProfit = Math.max(maxProfit, price - minPrice)
	}

	return maxProfit
}

console.log(buySellStock(prices))