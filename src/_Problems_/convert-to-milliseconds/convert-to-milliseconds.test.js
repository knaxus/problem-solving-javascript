const { expect } = require('chai');
const timeSinceMidnight = require('./index');

describe('Time Since Midnight Calculation', () => {
  it('should return the correct time in milliseconds for 1 hour, 15 minutes, and 30 seconds', () => {
    const result = timeSinceMidnight(1, 15, 30);
    expect(result).to.equal(4530000);
  });

  it('should return 0 milliseconds for midnight (0 hours, 0 minutes, 0 seconds)', () => {
    const result = timeSinceMidnight(0, 0, 0);
    expect(result).to.equal(0);
  });

  it('should return the correct time in milliseconds for 23 hours, 59 minutes, and 59 seconds', () => {
    const result = timeSinceMidnight(23, 59, 59);
    expect(result).to.equal(86399000);
  });
});
