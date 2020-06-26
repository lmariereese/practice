/*
  Problem: https://leetcode.com/problems/minimum-path-sum
*/

//Brute-force, recursive solution that times out with large input
var minPathSum = function(grid) {
  function helper(row, col) {
      if (row === grid.length - 1 && col === grid[row].length - 1) {
          return grid[row][col];
      }
      if ((row + 1 < grid.length) && (col + 1 < grid[row].length)) {
          let p1 = grid[row][col] + helper(row + 1, col);
          let p2 = grid[row][col] + helper(row, col + 1);
          return Math.min(p1, p2);
      }
      if (row + 1 < grid.length) {
          return grid[row][col] + helper(row + 1, col);
      }
      if (col + 1 < grid[row].length) {
          return grid[row][col] + helper(row, col + 1);
      }
  }
  return helper(0,0);
};

