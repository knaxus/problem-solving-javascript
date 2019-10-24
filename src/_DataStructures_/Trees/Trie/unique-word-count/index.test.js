const Trie = require('../index');
const uniqueWordCount = require('.');

describe('Trie Unique Word Count', () => {
  it('counts an empty trie', () => {
    const trie = new Trie();
    const wordCount = uniqueWordCount(trie.root);
    expect(wordCount).toEqual(0);
  });

  it('counts unique words', () => {
    const trie = new Trie();
    const words = ['one', 'two', 'three', 'four'];
    words.forEach(word => trie.insert(word));
    const wordCount = uniqueWordCount(trie.root);
    expect(wordCount).toEqual(4);
  });

  it('does not count duplicate words', () => {
    const trie = new Trie();
    const words = ['one', 'one', 'two', 'three'];
    words.forEach(word => trie.insert(word));
    const wordCount = uniqueWordCount(trie.root);
    expect(wordCount).toEqual(3);
  });
});
