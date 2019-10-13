const Queue = require('../index');

function weaveQueues(first, second) {
  const weaved = new Queue();

  while (first.peek() || second.peek()) {
    if (first.peek()) {
      weaved.enqueue(first.dequeue());
    }

    if (second.peek()) {
      weaved.enqueue(second.dequeue());
    }
  }
  return weaved;
}

module.exports = {
  weaveQueues,
};
