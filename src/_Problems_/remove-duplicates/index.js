function removeDuplicatesUsingHashTable(str) {
  let result = '';
  const charHash = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const char of str) {
    if (!charHash[char]) {
      charHash[char] = char;
    }
  }

  // eslint-disable-next-line array-callback-return
  Object.keys(charHash).map((char) => {
    result += char;
  });
  return result;
}

function removeDuplicatesUsingSet(str) {
  return [...new Set(str)].join('');
}

module.exports = {
  removeDuplicatesUsingHashTable,
  removeDuplicatesUsingSet,
};
