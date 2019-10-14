const { findSecondMax } = require('.');

describe('LCA', () => {
  it('Should return 12', () => {
    expect(lca({"left":{"left":{"data":4},"right":{"left":{"data":10},"right":{"data":14},"data":12},"data":8},"right":{"data":22},"data":20}).data).toEqual(12);
  });
});

