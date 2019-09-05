// the running complexity O(n + m) where n and m are the length of 2 arrays
function mergeTwoSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;

  const merged = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i += 1;
    } else {
      merged.push(arr2[j]);
      j += 1;
    }
  }

  // if still elments are left in arr1
  if (i < arr1.length) {
    while (i < arr1.length) {
      merged.push(arr1[i]);
      i += 1;
    }
  }

  // if still elments are left in arr2
  if (j < arr2.length) {
    while (j < arr2.length) {
      merged.push(arr2[j]);
      j += 1;
    }
  }

  return merged;
}

// since we are using sort here, the running time complexity will be O(nlogn)
function mergeTwoSortedArrays2(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

module.exports = {
  mergeTwoSortedArrays,
  mergeTwoSortedArrays2,
};
