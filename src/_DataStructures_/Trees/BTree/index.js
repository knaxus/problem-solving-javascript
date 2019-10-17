/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
const Node = require('./Node');

class BTree {
  constructor(t) {
    this.t = t;
    this.root = null;
  }

  splitChild(index, parent, y) {
    const z = new Node(this.t, y.isLeaf);
    z.totalKey = this.t - 1;

    for (let i = 0; i < this.t - 1; i += 1) {
      z.keys.push(y.keys[this.t + i]);
    }

    if (y.isLeaf === false) {
      for (let i = 0; i < this.t; i += 1) {
        z.child.push(y.child[this.t + 1]);
      }
      y.child = y.child.slice(0, this.t);
    }
    y.totalKey = this.t - 1;

    for (let i = parent.totalKey; i >= index + 1; i -= 1) {
      parent.child[i + 1] = parent.child[i];
    }
    parent.child[index + 1] = z;

    for (let i = parent.totalKey - 1; i >= index; i -= 1) {
      parent.keys[i + 1] = parent.keys[i];
    }

    parent.keys[index] = y.keys[this.t - 1];
    y.keys = y.keys.slice(0, this.t - 1);
    parent.totalKey += 1;
  }

  insertNonFull(node, key) {
    let i = node.totalKey - 1;

    if (node.isLeaf === true) {
      while (i >= 0 && node.keys[i] > key) {
        node.keys[i + 1] = node.keys[i];
        i -= 1;
      }
      node.keys[i + 1] = key;
      node.totalKey += 1;
    } else {
      while (i >= 0 && node.keys[i] > key) i -= 1;

      if (node.child[i + 1].totalKey === 2 * this.t - 1) {
        this.splitChild(i + 1, node, node.child[i + 1]);

        if (node.keys[i + 1] < key) i += 1;
      }
      this.insertNonFull(node.child[i + 1], key);
    }
  }

  insert(key) {
    if (this.root === null) {
      this.root = new Node(this.t, true);
      this.root.keys.push(key);
      this.root.totalKey = 1;
    } else if (this.root.totalKey === 2 * this.t - 1) {
      const newRoot = new Node(this.t, false);
      newRoot.child[0] = this.root;
      this.splitChild(0, newRoot, this.root);
      let i = 0;
      if (newRoot.keys[i] < key) i += 1;
      this.insertNonFull(newRoot.child[i], key);
      this.root = newRoot;
    } else {
      this.insertNonFull(this.root, key);
    }
  }
}

// const tree = new BTree(3);
// tree.insert(10);
// tree.insert(20);
// tree.insert(30);
// tree.insert(40);
// tree.insert(50);
// tree.insert(60);
// tree.insert(70);
// tree.insert(80);
// tree.insert(90);
// tree.insert(100);
// tree.insert(110);
// tree.insert(120);
// tree.insert(130);
// tree.insert(140);
// tree.insert(150);
// tree.insert(160);


// console.log('----root---');
// console.log(tree.root);

// console.log('----child0---');
// console.log(tree.root.child[0]);

// console.log('----child1---');
// console.log(tree.root.child[1]);

// console.log('----child2---');
// console.log(tree.root.child[2]);


module.export = BTree;
