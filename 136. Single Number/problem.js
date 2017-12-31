/* 

Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (i = 0; i < nums.length-1; i++) {
        nums[i+1] ^= nums[i];
    }
    return nums[i];
};