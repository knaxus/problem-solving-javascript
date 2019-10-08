/**
 * Evaluation of Postfix Expression
 * Input:456*+
 * Output:34
 */

const Stack = require('../index');

function evaluatePostfixExpression(expression) {
    let s = new Stack();
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        if (!isNaN(char)) {
            //if number push the char onto stack
            s.push(Number(char));
        } else {
            // if char is an operator then pop two elements from stack, evaluate them accordingly based on operator.
            //push the result to stack 
            let val1 = s.pop();
            let val2 = s.pop()
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

            }
        }
    }
    //pop the value of postfix expression
    return s.pop();
}
