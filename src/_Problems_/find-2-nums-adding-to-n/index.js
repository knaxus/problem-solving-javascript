// the best case [O(n)] using SET data structure
function findTwoNumsAddingToN(arr, number) {
  const pair = [];
  const store = new Set();

  for (let i = 0; i < arr.length; i += 1) {
    // check if the set contains one of the element that sum upto the given number
    if (store.has(number - arr[i])) {
      pair.push(number - arr[i]);
      pair.push(arr[i]);
      break;
    }
    // push the element in the set
    store.add(arr[i]);
  }
  return pair.length ? pair : false;
}

// the Brute force approach
function findTwoNumsAddingToN2(arr, number) {

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === number) {
        return [arr[i], arr[j]];
      }
    }
  }

  return false;
}

module.exports = {
  findTwoNumsAddingToN,
  findTwoNumsAddingToN2,
};
