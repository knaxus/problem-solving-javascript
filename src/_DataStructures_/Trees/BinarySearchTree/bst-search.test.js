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
    it('search for 8', () => {
      expect(bst.searchFor(8)).toEqual(true);
    });

    it('search for 100', () => {
      expect(bst.searchFor(100)).toEqual(false);
    });
  });
});
