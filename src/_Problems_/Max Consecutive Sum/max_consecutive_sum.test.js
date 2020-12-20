const { max_consecutive_sum } = require('.');

describe('Max Consecutive Sum', () => {
     it('Should return 19', () => {
    expect(max_consecutive_sum([1, 2, 3, 14, 5], 2)).toEqual(19);
  });

  it('Should return 12', () => {
    expect(max_consecutive_sum([2, 3, 5, 1, 6], 3)).toEqual(12);
  });

  it('Should return 12', () => {
    expect(max_consecutive_sum([9, 3, 5, 1, 7], 2)).toEqual(12);
  });

  it('Should return 39', () => {
    expect(max_consecutive_sum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toEqual(39);
  });

  it('Should return Invalid Request', () => {
    expect(max_consecutive_sum([2 , 3] , 3)).toEqual("Invalid Request");
  });

  it('Should return 12', () => {
    expect(max_consecutive_sum([1 , 2 , 3 , 4 , 5] , 3)).toEqual(12);
  });

  it('Should return 1279', () => {
    expect(max_consecutive_sum([12, 1234, 45, 67, 1] , 2)).toEqual(1279);
  });

  it('Should return Invalid Request', () => {
    expect(max_consecutive_sum([1 ,2 , 3 , 4 , 5], 7)).toEqual("Invalid Request");
  });
  });
