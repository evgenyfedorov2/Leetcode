/*

Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    var counter = new Array(128).fill(0);
    for (let i = 0; i < s.length; i++) {
        counter[s.charCodeAt(i)]++;
    }

    for (let i = 0; i < t.length; i++) {
        counter[t.charCodeAt(i)]--;
    }
    for (let i = 0; i < 128; i++) {
        if (counter[i] !== 0) {
            return false;
        }
    }

    return true;
};