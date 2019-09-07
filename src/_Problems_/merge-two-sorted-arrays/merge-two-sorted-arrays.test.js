const { mergeTwoSortedArrays, mergeTwoSortedArrays2 } = require('.');


describe('Merge Two Sorted Array which are already in ascending order ', () => {
  let array1 = [];
  let array2 = [];

  describe('When array[i]-array[j] = 1 where i>j & j>=0', () => {
    beforeEach(() => {
      array1 = [1, 2, 3, 4, 5];
      array2 = [6, 7, 8];
    });
    it('Merge two sort array with complexity O(n+m)', () => {
      expect(mergeTwoSortedArrays(array1, array2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
    it('Merge two sort array with complexity O(nlogn)', () => {
      expect(mergeTwoSortedArrays2(array1, array2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe('When array[i]-array[j] => 1 where i>j & j>=0', () => {
    beforeEach(() => {
      array1 = [1, 3, 5, 6, 98, 100];
      array2 = [2, 4, 99];
    });
    it('Merge two sort array with complexity O(n+m)', () => {
      expect(mergeTwoSortedArrays(array1, array2)).toEqual([1, 2, 3, 4, 5, 6, 98, 99, 100]);
    });
    it('Merge two sort array with complexity O(nlogn)', () => {
      expect(mergeTwoSortedArrays2(array1, array2)).toEqual([1, 2, 3, 4, 5, 6, 98, 99, 100]);
    });
  });

  describe('When array[i]-array[j] <= 1  where i>j & j>=0', () => {
    beforeEach(() => {
      array1 = [1, 1, 5, 6, 98, 100];
      array2 = [4, 4, 99];
    });
    it('Merge two sort array with complexity O(n+m)', () => {
      expect(mergeTwoSortedArrays(array1, array2)).toEqual([1, 1, 4, 4, 5, 6, 98, 99, 100]);
    });
    it('Merge two sort array with complexity O(nlogn)', () => {
      expect(mergeTwoSortedArrays2(array1, array2)).toEqual([1, 1, 4, 4, 5, 6, 98, 99, 100]);
    });
  });
});
