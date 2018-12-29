const Queue = require('../index');

function weaveQueues(first, second) {
  const weaved = new Queue();

  while (first.peek() || second.peek()) {
    if (first.peek() !== undefined) {
      weaved.add(first.remove());
    }

    if (second.peek() !== undefined) {
      weaved.add(second.remove());
    }
  }
  return weaved;
}

module.exports = {
  weaveQueues,
};
