/* eslint-disable class-methods-use-this */
class Node {
  constructor(data, previous, next) {
    this.data = data;
    this.previous = previous;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    // head -> tail
    // head <- tail
    this.head = new Node(null, null, null);
    this.tail = new Node(null, null, null);
    this.head.next = this.tail; // head next point to tail
    this.tail.previous = this.head; // tail previous point to head
  }

  addAtBeginning(value) {
    const newNode = new Node(value, this.head, this.head.next);
    this.head.next.previous = newNode;
    this.head.next = newNode;
  }

  addAtEnd(value) {
    const newNode = new Node(value, this.tail.previous, this.tail);
    this.tail.previous.next = newNode;
    this.tail.previous = newNode;
  }

  removeAtBeginning() {
    this.remove(this.head.next);
  }

  removeAtEnd() {
    this.remove(this.tail.previous);
  }

  remove(node) {
    const previousNode = node.previous;
    const nextNode = node.next;
    previousNode.next = nextNode;
    nextNode.previous = previousNode;
  }

  length() {
    let address = this.head.next;
    let count = 0;
    while (address !== this.tail) {
      count += 1;
      address = address.next;
    }
    return count;
  }

  display() {
    let address = this.head.next;
    while (address !== this.tail) {
      console.log(address.data);
      address = address.next;
    }
  }
}

module.exports = {
  DoublyLinkedList,
};
