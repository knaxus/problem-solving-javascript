/**
  You have to implement the minStack class which will have a min() function.
  Whenever min() is called, the minimum value of the stack is returned in O(1) time.
  The element is not popped from the stack, its value is simply returned.

  Keep in mind that the min function should work in O(1) and should not pop
  the minimum element out of the stack. It simply returns its value.
 */

const Stack = require('../index');

class MinStack {
  constructor() {
    this.main = new Stack();
    this.minStack = new Stack();
  }

  push(element) {
    this.main.push(element);

    if (!this.minStack.peek()) {
      return this.minStack.push(element);
    }
    if (element > this.minStack.peek()) {
      return this.minStack.push(this.minStack.peek());
    }
    return this.minStack.push(element);
  }

  pop() {
    this.minStack.pop();
    return this.main.pop();
  }

  getMin() {
    return this.minStack.peek();
  }
}

const ms = new MinStack();

ms.push(1);
ms.push(10);
ms.push(21);
ms.push(3);
ms.push(9);
ms.push(-11);
ms.push(32);

// eslint-disable-next-line no-console
console.log(ms.minStack.data);
// eslint-disable-next-line no-console
console.log(ms.getMin());

ms.pop();
ms.pop();

// eslint-disable-next-line no-console
console.log(ms.getMin());
