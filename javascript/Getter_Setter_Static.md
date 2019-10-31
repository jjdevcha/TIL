# Getters
Property hiding it's method call<br>
They are defined by writing get in front of the method name in an object expression of class declaration
```js
let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  }
};

console.log(varingSize.size);
```

# Setter, Static

You can use **static** when you want to attach some property directly to the constructor function<br>

```js
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fah() {
    return this.celsius * 1.8 + 32;
  }

  set fah(val) {
    this.celsius = (val - 32) / 1.8;
  }

  static fromFah(val) {
    return new Temperature((val - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fah); // 71.6
temp.fah = 86;
console.log(temp.fah); // 30

let temp2 = Temperature.fromFah(100)
console.log(temp2.fah);
// 100
```




