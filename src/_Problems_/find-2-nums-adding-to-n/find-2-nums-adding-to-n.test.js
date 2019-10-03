const { findTwoNumsAddingToN, findTwoNumsAddingToN2 } = require('.');

describe('Find two numbers adding to N', () => {
  [findTwoNumsAddingToN, findTwoNumsAddingToN2].forEach((func) => {
    describe(func.name, () => {
      it('Should return an array with length two', () => {
        expect(findTwoNumsAddingToN2([1, 2], 3).length).toBe(2);
      });

      it('Should return false when there is no solution', () => {
        expect(findTwoNumsAddingToN2([1, 2], 5)).toBe(false);
      });

      it('Should return false input array length is less than 2', () => {
        expect(findTwoNumsAddingToN2([5], 5)).toBe(false);
      });

      it('Should return negative values', () => {
        expect(findTwoNumsAddingToN2([-2, 1, 2, 6, 7], 5)).toEqual(expect.arrayContaining([-2, 7]));
      });

      it('Should return two numbers that sum to N', () => {
        expect(findTwoNumsAddingToN([1, 2, 3, 5], 5)).toEqual(expect.arrayContaining([2, 3]));
      });
    });
  });

  describe('function differences findTwoNumsAddingToN and findTwoNumsAddingToN2', () => {
    it('Should return different arrays', () => {
      expect(findTwoNumsAddingToN([1, 2, 3, 4], 5))
        .toEqual(expect.not.arrayContaining(findTwoNumsAddingToN2([1, 2, 3, 4], 5)));
    });
  });
});
