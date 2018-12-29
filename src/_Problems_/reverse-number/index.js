function reverseNumber(num) {
  if (typeof num !== 'number') {
    throw new Error('Invalid Argument');
  }

  let absNum = Math.abs(num);
  let reverse = 0;

  while (absNum > 0) {
    const rem = absNum % 10;
    reverse = reverse * 10 + rem;
    absNum = parseInt(absNum / 10, 10); // important to get whole number
  }

  return reverse * Math.sign(num);
}

module.exports = {
  reverseNumber,
};
