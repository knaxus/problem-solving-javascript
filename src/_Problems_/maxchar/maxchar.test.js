const { findMaxchar } = require('.');

describe('MaxChar', () => {
  it('Should throw error for invalid argument', () => {
    expect(() => findMaxchar(21)).toThrow('Invalid Argument');
  });

  it('Should return `l` for given string `Hello World`', () => {
    expect(findMaxchar('Hello World')).toEqual('l');
  });

  it('Should return `a` for given string `A wonderful day`', () => {
    expect(findMaxchar('A wonderful day')).toEqual('a');
  });
});
