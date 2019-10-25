const { ternarySearch, ternarySearchRecursive } = require('.');

describe('Ternary Search', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const low = 0;
  const high = array.length - 1;

  describe('When element to find is at 1st position ', () => {
    it('Ternary search with Loop', () => {
      expect(ternarySearch(array, 1)).toEqual(0);
    });
    it('Ternary serach with recursion', () => {
      expect(ternarySearchRecursive(array, low, high, 1)).toEqual(0);
    });
  });
  describe('When element to find is at last position ', () => {
    it('Ternary search with Loop', () => {
      expect(ternarySearch(array, 8)).toEqual(7);
    });
    it('Ternary serach with recursion', () => {
      expect(ternarySearchRecursive(array, low, high, 8)).toEqual(7);
    });
  });
  describe('When element to find is at random position ', () => {
    it('Ternary search with Loop', () => {
      expect(ternarySearch(array, 3)).toEqual(2);
      expect(ternarySearch(array, 5)).toEqual(4);
    });
    it('Ternary serach with recursion', () => {
      expect(ternarySearchRecursive(array, low, high, 4)).toEqual(3);
    });
    it('Ternary serach with recursion', () => {
      expect(ternarySearchRecursive(array, low, high, 5)).toEqual(4);
    });
  });
  describe('When element to find is no present in array ', () => {
    it('Ternary search with Loop', () => {
      expect(ternarySearch(array, 10)).toEqual(null);
    });
    it('Ternary serach with recursion', () => {
      expect(ternarySearchRecursive(array, low, high, 10)).toEqual(null);
    });
  });
});
