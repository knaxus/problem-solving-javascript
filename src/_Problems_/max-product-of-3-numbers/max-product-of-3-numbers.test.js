const { maxProductof3Numbers, maxProductof3NumbersII } = require('.');

describe('Maximum Product of three numbers', () => {
  it('throws an error with no Array is passed', () => {
    expect(() => {
      maxProductof3Numbers('xunda');
    }).toThrowError();
    expect(() => {
      maxProductof3NumbersII('xunda');
    }).toThrowError();
  });

  it('returns the product of an array with 3 numbers', () => {
    expect(maxProductof3Numbers([1, 2, 3])).toEqual(6);
    expect(maxProductof3NumbersII([1, 2, 3])).toEqual(6);
  });

  it('returns the product of an array with positive and negative numbers', () => {
    expect(maxProductof3Numbers([-10, -10, 2, 3])).toEqual(300);
    expect(maxProductof3NumbersII([-10, -10, 2, 3])).toEqual(300);
  });

  it('returns the product of an array with negative numbers', () => {
    expect(maxProductof3Numbers([-10, -1, -2, -10])).toEqual(-20);
    expect(maxProductof3NumbersII([-10, -1, -2, -10])).toEqual(-20);
  });

  it('returns the proper calculation if the array is large', () => {
    const largeArray = [
      100,
      100,
      100,
      12,
      3,
      45,
      4,
      3,
      7,
      8,
      1,
      3,
      7,
      8,
      1,
      4,
      3,
      7,
      8,
      1,
      3,
      7,
      8,
      1,
      12,
      3,
      45,
      4,
      3,
      7,
      8,
      1,
      3,
      7,
      8,
      1,
      4,
      3,
      7,
      8,
      1,
      3,
      7,
      8,
      1,
      4,
      3,
      7,
      8,
      1,
      3,
      7,
      8,
      1,
      12,
      3,
      45,
      4,
      3,
      7,
      8,
      1,
      3,
      7,
      8,
      1,
      4,
      3,
      7,
      8,
      1,
      3,
      7,
      8,
      45,
      4,
      3,
      7,
      8,
      1,
      3,
      7,
      8,
      3,
      45,
      4,
      3,
      7,
      8,
      1,
      3,
      7,
      8,
      1,
      4,
      3,
      7,
      8,
      1,
      3,
      7,
      8,
      1,
      12,
      3,
      45,
      4,
      3,
      7,
      8,
      1,
      3,
      7,
      8,
      1,
      4,
      3,
      7,
      8,
      1,
      3,
      7,
      8,
      1,
      4,
      3,
      7,
      8,
      1,
      3,
      7,
      8,
      1,
      12,
      3,
      45,
      4,
      3,
      7,
      8,
      1,
      3,
      7,
      8,
      1,
      4,
      3,
      7,
      8,
      1,
      3,
      7,
      8,
      45,
      4,
      3,
      7,
      8,
      1,
      3,
      7,
      8,
    ];
    expect(maxProductof3Numbers(largeArray)).toEqual(100 * 100 * 100);
    expect(maxProductof3NumbersII(largeArray)).toEqual(100 * 100 * 100);
  });

  it('returns an error if there are less than 3 numbers', () => {
    expect(() => {
      maxProductof3Numbers([-10, -1]);
    }).toThrowError();
  });
});
