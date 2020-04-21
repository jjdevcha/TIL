# FizzBuzz
`console.log` number in between 1-100, *Fizz* if it's divisible by 3, *Buzz* if it's divisible by 5, *FizzBuzz* when it's divisible by both

### My solution 
```js
for (let i = 1; i < 101; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
```

### Book solution
```js
for (let i = 1; i <= 100; i++) {
  let result = "";
  if (i % 3 == 0) result += "Fizz";
  if (i % 5 == 0) result += "Buzz";
  console.log(result || i);
}
```
