/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    var stack = [];
    for (var index = 0; index < ops.length; index++) {
        switch (ops[index]) {
            case "D":
                stack.push(parseInt(stack[stack.length-1] * 2));
                break;
            case "C":
                stack.pop();
                break;
            case "+":
                stack.push(parseInt(stack[stack.length-1])+parseInt(stack[stack.length-2]));
                break;
            default:
                stack.push(parseInt(ops[index]));
                break;
        }
    }
    return stack.reduce(function(a,b) { return a + b;});
};
console.log(calPoints(["5","-2","4","C","D","9","+","+"]));