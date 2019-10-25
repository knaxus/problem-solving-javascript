const BinarySearchTree = require('./index');

describe('Binary Search Tree', () => {
  describe('Find maximum value in BST', () => {
    const bst = new BinarySearchTree(6);
    bst.add(4);
    bst.add(9);
    bst.add(2);
    bst.add(5);
    bst.add(8);
    bst.add(12);
    it('should return 12', () => {
      expect(bst.getMaximum()).toEqual(12);
    });

    it('should return 20', () => {
      bst.add(20);
      expect(bst.getMaximum()).toEqual(20);
    });
  });
});
