const { usingInbuiltReverse, usingLoopToReverse, usingReduceToReverse } = require('.');

describe('Reverse a given string', () => {
  describe('Using Array.reverse() to reverse string', () => {
    it('Should reverse the given string', () => {
      expect(usingInbuiltReverse('apple')).toEqual('elppa');
    });
  });

  describe('Using loop from end of the string to reverse string', () => {
    it('Should reverse the given string', () => {
      expect(usingLoopToReverse('apple')).toEqual('elppa');
    });
  });

  describe('Using ES6 reduce() to reverse string', () => {
    it('Should reverse the given string', () => {
      expect(usingReduceToReverse('apple')).toEqual('elppa');
    });
  });
});
