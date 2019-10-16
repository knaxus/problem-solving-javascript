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
  // Base case
  if (!root) return;

  // First update the left subtree
  arrayToBST(arr, root.left);

  // update the root's data and remove it from sorted array
  root.data = arr.shift();

  // Finally update the right subtree
  arrayToBST(arr, root.right);
}

function binaryTreeToBST(root) {
  // Tree is empty
  if (!root) return;

  const arr = [];
  storeInorder(root, arr);

  arr.sort((a, b) => a - b);
  arrayToBST(arr, root);
}

function printInorder(root) {
  if (!root) return;

  printInorder(root.left);

  console.log(root.data);

  printInorder(root.right);
}

function run(tree) {
  printInorder(tree);

  binaryTreeToBST(tree);

  printInorder(tree);
}

const a = {
  data: 10,
  left: { data: 30, left: { data: 20 } },
  right: { data: 15, right: { data: 5 } },
};
