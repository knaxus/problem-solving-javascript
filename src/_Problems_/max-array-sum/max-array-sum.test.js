const { maxArraySum } = require('.');

describe('Max Array Sum', () => {
  it('Should return 10', () => {
    expect(maxArraySum([1, 5, 2, 3, 4], 3)).toEqual(10);
  });

  it('Should return 1', () => {
    expect(maxArraySum([1, 2, 4], 4)).toEqual("null as the length of subarray is less than 4.");
  });

  it('Should return 120', () => {
    expect(maxArraySum([], 2)).toEqual("null as the length of array is nil.");
  });
});
