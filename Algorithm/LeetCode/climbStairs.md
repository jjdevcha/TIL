# Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

### Example
```
Input: n = 3
Output: 3
```

## My solution
```js
var climbStairs = function(n) {
    let beta = [1, 2];
    
    for (let i = 0; i < n - 2; i++) {
        beta.push(beta[i] + beta[i + 1]);
    }
    
    return beta[n - 1];
};
```

## Someone else's solution
```js
var climbStairs = function(n) {
    if (n < 4) {
        return n
    }
    var firstSum = 2
    var secondSum = 3
    
    for (var i = 4; i < n; i++) {
		// It is simply swapping two vars but choose this method for not using temp variable
        secondSum = firstSum + secondSum
        firstSum = secondSum - firstSum
    }
    return firstSum + secondSum
};
```
