const BinarySearchTree = require('./index');
const heightOfBST = require('./height-of-bst/index');

describe('Binary search tree traversals', () => {
  let bst;

  describe('Creates BST', () => {
    it('should create BST', () => {
      // Creates BST
      bst = new BinarySearchTree(6);
      bst.add(4);
      bst.add(9);
      bst.add(2);
      bst.add(5);
      bst.add(8);
      bst.add(12);
    });
  });

  describe('BST node deletions', () => {
    it('should check height of bst to be 3 prior deletion', () => {
      expect(heightOfBST(bst.root)).toEqual(3);
    });

    it('deleting leaf element does not affect tree height if it has sibling', () => {
      bst.remove(2);
      bst.remove(8);
      expect(heightOfBST(bst.root)).toEqual(3);
    });

    it('deleting leaf element does affect tree height if it has no-sibling', () => {
      bst.remove(5);
      bst.remove(12);
      expect(heightOfBST(bst.root)).toEqual(2);
    });
  });
});
