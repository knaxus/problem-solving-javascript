function jumpSearch(arr, jump, key) {
    // treat jumps larger than array size as linear search
    jump = jump > arr.length ? 1 : jump;

    let low = 0, high = 0;
    for (let i = jump; i < arr.length; i+=jump) {
        if(key < arr[i]) {
            high = i;
            low = i - jump;
            break;
        }
    }

    // check if loop has finished without finding key
    if(high == 0) {
        high = arr.length;
        low = high - jump;
    }

    for(let i = low; i < high; i++) {
        if(arr[i] == key) {
            // return the index of the key
            return i + 1;
        }
    }
    return null;
  }
  
  module.exports = {
    jumpSearch,
  };