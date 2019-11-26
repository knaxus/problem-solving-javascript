const allWordsInTrie = require('./index');
const Trie = require('../index');

describe('Data Structure : Trie : All Words In Tree', () => {
  it('Should return empty array', () => {
    const trie = new Trie();
    const result = allWordsInTrie(trie.root);
    expect(result.length).toEqual(0);
  });

  it('Should return all words sorted alphabetically', () => {
    const words = ['bed', 'ball', 'apple', 'java', 'javascript', 'bed'];
    const trie = new Trie();

    words.forEach(word => trie.insert(word));

    const result = allWordsInTrie(trie.root);

    const expected = ['apple', 'ball', 'bed', 'bed', 'java', 'javascript'];
    expect(expected).toEqual(result);
  });

  it('Should retain duplicates', () => {
    const words = ['bed', 'bed', 'bed'];
    const trie = new Trie();

    words.forEach(word => trie.insert(word));

    const result = allWordsInTrie(trie.root);
    expect(result.length).toBe(3);
  });

  it('passing an empty array of words returns an empty array', () => {
    const words = [];
    const trie = new Trie();

    words.forEach(word => trie.insert(word));

    const result = allWordsInTrie(trie.root);
    expect(result).toEqual([]);
  });

  it('passing an empty Trie will throw an error ', () => {
    const trie = new Trie();
    expect(() => {
      allWordsInTrie(trie);
    }).toThrow('Invalid argument: Root of Trie is required');
  });

  it('passing an empty array will throw an error ', () => {
    expect(() => {
      allWordsInTrie([]);
    }).toThrow('Invalid argument: Root of Trie is required');
  });

  it('passing null will throw an error ', () => {
    expect(() => {
      allWordsInTrie([]);
    }).toThrow('Invalid argument: Root of Trie is required');
  });

  it('passing an array not in a Trie will throw an error ', () => {
    expect(() => {
      allWordsInTrie(['bed', 'ball', 'apple']);
    }).toThrow('Invalid argument: Root of Trie is required');
  });
});
