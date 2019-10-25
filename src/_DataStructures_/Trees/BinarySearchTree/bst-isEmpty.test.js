const BinarySearchTree = require('./index');

describe('Binary Search Tree', () => {
  describe('Is Empty', () => {
    const bst = new BinarySearchTree(6);
    bst.add(4);
    bst.add(9);
    bst.add(2);
    bst.add(5);
    bst.add(8);
    bst.add(12);
    it('should return False', () => {
      expect(bst.isEmpty()).toEqual(false);
    });

    it('should return True', () => {
      bst.remove(6);
      bst.remove(4);
      bst.remove(9);
      bst.remove(2);
      bst.remove(5);
      bst.remove(8);
      bst.remove(12);
      
      expect(bst.isEmpty()).toEqual(true);
    });
  });
});
