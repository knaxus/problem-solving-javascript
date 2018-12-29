function palindromeUsingLoop(str) {
  let isPalindrome = true;
  let j = str.length - 1;

  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[j]) {
      isPalindrome = false;
      break;
    }
    j -= 1;
  }

  return isPalindrome;
}

function palindromeUsingEvery(str) {
  return str.split('').every((char, index) => char === str[str.length - 1 - index]);
}

module.exports = {
  palindromeUsingLoop,
  palindromeUsingEvery,
};
