// An array such that each index has a product of all the numbers in the array except the number stored at that index.

function findProduct(arr) {
  let left = 1;
  const result = [];

  // multiply all the numbers to the left side
  for (let el of arr) {
    result.push(left);
    left *= el;
  }

  let right = 1;

  // multiply all the numbers to the right side
  for (let i = arr.length - 1; i > 0; i -= 1) {
    result[i] *= right;
    right *= arr[i];
  }
  return result;
}
