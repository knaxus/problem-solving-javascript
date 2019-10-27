const assert = require('assert');
const totalWordsInTrie = require('./index');
const Trie = require('../index');

describe('Data Structure : Trie', () => {
  it('Should be class of type Trie', () => {
    assert.equal(typeof Trie.prototype.constructor, 'function');
    // expect(typeof Trie.prototype.constructor).toEqual('function');
  });

  describe('Trie', () => {

    it('Should return 6.', () => {
      const newTrie = new Trie();
      const words = ['bed', 'ball', 'apple', 'java', 'javascript', 'bed'];
      words.forEach(word => newTrie.insert(word));
      const result = totalWordsInTrie(newTrie.root);
      assert.equal(result, 6);
    });

    it('Should return 0.', () => {
      const newTrie = new Trie();
      const result = totalWordsInTrie(newTrie.root);
      assert.equal(result, 0);
    });

    it('Should return 6.', () => {
      const newTrie = new Trie();
      const words = ['bed', 'ball','', 'apple', 'java', 'javascript', 'bed'];
      words.forEach(word => newTrie.insert(word));
      const result = totalWordsInTrie(newTrie.root);
      assert.equal(result, 6);
    });
  });
});
