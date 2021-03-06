/*

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let intersectArray = [];
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.indexOf(nums1[i]) >= 0 && intersectArray.indexOf(nums1[i]) < 0) {
            intersectArray.push(nums1[i]);
        }
    }
    return intersectArray;
};