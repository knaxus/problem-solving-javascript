// eslint-disable-next-line no-unused-vars
const BST = require('../index');

function searchAndPush(root, value, result) {
  /**
   * search the given node and meanwhile
   * keep pushing the visited nodes
   */
  if (root == null) {
    return false;
  }
  if (root.value === value) {
    return true;
  }
  if (
    searchAndPush(root.leftChild, value, result)
    || searchAndPush(root.rightChild, value, result)
  ) {
    result.push(root.value);
    return true;
  }
  return false;
}

function findAncestors(root, value) {
  const result = [];
  searchAndPush(root, value, result);
  return result;
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

// console.log(findAncestors(myBST.root, 10));
// console.log(findAncestors(myBST.root, 101));

module.exports = findAncestors;
