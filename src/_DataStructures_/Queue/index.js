const { LinkedList: SinglyLinkedLists } = require('../LinkedList');

class Queue extends SinglyLinkedLists {
  constructor() {
    super();
    this.NotAllowed = 'Not Allowed';
  }

  enqueue(data) {
    return this.addAtEnd(data);
  }

  dequeue() {
    const node = this.removeFromBeginning();
    return node ? node.data : node;
  }

  peek() {
    const node = this.getFirst();
    return node ? node.data : node;
  }

  length() {
    return this.size;
  }

  destroy() {
    this.delete();
  }

  /** Override and throw error for other LL methods */
  addAtBeginning() {
    throw new Error(this.NotAllowed);
  }

  addAt() {
    throw new Error(this.NotAllowed);
  }

  removeFromEnd() {
    throw new Error(this.NotAllowed);
  }

  getLast() {
    throw new Error(this.NotAllowed);
  }

  getAt() {
    throw new Error(this.NotAllowed);
  }

  removeAt() {
    throw new Error(this.NotAllowed);
  }
}

module.exports = Queue;
