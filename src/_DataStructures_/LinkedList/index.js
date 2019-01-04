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
    const temp = this.head;
    this.head = this.head.next;
    return temp.data;
  }

  removeFromEnd() {
    if (!this.head) {
      return null;
    }
    let address = this.head;

    while (address.next.next) {
      address = address.next;
    }
    const { data } = address.next;
    address.next = null;
    return data;
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
