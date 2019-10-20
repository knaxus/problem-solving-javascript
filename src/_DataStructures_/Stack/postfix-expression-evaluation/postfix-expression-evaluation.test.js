const { evaluatePostfixExpression } = require('.');

describe('Postfix expression evaluation', function () {
  it('should be a function', function () {
    expect(typeof evaluatePostfixExpression).toEqual('function');
  });
  
  it('should return a number', function () {
    const expression = '11+';
    
    expect(typeof evaluatePostfixExpression(expression)).toEqual('number')
  });
  
  it('should handle addition', function () {
    const expression = '23+';
    const expected = 5;
    
    expect(evaluatePostfixExpression(expression)).toEqual(expected);
  });
  
  it('should handle subtraction', function () {
    const expression = '54-';
    const expected = 1;
    
    expect(evaluatePostfixExpression(expression)).toEqual(expected);
  });
  
  it('should handle multiplication', function () {
    const expression = '34*';
    const expected = 12;
    
    expect(evaluatePostfixExpression(expression)).toEqual(expected);
  });
  
  it('should handle division', function () {
    const expression = '62/';
    const expected = 3;
    
    expect(evaluatePostfixExpression(expression)).toEqual(expected);
  });
  
  it('should handle negative numbers', function () {
    const expression = '25-';
    const expected = -3;
    
    expect(evaluatePostfixExpression(expression)).toEqual(expected);
  });
  
  it('should handle multiple operators', function () {
    const expression = '123*+';
    const expected = 7;
    
    expect(evaluatePostfixExpression(expression)).toEqual(expected);
  });
});
