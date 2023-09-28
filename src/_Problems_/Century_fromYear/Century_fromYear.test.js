const { expect } = require('chai');
const getCentury = require('./index');

describe('Century Calculation Function', () => {
  it('should return the correct century for the year 45', () => {
    const result = getCentury(45);
    expect(result).to.equal(1);
  });

  it('should return the correct century for the year 175', () => {
    const result = getCentury(175);
    expect(result).to.equal(2);
  });

  it('should return the correct century for the year 2023', () => {
    const result = getCentury(2023);
    expect(result).to.equal(21);
  });
});
