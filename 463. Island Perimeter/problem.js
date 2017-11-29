/*

You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example:

[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Answer: 16
Explanation: The perimeter is the 16 yellow stripes in the image below:

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var count = 0, repeat = 0;
    for(var i = 0; i < grid.length; i++) {
        var item = grid[i];
        for(var j = 0; j < item.length; j++) {
           if (grid[i][j] === 1) {
             count++;
             if (i!==0 && grid[i-1][j] === 1)repeat++;
             if (j!==0 && grid[i][j-1] === 1)repeat++;  
           }
        }
    }
    return 4 * count - repeat * 2;
};