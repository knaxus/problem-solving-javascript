const { Node } = require('../LinkedList');

class HashTable {
  constructor(slots) {
    // init with a default set of slots
    this.slot = slots || 17;
    // size to hold the current size
    // and help to resize when the table is half filled
    this.size = 0;
    // the main bucket
    this.bucket = new Array(this.slot);

    // fill the bucket with null
    for (let i = 0; i < this.slot; i += 1) this.bucket[i] = null;
  }

  _hash(key) {
    // convert the key to String;
    const stringKey = String(key);

    let index = 0;
    const PRIME = 1801;

    // loop till the length of the key or mamx 100
    const loopTill = Math.min(stringKey.length, 100);

    for (let i = 0; i < loopTill; i += 1) {
      const char = stringKey[i];
      const value = char.charCodeAt(0) - 96;
      index = (index + PRIME + value) % this.bucket.length;
    }
    return index;
  }

  _push(index, value) {
    /**
     * Util to add a SSL to the index in case of more than once
     * value for the same key exixts
     */
    const node = new Node(value);
    if (!this.bucket[index]) {
      this.bucket[index] = node;
      this.size += 1;
      return index;
    }

    let head = this.bucket[index];

    // traverse to the end
    while (head.next !== null) {
      head = head.next;
    }
    head.next = node;
    this.size += 1;
    return index;
  }

  _values(index, key) {
    /**
     * Util to return the values as an array
     */
    const res = [];
    let head = this.bucket[index];
    while (head !== null) {
      if (head.data.key === key) {
        res.push(head.data.value);
      }
      head = head.next;
    }
    return res;
  }

  set(key, value) {
    // eslint-disable-next-line no-underscore-dangle
    const index = this._hash(key);
    // storing value as an key-value pair
    // eslint-disable-next-line no-underscore-dangle
    this._push(index, { key, value });
  }

  get(key) {
    // get the index
    // eslint-disable-next-line no-underscore-dangle
    const index = this._hash(key);
    if (!this.bucket[index]) return null;
    // eslint-disable-next-line no-underscore-dangle
    return this._values(index, key);
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.getSize() === 0;
  }
}

// const ht = new HashTable();
// ht.set('hello', 'I am a new value');
// ht.set('hello', 'I am a yet another value');
// ht.set('maroon', 'I maroon');
// ht.set('yellow', 'I am yellow');

// console.log(ht.get('hello'));
// console.log(ht.get('maroon'));
// console.log(ht.bucket);

module.exports = HashTable;
