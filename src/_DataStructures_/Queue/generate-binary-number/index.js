const Queue = require('../index');

function generateBinaryNumber(n) {
  const result = [];
  const q = new Queue();

  // add `1` to the queue
  q.enqueue('1');

  // iterate till the given number
  for (let i = 0; i < n; i += 1) {
    // push the item in the queue to the array
    result.push(q.dequeue());

    // append `0` & `1` respectively
    const s1 = `${result[i]}0`;
    const s2 = `${result[i]}1`;

    // push the combinations in the queue
    q.enqueue(s1);
    q.enqueue(s2);
  }
  // return the result containing all the binary numbers
  return result;
}

// console.log(generateBinaryNumber(5));

module.exports = generateBinaryNumber;
