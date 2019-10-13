class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
    this.length = 0;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addAtBeginning(element) {
    this.head = new Node(element, this.head);
    if (!this.tail) {
      this.tail = this.head;
    }
    return this.head;
  }

  addAtEnd(element) {
    if (!this.head) {
      return this.addAtBeginning(element);
    }
    const node = new Node(element, null);
    this.tail.next = node;
    this.tail = node;
    return node;
  }

  removeFromBeginning() {
    if (!this.head) {
      this.tail = null;
      return null;
    }
    if (this.head.next === null) {
      this.tail = this.head;
    }
    const node = this.head;
    this.head = this.head.next;
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

    previous.next = new Node(element, previous.next);
    return null;
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
    return node;
  }

  length() {
    let address = this.head;
    let count = 0;
    while (address) {
      count += 1;
      address = address.next;
    }
    return count;
  }

  delete() {
    this.head = null;
  }
}

module.exports = { LinkedList, Node };
