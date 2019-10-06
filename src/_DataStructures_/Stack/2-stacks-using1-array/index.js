/**
 * So what special in this implementation?
 * This deals with Dynamic array without a size hence the implemetation uses
 * lot of space and I can sense that it can be further improved hence feel free
 * to open PR
 */

class TwoStacks {
  constructor(capacity) {
    this.data = [];
    this.capacity = capacity;
    this.top1 = -1;
    this.top2 = capacity;
  }

  push1(value) {
    if (this.top1 === -1 || this.top1 < this.top2 - 1) {
      this.top1 += 1;
      this.data[this.top1] = value;
      return;
    }
    throw new Error('Overflow');
  }

  push2(value) {
    if (this.top2 <= this.capacity && this.top2 > this.top1) {
      this.data[this.top2] = value;
      this.top2 -= 1;
      return;
    }
    throw new Error('Overflow');
  }

  pop1() {}

  pop2() {}
}

module.exports = TwoStacks;

/** Test cases */

const s = new TwoStacks(3);

s.push1('a');
console.log(s.data);

s.push2('a2');
console.log(s.data);

s.push1('b');
console.log(s.data);

s.push2('b2');
console.log(s.data);

s.push2('b3');
console.log(s.data);
