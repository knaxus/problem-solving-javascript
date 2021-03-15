function maxArraySum(array, n) {
    if (array.length == 0) {
        return "null as the length of array is nil.";
    }
    else if (array.length < n) {
        var str = "null as the length of subarray is less than " + n + ".";
        return str;
    }
    else if (array.length == n) {
        var sum = array.reduce(function (a, b) {
            return a + b;
        }, 0);
        return sum;
    }
    else if (array.length > n) {
        var i, j, max;
        for (i = 0; i < 1; i++) {
            var temp = [];
            for (j = i; j < i + n; j++) {
                temp.push(array[j]);
            }
            var sum = temp.reduce(function (a, b) {
                return a + b;
            }, 0);
            max = sum;
        }
        for (i = 1; i <= array.length - n; i++) {
            var temp = [];
            for (j = i; j < i + n; j++) {
                temp.push(array[j]);
            }
            var sum = temp.reduce(function (a, b) {
                return a + b;
            }, 0);
            if (sum > max) {
                max = sum;
            }
        }
        return max;
    }
}

module.exports = {
    maxArraySum,
};