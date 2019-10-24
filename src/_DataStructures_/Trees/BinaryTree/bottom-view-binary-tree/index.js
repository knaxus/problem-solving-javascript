const Queue = require('../../../Queue');

// Determines the bottom view of a binary tree
// Takes a BinaryTree as a parameter
// Returns an integer array
// Time complexity: O(n) where n is the number of nodes in the tree

module.exports = function bottomView(binaryTree) {
  if (binaryTree == null || binaryTree.root == null) {
    return [];
  }

  // root's horizontal distance = 0
  const horizontalDistance = 0;

  // create a map to track most recent visited nodes per hd
  const hdToNodeValue = new Map();

  // perform bfs
  const q = new Queue();
  q.enqueue([binaryTree.root, horizontalDistance]);

  while (q.length() > 0) {
    const currentNodeTuple = q.dequeue();
    const currentNode = currentNodeTuple[0];
    const currentHd = currentNodeTuple[1];
    hdToNodeValue.set(currentHd, currentNode.value);

    if (currentNode.leftChild != null && currentNode.leftChild.value != null) {
      q.enqueue([currentNode.leftChild, currentHd - 1]);
    }

    if (currentNode.rightChild != null && currentNode.rightChild.value != null) {
      q.enqueue([currentNode.rightChild, currentHd + 1]);
    }
  }

  return Array.from(hdToNodeValue.values());
};
