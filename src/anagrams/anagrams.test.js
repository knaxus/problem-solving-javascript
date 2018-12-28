const { checkAnagrams } = require('.');

describe('Anagrams', () => {
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
