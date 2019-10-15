const { lca } = require('.');
const BinarySearchTree = require('../index');

// Quick JSON equivalent
// {"left":{"left":{"data":4},"right":{"left":{"data":10},"right":{"data":14},"data":12},"data":8},"right":{"data":22},"data":20}

describe('LCA', () => {

  let bst = new BinarySearchTree(20);
  bst.add(22);
  bst.add(8);
  bst.add(12);
  bst.add(4);
  bst.add(14);
  bst.add(10);

  it('Should return 12', () => {
    expect(lca(bst.root, 10, 14).value).toEqual(12);
  });
  
  it('Should return 8', () => {
    expect(lca(bst.root, 14, 8).value).toEqual(8);
  });
  
  it('Should return 20', () => {
    expect(lca(bst.root, 10, 22).value).toEqual(20);
  });
});
