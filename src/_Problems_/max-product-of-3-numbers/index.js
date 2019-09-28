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
  if (!Array.isArray(arr)) {
    throw new Error('Invalid Argument');
  }

  // sort the array
  arr.sort((a, b) => a - b);

  const n = arr.length;

  // when the numbers are all positive
  const p1 = arr[n - 1] * arr[n - 2] * arr[n - 3];

  // considering -ve numbers, 2 -ve on multiplication becomes +ve
  const p2 = arr[0] * arr[1] * arr[n - 1];

  return p1 > p2 ? p1 : p2;
}
