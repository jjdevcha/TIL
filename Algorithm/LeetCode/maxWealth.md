# Richest Customer Wealth

You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i customer has in the j bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

### Example
```js
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
```

## My solution
```js
var maximumWealth = function(accounts) {
    // customer => accounts[i]
    // money => accounts[i][j]
    
    return Math.max(...(accounts.map(customer => {
        return customer.reduce((prev, cur) => prev + cur, 0);
    })));
    
};
```

## Someone else's solution
```js
var maximumWealth = function(accounts) {
    let richest=0;
    for(let m=0;m<accounts.length;m++){
        
        let customer=accounts[m];
        let wealth=0;
        
        for(let n=0;n<customer.length;n++){
            wealth+=customer[n];
        }
        
        if(wealth>richest){ // Because you check the richest every round you don't need whole storage to save everyone's money
            richest=wealth; // Better for storage
        }
    }
    
    return richest;
};

```
