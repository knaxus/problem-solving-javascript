const { jumpSearch, jumpSearchRecursive } = require('.');

describe('Jump Search', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    describe('When element to find is at 1st position ', () => {
        it('Jump search', () => {
          expect(jumpSearch(array, 1)).toEqual(0);
        });
      });
    describe('When element to find is at last position ', () => {
        it('Jump search', () => {
          expect(jumpSearch(array, 7)).toEqual(6);
        });
      });
    describe('When element to find is at random position ', () => {
        it('Jump search', () => {
          expect(jumpSearch(array, 3)).toEqual(2);
        });
      });
});