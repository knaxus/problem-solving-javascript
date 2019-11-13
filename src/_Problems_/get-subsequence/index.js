// FIND SUBSEQUENCE OF A GIVEN SUBSTRING
// SUBSTRING OF 'abc' ---->>>>  [ '', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc' ]
// SUBSTRING OF 'bc'  ---->>>>  ['', 'b', 'c', 'bc']
// SUBSTRING OF 'c'   ---->>>>  ['', 'c']
// A pattern can be noticed in above three substrings. Technique followed is recursion.
// Time complexity : O(2^n)  n is the length of the string provided.

function getSubesequence(str) {
  if (str.length === 0) {
    const array = [''];
    return array;
  }

  const currentChar = str.charAt(0);
  const restOfString = str.substring(1);

  const result = [];
  const returnResult = getSubesequence(restOfString);
  for (let i = 0; i < returnResult.length; i += 1) {
    result.push(returnResult[i]);
    result.push(currentChar + returnResult[i]);
  }
  return result;
}

module.exports = {
  getSubesequence,
};
