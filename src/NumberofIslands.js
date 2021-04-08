var dfs = function (grid, i, j) {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') return;

  grid[i][j] = '0';
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
};


var numIslands = function (grid) {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        result++;
        dfs(grid, i, j);
      }
    }
  }
  return result;
};

console.log(numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
])); //1

console.log(numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
])); //3

console.log(numIslands([
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "1"]
])); //3


