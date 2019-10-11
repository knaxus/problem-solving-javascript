const BinarySearchTree = require('./index');

describe('Binary Search Tree', () => {
  let bst;
  let rootsLeftChild, rootsRightChild;
  let rootsLeftChildsLeftChild, rootsLeftChildsRightChild;
  let rootsRightChildsLeftChild, rootsRightChildsRightChild;

  describe('Creates a binary search tree', () => {
    it('should create a bst with root 100', () => {
      bst = new BinarySearchTree(100);
      expect(bst.root.value).toEqual(100);
    });

    it('should add element 20 to the left of root node', () => {
      bst.add(20);
      rootsLeftChild = bst.root.leftChild;
      expect(rootsLeftChild.value).toEqual(20);
    });

    it('should add element 500 to the right of root node', () => {
      bst.add(500);
      rootsRightChild = bst.root.rightChild;
      expect(rootsRightChild.value).toEqual(500);
    });

    it('should add element 10 to the left of root"s left child', () => {
      bst.add(10);
      rootsLeftChildsLeftChild = bst.root.leftChild.leftChild;
      expect(rootsLeftChildsLeftChild.value).toEqual(10);
    });

    it('should add element 30 to the right of root"s left child', () => {
      bst.add(30);
      rootsLeftChildsRightChild = bst.root.leftChild.rightChild;
      expect(rootsLeftChildsRightChild.value).toEqual(30);
    });

    it('should add element 400 to the left of root"s right child', () => {
      bst.add(400);
      rootsRightChildsLeftChild = bst.root.rightChild.leftChild;
      expect(rootsRightChildsLeftChild.value).toEqual(400);
    });

    it('should add element 600 to the right of root"s right child', () => {
      bst.add(600);
      rootsRightChildsRightChild = bst.root.rightChild.rightChild;
      expect(rootsRightChildsRightChild.value).toEqual(600);
    });
  });
});
