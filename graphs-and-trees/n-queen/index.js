function dfsNQueens(n) {
  if(n < 1) return [];

  let solutions = [];

  function isValid(queens, row, col) {
    for(let i = 0; i < row; i++) {
      const qCol = queens[i];

      if(qCol === col || Math.abs(qCol - col) === row - i) {
        return false;
      }
    }

    return true;
  }

  function dfs(row, queens) {
    if(row === n) {
      solutions.push([...queens]);
      return;
    }

    for(let col = 0; col < n; col++) {
      if(isValid(queens, row, col)) {
        queens[row] = col;
        dfs(row + 1, queens);
      }
    }
  }

  dfs(0, []);
  return solutions;

}

dfsNQueens(1);