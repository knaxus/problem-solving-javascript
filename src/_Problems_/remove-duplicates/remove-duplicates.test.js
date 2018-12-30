const { removeDuplicatesUsingHashTable, removeDuplicatesUsingSet } = require('.');

describe('Remove Duplicates', () => {
  describe('Using Hash Table', () => {
    it('Should remove the duplicate chars from `apple`', () => {
      expect(removeDuplicatesUsingHashTable('apple')).toEqual('aple');
    });

    it('Should return `bye` from `bye`', () => {
      expect(removeDuplicatesUsingHashTable('bye')).toEqual('bye');
    });
  });

  describe('Using ES6 Set', () => {
    it('Should remove the duplicate chars from `apple`', () => {
      expect(removeDuplicatesUsingSet('apple')).toEqual('aple');
    });

    it('Should return `bye` from `bye`', () => {
      expect(removeDuplicatesUsingSet('bye')).toEqual('bye');
    });
  });
});
