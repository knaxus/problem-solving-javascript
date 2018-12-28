function createCharMap(str) {
  const charMap = {};
  const sanitizedString = str.replace(/[^\w]/g, '').toLowerCase();
  sanitizedString.split('').forEach((char) => {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char] += 1;
    }
    return 0;
  });
  return charMap;
}

function checkAnagrams({ firstString, secondString }) {
  const charMapFirst = createCharMap(firstString);
  const charMapSecond = createCharMap(secondString);

  if (Object.keys(charMapFirst).length !== Object.keys(charMapSecond).length) {
    return false;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const char in charMapFirst) {
    if (charMapFirst[char] !== charMapSecond[char]) {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkAnagrams,
  createCharMap,
};
