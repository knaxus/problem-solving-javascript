const BinarySearchTree = require('./index');

describe('Binary search tree traversals', () => {
  let bst;
  let preOrderTraversal, inOrderTraversal, postOrderTraversal;

  describe('Creates BST', () => {
    // Creates BST
    bst = new BinarySearchTree(6);
    bst.add(4);
    bst.add(9);
    bst.add(2);
    bst.add(5);
    bst.add(8);
    bst.add(12);
  });

  describe('BST traversals', () => {
    it('should complete the Preorder traversal for the above created bst', () => {
      preOrderTraversal = bst.traversePreorder();
      expect(preOrderTraversal).toEqual([6, 4, 2, 5, 9, 8, 12]);
    });

    it('should complete the Inorder traversal for the above created bst', () => {
      inOrderTraversal = bst.traverseInorder();
      expect(inOrderTraversal).toEqual([2, 4, 5, 6, 8, 9, 12]);
    });

    it('should complete the Postorder traversal for the above created bst', () => {
      postOrderTraversal = bst.traversePostorder();
      expect(postOrderTraversal).toEqual([2, 5, 4, 8, 12, 9, 6]);
    });
  });
});
