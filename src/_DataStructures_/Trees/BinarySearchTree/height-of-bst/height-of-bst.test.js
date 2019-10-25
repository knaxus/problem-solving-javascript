const BinarySearchTree = require('../index');
const heightOfBST = require('./index');

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

  describe('Check bst was created as expected', () => {
    it('Inorder traversal of the created bst should be [ 2, 4, 5, 6, 8, 9, 12 ]', () => {
      expect(bst.traverseInorder()).toEqual([2, 4, 5, 6, 8, 9, 12]);
    });

    it('Preorder traversal of the created bst should be [ 6, 4, 2, 5, 9, 8, 12 ]', () => {
      expect(bst.traversePreorder()).toEqual([6, 4, 2, 5, 9, 8, 12]);
    });

    it('Postorder traversal of the created bst should be  [ 2, 5, 4, 8, 12, 9, 6 ]', () => {
      expect(bst.traversePostorder()).toEqual([2, 5, 4, 8, 12, 9, 6]);
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

  describe('Check bst was created as expected', () => {
    const bst2 = new BinarySearchTree(10);
    bst2.add(11);
    bst2.add(20);
    bst2.add(9);
    bst2.add(8);
    bst2.add(7);
    bst2.add(6);
    bst2.add(5);
    bst2.add(4);

    it('Height should be 7', () => {
      expect(heightOfBST(bst2.root)).toEqual(7);
    });
  });
});
