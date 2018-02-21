/*

Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

Examples:
Input: S = "a1b2"
Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

Input: S = "3z4"
Output: ["3z4", "3Z4"]

Input: S = "12345"
Output: ["12345"]
Note:

S will be a string with length at most 12.
S will consist only of letters or digits.

*/

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
    var result = [""];
    for (let i = 0; i < S.length; i++) {
        var n = result.length;
        if (isLetter(S[i])) {
            for (let k = 0; k < n; k++) {
                result.push(result[k]);
                result[k] += S[i].toLowerCase();
                result[n + k] += S[i].toUpperCase();
            }
        } else {
            for (let j = 0; j < n; j++) {
                result[j] += S[i];
            }
        }

    }

    return result;

    function isLetter(c) {
        var charCode = c.charCodeAt(0);
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
            return true;
        } else {
            return false;
        }
    }
};