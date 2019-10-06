/**
 * Given an array of numbers where the length can atmost be 10^4
 * Find the maximum product of 3 numbers
 * Samples:
 * [1, 2, 3] - 6
 * [-10, 10, 2, 3] - 60
 * [-10, -10, 2, 3] - 300
 */

/** The following solution is O(nlogn) because of sorting */
function maxProductof3Numbers(arr) {
  if (!Array.isArray(arr) || arr.length < 3) {
    throw new Error('Invalid Argument');
  }

  // sort the array
  arr.sort((a, b) => a - b);

  const n = arr.length;

  // when the numbers are all positive
  const p1 = arr[n - 1] * arr[n - 2] * arr[n - 3];

  // considering -ve numbers, 2 -ve on multiplication becomes +ve
  const p2 = arr[0] * arr[1] * arr[n - 1];

  // return the largest of two probablities
  return p1 > p2 ? p1 : p2;
}

/** The following solution is O(n) */
function maxProductof3NumbersII(arr) {
  if (!Array.isArray(arr) || arr.length < 3) {
    throw new Error('Invalid Argument');
  }

  let firstMax = (secondMax = thirdMax = Number.MIN_SAFE_INTEGER);
  let firstMin = (secondMin = Number.MAX_SAFE_INTEGER);

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > firstMax) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = arr[i];
    } else if (arr[i] > secondMax) {
      thirdMax = secondMax;
      secondMax = arr[i];
    } else if (arr[i] > thirdMax) {
      thirdMax = arr[i];
    }

    // check for mins
    if (arr[i] < firstMin) {
      secondMin = firstMin;
      firstMin = arr[i];
    } else if (arr[i] < secondMin) {
      secondMin = arr[i];
    }
  }

  const p1 = firstMax * secondMax * thirdMax;
  const p2 = firstMin * secondMin * firstMax;

  return p1 > p2 ? p1 : p2;
}

module.exports = { maxProductof3Numbers, maxProductof3NumbersII };
