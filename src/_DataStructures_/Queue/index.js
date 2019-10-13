const { LinkedList: SinglyLinkedLists, Node } = require('../LinkedList');

class Queue extends SinglyLinkedLists {
  constructor() {
    super();
    this.NotAllowed = 'Not Allowed';
  }

  enqueue(data) {
    const node = new Node(data, null);
    return this.addAtEnd(node);
  }

  dequeue() {
    const node = this.removeFromBeginning();
    return node.data;
  }

  peek() {
    return this.getLast();
  }

  size() {
    return this.length();
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

  getFirst() {
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
