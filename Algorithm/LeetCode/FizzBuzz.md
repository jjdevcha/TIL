# Fizz Buzz
Given an integer n, return a string array answer (1-indexed) where:

- answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
- answer[i] == "Fizz" if i is divisible by 3.
- answer[i] == "Buzz" if i is divisible by 5.
- answer[i] == i (as a string) if none of the above conditions are true.

### Example 
```js
fizzBuzz(3); // ['1', '2', 'Fizz']
```

## My solution
```js
var fizzBuzz = function(n) {
    
    let number = n;
    let result = [];
    
    for (let i = 1; i < number + 1; i++) {
        
        if (i % 3 == 0 && i % 5 == 0) {
            result.push("FizzBuzz");
        } else if (i % 3 == 0) {
            result.push("Fizz");
        } else if (i % 5 == 0) {
            result.push("Buzz");
        } else {
            result.push(`${i}`);
        }
    }
    
    return result;
};
```

## Someone else's solution
```js
const fizzBuzz = n => {
    return new Array(n).fill(0).map((v, i) => {
        if ((i+1) % 15 === 0)  return 'FizzBuzz'
        if ((i+1) % 3 === 0) return 'Fizz'
        if ((i+1) % 5 === 0) return 'Buzz'
        return `${i+1}`
    })
}
```
