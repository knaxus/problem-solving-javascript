const { getSubesequence } = require('.');

describe('GetSubesequence', () => {
  it('Sequence of abc', () => {
    expect(getSubesequence('abc').sort()).toEqual(['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']);
  });

  it('Sequence of bc', () => {
    expect(getSubesequence('bc').sort()).toEqual(['', 'b', 'bc', 'c']);
  });

  it('Sequence of c', () => {
    expect(getSubesequence('c').sort()).toEqual(['', 'c']);
  });

  it('Sequence of empty', () => {
    expect(getSubesequence('').sort()).toEqual(['']);
  });
});
