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

/**
 * 
 * Given a 32-bit signed integer, reverse digits of an integer.

  Example 1:

  Input: 123
  Output: 321
  Example 2:

  Input: -123
  Output: -321
  Example 3:

  Input: 1534236469
  Output: 0 // overflows
  Note:
  Assume we are dealing with an environment which could only 
  store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. 
  For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */

function reverse32BitInt(x) {
  let isNegetive = 0;
  if (x < 0) {
    x *= -1;
    isNegetive = 1;
  }
  let reverse = 0;
  while (x >= 1) {
    const r = Math.floor(x % 10);
    reverse = reverse * 10 + r;
    x = Math.floor(x / 10);
  }
  if (reverse > 0x7fffffff) {
    return 0;
  }
  return isNegetive ? reverse * -1 : reverse;
}

module.exports = {
  reverseNumber,
  reverse32BitInt
};
