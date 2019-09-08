/**
 * Most simplest encryption scheme. Read more: [http://practicalcryptography.com/ciphers/caesar-cipher/]
 * @param {String} str
 * @param {Number} num
 */

function caeserCipher(str, num) {
  const lowerCaseString = str.toLowerCase();
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const totalAlphabets = alphabets.length;
  let result = '';

  // handle large number, like 300 or -300
  num %= totalAlphabets;

  for (let index in lowerCaseString) {
    // get the current character
    const currentCharacter = lowerCaseString[index];

    // if character is space, add it to the result and continue to next
    if (currentCharacter === ' ') {
      result += currentCharacter;
      continue;
    }

    // determine the new index
    const currentIndex = alphabets.indexOf(currentCharacter);
    let newIndex = currentIndex + num;

    // if the index passes 25, restart from 0
    if (newIndex > totalAlphabets - 1) {
      newIndex -= totalAlphabets;
    }

    if (newIndex < 0) {
      newIndex = totalAlphabets + newIndex;
    }

    // check if the character in original string was upper case
    if (str[index] === str[index].toUpperCase()) {
      result += alphabets[newIndex].toUpperCase();
    } else {
      result += alphabets[newIndex];
    }
  }
  return result;
}
