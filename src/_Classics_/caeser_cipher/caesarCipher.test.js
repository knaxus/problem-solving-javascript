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
    const enciphered = caesarCipher(ocString);
    expect(compareString(ocString, enciphered)).tobe(true);
  });
});
