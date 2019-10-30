const { reverseArrayInPlace } = require('.');

describe('Reverse Array In Place', () => {
    it('Should return reverse array [7,6,5,4,3,2,1]', () => {
        expect(reverseArrayInPlace([1,2,3,4,5,6,7])).toEqual([7,6,5,4,3,2,1]);
    });

    it('Should return reverse array [3,2,1]', () => {
        expect(reverseArrayInPlace([1,2,3])).toEqual([3,2,1]);
    });

    it('Should return reverse array [1]', () => {
        expect(reverseArrayInPlace([1])).toEqual([1]);
    });

    it('Should return reverse array []', () => {
        expect(reverseArrayInPlace([])).toEqual([]);
    });
})