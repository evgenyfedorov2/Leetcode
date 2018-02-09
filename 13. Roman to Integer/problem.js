/*

Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.

*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var number = 0;
    
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'I':
                if (s[i + 1] === 'V' || s[i + 1] === 'X') {
                    number -= 1;
                } else {
                    number += 1;
                }
                break;
            case 'X':
                if (s[i + 1] === 'C' || s[i + 1] === 'L') {
                    number -= 10;
                } else {
                    number += 10;
                }
                break;
            case 'C':
                if (s[i + 1] === 'D' || s[i + 1] === 'M') {
                    number -= 100;
                } else {
                    number += 100;
                }
                break;
            case 'V':
                number += 5;
                break;
            case 'L':
                number += 50;
                break;
            case 'D':
                number += 500;
                break;
            case 'M':
                number += 1000;
                break;
        }
    }

    return number;
};