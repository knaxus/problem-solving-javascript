/*
Two Sum Problem
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

Solved in O(n) time complexity using Hash/Object
*/

function twoSum(nums, target) {
    const numsHash = {};
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        if (numsHash[difference] !== undefined) {
            return [numsHash[difference], i];
        }
        numsHash[nums[i]] = i;
    }
};

module.exports = { twoSum };