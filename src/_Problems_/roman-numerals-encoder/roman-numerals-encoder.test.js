const { expect } = require('chai');
const integerToRoman = require('./index');

describe('Integer to Roman Numeral Conversion', () => {
  it('should return "IV" for the integer 4', () => {
    const result = integerToRoman(4);
    expect(result).to.equal('IV');
  });

  it('should return "IX" for the integer 9', () => {
    const result = integerToRoman(9);
    expect(result).to.equal('IX');
  });

  it('should return "LVIII" for the integer 58', () => {
    const result = integerToRoman(58);
    expect(result).to.equal('LVIII');
  });

  it('should return "MCMXCIV" for the integer 1994', () => {
    const result = integerToRoman(1994);
    expect(result).to.equal('MCMXCIV');
  });
});
