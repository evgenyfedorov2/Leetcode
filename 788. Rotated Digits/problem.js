/*

X is a good number if after rotating each digit individually by 180 degrees, we get a valid number that is different from X. A number is valid if each digit remains a digit after rotation. 0, 1, and 8 rotate to themselves; 2 and 5 rotate to each other; 6 and 9 rotate to each other, and the rest of the numbers do not rotate to any other number.

Now given a positive number N, how many numbers X from 1 to N are good?

Example:
Input: 10
Output: 4
Explanation: 
There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
Note that 1 and 10 are not good numbers, since they remain unchanged after rotating.
Note:

N  will be in range [1, 10000].

*/

/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
    let number = 0;
    for (let i = 0; i < N; i++) {
        if (isGoodNumber(i) > -1) {
            number++;
        }
    }
    return number;

    function isGoodNumber(number) {
        let n = number;
        let result = "";
        while (n !== 0) {
            tempVar = isGoodDigit(n % 10);
            if (tempVar > -1) {
                result = tempVar + result;
            } else {
                return -1;
            }
            n = n / 10 >> 0;
        }
        if (Number(result) !== number) {
            return Number(result);
        } else {
            return -1;
        }
    }

    function isGoodDigit(digit) {
        switch (digit) {
            case 0:
            case 1:
            case 8:
                return digit;
            case 2:
                return 5;
            case 5:
                return 2;
            case 6:
                return 9;
            case 9:
                return 6;
            default:
                return -1;
        }
    }
};

console.log(rotatedDigits(2));