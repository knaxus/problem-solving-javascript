/**
 Given an expression string exp , write a program to examine whether the pairs and 
 the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in expression.

Example:
Input: exp = “[()]{}{[()()]()}”
Output: true

Input: exp = “[(])”
Output: false
*/


const Stack = require('../index');

function checkBalancedParenthesis(expression) {
    let s = new Stack();
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        if (char === '{' || char === '(' || char === '[') {
            //If current character is a starting bracket (‘(‘ or ‘{‘ or ‘[‘) then push it to stack
            s.push(char);
        } else {
            if (s.isEmpty()) {
                //when we have only right parenthesis or brackets in expresion
                return false;
            } else if (char === '}' && s.peek() !== '{' || char === ')' && s.peek() !== '(' || char === ']' && s.peek() !== '[') {
                return false;
            }
            //If the current character is a closing bracket (‘)’ or ‘}’ or ‘]’) then pop it from stack
            s.pop();
        }
    }
    if (s.isEmpty()) {
        //expression has balanced parenthesis
        return true;
    } else {
        return false;
    }
}

console.log(checkBalancedParenthesis("{()}[]")); //true
console.log(checkBalancedParenthesis("{()}}")); //false