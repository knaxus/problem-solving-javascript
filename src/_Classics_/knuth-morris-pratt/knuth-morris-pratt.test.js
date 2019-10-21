const { KMPSearch } = require('.');

describe('Pattern Matching Classic Algorithm: Knuth-Morris-Pratt', () => {
  describe('KMPSearch', () => {
    it('Should return true when the pattern equals the text', () => {
      expect(KMPSearch('A', 'A')).toEqual(true);
    });
    it('Should return true when the pattern is a single character and is contained within the text', () => {
      expect(KMPSearch('S', 'TEST')).toEqual(true);
    });
    it('Should return true when the pattern is multiple characters and in the middle of the text', () => {
      expect(KMPSearch('WORLD', 'TESTWORLDTEST')).toEqual(true);
    });
    it('Should return true when the pattern is present multiple times within the text', () => {
      expect(KMPSearch('ST', 'TESTWORLDTEST')).toEqual(true);
    });
    it('Should return true when the pattern is a single character and is present at the start of the text', () => {
      expect(KMPSearch('A', 'ABABABAABCABCABC')).toEqual(true);
    });
    it('Should return true when the pattern is multiple characters and is present at the start of the text', () => {
      expect(KMPSearch('AB', 'ABABABAABCABCABC')).toEqual(true);
    });
    it('Should return true when the pattern contains repeating characters, and is present in the middle of the text', () => {
      expect(KMPSearch('AAABAAAA', 'AAAAAAAAAAABAAAAAA')).toEqual(true);
    });
    it('Should return true when the pattern is contained within the text and the pattern contains non alphabetic characters', () => {
      expect(KMPSearch('AAA123! ', 'AAAAAA123! AAAAABAAAAAA')).toEqual(true);
    });
    it('Should return false when the pattern does not equal the text', () => {
      expect(KMPSearch('A', 'B')).toEqual(false);
    });
    it('Should return false when the pattern is not contained within the text', () => {
      expect(KMPSearch('AD', 'ABABABAABCABCABC')).toEqual(false);
    });
    it('Should return false when the pattern is longer than the text', () => {
      expect(KMPSearch('AAAAAAAA', 'AAAAAA')).toEqual(false);
    });
  });
});
