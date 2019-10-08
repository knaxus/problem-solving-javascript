/* eslint-disable linebreak-style */
/* eslint-disable no-else-return */
const caesarCipher = require('./caeserCipher');

const compareString = (str1, str2) => {
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
};

describe('Caesar Cipher tests', () => {
  it('Shift not passed', () => {
    const ocString = 'Hello World';
    const enCiphered = caesarCipher(ocString);
    expect(compareString(ocString, enCiphered)).toBe(true);
  });

  it('Encipher equals decipher', () => {
    const ocString = 'Hello World';
    const enCiphered = caesarCipher(ocString, 1);
    const deCiphered = caesarCipher(enCiphered, -1);
    expect(compareString(ocString, deCiphered)).toBe(true);
  });

  it('Shift lower than string length works', () => {
    const ocString = 'Hello World';
    const enCiphered = caesarCipher(ocString, 1);
    const idealResult = 'Ifmmp Xpsme';
    expect(compareString(enCiphered, idealResult)).toBe(true);
  });

  it('Shift Higher than string length works', () => {
    const ocString = 'Hello World';
    const enCiphered = caesarCipher(ocString, 63);
    const idealResult = caesarCipher(ocString, 1);
    expect(compareString(enCiphered, idealResult)).toBe(true);
  });

  it('Negative shift Works', () => {
    const ocString = 'Ifmmp Xpsme';
    const enCiphered = caesarCipher(ocString, -1);
    const idealResult = 'Hello World';
    expect(compareString(enCiphered, idealResult)).toBe(true);
  });

  it('Shift is a numerical string', () => {
    const ocString = 'Hello World';
    const enCiphered = caesarCipher(ocString, '1');
    const idealResult = 'Ifmmp Xpsme';
    expect(compareString(enCiphered, idealResult)).toBe(true);
    // toThrowError
  });

  it('Shift is not a numbered string', () => {
    function test() {
      caesarCipher('Hello World', 'abc');
    }
    expect(test).toThrow('Invalid Shift Provided');
  });

  it('toEncipher is NaN', () => {
    function test() {
      caesarCipher(NaN, 1);
    }
    expect(test).toThrowError('Invalid string provided');
  });

  it('toEncipher is undefined', () => {
    function test() {
      caesarCipher(undefined, 1);
    }
    expect(test).toThrowError('Invalid string provided');
  });
});
