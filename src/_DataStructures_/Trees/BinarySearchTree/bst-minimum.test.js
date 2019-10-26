const BinarySearchTree = require('./index');

describe('Binary Search Tree', () => {
  describe('It should Find the minimum value in BST', () => {
    const bst = new BinarySearchTree(6);
    const keys = [4, 9, 2, 5, 8, 12];
    keys.forEach(el => bst.add(el));

    it('It should expect minimum key', () => {
      expect(bst.getMinimum()).toEqual(2);
    });

    it('It should expect new minimum key added to BST', () => {
      bst.add(1);
      expect(bst.getMinimum()).toEqual(1);
    });
  });
});
