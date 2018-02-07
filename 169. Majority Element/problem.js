/*

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var count = 0;
    var candidate;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
        }
        if (nums[i] === candidate) {
            count += 1;
        } else {
            count += -1;
        }
    }
    return candidate;
};