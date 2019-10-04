// GET PERMUTATION OF A GIVEN STRING

const getPermutations = (str) => {
  if (str.length == 1) {
    let array = [];
    array.push(str);
    return array;
  }

  let currentCharacter = str.charAt(0);
  let restOfString = str.substring(1);
  let result = [];
  let returnResult = getPermutations(restOfString);

  for (j = 0; j < returnResult.length; j++) {
    for (i = 0; i <= returnResult[j].length; i++) {
      let value = returnResult[j].substring(0, i) + currentCharacter + returnResult[j].substring(i);
      result.push(value);
    }
  }

  return result;
};

module.exports = { getPermutations };
