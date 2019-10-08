const Node = require('./Node');

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
  }

  insert(root, value) {
    if (root === null) {
      const newNode = new Node(value);
      // eslint-disable-next-line no-param-reassign
      root = newNode;
      return root;
    }

    if (value < root.value) {
      // eslint-disable-next-line no-param-reassign
      root.leftChild = this.insert(root.leftChild, value);
      return root;
    }
    if (value > root.value) {
      // eslint-disable-next-line no-param-reassign
      root.rightChild = this.insert(root.rightChild, value);
      return root;
    }
    return root;
  }

  preorder(root) {
    /** returning an array so as to make testing easy */
    let arr = [];
    if (root === null) return [];
    arr.push(root.value);

    const left = this.preorder(root.leftChild);
    arr = [...arr, ...left];

    const right = this.preorder(root.rightChild);
    arr = [...arr, ...right];
    return arr;
  }

  inorder(root) {
    if (root === null) return [];
    let arr = [];
    const left = this.inorder(root.leftChild);
    arr = [...left, ...arr];

    // print root
    arr = [...arr, root.value];

    const right = this.inorder(root.rightChild);
    arr = [...arr, ...right];
    return arr;
  }
}

// const bst = new BinarySearchTree(6);
// console.log(bst.root);
// bst.insert(bst.root, 4);
// bst.insert(bst.root, 9);
// bst.insert(bst.root, 2);
// bst.insert(bst.root, 5);
// bst.insert(bst.root, 8);
// bst.insert(bst.root, 12);

// console.log(bst.root);

// const preorder = bst.preorder(bst.root);
// console.log('Preorder Traversal - ', preorder);

// const inorder = bst.inorder(bst.root);
// console.log('Inorder Traversal - ', inorder);

module.exports = BinarySearchTree;
