// eslint-disable-next-line no-unused-vars
const BST = require('../index');

function findAncestors(root, value) {
  /**
   * search the given node and meanwhile
   * keep pushing the visited nodes
   */
  let arr = [];
  if (root === null) return [];
  if (value > root.value) {
    // traverse right
    const left = findAncestors(root.rightChild, value);
    arr = [...arr, ...left];
  }
  if (value < root.value) {
    // traverse left
    const right = findAncestors(root.leftChild, value);
    arr = [...arr, ...right];
  }
  if (root.value === value) return arr;
  arr = [root.value, ...arr];
  return arr;
}

// create a BST
// const myBST = new BST(6);
// myBST.add(4);
// myBST.add(9);
// myBST.add(2);
// myBST.add(5);
// myBST.add(14);
// myBST.add(8);
// myBST.add(12);
// myBST.add(10);

// // find 3rd max
// // console.log(myBST.root);
// console.log(myBST.traversePreorder());
// // console.log(myBST.root.rightChild);
// console.log(findAncestors(myBST.root, 10));

module.exports = findAncestors;
