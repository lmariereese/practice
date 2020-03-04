const exampleGrid1 = [
  [1,1,1,1,0],
  [1,1,0,1,0],
  [1,1,0,0,0],
  [0,0,0,0,0]
];

const exampleGrid2 = [
  [1,1,0,0,0],
  [1,1,0,0,0],
  [0,0,1,0,0],
  [0,0,0,1,1]
]

// Iterative solution using breadth-first search and a queue
function numOfIslands(grid) {
  let count = 0;
  // debugger;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        count++;
        helper(grid, row, col)
      }
    }
  }
  return count;
}

// Can improve this by checking if coords are in bounds before pushing into the queue
function helper(grid, row, col) {
  const queue = [[row, col]];
  while (queue.length) {
    [currentRow, currentCol] = queue.shift();
    if (
      (currentRow >= 0 && currentRow < grid.length)
      && (currentCol >= 0 && currentCol < grid[row].length)
      && (grid[currentRow][currentCol] === 1)
    ) {
      grid[currentRow][currentCol] = 0; // this is like marking as 'seen'
      queue.push([currentRow + 1, currentCol]);
      queue.push([currentRow - 1, currentCol]);
      queue.push([currentRow, currentCol + 1]);
      queue.push([currentRow, currentCol - 1]);
    }
  }
}

numOfIslands(exampleGrid1);
