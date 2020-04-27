class BloomFilters {
  constructor(size = 101) {
    this.size = size;
    this.data = this.getStorage(size);
  }

  add(element) {
    const indices = this.getIndices(element);

    for (let i = 0; i < indices.length; i += 1) {
      this.data.setBit(indices[i]);
    }
  }

  contains(element) {
    const indices = this.getIndices(element);

    for (let i = 0; i < indices.length; i += 1) {
      const index = indices[i];
      if (!this.data.getBit(index)) {
        return false; // item is definately not there
      }
    }
    return true; // item may be there
  }

  getIndices(element) {
    return [this.hashOne(element), this.hashTwo(element), this.hashThree(element)];
  }

  hashOne(value) {
    const stringValue = String(value);
    let hashVal = 0;

    for (let i = 0; i < stringValue.length; i += 1) {
      hashVal += stringValue.charCodeAt(i) - 96;
    }

    // eslint-disable-next-line no-bitwise
    // To get a better hash. It may look useless but here is the explanation: https://stackoverflow.com/questions/38356644/why-is-the-bitwise-and-of-two-of-the-same-value-producing-a-different-value
    hashVal &= hashVal;

    return Math.abs(hashVal % this.size);
  }

  hashTwo(value) {
    const stringValue = String(value);
    const PRIME_MULTIPLIER = 1801; // Random prime number
    let hashVal = 0;

    for (let i = 0; i < stringValue.length; i += 1) {
      hashVal += stringValue.charCodeAt(i) - 96;
      hashVal *= PRIME_MULTIPLIER;
    }

    return Math.abs(hashVal % this.size);
  }

  hashThree(value) {
    const stringValue = String(value);
    const PRIME_MULTIPLIER = 1801; // Random prime number
    const PRIME_ADDER = 2029; // Random prime number
    let hashVal = 0;

    for (let i = 0; i < stringValue.length; i += 1) {
      hashVal += stringValue.charCodeAt(i) - 96;
      hashVal *= PRIME_MULTIPLIER;
      hashVal += PRIME_ADDER;
    }
    // eslint-disable-next-line no-bitwise
    hashVal &= hashVal;
    return Math.abs(hashVal % this.size);
  }

  // eslint-disable-next-line class-methods-use-this
  getStorage(size) {
    const data = new Array(size).fill(0);

    return {
      setBit(index) {
        data[index] = 1;
      },
      getBit(index) {
        return data[index];
      },
    };
  }
}

// const b = new BloomFilters();

// b.add('React.js');
// b.add('Node.js');

// console.log(b.contains('JavaScript'));
// console.log(b.contains('React.js'));

module.exports = BloomFilters;
