const getUniqueWords = require('./index');
const Trie = require('../index');

describe('Data Structure : Trie : Get unique words', () => {
  it('Should returns unique words (no duplicates), sorted alphabetically', () => {
    const words = ['bed', 'ball', 'apple', 'java', 'javascript', 'bed'];
    const trie = new Trie();

    words.forEach(word => trie.insert(word));

    const result = getUniqueWords(trie.root);

    const expected = ['apple', 'ball', 'bed', 'java', 'javascript'];
    expect(result).toEqual(expected);
  });

  it('removes duplicates', () => {
    const words = ['bed', 'bed', 'bed'];
    const trie = new Trie();

    words.forEach(word => trie.insert(word));

    const result = getUniqueWords(trie.root);
    expect(result.length).toBe(1);
  });

  it('passing an empty array of words returns an empty array', () => {
    const words = [];
    const trie = new Trie();

    words.forEach(word => trie.insert(word));

    const result = getUniqueWords(trie.root);
    expect(result).toEqual([]);
  });

  it('passing an empty Trie will throw an error ', () => {
    const trie = new Trie();
    expect(() => {
      getUniqueWords(trie);
    }).toThrow('Invalid argument: Root of Trie is required');
  });

  it('passing an empty array will throw an error ', () => {
    expect(() => {
      getUniqueWords([]);
    }).toThrow('Invalid argument: Root of Trie is required');
  });

  it('passing null will throw an error ', () => {
    expect(() => {
      getUniqueWords([]);
    }).toThrow('Invalid argument: Root of Trie is required');
  });


  it('passing an array not in a Trie will throw an error ', () => {
    expect(() => {
      getUniqueWords(['bed', 'ball', 'apple']);
    }).toThrow('Invalid argument: Root of Trie is required');
  });
});
