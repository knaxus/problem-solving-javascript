const { fizzBuzz } = require('.');

describe('FizBuzz...', () => {
  it('Should return `Fizz` for a multiple of 3 only', () => {
    expect(fizzBuzz(21)).toEqual('Fizz');
  });

  it('Should print `Buzz` for a multiple of 5 only', () => {
    expect(fizzBuzz(35)).toEqual('Buzz');
  });

  it('Should return `FizzBuzz` for multiple of 3 & 5', () => {
    expect(fizzBuzz(45)).toEqual('FizzBuzz');
  });

  it('Should return the number if its not a multiple of 3, 5 or both 3 & 5', () => {
    expect(fizzBuzz(7)).toEqual(7);
  });
});
