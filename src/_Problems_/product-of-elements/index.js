// An array such that each index has a product of all the numbers in the array except the number stored at that index.

/**
 * Input - [1, 2, 3, 4]
 * Output - [24, 12, 8, 6]
 *
 * Input - [0, 1, 3, 5]
 * Output - [15, 0, 0, 0]
 */

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
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    result[i] *= right;
    right *= arr[i];
  }
  return result;
}

function findProduct2(arr) {
  let countZeros = 0;
  let positionOfZero = -1;
  let productOffAllExpectZero = 1;
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === 0) {
      countZeros += 1;
      positionOfZero = i;
    } else {
      productOffAllExpectZero *= arr[i];
    }
  }

  if (countZeros === 0) {
    for (let i = 0; i < arr.length; i += 1) {
      result[i] = productOffAllExpectZero / arr[i];
    }
  } else if (countZeros === 1) {
    result = Array(arr.length).fill(0);
    result[positionOfZero] = productOffAllExpectZero;
  } else if (countZeros >= 2) {
    result = Array(arr.length).fill(0);
  }
  return result;
}

module.exports = {
  findProduct,
  findProduct2,
};
