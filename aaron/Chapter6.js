//exercise1

class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    plus(other) {
      return new Vec(this.x + other.x, this.y + other.y);
    }
  
    minus(other) {
      return new Vec(this.x - other.x, this.y - other.y);
    }
  
    get length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }
  
  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  // → Vec{x: 3, y: 5}
  console.log(new Vec(1, 2).minus(new Vec(2, 3)));
  // → Vec{x: -1, y: -1}
  console.log(new Vec(3, 4).length);
  // → 5
  
  //exercise2
  
  class Group {
    #members = [];
  
    add(value) {
      if (!this.has(value)) {
        this.#members.push(value);
      }
    }
  
    delete(value) {
      this.#members = this.#members.filter(v => v !== value);
    }
  
    has(value) {
      return this.#members.includes(value);
    }
  
    static from(collection) {
      let group = new Group;
      for (let value of collection) {
        group.add(value);
      }
      return group;
    }
  }
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false
  
  //exercise3
  
  class Group {
    #members = [];
  
    add(value) {
      if (!this.has(value)) {
        this.#members.push(value);
      }
    }
  
    delete(value) {
      this.#members = this.#members.filter(v => v !== value);
    }
  
    has(value) {
      return this.#members.includes(value);
    }
  
    static from(collection) {
      let group = new Group;
      for (let value of collection) {
        group.add(value);
      }
      return group;
    }
  
    [Symbol.iterator]() {
      return new GroupIterator(this.#members);
    }
  }
  
  class GroupIterator {
    #members;
    #position;
  
    constructor(members) {
      this.#members = members;
      this.#position = 0;
    }
  
    next() {
      if (this.#position >= this.#members.length) {
        return {done: true};
      } else {
        let result = {value: this.#members[this.#position],
                      done: false};
        this.#position++;
        return result;
      }
    }
  }
  
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  
  //exercise4
  
  let map = {one: true, two: true, hasOwnProperty: true};
  
  console.log(Object.prototype.hasOwnProperty.call(map, "one"));
  // → true
  