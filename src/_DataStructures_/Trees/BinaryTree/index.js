const Node = require('./Node');

class BinaryTree {
  constructor(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Invalid argument to create a Binary Tre');
    }
    this.root = this.createBinaryTree(this.root, arr, 0);
  }

  // eslint-disable-next-line class-methods-use-this
  createBinaryTree(root, arr, i) {
    if (i < arr.length) {
      // eslint-disable-next-line no-param-reassign
      root = new Node(arr[i]);
      // eslint-disable-next-line no-param-reassign
      root.leftChild = this.createBinaryTree(root.leftChild, arr, 2 * i + 1);
      // eslint-disable-next-line no-param-reassign
      root.rightChild = this.createBinaryTree(root.rightChild, arr, 2 * i + 2);
    }
    return root;
  }

  traversePreorder(root) {
    let arr = [];

    if (root === null) return arr;
    // push node to arr
    arr.push(root.value);

    // push left node
    const left = this.traversePreorder(root.leftChild);
    arr = [...arr, ...left];

    // push right node
    const right = this.traversePreorder(root.rightChild);
    arr = [...arr, ...right];

    return arr;
  }

  preOrder() {
    return this.traversePreorder(this.root);
  }
}

// const bt = new BinaryTree([1, 2, 3, 4, 5, 6]);
// console.log(bt.root);
// console.log(bt.preOrder());

module.exports = BinaryTree;
