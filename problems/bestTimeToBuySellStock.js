/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

 
 *
 */

/**
 * Blurb
 * uses two pointers: one (i) to track the day to buy, and the other (j) to track the day to sell. 
 * As it iterates through the prices, if selling on day j results in a loss (i.e., the price on day j is lower than on day i), 
 * it moves the buy day to j; 
 * otherwise, it calculates the profit and updates the maximum profit (maxP) if it's greater than the current maximum.

 */



const maxProfit = (prices) => {
    let maxP = 0
    let [i, j] = [0, 1]
    while ( j< prices.length){
        const profit = prices[j] -prices[i]
        if (profit < 0){
            i=j
        } else {
            maxP = Math.max(profit, maxP)
        }
        j++
    }
    return maxP
}

console.log(maxProfit([7,6,4,3,1]))