const SuffixTree = require('.');

describe('Data Structure : Suffix Tree', () => {
  it('Should be class', () => {
    expect(typeof SuffixTree.prototype.constructor).toEqual('function');
  });

  it('Should correctly construct Suffix Tree from string', () => {
    const banana = new SuffixTree('banana');
    banana.constructSuffixTree();

    expect(banana.findSubstring('banana')).toBe(0);
    expect(banana.findSubstring('nana')).toBe(2);
    expect(banana.findSubstring('na')).toBe(4);
    expect(banana.findSubstring('an')).toBe(-1);

    const suffix = new SuffixTree('suffix');
    suffix.constructSuffixTree();

    expect(suffix.findSubstring('fix')).toBe(3);

    const kebab = new SuffixTree('kebab');
    kebab.constructSuffixTree();

    expect(kebab.findSubstring('horse')).toBe(-1);

    const mississippi = new SuffixTree('mississippi');
    mississippi.constructSuffixTree();

    expect(mississippi.findSubstring('ssippi')).toBe(5);
    expect(mississippi.findSubstring('ppi')).toBe(8);
    expect(mississippi.findSubstring('mis')).toBe(-1);
    expect(mississippi.findSubstring('pi')).toBe(9);

    const linkedList = new SuffixTree('aaaaaaaaaaa');
    linkedList.constructSuffixTree();

    expect(linkedList.findSubstring('a')).toBe(10);
    expect(linkedList.findSubstring('aaa')).toBe(8);
    expect(linkedList.findSubstring('b')).toBe(-1);
    expect(linkedList.findSubstring('')).toBe(-1);
  });
});
