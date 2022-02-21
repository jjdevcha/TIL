# Chapter 7 
Blooooody hardddddd

## Execise
### Persistent group

#### My solution
```js
class PGroup {
  
  constructor() {
  	this.PGroup = [];
  }
  
  
  // Methods
  
  add(val) {
    if (!this.PGroup.includes(val)) this.PGroup = this.PGroup.concat(val);
  }
  
  delete(val) {
    this.PGroup= this.PGroup.filter(el => el !== val);
  }
  
  has(val) {
    return this.PGroup.includes(val);
  }
  
  empty() {
  	let newPGroup = new PGroup;
    return newPGroup;
  }
}
```

#### Book solution
```js
class PGroup {
  constructor(members) {
    this.members = members;
  }

  add(value) {
    if (this.has(value)) return this;
    return new PGroup(this.members.concat([value]));
  }

  delete(value) {
    if (!this.has(value)) return this;
    return new PGroup(this.members.filter(m => m !== value));
  }

  has(value) {
    return this.members.includes(value);
  }
}

PGroup.empty = new PGroup([]);
```


