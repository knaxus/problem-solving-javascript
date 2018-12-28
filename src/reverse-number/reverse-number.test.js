const { reverseNumber } = require('.');

describe('Reverse Numbers', () => {
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
