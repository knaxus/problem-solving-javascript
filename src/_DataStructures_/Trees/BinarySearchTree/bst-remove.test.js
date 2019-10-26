const BST = require('.');

describe('Data Structure : Binary Search Tree', () => {
  it('Binary Search Tree should be a Class', () => {
    expect(typeof BST.prototype.constructor).toEqual('function');
  });

  describe('Binary Search Tree API', () => {
    let bst = null;

    beforeEach(() => {
      bst = new BST(5);
    });

    it('Should delete() an element from Binary Search Tree', () => {
      bst.add(4);
      bst.add(9);
      bst.add(2);
      bst.delete(bst.root, 4);
      expect(bst.traverseInorder()).toEqual([2, 5, 9]);
      bst.delete(bst.root, 2);
      expect(bst.traverseInorder()).toEqual([5, 9]);
    });

    it('Should return NULL if root is empty', () => {
      const bst2 = new BST(6);
      bst2.remove(6);
      bst2.remove(9);
      expect(bst2.root).toEqual(null);
    });
  });
});
