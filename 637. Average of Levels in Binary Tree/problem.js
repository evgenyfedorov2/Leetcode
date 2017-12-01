/*

Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]

Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].

Note:
The range of node's value is in the range of 32-bit signed integer.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    var number = [];
    var queue = [];
    queue.push(root);
    while (queue.length>0) {
        var sum = 0, count = 0;
        var tempQueue = [];
        while (queue.length>0) {
            tempNode = queue.shift();
            if (tempNode.left !== null) tempQueue.push(tempNode.left);
            if (tempNode.right !== null) tempQueue.push(tempNode.right);
            sum+=tempNode.val;
            count++;
        }
        if (count > 0) number.push(sum/count);
        queue = tempQueue;
    }
    return number;
};