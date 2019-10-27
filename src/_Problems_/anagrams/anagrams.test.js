const { checkAnagrams, checkAnagramUsingHelpers } = require('.');

describe('Anagrams', () => {
  describe('Using cutom methods and character map', () => {
    it('Should return TRUE for `rail safety` & `fairy tales`', () => {
      expect(
        checkAnagrams({
          firstString: 'rail safety',
          secondString: 'fairy tales',
        }),
      ).toBe(true);
    });

    it('Should return TRUE for `FAIRY tales` & `rail SAFETY`', () => {
      expect(
        checkAnagrams({
          firstString: 'FAIRY tales',
          secondString: 'rail SAFETY',
        }),
      ).toBe(true);
    });

    it('Should return FALSE for `Hello World` & `Bye`', () => {
      expect(
        checkAnagrams({
          firstString: 'Hello World',
          secondString: 'Bye',
        }),
      ).toBe(false);
    });

    it('Should ignore special characters', () => {
      expect(
        checkAnagrams({
          firstString: 'hello world!!',
          secondString: 'hello  -  world',
        }),
      ).toBe(true);
    });
  });

  describe('Using in built methods and sorting', () => {
    it('Should return TRUE for `rail safety` & `fairy tales`', () => {
      expect(
        checkAnagramUsingHelpers({
          firstString: 'rail safety',
          secondString: 'fairy tales',
        }),
      ).toBe(true);
    });

    it('Should return TRUE for `FAIRY tales` & `rail SAFETY`', () => {
      expect(
        checkAnagramUsingHelpers({
          firstString: 'FAIRY tales',
          secondString: 'rail SAFETY',
        }),
      ).toBe(true);
    });

    it('Should return FALSE for `Hello World` & `Bye`', () => {
      expect(
        checkAnagramUsingHelpers({
          firstString: 'Hello World',
          secondString: 'Bye',
        }),
      ).toBe(false);
    });

    it('Should ignore special characters', () => {
      expect(
        checkAnagramUsingHelpers({
          firstString: 'hello world!!',
          secondString: 'hello  -  world',
        }),
      ).toBe(true);
    });

    it('Should return FALSE for `Hello` & `Hallo`', () => {
      expect(
        checkAnagrams({
          firstString: 'Hello',
          secondString: 'Hallo',
        }),
      ).toBe(false);
    });
  });
});
