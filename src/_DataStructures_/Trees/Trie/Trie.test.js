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

    it('Should return true when insert is called with a key', () => {
      const result = newTrie.insert('dflkghik');
      const newResult = newTrie.insert('Lorem Ipsum');
      expect(result).toEqual(true);
      expect(newResult).toEqual(true);
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
      newTrie.insert('dflkghik');
      newTrie.insert('Lorem Ipsum');
      const result = newTrie.search(value);
      const newResult = newTrie.search('dflkghik');
      const loremIpsumResult = newTrie.search('Lorem Ipsum');
      expect(result).toEqual(true);
      expect(newResult).toEqual(true);
      expect(loremIpsumResult).toEqual(true);
    });

    it('Should return the index of the Character', () => {
      const result = newTrie.getIndexOfChar('a');
      const newResult = newTrie.getIndexOfChar('A');
      expect(result).toEqual(0);
      expect(newResult).toEqual(-32);
    });
  });
});
