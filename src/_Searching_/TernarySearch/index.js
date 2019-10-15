/**
 * Note: Array must be sorted for ternary search
 * Complexity: 
 * Worst case time complexity: O(log N)
 * Average case time complexity: O(log N)
 * Best case time complexity: O(1)
 * Space complexity: O(1)
*/
function ternarySearch(arr, key){
    let low = 0;
    let high = arr.length - 1;
    while(low <= high){
        let lowMiddle = low + Math.floor((high - low) / 3);
        let highMiddle = low + 2 * Math.floor((high - low) / 3);
        if(key == arr[low]){
            return low;
        } else if(key  == arr[high]){
            return high;
        } else if(key <= arr[lowMiddle]){
            high = lowMiddle;
        } else if(key > arr[lowMiddle] && key <= arr[highMiddle]){
            low = lowMiddle + 1;
            high = highMiddle;
        } else {
            low = highMiddle + 1;
        }
    }
    return null;
}

function ternarySearchRecursive(arr, low, high, key){
    if(high > low){
        let highMiddle = low + 2 * Math.floor((high - low) / 3);
        let lowMiddle = low + Math.floor((high - low) / 3);
        if(key === arr[lowMiddle]){
            return lowMiddle;
        } else if(key === arr[highMiddle]){
            return highMiddle;
        } else if(key === arr[high]){
            return high;
        } else if(key < arr[lowMiddle]){
            return ternarySearchRecursive(arr, low, lowMiddle - 1, key);
        } else if(key > arr[lowMiddle] && key < arr[highMiddle]){
            return ternarySearchRecursive(arr, lowMiddle + 1, highMiddle - 1, key);
        } else {
            return ternarySearchRecursive(arr, highMiddle + 1, high, key);
        } 
    } 
    return null;
}

module.exports = {
    ternarySearch,
    ternarySearchRecursive
};
