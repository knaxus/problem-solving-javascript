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
    /** left - root - right */
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

  postorder(root) {
    /** left - right - root */

    if (root === null) return [];
    let arr = [];

    const left = this.postorder(root.leftChild);
    arr = [...left, ...arr];

    const right = this.postorder(root.rightChild);
    arr = [...arr, ...right];

    return [...arr, root.value];
  }

  search(root, value) {
    if (root === null) return false;
    if (value === root.value) return true;

    if (value < root.value) {
      return this.search(root.leftChild, value);
    }
    if (value > root.value) {
      return this.search(root.rightChild, value);
    }
    return false;
  }

  delete(root, value) {
    if (root === null) {
      return root;
    }

    if (value > root.value) {
      // eslint-disable-next-line no-param-reassign
      root.rightChild = this.delete(root.rightChild, value);
    } else if (value < root.value) {
      // eslint-disable-next-line no-param-reassign
      root.leftChild = this.delete(root.leftChild, value);
    } else {
      // found the node
      if (root.leftChild === null) {
        // there is a right sub-tree
        return root.rightChild;
      }
      if (root.rightChild === null) {
        // there is a left sub-tree
        return root.leftChild;
      }
    }
    return root;
  }

  isEmpty() {
    return this.root === null;
  }

  /** Layered methods to simplify the BST API  */

  add(value) {
    return this.insert(this.root, value);
  }

  traversePreorder() {
    return this.preorder(this.root);
  }

  traversePostorder() {
    return this.postorder(this.root);
  }

  traverseInorder() {
    return this.inorder(this.root);
  }

  searchFor(value) {
    return this.search(this.root, value);
  }

  remove(value) {
    return this.delete(this.root, value);
  }
}

const bst = new BinarySearchTree(6);
console.log(bst.root);
bst.add(4);
bst.add(9);
bst.add(2);
bst.add(5);
bst.add(8);
bst.add(12);

console.log(bst.root);

const preorder = bst.traversePreorder();
console.log('Preorder Traversal - ', preorder);

const inorder = bst.traverseInorder();
console.log('Inorder Traversal - ', inorder);

const postorder = bst.traversePostorder();
console.log('Postorder Traversal - ', postorder);

const search = 18;
console.log(`Search for ${search}`, bst.searchFor(search));

bst.remove(8);
console.log(bst.traversePreorder());

bst.remove(5);
console.log(bst.traversePreorder());

bst.remove(4);
console.log(bst.traversePreorder());

bst.remove(2);
console.log(bst.traversePreorder());

bst.remove(9);
console.log(bst.traversePreorder());

bst.remove(12);
console.log(bst.traversePreorder());

module.exports = BinarySearchTree;
