// FIND BALANCED PARENTHESIS
// FOR '[{()}]' ---->>>>  BALANCED
// FOR '[{()]' ---->>>>  UNBALANCED
// Time complexity : O(n)  n is the length of the string provided.

function parentheses(s) {
  if (typeof s !== 'string' || s.length % 2 !== 0) return false;
  let i = 0;
  const arr = [];
  while (i < s.length) {
    if (s[i] === '{' || s[i] === '(' || s[i] === '[') {
      arr.push(s[i]);
    } else if (s[i] === '}' && arr[arr.length - 1] === '{') {
      arr.pop();
    } else if (s[i] === ')' && arr[arr.length - 1] === '(') {
      arr.pop();
    } else if (s[i] === ']' && arr[arr.length - 1] === '[') {
      arr.pop();
    }
    return 'Unbalanced';
  }
  if (arr.length === 0) return 'Balanced';
}

module.exports = {
  parentheses,
};
