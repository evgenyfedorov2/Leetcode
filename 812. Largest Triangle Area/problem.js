/*

You have a list of points in the plane. Return the area of the largest triangle that can be formed by any 3 of the points.

Example:
Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
Output: 2
Explanation: 
The five points are show in the figure below. The red triangle is the largest.


Notes:

3 <= points.length <= 50.
No points will be duplicated.
 -50 <= points[i][j] <= 50.
Answers within 10^-6 of the true value will be accepted as correct.

*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
    let numPoints = points.length;
    let result = 0;

    function areaShoelace(x, y, z) {
        const half = Number(0.5);
        return half * Math.abs(x[0] * y[1] + y[0] * z[1] + z[0] * x[1] - x[1] * y[0] - y[1] * z[0] - z[1] * x[0]);
    }

    for (let i = 0; i < numPoints; i++) {
        for (let j = i + 1; j < numPoints; j++) {
            for (let k = j + 1; k < numPoints; k++) {
                result = Math.max(result, areaShoelace(points[i], points[j], points[k]));
            }
        }
    }
    return result;
};