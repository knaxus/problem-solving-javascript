/**
 * Note: Array must be sorted for binary search
 */
function binarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (key < arr[mid]) {
      high = mid - 1;
    } else if (key > arr[mid]) {
      low = mid + 1;
    } else {
      // return the key
      return mid;
    }
  }
  return null;
}

function binarySearchRecursive(arr, low, high, key) {
  const mid = Math.floor((high - low) / 2 + low);

  if (high < low) {
    return null;
  } else if (key < arr[mid]) {
    return binarySearchRecursive(arr, low, mid - 1, key);
  } else if (key > arr[mid]) {
    return binarySearchRecursive(arr, mid + 1, high, key);
  } else if (key === arr[mid]) {
    return mid;
  }

  return null;
}
