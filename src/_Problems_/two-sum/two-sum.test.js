const { twoSum } = require('.');

describe('Two Sum', () => {
    it('Should return a index of elements added to get target', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    it('Should return a index of elements added to get target', () => {
        expect(twoSum([8, -4, 2, 14, 11, 17], 7)).toEqual([1, 4]);
    });
});
