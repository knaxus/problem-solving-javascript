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
function arrayToBST(arr, root) {
  const node = root;
  // Base case
  if (!node) return;

  // First update the left subtree
  arrayToBST(arr, node.leftChild);

  // update the root's data and remove it from sorted array
  node.value = arr.shift();

  // Finally update the right subtree
  arrayToBST(arr, node.rightChild);
}

function binaryTreeToBST(root) {
  // Tree is empty
  if (!root) return;
  const arr = storeInorder(root);
  arr.sort((a, b) => a - b);
  arrayToBST(arr, root);
}

module.exports = {
  binaryTreeToBST,
  storeInorder,
};
