# Min Cost Climbing Stairs

You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

### Example
```
Input: cost = [10,15,20]
Output: 15

Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
```

## My solution
```js
let minCostClimbingStairs = function (cost) {

    let minCostArr = cost;
    minCostArr.push(0);

    for (let i = cost.length - 3; i >= 0; i--) {


        minCostArr[i] = cost[i] + Math.min(minCostArr[i + 1], minCostArr[i + 2]);
    }
    return Math.min(minCostArr[0], minCostArr[1]);
};
```

## Someone else's solution
```js
var minCostClimbingStairs = function(cost) {
     let f1 = 0, f2 = 0;
     for (let i = cost.length - 1; i >= 0; --i) {
        let f0 = cost[i] + Math.min(f1, f2);
        f2 = f1;
        f1 = f0;
     }
     return Math.min(f1, f2);
};
```
