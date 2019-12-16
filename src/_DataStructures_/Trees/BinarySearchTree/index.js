/* eslint-disable consistent-return */
const Node = require('./Node');
const BSTUtils = require('./utils');

class BinarySearchTree {
  constructor(value) {
    if (!value) throw new Error('Root node value required');
    this.root = new Node(value);
    this.BSTUtils = BSTUtils;
  }

  isEmpty() {
    return this.root === null;
  }

  /** Layered methods to simplify the BST API using utils under the hood  */

  add(value) {
    return this.BSTUtils.insert(this.root, value);
  }

  preorder() {
    return this.BSTUtils.preorder(this.root);
  }

  traversePostorder() {
    return this.BSTUtils.postorder(this.root);
  }

  traverseInorder() {
    return this.BSTUtils.inorder(this.root);
  }

  searchFor(value) {
    return this.BSTUtils.search(this.root, value);
  }

  getMinimum() {
    const minNode = this.BSTUtils.findMinNode(this.root);
    return minNode.value;
  }

  getMaximum() {
    const maxNode = this.BSTUtils.findMaxNode(this.root);
    return maxNode.value;
  }

  remove(value) {
    this.root = this.BSTUtils.delete(this.root, value);
  }
}

// const bst = new BinarySearchTree(6);
// console.log(bst.root);
// bst.add(4);
// bst.add(9);
// bst.add(2);
// bst.add(5);
// bst.add(8);
// bst.add(12);

// console.log(bst.root);

// const preorder = bst.traversePreorder();
// console.log('Preorder Traversal - ', preorder);

// const inorder = bst.traverseInorder();
// console.log('Inorder Traversal - ', inorder);

// const postorder = bst.traversePostorder();
// console.log('Postorder Traversal - ', postorder);

// const search = 18;
// console.log(`Search for ${search}`, bst.searchFor(search));

// const minNode = bst.getMinimum();
// console.log('Minimum value =>', minNode);

// const maxNode = bst.getMaximum();
// console.log('Maximum value =>', maxNode);

// bst.remove(4);
// console.log(bst.traversePreorder());

// console.log(bst.root);

module.exports = BinarySearchTree;
