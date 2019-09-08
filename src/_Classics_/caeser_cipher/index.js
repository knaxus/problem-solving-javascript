function caeserCipher(str, num) {
  const lowerCaseString = str.toLowerCase();
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let result = '';

  for (let char of lowerCaseString) {
    const current = char;
    if (current === ' ') {
      result += current;
      continue;
    }

    const currentIndex = alphabets.indexOf(current);
    let newIndex = currentIndex + num;

    if (newIndex > alphabets.length - 1) {
      newIndex -= alphabets.length;
    }
    result += alphabets[newIndex];
  }
  return result;
}

console.log(caeserCipher('abcz', 2));
