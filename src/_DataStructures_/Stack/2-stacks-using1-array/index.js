class TwoStacks {
  constructor() {
    this.data = [];
    this.top1 = null;
    this.top2 = null;
    this.stack1Count = 0;
    this.stack2Count = 0;
  }

  push1(value) {
    if (!this.data.length) {
      this.data.push(value);
      this.top1 = value;
      this.stack1Count += 1;
    } else {
      const arr = [];
      for (let i = 0; i < this.stack1Count; i += 1) {
        arr.push(this.data[i]);
      }
      arr.push(value);
      for (let i = this.stack1Count; i < this.data.length; i += 1) {
        arr.push(this.data[i]);
      }
      this.data = arr;
      this.top1 = value;
      this.stack1Count += 1;
    }
  }

  push2(value) {
    if (!this.data.length) {
      this.data.push(value);
      this.top2 = value;
      this.stack2Count += 1;
    } else {
      const arr = [];
      for (let i = 0; i < this.stack1Count; i += 1) {
        arr.push(this.data[i]);
      }
      arr.push(value);

      for (let i = this.stack1Count; i < this.data.length; i += 1) {
        arr.push(this.data[i]);
      }
      this.data = arr;
      this.top2 = value;
      this.stack2Count += 1;
    }
  }

  pop1() {
    if (!this.top1) {
      return null;
    }

    const indexOfTop1 = this.data.indexOf(this.top1);
    const arr = [];

    delete this.data[indexOfTop1];

    this.data.forEach(el => arr.push(el));

    const oldTop = this.top1;
    this.top1 = this.data[indexOfTop1 - 1];
    this.data = arr;
    return oldTop;
  }

  pop2() {
    return this.data.pop();
  }
}

module.exports = TwoStacks;

/** Test cases */

/*

const s = new TwoStacks();

console.log(s.data);

s.push1(5);
s.push1(4);
console.log(s.data);


s.push2(2)
s.push2(1);
console.log(s.data);

s.push1(14);
console.log(s.data);
console.log(s.top1);

console.log(s.pop1())
console.log(s.data);

console.log(s.pop1())
console.log(s.data);

console.log(s.pop2())
console.log(s.data);

console.log(s.pop2())
console.log(s.data);

console.log(s.pop2())
console.log(s.data);

console.log(s.pop1())
console.log(s.data);

*/
