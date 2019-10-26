/**
 * Given a Binary Tree, convert it to a Binary Search Tree.
 * The conversion must be done in such a way that keeps the original structure of Binary Tree.
 * Example 1
Input:
          10
         /  \
        2    7
       / \
      8   4
Output:
          8
         /  \
        4    10
       / \
      2   7
 */

const Node = require('../../_DataStructures_/Trees/BinaryTree/Node');
// Helper function to store inorder traversal of a binary tree
function storeInorder(root) {
  /** left - root - right */
  if (root === null) return [];

  // First store the left subtree
  let arr = [];
  const left = storeInorder(root.leftChild);
  arr = [...left, ...arr];

  // Append root's data
  arr = [...arr, root.value];

  // Store right subtree
  const right = storeInorder(root.rightChild);
  arr = [...arr, ...right];
  return arr;
}

// Helper function to copy elements from sorted array to make BST while keeping same structure
// Runtime complexity iof this function is O(n) where n is number of nodes, as we are each node of tree one time.
function arrayToBST(arr, root) {
  const node = root;
  // Base case
  if (!node) return null;

  const bstNode = new Node();
  // First update the left subtree
  const leftChild = arrayToBST(arr, node.leftChild);
  if (leftChild) {
    bstNode.leftChild = leftChild;
  }

  // update the root's data and remove it from sorted array
  // eslint-disable-next-line no-param-reassign
  bstNode.value = arr.shift();

  // Finally update the right subtree
  const rightChild = arrayToBST(arr, node.rightChild);
  if (rightChild) {
    bstNode.rightChild = rightChild;
  }

  return bstNode;
}

function binaryTreeToBST(bTree) {
  // Tree is empty
  if (!bTree.root) return null;
  const arr = bTree.preOrder();
  arr.sort((a, b) => a - b);
  const bst = arrayToBST(arr, bTree.root);
  return bst;
}

module.exports = {
  binaryTreeToBST,
  storeInorder,
};
