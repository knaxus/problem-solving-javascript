class HashEntry {
  constructor({ key, value }) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

module.exports = HashEntry;
