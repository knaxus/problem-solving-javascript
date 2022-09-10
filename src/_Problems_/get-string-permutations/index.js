// GET PERMUTATION OF A GIVEN STRING

const getPermutations = (str) => {
  const result = [];

  if (str.length === 0) {
    return result;
  }

  if (str.length === 1) {
    result.push(str);
    return result;
  }

  const currentCharacter = str.charAt(0);
  const restOfString = str.substring(1);
  const returnResult = getPermutations(restOfString);

  for (let j = 0; j < returnResult.length; j += 1) {
    for (let i = 0; i <= returnResult[j].length; i += 1) {
      const value = returnResult[j].substring(0, i) + currentCharacter + returnResult[j].substring(i);
      result.push(value);
    }
  }

  return result;
};

module.exports = { getPermutations };
