const threeSum = function(nums) {
    // sort the array
    nums = nums.sort((a, b) => a - b);

    let result = [];
    // iterate through the array and use two pointers to find the sum
    for (let i = 0; i < nums.length; ++i) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum == 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
            }
            else if (sum < 0) {
                left++;
            }
            else {
                right--;
            }
        }
        // skip duplicates
        while (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            i++;
        }
    }

    // initialize set to remove duplicate 
    const set = new Set(result.map(JSON.stringify));
    // final output array
    output = (new Array(...set).map(JSON.parse));
    return output;
};


module.exports = threeSum;

