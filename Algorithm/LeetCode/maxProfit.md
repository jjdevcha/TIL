# Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

### Example
```
Input: prices = [7,1,5,3,6,4]
Output: 5
```

## My solution 1
Time complexity O(n^2)
```js
let maxProfit = function(prices) {
    // {4, 7, 1, 2, 3} output 3
    
    let profit = prices[1] - prices[0];
    
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let newProfit = prices[j] - prices[i];
            if (newProfit > profit) {
                profit = newProfit;
            }
        }
    }
    
    return profit > 0 ? profit : 0;
};
```

## My solution 2
Time complexity O(n) <br>
This the array is on a graph and test the minimum price and max profit as you go for loop
```js
let maxProfit = function (prices) {

    let minPrice = prices[0];
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    
    return maxProfit;
};
```
