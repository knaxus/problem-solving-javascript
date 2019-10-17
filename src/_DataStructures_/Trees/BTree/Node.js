module.exports = class Node {
  constructor(t, isLeaf) {
    this.t = t;
    this.isLeaf = isLeaf;
    this.keys = [];
    this.child = [];
    this.totalKey = 0;
  }
};
