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
function storeInorder(root, inorder) {
  // Base case
  if (!root) return;

  // First store the left subtree
  storeInorder(root.left, inorder);

  // Append root's data
  inorder.push(root.data);

  // Store right subtree
  storeInorder(root.right, inorder);
}

// Helper function that copies of sorted array
function arrayToBST(arr, root) {
  const node = root;
  // Base case
  if (!node) return;

  // First update the left subtree
  arrayToBST(arr, node.left);

  // update the root's data and remove it from sorted array
  node.data = arr.shift();

  // Finally update the right subtree
  arrayToBST(arr, node.right);
}

function binaryTreeToBST(root) {
  // Tree is empty
  if (!root) return;

  const arr = [];
  storeInorder(root, arr);

  arr.sort((a, b) => a - b);
  arrayToBST(arr, root);
}

module.exports = {
  binaryTreeToBST,
};
