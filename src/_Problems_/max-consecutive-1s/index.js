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

    if (i === length - 1) {
      if (count > max) max = count;
    }
  }
  return max;
}

console.log(findMaxConsecutive1s([1, 1, 0, 1]));
