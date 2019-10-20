/**
 * Evaluation of Postfix Expression
 * Input:456*+
 * Output:34
 */

const Stack = require('../index');

const ERROR_STRING = 'Expression is not in order';

function evaluatePostfixExpression(expression) {
  // eslint-disable-next-line no-param-reassign
  expression = expression.trim();

  if (expression.length === 0 || expression.length === 1) {
    return ERROR_STRING;
  }

  const s = new Stack();
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(char)) {
      // if number push the char onto stack
      s.push(Number(char));
    } else {
      // if char is an operator then pop two elements from stack, evaluate them accordingly based on operator.
      // push the result to stack
      const val1 = s.pop();
      const val2 = s.pop();
      switch (char) {
        case '+':
          s.push(val2 + val1);
          break;
        case '-':
          s.push(val2 - val1);
          break;
        case '*':
          s.push(val2 * val1);
          break;
        case '/':
          s.push(val2 / val1);
          break;
        default:
          break;
      }
    }
  }
  // pop the value of postfix expression
  const result = s.pop();
  if (s.isEmpty()) {
    return result;
  }
  return ERROR_STRING;
}

module.exports = {
  evaluatePostfixExpression,
  ERROR_STRING
};
