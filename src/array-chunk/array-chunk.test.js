const {
  arrayChunk, errFirstArgument, errSecondArguemnt, chunkUsingSlice,
} = require('.');

describe('Chunk of Arrays', () => {
  describe('Using normal itteration', () => {
    it('Should throw an error for invalid `array` argument', () => {
      expect(() => arrayChunk({ array: 'hello', size: 3 })).toThrow(errFirstArgument);
    });

    it('Should throw an error for invalid `size` value', () => {
      expect(() => arrayChunk({ array: [1, 2, 3, 4, 5], size: 'A' })).toThrow(errSecondArguemnt);
    });

    it('Should return 5 chunks of size 2 of array with 10 elements', () => {
      expect(
        arrayChunk({
          array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          size: 2,
        }).length,
      ).toEqual(5);
    });

    it('Should return the given array as chunk if the chunk size >= given array', () => {
      const array = [1, 2, 3, 4, 5];
      expect(
        arrayChunk({
          array,
          size: 8,
        }),
      ).toEqual([array]);
    });

    it('Should return [[1,2], [3,4], [5]] for [1, 2, 3, 4, 5] with chunk size of 2', () => {
      const array = [1, 2, 3, 4, 5];
      const output = [[1, 2], [3, 4], [5]];

      expect(
        arrayChunk({
          array,
          size: 2,
        }),
      ).toEqual(output);
    });
  });

  describe('Using Array.slice()', () => {
    it('Should throw an error for invalid `array` argument', () => {
      expect(() => chunkUsingSlice({ array: 'hello', size: 3 })).toThrow(errFirstArgument);
    });

    it('Should throw an error for invalid `size` value', () => {
      expect(() => chunkUsingSlice({ array: [1, 2, 3, 4, 5], size: 'A' })).toThrow(
        errSecondArguemnt,
      );
    });

    it('Should return 5 chunks of size 2 of array with 10 elements', () => {
      expect(
        chunkUsingSlice({
          array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          size: 2,
        }).length,
      ).toEqual(5);
    });

    it('Should return the given array as chunk if the chunk size >= given array', () => {
      const array = [1, 2, 3, 4, 5];
      expect(
        chunkUsingSlice({
          array,
          size: 8,
        }),
      ).toEqual([array]);
    });

    it('Should return [[1,2], [3,4], [5]] for [1, 2, 3, 4, 5] with chunk size of 2', () => {
      const array = [1, 2, 3, 4, 5];
      const output = [[1, 2], [3, 4], [5]];

      expect(
        chunkUsingSlice({
          array,
          size: 2,
        }),
      ).toEqual(output);
    });
  });
});
