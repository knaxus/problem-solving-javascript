const { caesarCipher } = require('.');

describe('Caesar Cipher test suit', () => {
  it('Should raise an error when missing second arg', () => {
    expect(() => { caesarCipher('hello'); }).toThrowError();
  });

  it('Should raise an error when second arg is not a num', () => {
    expect(() => { caesarCipher('hello', 'yes'); }).toThrowError();
  });

  it('Should return a encrypted word with positive num', () => {
    expect(caesarCipher('character', 10)).toBe('mrkbkmdob');
  });

  it('Should return the same word/sentence introduced if num = 0', () => {
    expect(caesarCipher('character', 0)).toBe('character');
  });

  it('Should return a encrypted word with negative num', () => {
    expect(caesarCipher('character', '-10')).toBe('sxqhqsjuh');
  });

  it('Should reuturn a encrypted sentence with spaces', () => {
    expect(caesarCipher('another one bite the dust', 15))
      .toBe('pcdiwtg dct qxit iwt sjhi');
  });

  it('Should return a encrypted sentence with preserved upper case letters', () => {
    expect(caesarCipher('Another one Bite the Dust', 15))
      .toBe('Pcdiwtg dct Qxit iwt Sjhi');
  });
});
