const BST = require('../../_DataStructures_/Trees/BinarySearchTree');
const Queue = require('../../_DataStructures_/Queue');

function traverseBFS(root) {
  let temp = root;
  const arr = [];
  const nodeQueue = new Queue();

  if (root === null) {
    return arr;
  }

  while (temp !== null) {
    arr.push(temp.value);
    if (temp.leftChild) nodeQueue.enqueue(temp.leftChild);
    if (temp.rightChild) nodeQueue.enqueue(temp.rightChild);
    temp = nodeQueue.dequeue();
  }
  return arr;
}

const myBST = new BST(51);

[10, 34, 32, 12, 90, 54, 61, 2, 71, 9].forEach(e => myBST.add(e));

const preOrderElements = myBST.preorder();
const levelOrderElements = traverseBFS(myBST.root);

// eslint-disable-next-line no-console
console.log(preOrderElements);
// eslint-disable-next-line no-console
console.log(levelOrderElements);
