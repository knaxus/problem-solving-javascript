// the algorithm has time complexity of O(n^2), very bad!
function fibonacci(position) {
  // if position is 1 or 2, the number in fibonacci sequence will be 1
  if (position < 3) {
    return 1;
  }
  // else the element in fibonacci sequence will be the sum of
  // element at position(p) (p -1) and (p - 2)
  return fibonacci(position - 2) + fibonacci(position - 1);
}
