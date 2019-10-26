const BinaryTree = require("../index");
const bottomView = require('.');

describe('Bottom View Binary Tree', () => {
  let btree

  beforeEach(() => {
    btree = new BinaryTree([1, 2, 3, 4, 5, 6]);
  });

  it('Determines the bottom view of a binary tree', () => {
    expect(bottomView(btree)).toEqual([6, 2, 3, 4]);
  });
  it('handles null binary tree', () => {
    expect(bottomView(null)).toEqual([]);
  });
});
