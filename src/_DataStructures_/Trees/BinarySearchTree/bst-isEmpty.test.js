const BinarySearchTree = require('./index');

describe('Binary Search Tree', () => {
  describe('Is Empty', () => {
    const bst = new BinarySearchTree(6);
    const keys = [4, 9, 2, 5, 8, 12];
    keys.forEach(el => bst.add(el));
    it('should return False when BST is not empty', () => {
      expect(bst.isEmpty()).toEqual(false);
    });

    it('should return True when BST is empty', () => {
      keys.push(6);
      keys.forEach(el => bst.remove(el));
      expect(bst.isEmpty()).toEqual(true);
    });
  });
});
