class Queue {
  constructor() {
    this.data = [];
  }

  add(element) {
    // add element to the start of the data
    return this.data.unshift(element);
  }

  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;
