const { lowestCommonAncestor } = require('.');
const BinarySearchTree = require('../index');

// Quick JSON equivalent
// {"left":{"left":{"data":4},"right":{"left":{"data":10},"right":{"data":14},"data":12},"data":8},"right":{"data":22},"data":20}

describe('Lowest Common Ancestor in BST', () => {
  const bst = new BinarySearchTree(20);
  const keys = [22, 8, 12, 4, 14, 10];
  keys.forEach(el => bst.add(el));

  it('Should return Lowest Common Ancestor Node ', () => {
    expect(lowestCommonAncestor(bst.root, 10, 14).value).toEqual(12);
    expect(lowestCommonAncestor(bst.root, 14, 8).value).toEqual(8);
    expect(lowestCommonAncestor(bst.root, 10, 22).value).toEqual(20);
  });

  const bst2 = new BinarySearchTree(6);
  bst2.remove(6);

  it('Should return Null when root is null', () => {
    expect(lowestCommonAncestor(bst2.root, 10, 22)).toEqual(null);
  });
});
