const threeSum = require('./3sum');

describe('threeSum', () => {
  it('Should return [[-1, -1, 2], [-1, 0, 1]]', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  it('Should return [[0, 0, 0]]', () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });

  it('Should return [[-1, -1, 2]]', () => {
    expect(threeSum([-1, 2, -1, -4])).toEqual([[-1, -1, 2]]);
  });
});
