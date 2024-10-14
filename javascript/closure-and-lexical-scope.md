# Lexical Scrope
It means that the scope is determined at the time of writing the code, based on where variables and functions are declared in the code. 

# Closure
A Javascript feature that lets an inner function to have access to the outer(enclosing) function's variables, even after the outer function has finished executing. 
A Closure allows a function to retain access to its lexical scope, which includes:
1. Its own scope 
2. The outer function's scope
3. The global scope 

```js
function mul(factor) {
    return number => number * factor;
}

let twice = mul(2);
let triple = mul(3);

console.log(twice(5)); // 10
console.log(triple(4)); // 12
```

# Common use of Closure
1. Data privacy
```js
const user = () => {
let userGender = '';

return {
    getUserGender: funcion() {
        return userGender;
    },
    setUserGender: function(_gender) {
        userGender = _gender;
    }
}

const user1 = user();
user1.getUserGender(); //''

user1.setUserGender('Female');
user1.getUserGender() //'Female;
```
2. Partial Application or Currying
3. Event Handlers and Asynchronous Code

### Reference
[velog | Lexical scope, Closure and Curring](https://shorturl.at/K2Vnn)
