/*
Least recently used (LRU) - cache implementation

get(key) – Get the value (will always be positive) of the key if the key exists in the cache, otherwise return false.
Complexity: O(1)

set(key, value) – Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
Complexity: O(1)
*/

const DoublyLinkedList = require('../../_DataStructures_/DoublyLinkedList/index');

class LRUCache {
  constructor(n) {
    this.size = n;
    this.map = new Map();
    this.list = new DoublyLinkedList();
  }

  // this method will work in O(1)
  set(key, value) {
    const data = {
      key,
      value,
    };
    if (!this.map.has(key)) {
      this.list.addAtBeginning(data);
      this.map.set(key, this.list.head.next);

      if (this.list.length() > this.size) {
        const lastNode = this.list.tail.previous.data;
        this.map.delete(lastNode.key);
        this.list.removeAtEnd();
      }
    } else {
      this.list.remove(this.map.get(key));
      this.list.addAtBeginning(data);
      this.map.set(key, this.list.head.next);
    }
  }

  // this method will work in O(1)
  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      const { value } = node.data;
      this.list.remove(node);
      this.list.addAtBeginning({
        key,
        value,
      });
      this.map.set(key, this.list.head.next);
      return value;
    }
    return false;
  }
}

// const lru = new LRUCache(3);
// lru.set(1, 1);
// lru.set(2, 2);
// lru.set(3, 3);
// lru.set(4, 4);
// lru.set(5, 5);
// lru.set(2, 2);
// lru.get(5, 5);
// lru.list.display();


module.exports = {
  LRUCache,
};
