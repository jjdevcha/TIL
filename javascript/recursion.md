# Recursion 재귀
간단하게 말하면 함수선언 시 Function scope 안에 다시 그 함수를 재 선언하는 것 


***Examples
```js
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                    find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));
```
```js
const isIterable = a => a && a[Symbol.iterator];

L.deepFlat = function * f(iter) {
    for (const a of iter) {
      if (isIterable(a)) yield * f(a);
      else yield a;
    }
  };
log([...L.deepFlat([1, [2, [3, 4], [[5]]]])]);
```
