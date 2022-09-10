const { parentheses } = require('.');

describe('Parentheses', () => {
  it.skip('Should return true only when matching brackets are there', () => {
    expect(parentheses('{[()]})').toEqual('Balanced'));
  });

  it.skip('Should return false when matching brackets are not there', () => {
    expect(parentheses('{[()}])').toEqual('UnBalanced'));
  });
  it.skip('Should return true only when matching brackets are there', () => {
    expect(parentheses('{()})').toEqual('Balanced'));
  });

  it.skip('Should return false when matching brackets are not there', () => {
    expect(parentheses('{[}])').toEqual('UnBalanced'));
  });
});
