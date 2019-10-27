const { getSmallestCommonNumber } = require('.');

describe('Get common smallest number between two integer arrays', () => {
  it('Should return -1 when both has empty array', () => {
    const arr1 = [];
    const arr2 = [];

    expect(getSmallestCommonNumber(arr1, arr2)).toEqual(-1);
  });

  it('Should return -1 when no common between two integer arrays', () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];

    expect(getSmallestCommonNumber(arr1, arr2)).toEqual(-1);
  });

  it('Should return common smallest number between unsorted two integer arrays', () => {
    const arr1 = [-10, 3];
    const arr2 = [2, -10, 7];

    expect(getSmallestCommonNumber(arr1, arr2)).toEqual(-10);
  });

  it('Should return common smallest number between unsorted two integer arrays', () => {
    const arr1 = [-10, 3, -11];
    const arr2 = [-11, 2, -10, 7];

    expect(getSmallestCommonNumber(arr1, arr2)).toEqual(-11);
  });

  it('Should return common smallest number between sorted two integer arrays', () => {
    const arr1 = [2, 3];
    const arr2 = [2, 5, 7];

    expect(getSmallestCommonNumber(arr1, arr2)).toEqual(2);
  });
});
