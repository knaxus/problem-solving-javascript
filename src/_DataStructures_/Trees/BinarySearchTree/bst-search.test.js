const BinarySearchTree = require('./index');

describe('Binary Search Tree', () => {
  describe('It should Find the key in BST', () => {
    const bst = new BinarySearchTree(6);
    const keys = [4, 9, 2, 5, 8, 12];
    keys.forEach(el => bst.add(el));

    it('It should return true for 8', () => {
      expect(bst.searchFor(8)).toEqual(true);
    });

    it('It should return false for 100', () => {
      expect(bst.searchFor(100)).toEqual(false);
    });
  });
});
