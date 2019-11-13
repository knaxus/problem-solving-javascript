const findMaxConsecutive1s = require('.');

describe('Find max consecutive 1s', () => {
  it('returns 0 for an empty array', () => {
    const inputArr = [];
    const expected = 0;

    expect(findMaxConsecutive1s(inputArr)).toEqual(expected);
  });

  it('returns 0 for an array containing a single 0', () => {
    const inputArr = [0];
    const expected = 0;

    expect(findMaxConsecutive1s(inputArr)).toEqual(expected);
  });

  it('returns 1 for an array containing a single 1', () => {
    const inputArr = [1];
    const expected = 1;

    expect(findMaxConsecutive1s(inputArr)).toEqual(expected);
  });

  it('returns 1 for an array containing a single 1 and 0', () => {
    const inputArr = [1, 0];
    const expected = 1;

    expect(findMaxConsecutive1s(inputArr)).toEqual(expected);
  });

  it('returns 1 for an array containing a single 0 and 1', () => {
    const inputArr = [0, 1];
    const expected = 1;

    expect(findMaxConsecutive1s(inputArr)).toEqual(expected);
  });

  it('returns 1 for a large alternating array of 1s and 0s', () => {
    const inputArr = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
    const expected = 1;

    expect(findMaxConsecutive1s(inputArr)).toEqual(expected);
  });

  it('returns 5 for increasing groups of 1s (max 5)', () => {
    const inputArr = [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1];
    const expected = 5;

    expect(findMaxConsecutive1s(inputArr)).toEqual(expected);
  });

  it('returns 5 for decreasing groups of 1s (max 5)', () => {
    const inputArr = [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1];
    const expected = 5;

    expect(findMaxConsecutive1s(inputArr)).toEqual(expected);
  });

  it('returns 5 for an array of 5 1s', () => {
    const inputArr = [1, 1, 1, 1, 1];
    const expected = 5;

    expect(findMaxConsecutive1s(inputArr)).toEqual(expected);
  });

  it('skips 1s that are Strings', () => {
    const inputArr = [1, 1, '1'];
    const expected = 2;

    expect(findMaxConsecutive1s(inputArr)).toEqual(expected);
  });
});
