function usingInbuiltReverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

function usingLoopToReverse(str) {
  let reverse = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const char of str) {
    reverse = char + reverse;
  }
  return reverse;
}

function usingReduceToReverse(str) {
  return str.split('').reduce((reverse, char) => char + reverse);
}

module.exports = {
  usingInbuiltReverse,
  usingLoopToReverse,
  usingReduceToReverse,
};
