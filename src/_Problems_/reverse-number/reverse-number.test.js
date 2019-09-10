const { reverseNumber, reverse32BitInt } = require('.');

describe('Reverse Numbers', () => {
  describe('Normal Reverse', () => {
    it('Should return a number', () => {
      expect(typeof reverseNumber(1) === 'number');
    });

    it('Should reverse 45 to 54', () => {
      expect(reverseNumber(45)).toEqual(54);
    });

    it('Should reverse -2 to -2', () => {
      expect(reverseNumber(-2)).toEqual(-2);
    });

    it('Should reverse -1234567 to -7654321', () => {
      expect(reverseNumber(-1234567)).toEqual(-7654321);
    });

    it('Should throw error for invalid argument', () => {
      expect(() => reverseNumber('hello')).toThrow('Invalid Argument');
    });
  });

  describe('32-bit signed integer reversal', () => {
    it('Should return a number', () => {
      expect(typeof reverse32BitInt(1) === 'number');
    });

    it('Should reverse 123 to 321', () => {
      expect(reverse32BitInt(123)).toEqual(321);
    });

    it('Should reverse -871 to -178', () => {
      expect(reverse32BitInt(-871)).toEqual(-178);
    });

    it('Should return 0 for 1534236469 because of overflow when reversed', () => {
      expect(reverse32BitInt(1534236469)).toEqual(0);
    });
  });
});
