const { composeHighest, compare, ErrorMessage } = require('.');

/**
 * Test cases
 * [3, 6, 0, 9] -> 9630
 * [60, 548] -> 60548
 * [1, 34, 3, 98, 9, 76, 45, 4] -> 998764543431
 */

describe('Compose Largest Number', () => {
  describe('The main function returning the Highest NUmber', () => {
    it('Should throw error for invalid argument', () => {
      expect(() => composeHighest('abcd')).toThrow(ErrorMessage);
    });

    it('Should return 9630 for `[3, 6, 0, 9]`', () => {
      expect(composeHighest([3, 6, 0, 9])).toEqual(9630);
    });

    it('Should return 60548 for `[60, 548]`', () => {
      expect(composeHighest([60, 548])).toEqual(60548);
    });

    it('Should return 998764543431 for `[1, 34, 3, 98, 9, 76, 45, 4]`', () => {
      expect(composeHighest([1, 34, 3, 98, 9, 76, 45, 4])).toEqual(998764543431);
    });
  });

  describe('Testing custom `compare()` for `sort()`', () => {
    it('Should return [60, 548] instead of [548, 60]', () => {
      expect([60, 548].sort(compare)).toEqual([60, 548]);
    });

    it('Should return [9, 81, 548] instead of [548, 81, 9]', () => {
      expect([548, 9, 81].sort(compare)).toEqual([9, 81, 548]);
    });
  });
});
