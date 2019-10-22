module.exports = class Node {
  constructor(isLeaf) {
    this.isLeaf = isLeaf;
    this.keys = [];
    this.child = [];
    this.totalKey = 0;
  }
};
