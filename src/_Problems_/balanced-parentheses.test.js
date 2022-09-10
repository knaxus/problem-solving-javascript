const { parentheses } = require('.');

describe('Parentheses', () => {
  it('Should return true only when matching brackets are there', () => {
    expect(parentheses('{[()]})').toEqual('Balanced'));
  });

  it('Should return false when matching brackets are not there', () => {
    expect(parentheses('{[()}])').toEqual('UnBalanced'));
  });
  it('Should return true only when matching brackets are there', () => {
    expect(parentheses('{()})').toEqual('Balanced'));
  });

  it('Should return false when matching brackets are not there', () => {
    expect(parentheses('{[}])').toEqual('UnBalanced'));
  });
});
