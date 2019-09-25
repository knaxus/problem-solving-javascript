const { binarySearch, binarySearchRecursive } = require('.');

describe('Binary Search', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const low = 0;
  const high = array.length - 1;

  describe('When element to find is at 1st position ', () => {
    it('Binary search with Loop', () => {
      expect(binarySearch(array, 1)).toEqual(0);
    });
    it('Binary serach with recursion', () => {
      expect(binarySearchRecursive(array, low, high, 1)).toEqual(0);
    });
  });
  describe('When element to find is at last position ', () => {
    it('Binary search with Loop', () => {
      expect(binarySearch(array, 7)).toEqual(6);
    });
    it('Binary serach with recursion', () => {
      expect(binarySearchRecursive(array, low, high, 7)).toEqual(6);
    });
  });
  describe('When element to find is at random position ', () => {
    it('Binary search with Loop', () => {
      expect(binarySearch(array, 3)).toEqual(2);
    });
    it('Binary serach with recursion', () => {
      expect(binarySearchRecursive(array, low, high, 3)).toEqual(2);
    });
  });
  describe('When element to find is no present in array ', () => {
    it('Binary search with Loop', () => {
      expect(binarySearch(array, 10)).toEqual(null);
    });
    it('Binary serach with recursion', () => {
      expect(binarySearchRecursive(array, low, high, 10)).toEqual(null);
    });
  });
  
});
