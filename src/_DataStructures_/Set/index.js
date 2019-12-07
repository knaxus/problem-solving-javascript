// XSet because ES6 already has a Set class
class XSet {
  constructor() {
    this.data = {};
  }

  add(element) {
    if (!this.data[element]) {
      this.data[element] = true;
    }
  }

  remove(element) {
    if (this.data[element]) {
      delete this.data[element];
    }
  }

  has(element) {
    return !!this.data[element];
  }

  values() {
    return Object.keys(this.data);
  }

  union(givenSet) {
    const result = new Set();
    const firstSetValues = this.values();
    const givenSetValues = givenSet.values();

    // eslint-disable-next-line no-restricted-syntax
    for (const e of firstSetValues) result.add(e);

    // eslint-disable-next-line no-restricted-syntax
    for (const e of givenSetValues) result.add(e);

    return result;
  }
}

// const s = new XSet();

// s.add(10);
// s.add(20);
// s.add(90);

// console.log(s.has(1));
// console.log(s.has(10));
// console.log(s.has(90));

// console.log(s.values());
// s.remove(90);
// console.log(s.has(90));
// console.log(s.data);

module.exports = XSet;
