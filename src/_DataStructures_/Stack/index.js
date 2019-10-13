class Stack {
  constructor() {
    this.data = [];
  }

  push(element) {
    // add element to the last
    this.data.push(element);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    // check if stack is empty
    return this.data.length === 0;
  }
}

module.exports = Stack;
