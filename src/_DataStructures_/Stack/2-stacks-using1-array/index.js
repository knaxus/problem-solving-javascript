/**
 * Revision to PR #35 where I implemented bullshit thinking of
 * new breakthrough :D
 */

class TwoStacks {
  constructor(capacity) {
    this.data = [];
    this.top1 = -1;
    this.top2 = capacity;

    this.capacity = capacity;
    this.total = 0;
  }

  push1(value) {
    if (this.total >= this.capacity + 1) {
      throw new Error('Overflow');
    }
    if (this.top1 < this.top2 - 1) {
      this.top1 += 1;
      this.data[this.top1] = value;
      this.total += 1;
    }
  }

  push2(value) {
    if (this.total >= this.capacity + 1) {
      throw new Error('Overflow');
    }
    if (this.top1 < this.top2 - 1) {
      this.top2 -= 1;
      this.data[this.top2] = value;
      this.total += 1;
    }
  }

  pop1() {
    if (this.top1 >= 0) {
      const item = this.data[this.top1];
      delete this.data[this.top1];
      this.top1 -= 1;
      return item;
    }
    return -1;
  }

  pop2() {
    if (this.top2 < this.capacity) {
      const item = this.data[this.top2];
      delete this.data[this.top2];
      this.top2 += 1;
      return item;
    }
    return -1;
  }
}

module.exports = TwoStacks;

/** Test cases */

/*
const s = new TwoStacks(4);

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

console.log(s.pop2());
console.log(s.data);

console.log(s.pop1());
console.log(s.data);

*/
