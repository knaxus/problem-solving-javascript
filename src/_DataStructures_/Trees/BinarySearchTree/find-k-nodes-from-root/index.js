// eslint-disable-next-line no-unused-vars
const BST = require('../index');

function findKNodes(root, k) {
  let arr = [];

  if (root === null) return [];
  if (k === 0) return [...arr, root.value];

  const left = findKNodes(root.leftChild, k - 1);
  arr = [...arr, ...left];

  const right = findKNodes(root.rightChild, k - 1);
  arr = [...arr, ...right];
  return arr;
}

// create a BST
// const myBST = new BST(6);

// myBST.add(2);
// myBST.add(19);
// myBST.add(14);
// myBST.add(8);
// myBST.add(5);
// myBST.add(12);
// myBST.add(33);
// myBST.add(52);
// myBST.add(1);

// console.log(findKNodes(myBST.root, 2));

module.exports = findKNodes;
