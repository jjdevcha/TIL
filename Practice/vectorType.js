// Eloquent Js
// Chapter 6
// A Vector Type

class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    plus(vec) {
      this.x = this.x + vec.x;
      this.y = this.y + vec.y;
      return this.x, this.y;
    }
  
    minus(vec) {
      this.x = Math.abs(this.x - vec.x);
      this.y = Math.abs(this.y - vec.y);
      return this.x, this.y;
    }
  
    get length() {
      return Math.sqrt(this.x**2 + this.y**2);
    }
  }
  
  