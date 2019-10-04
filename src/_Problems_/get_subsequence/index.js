// FIND SUBSEQUENCE OF A GIVEN SUBSTRING
// SUBSTRING OF 'abc' ---->>>>  [ '', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc' ]
// SUBSTRING OF 'bc'  ---->>>>  ['', 'b', 'c', 'bc']
// SUBSTRING OF 'c'   ---->>>>  ['', 'c']
// A pattern can be noticed in above three substrings. Technique followed is recursion.
// Time complexity : O(2^n)  n is the length of the string provided.


let getSubesequence = (str) => {
    if (str.length == 0) {
        let array = [''];
        return array;
    }

    let currentChar = str.charAt(0);
    let restOfString = str.substring(1);

    let result = [];
    let returnResult = getSubesequence(restOfString);
    for (i = 0; i < returnResult.length; i++) {
        result.push(returnResult[i]);
        result.push(currentChar + returnResult[i]);
    }
    return result;
}

module.exports = {
  getSubesequence,
};
