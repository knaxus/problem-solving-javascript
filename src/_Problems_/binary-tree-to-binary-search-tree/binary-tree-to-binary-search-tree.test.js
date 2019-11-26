const { binaryTreeToBST, storeInorder } = require('.');
const BinaryTree = require('../../_DataStructures_/Trees/BinaryTree');

describe('Binary tree to binary search tree', () => {
  let tree;

  it('Should return `null` if root is null', () => {
    tree = new BinaryTree([1]);
    tree.root = null;
    expect(binaryTreeToBST(tree)).toEqual(null);
  });

  it('Should converted binary tree to binary search tree', () => {
    tree = new BinaryTree([10, 30, 15, 20, null, null, 5]);
    const bTree = binaryTreeToBST(tree);
    expect(storeInorder(bTree)).toEqual([5, 10, 15, 20, 30]);
  });
});
