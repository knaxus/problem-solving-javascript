const { jumpSearch, jumpSearchRecursive } = require('.');

describe('Jump Search', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const jump = 3;
    describe('When element to find is at 1st position ', () => {
        it('Jump search', () => {
          expect(jumpSearch(array, jump, 1)).toEqual(0);
        });
      });
    describe('When element to find is at last position ', () => {
        it('Jump search', () => {
          expect(jumpSearch(array, jump, 7)).toEqual(6);
        });
      });
    describe('When element to find is at random position ', () => {
        it('Jump search', () => {
          expect(jumpSearch(array, jump, 3)).toEqual(2);
        });
      });
    describe('When jump is larger than array', () => {
        it('Jump search', () => {
          expect(jumpSearch(array, 9, 3)).toEqual(2);
        });
      });
});