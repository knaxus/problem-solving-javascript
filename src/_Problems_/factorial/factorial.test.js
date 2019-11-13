const { factorial } = require('.');

describe('Factorial', () => {
  it('Should return 24', () => {
    expect(factorial(4)).toEqual(24);
  });

  it('Should return 1', () => {
    expect(factorial(1)).toEqual(1);
  });

  it('Should return 120', () => {
    expect(factorial(5)).toEqual(120);
  });
});
