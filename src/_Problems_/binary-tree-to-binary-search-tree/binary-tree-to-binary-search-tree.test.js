const { binaryTreeToBST } = require('.');

const tree = {
  data: 10,
  left: { data: 30, left: { data: 20 } },
  right: { data: 15, right: { data: 5 } },
};

describe('Binary tree to binary search tree', () => {
  it('Should converted binary tree to binary search tree', () => {
    binaryTreeToBST(tree);
    expect(tree).toEqual({
      data: 15,
      left: {
        data: 10,
        left: {
          data: 5,
        },
      },
      right: {
        data: 20,
        right: {
          data: 30,
        },
      },
    });
  });
});
