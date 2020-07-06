/* 
    Given a string containing characters and "(" , ")" determine if input string is valid if:
    -  Open parantheses is closed by same number & type of parantheses.
    Note that an empty string is also considered valid and any alphanumeric char can be inserted in between pratheses.

    Example : 
       ((())) is balanced.
       ((() is not balanced.
       )( is not balanced.
    We will solve this problem using ES6 - Array Method reduce().
 */

function balancedParantheses(string) {
  return !string.split('').reduce(function(prev, char) {
    if (prev < 0) return prev;

    if (char === '(') return ++prev;

    if (char === ')') return --prev;

    return prev;
  }, 0);
}

module.exports = {
  balancedParantheses,
};
