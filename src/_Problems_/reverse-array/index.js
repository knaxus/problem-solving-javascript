function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let tempVar = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tempVar;
    }

    return arr;
}

module.exports = {
    reverseArrayInPlace,
};

