const { binaryTreeToBST, storeInorder } = require('.');
const Node = require('./Node');

describe('Binary tree to binary search tree', () => {
  let tree;

  describe('Create Binary Tree', () => {
    tree = new Node(10);
    tree.leftChild = new Node(30);
    tree.leftChild.leftChild = new Node(20);
    tree.rightChild = new Node(15);
    tree.rightChild.rightChild = new Node(5);
  });

  it('Should converted binary tree to binary search tree', () => {
    binaryTreeToBST(tree);
    expect(storeInorder(tree)).toEqual([5, 10, 15, 20, 30]);
  });
});
