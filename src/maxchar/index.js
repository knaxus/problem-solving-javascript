function findMaxchar(str) {
  if (typeof str !== 'string') {
    throw new Error('Invalid Argument');
  }

  const charMap = {};
  const lowerCasedString = str.toLowerCase();

  lowerCasedString.split('').forEach((char) => {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char] += 1;
    }
  });

  // find the char with highest score
  let max = charMap[lowerCasedString[0]];
  let char = lowerCasedString[0];

  Object.keys(charMap).forEach((e) => {
    if (charMap[e] > max) {
      max = charMap[e];
      char = e;
    }
  });

  return char;
}

module.exports = {
  findMaxchar,
};
