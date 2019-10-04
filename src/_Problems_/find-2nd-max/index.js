/**
 * You may find it easy but it's tricky for few
 * Input - [9, 2, 3, 6]
 * Output - 6
 */

function findSecondMax(arr) {
  let max = arr[0];
  let max2 = Number.MIN_SAFE_INTEGER;

  for (let el of arr) {
    if (el > max) {
      max2 = max;
      max = el;
    }

    if (el < max && el > max2) {
      max2 = el;
    }
  }
  return max2;
}

module.exports = {
  findSecondMax,
};
