// XSet because ES6 already has a Set class
class XSet {
  constructor() {
    this.data = this.getStore();
  }

  add(element) {
    this.data.push(element);
  }

  remove(element) {
    this.data.pop(element);
  }

  has(element) {
    return this.data.contains(element);
  }

  values() {
    return this.data.val();
  }

  union(givenSet) {
    const result = new XSet();
    const firstSetValues = this.values();
    const givenSetValues = givenSet.values();

    // eslint-disable-next-line no-restricted-syntax
    for (const e of firstSetValues) result.add(e);

    // eslint-disable-next-line no-restricted-syntax
    for (const e of givenSetValues) result.add(e);

    return result;
  }

  // eslint-disable-next-line class-methods-use-this
  getStore() {
    const store = {};

    return {
      push(el) {
        if (!store[el]) {
          store[el] = true;
        }
      },
      pop(el) {
        if (store[el]) {
          delete store[el];
        }
      },
      contains(el) {
        return !!store[el];
      },
      val() {
        return Object.keys(store);
      },
    };
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
