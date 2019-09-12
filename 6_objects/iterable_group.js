// Make the Group class from the previous exercise iterable.
// Refer to the section about the iterator interface earlier
// in the chapter if you aren’t clear on the exact form of
// the interface anymore.

// If you used an array to represent the group’s members,
// don’t just return the iterator created by calling the
// Symbol.iterator method on the array. That would work,
// but it defeats the purpose of this exercise.

// It is okay if your iterator behaves strangely when the
// group is modified during iteration.

// Your code here (and the code from the previous exercise)

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.current = 0;
  }

  next() {
    if (this.current >= this.group.contents.length) {
      return { done: true };
    } else {
      let result = { value: this.group.contents[this.current], done: false };
      this.current++;
      return result;
    }
  }
}

class Group {
  constructor() {
    this.contents = [];
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }

  add(value) {
    if (!this.has(value)) {
      this.contents.push(value);
    }
  }

  has(value) {
    return this.contents.includes(value);
  }

  delete(value) {
    this.contents = this.contents.filter(item => item !== value);
  }

  static from(iterable) {
    let group = new Group();
    for (let item of iterable) {
      group.add(item);
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

for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}
// → a
// → b
// → c
