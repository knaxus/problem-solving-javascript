class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addAtBeginning(element) {
    this.head = new Node(element, this.head);
  }

  addAtEnd(element) {
    const node = new Node(element, null);

    if (!this.head) {
      this.head = node;
    } else {
      let address = this.head;
      while (address.next) {
        address = address.next;
      }
      address.next = node;
    }
  }

  removeFromBeginning() {
    if (!this.head) {
      return null;
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

    const node = address.next;
    address.next = null;
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
    let address = this.head;
    while (address.next) {
      address = address.next;
    }
    return address;
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
