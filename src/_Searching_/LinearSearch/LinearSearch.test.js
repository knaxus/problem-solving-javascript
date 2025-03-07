const {linearSearch} = require('./LinearSearch');

describe('Linear Search', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    describe('When element to find is at 1st position ', () => {
        it('Linear search', () => {
            expect(linearSearch(array, 1)).toEqual(0);
        });
    });
    describe('When element to find is at last position ', () => {
        it('Linear search', () => {
            expect(linearSearch(array, 8)).toEqual(7);
        });
    });
    describe('When element to find is at random position ', () => {
        it('Linear search', () => {
            expect(linearSearch(array, 3)).toEqual(2);
        });
    });
    describe('When element to find is no present in array ', () => {
        it('Linear search', () => {
            expect(linearSearch(array, 10)).toEqual(null);
        });
    });           
})