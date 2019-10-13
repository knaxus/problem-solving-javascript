// eslint-disable-next-line no-unused-vars
const BST = require('../index');

/** You should go through this conversation here:
 * https://github.com/knaxus/problem-solving-javascript/pull/63
 */

function findAncestors(root, value) {
  /**
   * search the given node and meanwhile
   * keep pushing the visited nodes
   */
  if (root === null) return false;

  if (value < root.value) {
    const left = findAncestors(root.leftChild, value);
    if (left) {
      return [...left, root.value];
    }
    return false;
  }

  if (value > root.value) {
    const right = findAncestors(root.rightChild, value);
    if (right) {
      return [...right, root.value];
    }
    return false;
  }

  if (value === root.value) return [];
  return false;
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
