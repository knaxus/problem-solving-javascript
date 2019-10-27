const Trie = require('../index');
const allUniqueWordsFromTrie = require('.');

describe('Get Unique Words from Trie', () => {
  const trie = new Trie();
  const words = ['bed', 'ball', 'apple', 'java', 'javascript', 'bed'];
  const expected = ['bed', 'ball', 'apple', 'java', 'javascript'];

  it('Should return an error when null is passed', () => {
    expect(() => allUniqueWordsFromTrie(null)).toThrow(Error);
  });

  it('Should return an empty array when the trie is empty', () => {
    expect(allUniqueWordsFromTrie(trie.root)).toEqual([]);
  });

  it('Should return unique words from trie', () => {
    words.forEach(word => trie.insert(word));
    expect(allUniqueWordsFromTrie(trie.root).sort()).toEqual(expected.sort());
  });
});
