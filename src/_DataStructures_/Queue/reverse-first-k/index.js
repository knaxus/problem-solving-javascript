// eslint-disable-next-line no-unused-vars
const Queue = require('../index');
const Stack = require('../../Stack');

function reverseFirstKElelments(q, k) {
  const s = new Stack();

  // push all the k elements ot the stack
  for (let i = 0; i < k; i += 1) {
    s.push(q.dequeue());
  }

  // push the stack items to the queue
  for (let i = 0; i < k; i += 1) {
    q.enqueue(s.pop());
  }

  // empty the queue and push the same queue
  const remaining = q.length() - k;
  for (let i = 0; i < remaining; i += 1) {
    q.enqueue(q.dequeue());
  }

  // return the queue
  return q;
}

module.exports = reverseFirstKElelments;

// let q = new Queue();

// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// q.enqueue(4);
// q.enqueue(5);
// q.enqueue(6);
// q.enqueue(7);
// q.enqueue(8);
// q.enqueue(9);

// q = reverseFirstKElelments(q, 4);

// const arr = [];
// while (q.length()) {
//   arr.push(q.dequeue());
// }
// console.log(arr);
