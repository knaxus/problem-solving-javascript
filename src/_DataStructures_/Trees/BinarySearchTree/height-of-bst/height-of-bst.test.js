const BinarySearchTree = require('../index');
const heightOfBST = require('./index');

describe('Binary search tree traversals', () => {
  let bst;

  describe('Creates BST', () => {
    it('should create BST', () => {
      // Creates BST
      bst = new BinarySearchTree(6);
      const keys = [4, 9, 2, 5, 8, 12];
      keys.forEach(el => bst.add(el));
    });
  });

  describe('Check bst was created as expected', () => {
    it('Inorder traversal of the created bst should be [ 2, 4, 5, 6, 8, 9, 12 ]', () => {
      expect(bst.inorder()).toEqual([2, 4, 5, 6, 8, 9, 12]);
    });

    it('Preorder traversal of the created bst should be [ 6, 4, 2, 5, 9, 8, 12 ]', () => {
      expect(bst.preorder()).toEqual([6, 4, 2, 5, 9, 8, 12]);
    });

    it('Postorder traversal of the created bst should be  [ 2, 5, 4, 8, 12, 9, 6 ]', () => {
      expect(bst.postorder()).toEqual([2, 5, 4, 8, 12, 9, 6]);
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

  describe('When root left subtree height is greater than right', () => {
    const bst2 = new BinarySearchTree(10);
    const keys = [11, 20, 9, 8, 7, 6, 5, 4];
    keys.forEach(el => bst2.add(el));

    it('should return height of BST ', () => {
      expect(heightOfBST(bst2.root)).toEqual(7);
    });
  });
});
