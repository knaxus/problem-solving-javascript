/** Given an array of numbers, return the highest number that can be made out of it */

/**
 * Test cases
 * [3, 6, 0, 9] -> 9630
 * [60, 548] -> 60548
 * [1, 34, 3, 98, 9, 76, 45, 4] -> 998764543431
 */

/** At first glance, the below solution may seem the answer */
// const hightestNumber = Number([60, 548].sort((a, b) => b - a).join(''));

/** The above will fail for test case 2 & 3 */

/** We need a custom compare funtion */
function compare(a, b) {
  const x = Number(String(a) + String(b));
  const y = Number(String(b) + String(a));
  return x > y ? -1 : 1;
}

const ErrorMessage = 'Invalid array/missing argument';

/** final function */
function composeHighest(arr) {
  if (!arr || !Array.isArray(arr)) {
    throw new Error(ErrorMessage);
  }

  return Number(arr.sort(compare).join(''));
}

/** tests */

// console.log(composeHighest([3, 6, 0, 9]) === 9630);
// console.log(composeHighest([60, 548]) === 60548);
// console.log(composeHighest([1, 34, 3, 98, 9, 76, 45, 4]) === 998764543431);

module.exports = { composeHighest, compare, ErrorMessage };
