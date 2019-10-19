const Trie = require('./index');

describe('Data Structure : Trie', () => {
  it('Should be class', () => {
    expect(typeof Trie.prototype.constructor).toEqual('function');
  });

  describe('Trie', () => {
    let newTrie;
    beforeEach(() => {
      newTrie = new Trie();
    });

    it('Should return false when search is called without a key', () => {
      const result = newTrie.search();
      expect(result).toEqual(false);
    });

    it('Should return false when insert is called without a key', () => {
      const result = newTrie.insert();
      expect(result).toEqual(false);
    });

    it('Should return false when search is called without a key', () => {
      const result = newTrie.search();
      expect(result).toEqual(false);
    });

    it('Should return false when searched for a key which is not yet added', () => {
      const result = newTrie.search('abc');
      expect(result).toEqual(false);
    });

    it('Should return true when searched for a key which present in trie', () => {
      const value = 'abc';
      newTrie.insert(value);
      const result = newTrie.search(value);
      expect(result).toEqual(true);
    });

    it('Should return the index of the Character', () => {
      const result = newTrie.getIndexOfChar('a');
      expect(result).toEqual(0);
    });
  });
});
