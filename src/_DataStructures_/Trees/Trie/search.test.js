const Trie = require('./index');

describe('Data Structure : Trie', () => {
  describe('Trie Instance', () => {
    it('Should be a class', () => {
      expect(typeof Trie.prototype.constructor).toEqual('function');
    });
  });

  describe('Trie API', () => {
    const words = ['bed', 'ball', 'apple', 'java', 'javascript'];
    let trie;
    it('Should insert string', () => {
      trie = new Trie();
      words.forEach(word => trie.insert(word));
    });

    it('Should return `True` if string present', () => {
      expect(trie.search(words[0])).toEqual(true);
    });

    it('Should return `False` if string present', () => {
      expect(trie.search('Ashu')).toEqual(false);
      expect(trie.search('be')).toEqual(false);
    });

    it('Should return `False` if argument is not pass', () => {
      expect(trie.search()).toEqual(false);
    });
  });
});
