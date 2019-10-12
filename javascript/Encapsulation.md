# Encapsulation 
Usually other programming languages have the concept of `public` and `private` to give distinction to the information in coding
But Javascript doesn't have this distiction. So it uses other way to encapsule the properties. 
It is used to make the security of the code, making users not to directly access to the code. 

## How to do
- Function scope and closure
Variables and objects in Function scope can't be approached from outer scope. 
On the other hand inner scope(bindings) can always access to outer scopes even though it is no longer active after being returned. 

```js
let cat = function () {
  let catName = "Bebe";
  return {
    getCatName : function() {
      return catName;
    }
  };
}();

cat.getCatName(); // "Bebe"
```
- Using IIFE
```js
let cat = (function () {
  let catName = "Bebe";
  return {
    getCatName : function() {
      return catName;
    }
  };
}());

cat.getCatName(); // "Bebe"
```

