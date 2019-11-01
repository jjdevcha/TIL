// Eloquent Js
// Chapter 6
// Groups

class Group {
    constructor() {
      this.group = [];
    }
  
    add(val) {
      if(!this.group.includes(val)) {
        this.group.push(val);
      }
    }
  
    delete(val) {
      if(this.group.includes(val)) {
        let index = this.group.indexOf(val);
        this.group.splice(index, 1);
      }
    }
  
    has(val) {
      return this.group.includes(val) ? true : false;
    }
  
    static from(iter) {
      let newGroup = new Group();
      for (const a of iter) {
        newGroup.add(a);
      }
      return newGroup;
    }
  }