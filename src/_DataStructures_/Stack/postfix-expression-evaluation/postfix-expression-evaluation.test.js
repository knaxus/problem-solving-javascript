const { evaluatePostfixExpression, ERROR_STRING } = require('.');

describe('Postfix expression evaluation', () => {
  it('should be a function', () => {
    expect(typeof evaluatePostfixExpression).toEqual('function');
  });

  it('should return a number', () => {
    const expression = '11+';

    expect(typeof evaluatePostfixExpression(expression)).toEqual('number');
  });

  it('should handle addition', () => {
    const expression = '23+';
    const expected = 5;

    expect(evaluatePostfixExpression(expression)).toEqual(expected);
  });

  it('should handle subtraction', () => {
    const expression = '54-';
    const expected = 1;

    expect(evaluatePostfixExpression(expression)).toEqual(expected);
  });

  it('should handle multiplication', () => {
    const expression = '34*';
    const expected = 12;

    expect(evaluatePostfixExpression(expression)).toEqual(expected);
  });

  it('should handle division', () => {
    const expression = '62/';
    const expected = 3;

    expect(evaluatePostfixExpression(expression)).toEqual(expected);
  });

  it('should handle negative numbers', () => {
    const expression = '25-';
    const expected = -3;

    expect(evaluatePostfixExpression(expression)).toEqual(expected);
  });

  it('should handle multiple operators', () => {
    const expression = '123*+';
    const expected = 7;

    expect(evaluatePostfixExpression(expression)).toEqual(expected);
  });

  describe('should throw error on invalid expressions', () => {
    const invalidExpressions = ['12', '1', '+', '1+2', '+12'];
    test.each(invalidExpressions)('running for %p', (expression) => {
      expect(() => evaluatePostfixExpression(expression)).toThrow(ERROR_STRING);
    });

    expect(() => evaluatePostfixExpression('1&2')).toThrow('Operation is not valid');

  });
});
