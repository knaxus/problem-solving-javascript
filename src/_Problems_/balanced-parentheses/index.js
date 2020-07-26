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
  return !string.split('').reduce((prev, char) => {
    const result = prev < 0 ? prev : char === '(' ? ++prev : char === ')' ? --prev : prev;
    return result;
  }, 0);
}

module.exports = {
  balancedParantheses,
};
