/**
 * Find the length of maximum consecutive 1s in an array of o & 1
 * Input: [1, 0, 1, 1, 0] O/P - 2
 * Input: [0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1] O/P - 5
 *
 * Solved in O(n)
 */

function findMaxConsecutive1s(arr) {
  let count = 0;
  let max = 0;
  const length = arr.length;

  for (let i = 0; i < length; i += 1) {
    if (arr[i] === 1) {
      count += 1;
    } else if (arr[i] === 0) {
      if (count > max) max = count;
      count = 0;
    }
  }
  if (count > max) max = count;
  return max;
}

module.exports = findMaxConsecutive1s;
