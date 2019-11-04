# Destructuring 
Easily extract array elements or object properties and store them in variables

## Array destructuring
```js
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

```js
const num = [1, 2, 3];
[num1, , num3] = num;
console.log(num1); // 1
console.log(num2); // Reference Error
console.log(num3); // 3
```

 ## Object destructuring
 ```js
 {name} = {name: 'Jung In', age: 24}
 console.log(name) //'Jung In'
 console.log(age) // undefined
 ```
