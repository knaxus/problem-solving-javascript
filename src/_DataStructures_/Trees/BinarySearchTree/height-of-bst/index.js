// eslint-disable-next-line no-unused-vars
const BST = require('../index');

function findHeightOfBST(root) {
  let leftHeight = 0;
  let rightHeight = 0;

  if (root === null) return 0;
  leftHeight = findHeightOfBST(root.leftChild);
  rightHeight = findHeightOfBST(root.rightChild);

  if (leftHeight > rightHeight) {
    return leftHeight + 1;
  }
  return rightHeight + 1;
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

// // console.log(myBST.root);
// console.log(myBST.preorder());
// console.log(findHeightOfBST(myBST.root));

module.exports = findHeightOfBST;
