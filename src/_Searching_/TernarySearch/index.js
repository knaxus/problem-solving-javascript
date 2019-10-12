/**
 * Note: Array must be sorted for binary search
 */
function ternarySearch(arr, key){
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        let temp2 = left + Math.floor((right - left) / 3);
        let temp3 = left + 2 * Math.floor((right - left) / 3);
        if(key == arr[left]){
            return left;
        } else if(key  == arr[right]){
            return right;
        } else if(key < arr[left] || key > arr[right]){
            return null;
        } else if(key <= arr[temp2]){
            right = temp2;
        } else if(key > arr[temp2] && key <= arr[temp3]){
            left = temp2 + 1;
            right = temp3;
        } else {
            left = temp3 + 1;
        }
    }
    return null;
}

function ternarySearchRecursive(arr, low, high, key){

    if(high >= low){
        let highMiddle = low + 2 * Math.floor((high - low) / 3);
        let lowMiddle = low + Math.floor((high - low) / 3);
        if(key === arr[lowMiddle]){
            return lowMiddle;
        } else if(key === arr[highMiddle]){
            return highMiddle;
        } else if(key < arr[highMiddle]){
            return ternarySearchRecursive(arr, low, lowMiddle, key);
        } else if(key > arr[lowMiddle] && key < arr[highMiddle]){
            return ternarySearchRecursive(arr, lowMiddle, highMiddle, key);
        } else if(arr.indexOf(key) == - 1){
            return null;
        } else {
            return ternarySearchRecursive(arr, highMiddle, high, key);
        } 
    } 
    return null;
}

module.exports = {
    ternarySearch,
    ternarySearchRecursive
};
