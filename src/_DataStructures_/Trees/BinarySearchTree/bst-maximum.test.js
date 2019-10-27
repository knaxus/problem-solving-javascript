const BinarySearchTree = require('./index');

describe('Binary Search Tree', () => {
  describe('Find maximum value in BST', () => {
    const bst = new BinarySearchTree(6);
    const keys = [4, 9, 2, 5, 8, 12];
    keys.forEach(el => bst.add(el));

    it('It should expect maximum key', () => {
      expect(bst.getMaximum()).toEqual(12);
    });

    it('It should expect new maximum key added in BST', () => {
      bst.add(20);
      expect(bst.getMaximum()).toEqual(20);
    });
  });
});
