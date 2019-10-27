/**
 * Lowest Common Ancestor in a Binary Search Tree.
 *
 * Given values of two values n1 and n2 in a Binary Search Tree, find the Lowest Common Ancestor (LCA). You may assume that both the values exist in the tree.
 */

function lowestCommonAncestor(node, n1, n2) {
  if (node === null) return null;

  // If both n1 and n2 are smaller than root, then LCA lies in left
  if (node.value > n1 && node.value > n2) { return lowestCommonAncestor(node.leftChild, n1, n2); }

  // If both n1 and n2 are greater than root, then LCA lies in right
  if (node.value < n1 && node.value < n2) { return lowestCommonAncestor(node.rightChild, n1, n2); }

  return node;
}

module.exports = {
  lowestCommonAncestor,
};
