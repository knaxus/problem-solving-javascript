/**
 * Note: Array must be sorted for jump search
 * Complexity: 
 * Worst case time complexity: O(√N)
 * Average case time complexity: O(√N)
 * Best case time complexity: O(1)
 * Space complexity: O(1)
*/
function jumpSearch(arr, key) {
    const n = arr.length;
    const jump = Math.floor(Math.sqrt(n));
    let step = jump;

    let prev = 0;
    
    while(arr[Math.min(step, n) - 1] < key) {
        prev = step;
        step += jump;
        if (prev >= n) 
            return null; 
    }

    while(arr[prev] < key) {
        prev++;

        if (prev == Math.min(step, n))
            return null;
    }
    
    if (arr[prev] == key) 
        return prev; 

    return null;
  }
  
  module.exports = {
    jumpSearch,
  };