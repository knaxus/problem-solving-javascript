const { findSecondMax } = require('.');

describe('FindSecondMax', () => {
  it('Should return 6', () => {
    expect(findSecondMax([9, 2, 3, 6])).toEqual(6);
  });

  it('Should return -1', () => {
    expect(findSecondMax([0, -1, -2, 0])).toEqual(-1);
  });

  it('Should return 0', () => {
    expect(findSecondMax([-2, -1, 0, 1])).toEqual(0);
  });
});
