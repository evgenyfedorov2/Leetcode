/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

 var selfDividingNumbers = function(left, right) {
    var array = [];
    for (var index = left; index <= right; index++) {
        if (isSeldDividing(index)) {
            array.push(index);
        }
    }
    return array;
};
console.log(selfDividingNumbers(1,22));
function isSeldDividing(number)
{
    var result = true;
    var i = number;
    while (i) {
        var reminder = i%10;
        if (reminder === 0 || number % reminder !==0) {
            result = false;
            break;
        }
        i = parseInt(i/10);
    }

    return result;
}