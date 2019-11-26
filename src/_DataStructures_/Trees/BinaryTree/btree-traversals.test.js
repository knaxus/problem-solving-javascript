const BinaryTree = require('./index');

describe('Binary Tree Preorder Traversal', () => {
  let btree;
  let preOrderTraversal;

  describe('Creates BTree', () => {
    it('Should throw error if argument is not array', () => {
      expect(() => {
        btree = new BinaryTree('Hello tree');
      }).toThrow('Invalid argument to create a Binary Tree');
    });
    btree = new BinaryTree([1, 2, 3, 4, 5, 6]);
  });

  describe('BTree Traversals', () => {
    it('Should compute the Preorder traversal for the above created binary tree', () => {
      preOrderTraversal = btree.preOrder();
      expect(preOrderTraversal).toEqual([1, 2, 4, 5, 3, 6]);
    });
  });
});
