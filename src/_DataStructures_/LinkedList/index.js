// do not change the node class, you never know how many things it caan break! :) 
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addAtBeginning(element) {
    this.head = new Node(element, this.head);
    if (!this.tail) {
      this.tail = this.head;
    }
    this.size += 1;
    return this.head;
  }

  addAtEnd(element) {
    const node = new Node(element, null);
    this.size += 1;

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return node;
    }
    this.tail.next = node;
    this.tail = node;
    return node;
  }

  removeFromBeginning() {
    if (!this.head) {
      return null;
    }
    if (this.head.next === null) {
      this.tail = this.head;
    }
    const node = this.head;
    this.head = this.head.next;
    this.size -= 1;
    node.next = null;
    return node;
  }

  removeFromEnd() {
    if (!this.head) {
      return null;
    }
    let address = this.head;

    while (address.next.next) {
      address = address.next;
    }

    this.tail = address;

    const node = this.tail.next;
    this.tail.next = null;
    this.size -= 1;
    return node;
  }

  getFirst() {
    if (!this.head) {
      return null;
    }
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    return this.tail;
  }

  getAt(index) {
    if (!this.length()) {
      return null;
    }
    let address = this.head;
    let count = index;

    while (count && address.next) {
      address = address.next;
      count -= 1;
    }

    return address;
  }

  addAt(index, element) {
    if (!this.head) {
      return this.addAtBeginning(element);
    }

    if (index >= this.length()) {
      return this.addAtEnd(element);
    }

    let address = this.head;
    let previous = this.head;
    let count = index;

    while (count) {
      previous = address;
      address = address.next;
      count -= 1;
    }

    const node = new Node(element, previous.next);
    previous.next = node;
    this.size += 1;
    return node;
  }

  removeAt(index) {
    if (!this.head) {
      return null;
    }

    if (index >= this.length()) {
      return this.removeFromEnd();
    }

    let address = this.head;
    let previous = address;
    let count = index;

    while (count) {
      address = address.next;
      previous = address;
      count -= 1;
    }

    const node = address;
    previous.next = address.next.next;
    this.size -= 1;
    node.next = null;
    return node;
  }

  length() {
    return this.size;
  }

  delete() {
    this.head = null;
    this.tail = this.head;
    this.size = 0;
  }

  traverseList() {
    const arr = [];
    let node = this.head;
    while (node !== null) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }
}

module.exports = { LinkedList, Node };
