const pattern = /[^\w]/g;

const cleanString = str => str.replace(pattern, '').toLowerCase();
const isVowel = char => char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';

function countVowelsItteratively(str) {
  const cleanedString = cleanString(str);
  let count = 0;
  for (let i = 0; i < cleanedString.length; i += 1) {
    if (isVowel(cleanedString[i])) {
      count += 1;
    }
  }
  return count;
}

function countVowelsItterativelyES6(str) {
  const cleanedString = cleanString(str);
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const char of cleanedString) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }
  return count;
}

function countVowelsUsingRegex(str) {
  const match = str.match(/[aeiou]/gi);
  return match ? match.length : 0;
}

module.exports = {
  countVowelsItteratively,
  countVowelsItterativelyES6,
  countVowelsUsingRegex,
};
