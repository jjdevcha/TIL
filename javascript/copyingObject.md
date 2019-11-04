# How to genuinely copy an object?

You all know that object is reference type. So when you are allocating an object to a new varaible, you are just copying the reference of it.
<br>
But what if you don't want to copy the reference and really want to have exact looking obj in a different reference?<br>
Then you can use spread operator! <br>
```js
const user = {
  name: 'Jung In',
  age: 24
};

const u1 = {
  ...user
};

user.name = 'Lachie';

console.log(user.name); // 'Lachie'
console.log(u1.name); // 'Jung In'
```
