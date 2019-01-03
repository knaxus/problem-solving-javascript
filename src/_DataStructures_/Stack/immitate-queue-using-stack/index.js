const Stack = require('../index');

class ImmitateQueue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
    this.data = this.stackA.data;
  }

  add(element) {
    this.stackA.push(element);
    this.data = this.stackA.data;
  }

  peek() {
    while (this.stackA.peek()) {
      this.stackB.push(this.stackA.pop());
    }

    const element = this.stackB.peek();

    while (this.stackB.peek()) {
      this.stackA.push(this.stackB.pop());
    }
    this.data = this.stackA.data;
    return element;
  }

  remove() {
    while (this.stackA.peek()) {
      this.stackB.push(this.stackA.pop());
    }

    const element = this.stackB.pop();

    while (this.stackB.peek()) {
      this.stackA.push(this.stackB.pop());
    }

    this.data = this.stackA.data;
    return element;
  }
}

module.exports = ImmitateQueue;
