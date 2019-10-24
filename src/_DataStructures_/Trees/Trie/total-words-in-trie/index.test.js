const totalWordsInTrie = require('./index')
const Trie = require('../index');

describe('Trees Total words in trie', () => {

  it('should return 6 when counting from trie object', () => {
    const words = ['bed', 'ball', 'apple', 'java', 'javascript', 'bed'];
    const trie = new Trie();

    words.forEach(word => trie.insert(word));

    expect(totalWordsInTrie.totalWords(trie.root)).toEqual(words.length)
  })

  it('should return 0 when a empty Trie with no words inserted is created', () => {
    const trie = new Trie();

    expect(totalWordsInTrie.totalWords(trie.root)).toEqual(0)
  })
})