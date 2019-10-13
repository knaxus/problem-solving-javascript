const Stack = require('../../Stack');

class Queue {
  constructor() {
    this.queue = new Stack();
    this.temp = new Stack();
  }

  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    if (!this.queue.peek()) {
      return null;
    }

    // pop all the element to the temp stack
    while (this.queue.peek()) this.temp.push(this.queue.pop());
    const el = this.temp.pop();

    // push all the temp items to the queue again
    while (this.temp.peek()) this.queue.push(this.temp.pop());
    return el;
  }
}

module.exports = Queue;
