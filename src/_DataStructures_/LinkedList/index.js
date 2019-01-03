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

  length() {
    let address = this.head;
    let count = 0;
    while (address) {
      count += 1;
      address = address.next;
    }
    return count;
  }
}

module.exports = { LinkedList, Node };
