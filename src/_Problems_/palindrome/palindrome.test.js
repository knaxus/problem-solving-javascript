const { palindromeUsingLoop, palindromeUsingEvery } = require('.');

describe('Palindrome Strings', () => {
  let mirror;
  let madam;

  beforeEach(() => {
    mirror = 'mirror';
    madam = 'madam';
  });

  describe('Using traditional loop', () => {
    it('Should return FALSE for `mirror`', () => {
      expect(palindromeUsingLoop(mirror)).toBe(false);
    });

    it('Should return TRUE for `madam`', () => {
      expect(palindromeUsingLoop(madam)).toBe(true);
    });
  });

  describe('Using ES6 Array.every', () => {
    it('Should return FALSE for `mirror`', () => {
      expect(palindromeUsingEvery(mirror)).toBe(false);
    });

    it('Should return TRUE for `madam`', () => {
      expect(palindromeUsingEvery(madam)).toBe(true);
    });
  });
});
