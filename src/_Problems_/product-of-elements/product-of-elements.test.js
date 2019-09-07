const { findProduct, findProduct2 } = require('.');

describe('Productof elements', () => {
  let array = [];

  describe('When count of zero is 0', () => {
    beforeEach(() => {
      array = [1, 2, 3, 4];
    });
    it('With 1st Approach', () => {
      expect(findProduct(array)).toEqual([24, 12, 8, 6]);
    });
    it('With 2st Approach', () => {
      expect(findProduct2(array)).toEqual([24, 12, 8, 6]);
    });
  });

  describe('When count of zero is 1', () => {
    beforeEach(() => {
      array = [2, 3, 0, 4];
    });
    it('With 1st Approach', () => {
      expect(findProduct(array)).toEqual([0, 0, 24, 0]);
    });
    it('With 2st Approach', () => {
      expect(findProduct2(array)).toEqual([0, 0, 24, 0]);
    });
  });

  describe('When count of zero is  2', () => {
    beforeEach(() => {
      array = [0, 3, 0, 4];
    });
    it('With 1st Approach', () => {
      expect(findProduct(array)).toEqual([0, 0, 0, 0]);
    });
    it('With 2st Approach', () => {
      expect(findProduct2(array)).toEqual([0, 0, 0, 0]);
    });
  });

  describe('When count of zero is greater than  2', () => {
    beforeEach(() => {
      array = [0, 3, 0, 4, 8, 0];
    });
    it('With 1st Approach', () => {
      expect(findProduct(array)).toEqual([0, 0, 0, 0, 0, 0]);
    });
    it('With 2st Approach', () => {
      expect(findProduct2(array)).toEqual([0, 0, 0, 0, 0, 0]);
    });
  });
});
