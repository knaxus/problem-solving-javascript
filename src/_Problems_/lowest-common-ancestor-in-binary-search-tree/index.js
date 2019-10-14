/**
 * Lowest Common Ancestor in a Binary Search Tree.
 *
 * Given values of two values n1 and n2 in a Binary Search Tree, find the Lowest Common Ancestor (LCA). You may assume that both the values exist in the tree.
 */
 
function lca(node, n1, n2) {
  if (node == null)
    return null;

  // If both n1 and n2 are smaller than root, then LCA lies in left
  if (node.data > n1 && node.data > n2)
    return lca(node.left, n1, n2);

  // If both n1 and n2 are greater than root, then LCA lies in right
  if (node.data < n1 && node.data < n2)
    return lca(node.right, n1, n2);

  return node;
}

module.exports = {
  lca,
};
