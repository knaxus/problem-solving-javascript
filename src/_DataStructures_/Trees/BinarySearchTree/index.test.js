const BinarySearchTree = require('./index');

describe('Data Structure : Binary Search Tree', () => {
  let bst;
  let rootsLeftChild;
  let rootsRightChild;
  let rootsLeftChildsLeftChild;
  let rootsLeftChildsRightChild;
  let rootsRightChildsLeftChild;
  let rootsRightChildsRightChild;

  it('Binary Search Tree should be a Class', () => {
    expect(typeof BinarySearchTree.prototype.constructor).toEqual('function');
  });

  describe('Creation of BST', () => {
    it('Should create a BST with root 100', () => {
      bst = new BinarySearchTree(100);
      expect(bst.root.value).toEqual(100);
    });

    it('Should add element 20 to the left of root node', () => {
      bst.add(20);
      rootsLeftChild = bst.root.leftChild;
      expect(rootsLeftChild.value).toEqual(20);
    });

    it('Should add element 500 to the right of root node', () => {
      bst.add(500);
      rootsRightChild = bst.root.rightChild;
      expect(rootsRightChild.value).toEqual(500);
    });

    it('Should add element 10 to the left of root"s left child', () => {
      bst.add(10);
      rootsLeftChildsLeftChild = bst.root.leftChild.leftChild;
      expect(rootsLeftChildsLeftChild.value).toEqual(10);
    });

    it('Should add element 30 to the right of root"s left child', () => {
      bst.add(30);
      rootsLeftChildsRightChild = bst.root.leftChild.rightChild;
      expect(rootsLeftChildsRightChild.value).toEqual(30);
    });

    it("Should add element 400 to the left of root's right child", () => {
      bst.add(400);
      rootsRightChildsLeftChild = bst.root.rightChild.leftChild;
      expect(rootsRightChildsLeftChild.value).toEqual(400);
    });

    it("Should add element 600 to the right of root's right child", () => {
      bst.add(600);
      rootsRightChildsRightChild = bst.root.rightChild.rightChild;
      expect(rootsRightChildsRightChild.value).toEqual(600);
    });
  });

  describe('Check insertion was as expected', () => {
    it('Inorder traversal of the created bst should be [ 10, 20, 30, 100, 400, 500, 600 ]', () => {
      expect(bst.inorder()).toEqual([10, 20, 30, 100, 400, 500, 600]);
    });

    it('Preorder traversal of the created bst should be [ 100, 20, 10, 30, 500, 400, 600 ]', () => {
      expect(bst.preorder()).toEqual([100, 20, 10, 30, 500, 400, 600]);
    });

    it('Postorder traversal of the created bst should be [ 10, 30, 20, 400, 600, 500, 100 ]', () => {
      expect(bst.postorder()).toEqual([10, 30, 20, 400, 600, 500, 100]);
    });
  });

  describe('Check if BST `Is Empty`, find Min & Max in BST', () => {
    const keys = [4, 9, 2, 5, 8, 12];

    beforeEach(() => {
      bst = new BinarySearchTree(6);
      keys.forEach(el => bst.add(el));
    });

    afterEach(() => {
      if (bst.root) bst.root = null;
    });

    it('Should return `false` when BST is not empty', () => {
      expect(bst.isEmpty()).toEqual(false);
    });

    it('Should return `true` when BST is empty', () => {
      // remove all the nodes
      keys.push(6); // head node
      keys.forEach(e => bst.remove(e));
      expect(bst.isEmpty()).toEqual(true);
    });

    it('Should expect maximum key', () => {
      expect(bst.getMaximum()).toEqual(12);
    });

    it('Should expect new maximum key added in BST', () => {
      bst.add(20);
      expect(bst.getMaximum()).toEqual(20);
    });

    it('Should expect minimum key', () => {
      expect(bst.getMinimum()).toEqual(2);
    });

    it('Should expect new minimum key added to BST', () => {
      bst.add(1);
      expect(bst.getMinimum()).toEqual(1);
    });
  });

  describe('Remove Node in BST', () => {
    beforeEach(() => {
      bst = new BinarySearchTree(5);
    });

    it('Should delete() an element from Binary Search Tree', () => {
      bst.add(4);
      bst.add(9);
      bst.add(2);
      bst.remove(4);
      expect(bst.inorder()).toEqual([2, 5, 9]);
      bst.remove(2);
      expect(bst.inorder()).toEqual([5, 9]);
    });

    it('Should return NULL if root is empty', () => {
      const bst2 = new BinarySearchTree(6);
      bst2.remove(6);
      bst2.remove(9);
      expect(bst2.root).toEqual(null);
    });
  });

  describe('Search value in BST', () => {
    bst = new BinarySearchTree(6);

    it('Should return `true` for 8', () => {
      [4, 9, 2, 5, 8, 12].forEach(el => bst.add(el));
      expect(bst.search(8)).toEqual(true);
    });

    it('Should return `false` for 100', () => {
      expect(bst.search(100)).toEqual(false);
    });
  });

  describe('Traversals in BST', () => {
    beforeEach(() => {
      bst = new BinarySearchTree(6);
      [4, 9, 2, 5, 8, 12].forEach(el => bst.add(el));
    });
    afterEach(() => {
      if (bst.root) bst.root = null;
    });

    it('Should return the `Preorder Traversal` for given BST', () => {
      const preOrderTraversal = bst.preorder();
      expect(preOrderTraversal).toEqual([6, 4, 2, 5, 9, 8, 12]);
    });

    it('Should return the `Inorder Traversal` for given BST', () => {
      const inOrderTraversal = bst.inorder();
      expect(inOrderTraversal).toEqual([2, 4, 5, 6, 8, 9, 12]);
    });

    it('Should return the `Postorder Traversal` for given BST', () => {
      const postOrderTraversal = bst.postorder();
      expect(postOrderTraversal).toEqual([2, 5, 4, 8, 12, 9, 6]);
    });
  });
});
