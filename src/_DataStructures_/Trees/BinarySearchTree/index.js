const Node = require('./Node');
const BSTUtils = require('./utils');

class BinarySearchTree {
  constructor(value) {
    if (!value) throw new Error('Root node value required');
    this.root = new Node(value);
  }

  isEmpty() {
    return this.root === null;
  }

  /** Layered methods to simplify the BST API using utils under the hood  */

  add(value) {
    return BSTUtils.insert(this.root, value);
  }

  preorder() {
    return BSTUtils.preorder(this.root, []);
  }

  postorder() {
    return BSTUtils.postorder(this.root, []);
  }

  inorder() {
    return BSTUtils.inorder(this.root, []);
  }

  search(value) {
    return BSTUtils.search(this.root, value);
  }

  getMinimum() {
    const minNode = BSTUtils.findMinNode(this.root);
    return minNode.value;
  }

  getMaximum() {
    const maxNode = BSTUtils.findMaxNode(this.root);
    return maxNode.value;
  }

  remove(value) {
    this.root = BSTUtils.delete(this.root, value);
  }
}

// const bst = new BinarySearchTree(6);
// [4, 9, 2, 5, 8, 12].forEach(el => bst.add(el));

// const preorder = bst.preorder();
// console.log('Preorder Traversal - ', preorder);

// const inorder = bst.inorder();
// console.log('Inorder Traversal - ', inorder);

// const postorder = bst.postorder();
// console.log('Postorder Traversal - ', postorder);

// const search = 18;
// console.log(`Search for ${search}`, bst.search(search));

// const minNode = bst.getMinimum();
// console.log('Minimum value =>', minNode);

// const maxNode = bst.getMaximum();
// console.log('Maximum value =>', maxNode);

// bst.remove(4);
// console.log(bst.preorder());

// console.log(bst.root);

module.exports = BinarySearchTree;
