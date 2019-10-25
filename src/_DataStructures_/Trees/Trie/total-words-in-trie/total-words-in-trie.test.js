const totalWordsInTrie = require('./index')
const Trie = require('../index');
const assert = require('assert');

describe('Data Structure : Trie', () => {
  it('Should be class of type Trie', () => {
    assert.equal(typeof Trie.prototype.constructor, 'function');
    // expect(typeof Trie.prototype.constructor).toEqual('function');
  });

  describe('Trie', () => {

    it('Should return 6.', () => {
      let newTrie = new Trie();
      const words = ['bed', 'ball', 'apple', 'java', 'javascript', 'bed'];
      words.forEach(word => newTrie.insert(word));
      result = totalWordsInTrie(newTrie.root);
      assert.equal(result, 6);
    });

    it('Should return 0.', () => {
      let newTrie = new Trie();
      result = totalWordsInTrie(newTrie.root);
      assert.equal(result, 0);
    });

    it('Should return 6.', () => {
      let newTrie = new Trie();
      const words = ['bed', 'ball','', 'apple', 'java', 'javascript', 'bed'];
      words.forEach(word => newTrie.insert(word));
      result = totalWordsInTrie(newTrie.root);
      assert.equal(result, 6);
    });
  });
});
