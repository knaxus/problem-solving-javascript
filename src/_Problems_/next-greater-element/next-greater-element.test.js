const { nextGreaterElement } = require('.');

describe('Next greater element', () => {
  it('returns next greater elements collection', () => {
    const input = [4, 6, 3, 2, 8, 1]
    const greaterElements = [6, 8, 8, 8, -1, -1]

    expect(nextGreaterElement(input)).toEqual(greaterElements);
  });

  it('returns and empty collection for an empty array', () => {
    expect(nextGreaterElement([])).toEqual([]);
  });

  it('returns an array with -1 if the input has only one element', () => {
    expect(nextGreaterElement([0])).toEqual([-1]);
  });

  it('returns a collection of -1 if there is no greater element', () => {
    const input = [90, 40, 15, 7, -1, -10]
    const greaterElements = [-1, -1, -1, -1, -1, -1]

    expect(nextGreaterElement(input)).toEqual(greaterElements);
  });

  it('uses -1 if the numbers are the same', () => {
    const input = [90, 90]
    const greaterElements = [-1, -1]

    expect(nextGreaterElement(input)).toEqual(greaterElements);
  });

  it('throws an error if the input is not an array', () => {
    expect(() => {
      nextGreaterElement('xunda')
    }).toThrowError('Invalid Argument');
  });
});
