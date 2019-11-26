/**
  You must implement the nextGreaterElement() function.
  For each element in an array, it finds the next greater element in that array.
  To keep it simple, the next greater element for the last or maximum value in the array is -1.

  Input: [4, 6, 3, 2, 8, 1]
  Output: [6, 8, 8, 8, -1, -1]
 */

const Stack = require('../../_DataStructures_/Stack');

function nextGreaterElement(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Invalid Argument');
  }

  const s1 = new Stack();
  const nextGreater = [];

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (s1.peek()) {
      let top = s1.peek();
      while (top && top <= arr[i]) {
        // pop the elements
        s1.pop();
        // get the new top
        top = s1.peek();
      }
    }

    if (s1.peek()) {
      nextGreater[i] = s1.peek();
    } else {
      nextGreater[i] = -1;
    }

    // push the element into the stack
    s1.push(arr[i]);
  }
  return nextGreater;
}

module.exports = { nextGreaterElement };
