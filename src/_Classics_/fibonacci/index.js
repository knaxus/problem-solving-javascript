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

/**
 * Memoization. In computing, memoization or memoisation is an
 * optimization technique used primarily to speed up computer
 * programs by storing the results of expensive function
 * calls and returning the cached result when the
 * same inputs occur again
 */

// Linear time, test with index as 510 for both the functions
function fibonacciMemoized(index, cache) {
  cache = cache || [];

  if (cache[index]) {
    return cache[index];
  } else {
    if (index < 3) {
      return 1;
    } else {
      cache[index] =
        fibonacciMemoized(index - 1, cache) +
        fibonacciMemoized(index - 2, cache);
    }
  }
  return cache[index];
}

/**
 * Using the bottom up approach, also known as tabular method
 */

function fibonacciTabular(n) {
  const table = [0, 1];

  for (let i = 2; i <= n; i += 1) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
}

// const number = 50;

// console.log(`Fib normal - ${fibonacci(number)}`);
// console.log('--');
// console.log(`Fib memo - ${fibonacciMemoized(number)}`);
// console.log(`Fib table - ${fibonacciTabular(number)}`);
