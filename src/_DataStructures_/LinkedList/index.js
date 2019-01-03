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
    const node = new Node(element, null);

    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
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

  length() {
    let address = this.head;
    let count = 0;
    while (address) {
      count += 1;
      address = address.next;
    }
    return count;
  }

  removeFromBeginning() {
    if (!this.head) {
      return null;
    }
    const temp = this.head;
    this.head = this.head.next;
    return temp.data;
  }
}

module.exports = { LinkedList, Node };
