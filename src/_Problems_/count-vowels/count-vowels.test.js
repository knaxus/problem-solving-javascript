const { countVowelsItteratively, countVowelsItterativelyES6, countVowelsUsingRegex } = require('.');

describe('Count Vowels', () => {
  const apple = 'AppLe';
  const education = 'education';
  const myths = 'myths';

  describe('Count by regular itteration', () => {
    it('Should return 2 for `Apple`', () => {
      expect(countVowelsItteratively(apple)).toEqual(2);
    });

    it('Should return 5 for `Education`', () => {
      expect(countVowelsItteratively(education)).toEqual(5);
    });

    it('Should return 0 for `Myths`', () => {
      expect(countVowelsItteratively(myths)).toEqual(0);
    });
  });

  describe('Count by ES6 itteration', () => {
    it('Should return 2 for `Apple`', () => {
      expect(countVowelsItterativelyES6(apple)).toEqual(2);
    });

    it('Should return 5 for `Education`', () => {
      expect(countVowelsItterativelyES6(education)).toEqual(5);
    });

    it('Should return 0 for `Myths`', () => {
      expect(countVowelsItterativelyES6(myths)).toEqual(0);
    });
  });

  describe('Count using REGEX', () => {
    it('Should return 2 for `Apple`', () => {
      expect(countVowelsUsingRegex(apple)).toEqual(2);
    });

    it('Should return 5 for `Education`', () => {
      expect(countVowelsUsingRegex(education)).toEqual(5);
    });

    it('Should return 0 for `Myths`', () => {
      expect(countVowelsUsingRegex(myths)).toEqual(0);
    });
  });
});
