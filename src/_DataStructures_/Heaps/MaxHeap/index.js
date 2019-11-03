class MaxHeap {
  constructor() {
    this.heap = [];
  }

  add(element) {
    this.heap.push(element);
    // check for the parent element & swap if required
    // eslint-disable-next-line no-underscore-dangle
    this.__traverseUpAndSwap(this.heap.length - 1);
  }

  getMax() {
    return this.heap[0] || null;
  }

  remove() {
    // return the element at the root
    const max = this.heap[0] || null;
    if (this.heap.length > 1) {
      // move the leaf to the root
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1, 1);
      // restore the heapify property
      // eslint-disable-next-line no-underscore-dangle
      this.__heapify(0);
      return max;
    }

    if (this.heap.length === 1) {
      this.heap.splice(this.heap.length - 1, 1);
      return max;
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
