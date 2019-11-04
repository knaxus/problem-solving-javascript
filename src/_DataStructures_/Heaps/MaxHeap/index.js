class MaxHeap {
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

  getMax() {
    return this.heap[0] !== undefined ? this.heap[0] : null;
  }

  remove() {
    const max = this.heap[0] !== undefined ? this.heap[0] : null;
    // return the element at the root
    if (this.heap.length === 1) {
      this.heap.pop();
    }

    if (this.heap.length > 1) {
      // move the leaf to the root
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();
      // restore the heapify property
      // eslint-disable-next-line no-underscore-dangle
      this.__heapify(0);
    }
    return max;
  }

  __heapify(index) {
    const left = index * 2;
    const right = index * 2 + 1;
    let largest = index;

    if (this.heap.length > left && this.heap[largest] < this.heap[left]) {
      largest = left;
    }

    if (this.heap.length > right && this.heap[largest] < this.heap[right]) {
      largest = right;
    }

    if (largest !== index) {
      const temp = this.heap[largest];
      this.heap[largest] = this.heap[index];
      this.heap[index] = temp;
      // eslint-disable-next-line no-underscore-dangle
      this.__heapify(largest);
    }
  }

  __traverseUpAndSwap(index) {
    if (index <= 0) return;
    const parent = Math.floor(index / 2);

    if (this.heap[parent] < this.heap[index]) {
      const temp = this.heap[parent];
      this.heap[parent] = this.heap[index];
      this.heap[index] = temp;
      // eslint-disable-next-line no-underscore-dangle
      this.__traverseUpAndSwap(parent);
    }
  }

  destroy() {
    this.heap = [];
  }
}

module.exports = MaxHeap;
