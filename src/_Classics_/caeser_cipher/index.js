function caeserCipher(str, num) {
  const lowerCaseString = str.toLowerCase();
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const totalAlphabets = alphabets.length;
  let result = '';

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
    if (str[index] === alphabets[currentIndex].toUpperCase()) {
      result += alphabets[newIndex].toUpperCase();
    }
    result += alphabets[newIndex];
  }
  return result;
}

console.log(caeserCipher('abCz', 2));
