const { jumpSearch } = require('.');

describe('Jump Search', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 20];
  describe('When element to find is at 1st position ', () => {
    it('Jump search', () => {
      expect(jumpSearch(array, 1)).toEqual(0);
    });
  });
  describe('When element to find is at last position ', () => {
    it('Jump search', () => {
      expect(jumpSearch(array, 20)).toEqual(8);
    });
  });
  describe('When element to find is at random position ', () => {
    it('Jump search', () => {
      expect(jumpSearch(array, 3)).toEqual(2);
      expect(jumpSearch(array, 5)).toEqual(4);
      expect(jumpSearch(array, 6)).toEqual(5);
      expect(jumpSearch(array, 8)).toEqual(7);
    });
  });
  describe('When element is not in array ', () => {
    it('Jump search', () => {
      expect(jumpSearch(array, 15)).toEqual(-1);
      expect(jumpSearch(array, 25)).toEqual(-1);
      expect(jumpSearch(array, 9)).toEqual(-1);
    });
  });
});
