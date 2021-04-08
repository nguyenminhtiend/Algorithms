var maxProfit = function (prices) {
  let max = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      continue;
    }
    const newProfit = prices[i] - minPrice
    if (newProfit > max) {
      max = newProfit
    }
  }
  return max;
};

console.log(maxProfit([7, 2, 5, 3, 6, 1, 9]));