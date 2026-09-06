const matrixGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
]

function dfs(graph, root) {
  const n = graph.length;
  const visited = new Array(n).fill(false)
  const stack = [root];
  const result = [];

  while (stack.length > 0) {
    const current = stack.pop()

    if (visited[current]) {
      continue
    }

    visited[current] = true;
    result.push(current);

    for (let neighbor = 0; neighbor < n; neighbor++) {
      // graph[current][neighbor] === 1 means there's an edge to that neighbor
      if (graph[current][neighbor] === 1 && !visited[neighbor]) {
        stack.push(neighbor); // add it to the stack to explore later
      }
    }
  }

  return result;
}

dfs(matrixGraph, 1);