function jumpSearch(arr, key) {
    // treat jumps larger than array size as linear search
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