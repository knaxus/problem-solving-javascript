/* eslint-disable class-methods-use-this */
const Node = require('./Node');

class DoublyLinkedList {
  constructor() {
    // head -> tail
    // head <- tail
    this.head = new Node(null, null, null);
    this.tail = new Node(null, null, null);
    this.head.next = this.tail; // head next point to tail
    this.tail.previous = this.head; // tail previous point to head
    this.size = 0;
  }

  addAtBeginning(value) {
    const newNode = new Node(value, this.head, this.head.next);
    this.head.next.previous = newNode;
    this.head.next = newNode;
    this.size += 1;
  }

  addAtEnd(value) {
    const newNode = new Node(value, this.tail.previous, this.tail);
    this.tail.previous.next = newNode;
    this.tail.previous = newNode;
    this.size += 1;
  }

  removeAtBeginning() {
    this.remove(this.head.next);
    this.size -= 1;
  }

  removeAtEnd() {
    this.remove(this.tail.previous);
    this.size -= 1;
  }

  remove(node) {
    const previousNode = node.previous;
    const nextNode = node.next;
    previousNode.next = nextNode;
    nextNode.previous = previousNode;
  }

  length() {
    return this.size;
  }

  traverse() {
    let address = this.head.next;
    const elements = [];
    while (address !== this.tail) {
      elements.push(address.data);
      address = address.next;
    }
    return elements;
  }
}

module.exports = DoublyLinkedList;
