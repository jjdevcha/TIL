# The K Weakest Rows in a Matrix

You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.
<br>
A row i is weaker than a row j if one of the following is true:
<br>
- The number of soldiers in row i is less than the number of soldiers in row j.
- Both rows have the same number of soldiers and i < j.

<br>Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

### Constraints
- m == mat.length
- n == mat[i].length
- 2 <= n, m <= 100
- 1 <= k <= m
- matrix[i][j] is either 0 or 1

### Example
```js
KWeakestRows([[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 3);
 // [2, 0, 3]
```

## My solution
```js
var kWeakestRows = function(mat, k) {
    // make an array for the number of soldiers of each row
    let soldiers = mat.map(row => {
       return row.filter(cur => cur == 1).length; 
    });
    
    let result = [];
    
    for (let i = 0; i < soldiers.length; i++) {
        let index = soldiers.indexOf(Math.min(...soldiers));
        result.push(index);
        soldiers.splice(index, 1, 100);
    }
    
    return result.slice(0, k);
};
```

## Someone else's solution
```js
const kWeakestRows =(mat, k) =>  {
  return mat
    .map((value, i) => {
      let counter = 0;
      for (let row of value) { // I personally think row shoulda been worded as element since it's confusing
        if (row) {
          counter++;
        }
      }
      return [i, counter];
    })
    .sort((a, b) => a[1] - b[1])
    .slice(0, k)
    .map((el) => el[0]);
};
```
