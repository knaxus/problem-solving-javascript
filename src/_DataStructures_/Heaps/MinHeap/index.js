class MinHeap {
  constructor(collection) {
    this.heap = [];

    if (collection) {
      collection.forEach((element) => {
        this.add(element);
      });
    }
  }

  add(element) {
    this.heap.push(element);
    // check for the parent element & swap if required
    // eslint-disable-next-line no-underscore-dangle
    this.__traverseUpAndSwap(this.heap.length - 1);
  }

  getMin() {
    return this.heap[0] !== undefined ? this.heap[0] : null;
  }

  remove() {
    const min = this.heap[0] !== undefined ? this.heap[0] : null;
    if (this.heap.length === 1) {
      this.heap.pop();
    }
    if (this.heap.length > 1) {
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();
      // eslint-disable-next-line no-underscore-dangle
      this.__heapify(0);
    }
    return min;
  }

  destroy() {
    this.heap = [];
  }

  // eslint-disable-next-line consistent-return
  __traverseUpAndSwap(index) {
    if (index <= 0) return null;

    const parent = Math.floor(index / 2);

    if (this.heap[parent] > this.heap[index]) {
      const temp = this.heap[parent];
      this.heap[parent] = this.heap[index];
      this.heap[index] = temp;
      // eslint-disable-next-line no-underscore-dangle
      this.__traverseUpAndSwap(parent);
    }
  }

  __heapify(index) {
    const left = index * 2;
    const right = index * 2 + 1;

    let smallest = index;

    if (this.heap.length > left && this.heap[smallest] > this.heap[left]) {
      smallest = left;
    }
    if (this.heap.length > right && this.heap[smallest] > this.heap[right]) {
      smallest = right;
    }
    if (smallest !== index) {
      const tmp = this.heap[smallest];
      this.heap[smallest] = this.heap[index];
      this.heap[index] = tmp;
      // eslint-disable-next-line no-underscore-dangle
      this.__heapify(smallest);
    }
  }
}

module.exports = MinHeap;
