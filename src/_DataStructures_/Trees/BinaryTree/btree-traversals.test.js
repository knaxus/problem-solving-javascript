const BinaryTree = require("./index");

describe("Binary Tree Preorder Traversal", () => {
  let btree;
  let preOrderTraversal;

  describe("Creates BTree", () => {
    btree = new BinaryTree([1, 2, 3, 4, 5, 6]);
  });

  describe("BTree Traversals", () => {
    it("should compute the Preorder traversal for the above created binary tree", () => {
      preOrderTraversal = btree.preOrder();
      expect(preOrderTraversal).toEqual([1, 2, 4, 5, 3, 6]);
    });
  });
});
