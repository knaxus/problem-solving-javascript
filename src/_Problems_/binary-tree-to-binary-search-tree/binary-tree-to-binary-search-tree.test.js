const { binaryTreeToBST, storeInorder } = require('.');
const BinaryTree = require('../../_DataStructures_/Trees/BinaryTree');

describe('Binary tree to binary search tree', () => {
  let tree;

  describe('Create Binary Tree', () => {
    tree = new BinaryTree([10, 30, 15, 20, null, null, 5]);
  });

  it('Should converted binary tree to binary search tree', () => {
    const bTree = binaryTreeToBST(tree);
    expect(storeInorder(bTree)).toEqual([5, 10, 15, 20, 30]);
  });
});
