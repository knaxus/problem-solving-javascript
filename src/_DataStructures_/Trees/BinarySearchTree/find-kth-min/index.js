// eslint-disable-next-line no-unused-vars
const BST = require('../index');

// Inorder traversal returns a sorted array
function inOrderTraversal(root) {
  if (root === null) return [];
  let arr = [];
  // traverse left
  const left = inOrderTraversal(root.leftChild);
  arr = [...left, root.value];
  const right = inOrderTraversal(root.rightChild);
  return [...arr, ...right];
}

function findKthMin(rootNode, k) {
  const arr = inOrderTraversal(rootNode);
  if (k <= 0 || k > arr.lenth) {
    throw new Error('Invalid value for K');
  }
  return arr[k - 1];
}

// // create a BST
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
// myBST.add(0);

// console.log(findKthMin(myBST.root, 3));

module.exports = findKthMin;
