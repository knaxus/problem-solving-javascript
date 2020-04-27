const { LinkedList: SLL } = require('../LinkedList');

class Queue {
  constructor() {
    this.data = this.getStorage();
  }

  enqueue(element) {
    this.data.enqueue(element);
  }

  dequeue() {
    return this.data.dequeue();
  }

  peek() {
    return this.data.peek();
  }

  length() {
    return this.data.length();
  }

  destroy() {
    return this.data.destroy();
  }

  // eslint-disable-next-line class-methods-use-this
  getStorage() {
    // encapsulating the internal implementation here
    const storage = new SLL();

    return {
      enqueue(element) {
        return storage.addAtEnd(element);
      },
      dequeue() {
        const node = storage.removeFromBeginning();
        return node ? node.data : node;
      },
      peek() {
        const node = storage.getFirst();
        return node ? node.data : node;
      },
      length() {
        return storage.size;
      },
      destroy() {
        storage.delete();
      },
    };
  }
}

module.exports = Queue;
