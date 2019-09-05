// the best case using a data structure - SET
function findTwoNumsAddingToN(arr, sum) {
  const nums = [];
  const store = new Set();

  for (let i = 0; i < arr.length; i++) {
    // check if the set contains one of the pir that sum upto given sum
    if (store.has(sum - arr[i])) {
      nums.push(sum - arr[i]);
      nums.push(arr[i]);
      break;
    }
    // push the element in the set
    store.add(arr[i]);
  }
  return nums.length ? nums : false;
}

// the Brute force approach
function findTwoNumsAddingToN2(arr, sum) {
  const nums = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        nums.push(arr[i], arr[j]);
        break;
      }
    }
  }

  return nums.length ? nums : false;
}
