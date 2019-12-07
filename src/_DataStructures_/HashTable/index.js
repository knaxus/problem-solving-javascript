const HashEntry = require('./HashEntry');

class HashTable {
  constructor(slots, { allowResize = true, strongHash = true, custonHash = null }) {
    // init with a default set of slots
    this.slot = slots || 19;
    // size to hold the current size
    // and help to resize when the table is half filled
    this.size = 0;
    // threshold (let it be 70%)
    this.threshold = 0.7;
    // the main bucket
    this.bucket = new Array(this.slot);
    // fill the bucket with null
    // for (let i = 0; i < this.slot; i += 1) this.bucket[i] = null;
    this.bucket.fill(null);
    this.allowResize = allowResize;
    this.strongHash = strongHash;
    if (custonHash) {
      // eslint-disable-next-line no-underscore-dangle
      this._hash = custonHash;
    }
  }

  _hash(key) {
    // convert the key to String;
    const stringKey = String(key);

    let index = 0;
    const PRIME_MULTIPLIER = 1801; // Random prime number
    const PRIME_ADDER = 2029; // Random prime number

    // loop till the length of the key or max 100
    const loopTill = Math.min(stringKey.length, 100);

    for (let i = 0; i < loopTill; i += 1) {
      const char = stringKey[i];
      const value = char.charCodeAt(0) - 96;
      // eslint-disable-next-line no-bitwise
      index &= index;
      index = index * PRIME_MULTIPLIER + value;
      if (this.strongHash) {
        index += PRIME_ADDER;
      }
    }
    return Math.abs(index % this.bucket.length);
  }

  _resize() {
    const oldSlot = this.slot;
    const oldBucket = this.bucket;

    this.slot = oldSlot * 2;
    const newBucket = new Array(this.slot);
    // fill the new bucket with nulls
    for (let i = 0; i < this.slot; i += 1) newBucket[i] = null;

    this.bucket = newBucket;

    for (let i = 0; i < oldSlot; i += 1) {
      if (oldBucket[i]) {
        let head = oldBucket[i];

        while (head !== null) {
          const { key, value } = head;
          // eslint-disable-next-line no-underscore-dangle
          const newIndex = this._hash(key);
          // eslint-disable-next-line no-underscore-dangle
          this._push(newIndex, { key, value });
          head = head.next;
        }
      }
    }
  }

  _push(index, value) {
    /**
     * Utility to add a SLL to the index in case of more than one
     * key hashes to the same index
     */
    const node = new HashEntry(value);
    if (!this.bucket[index]) {
      this.bucket[index] = node;
      this.size += 1;
      return index;
    }

    let head = this.bucket[index];
    // extract the key and see if it already exists
    const { key, value: newValue } = value;

    // traverse to the end
    while (head.next !== null) {
      if (head.key === key) {
        // overridet the value with the new value
        head.value = newValue;
        return index;
      }
      head = head.next;
    }
    // if the key was not found
    head.next = node;
    this.size += 1;
    return index;
  }

  _value(index, key) {
    let head = this.bucket[index];
    while (head !== null) {
      if (head.key === key) {
        return head.value;
      }
      head = head.next;
    }
    return null;
  }

  // eslint-disable-next-line class-methods-use-this
  _convertNodesToSLL(nodeCollection) {
    // convert collection of nodes into a SLL
    let head = nodeCollection[0];
    const start = head;
    let i = 1;
    while (i < nodeCollection.length) {
      head.next = nodeCollection[i];
      i += 1;
      head = head.next;
    }

    return start;
  }

  set(key, value) {
    // eslint-disable-next-line no-underscore-dangle
    const index = this._hash(key);
    // storing value as an key-value pair
    // eslint-disable-next-line no-underscore-dangle
    this._push(index, { key, value });

    /**
     * calculate the load factor, if it's greater than threshold
     * resize the hash table
     */
    const loadFactor = Number((this.size / this.slot).toFixed(1));
    if (loadFactor > this.threshold && this.allowResize) {
      // console.log('Resizing hash table');
      // eslint-disable-next-line no-underscore-dangle
      this._resize();
    }
  }

  get(key) {
    // get the index for the given key
    // eslint-disable-next-line no-underscore-dangle
    const index = this._hash(key);
    if (!this.bucket[index]) return null;
    // eslint-disable-next-line no-underscore-dangle
    return this._value(index, key);
  }

  remove(key) {
    // get the index
    // eslint-disable-next-line no-underscore-dangle
    const index = this._hash(key);

    // get the SLL using the index
    let head = this.bucket[index];
    // return null if the head is null
    if (!head) {
      return null;
    }

    if (head.key === key) {
      let node = head;
      this.bucket[index] = head.next;
      const val = { key, value: node.value };
      node = null;
      this.size -= 1;
      return val;
    }

    let previous = null;

    while (head !== null) {
      if (head.key === key) {
        let node = head;
        previous.next = head.next;
        this.size -= 1;
        const res = { key, value: node.value };
        node = null;
        return res;
      }
      previous = head;
      head = head.next;
    }
    return null;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }
}

// const ht = new HashTable(5, { allowResize: false, strongHash: false });
// ht.set('maroon', 'I maroon');
// ht.set('hello', 'I am a new value');
// console.log(ht.bucket);
// ht.set('hell', 'Bad value');
// ht.set('hello', 'I am a yet another value');
// ht.set('yellow', 'I am yellow');

// console.log(ht.get('hello'));
// console.log(ht.get('maroon'));
// console.log(ht.bucket);

// console.log('deleting hello........');
// console.log(ht.remove('hello'));
// console.log(ht.bucket);

// console.log(ht.remove('yellow'));
// console.log(ht.bucket);

module.exports = HashTable;
