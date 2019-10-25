const BinarySearchTree = require('./index');

describe('Binary Search Tree', () => {
  describe('Find minimum value in BST', () => {
    const bst = new BinarySearchTree(6);
    bst.add(4);
    bst.add(9);
    bst.add(2);
    bst.add(5);
    bst.add(8);
    bst.add(12);
    it('should return 4', () => {      
      expect(bst.getMinimum()).toEqual(2);
    });

    it('should return 1', () => {
      bst.add(1);
      expect(bst.getMinimum()).toEqual(1);
    });
  });
});
