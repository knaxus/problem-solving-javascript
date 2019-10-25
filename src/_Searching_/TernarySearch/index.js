/**
 * Note: Array must be sorted for ternary search
 * Complexity:
 * Worst case time complexity: O(log N)
 * Average case time complexity: O(log N)
 * Best case time complexity: O(1)
 * Space complexity: O(1)
*/
function ternarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const lowMiddle = low + Math.floor((high - low) / 3);
    const highMiddle = low + 2 * Math.floor((high - low) / 3);
    if (key === arr[low]) {
      return low;
    } if (key === arr[high]) {
      return high;
    } if (key <= arr[lowMiddle]) {
      high = lowMiddle;
    } else if (key > arr[lowMiddle] && key <= arr[highMiddle]) {
      low = lowMiddle + 1;
      high = highMiddle;
    } else {
      low = highMiddle + 1;
    }
  }
  return null;
}

function ternarySearchRecursive(arr, low, high, key) {
  if (high >= low) {
    const highMiddle = low + 2 * Math.floor((high - low) / 3);
    const lowMiddle = low + Math.floor((high - low) / 3);
    if (key === arr[lowMiddle]) {
      return lowMiddle;
    } if (key === arr[highMiddle]) {
      return highMiddle;
    } if (key < arr[lowMiddle]) {
      return ternarySearchRecursive(arr, low, lowMiddle - 1, key);
    } if (key > arr[lowMiddle] && key < arr[highMiddle]) {
      return ternarySearchRecursive(arr, lowMiddle + 1, highMiddle - 1, key);
    }
    return ternarySearchRecursive(arr, highMiddle + 1, high, key);
  }
  return null;
}

module.exports = {
  ternarySearch,
  ternarySearchRecursive,
};
