// Adjacency list representation of a graph:
// each key is a node, and its value is an array of nodes it connects to.
// This describes a graph with 4 nodes (0, 1, 2, 3) and these directed edges:
//   0 -> 1, 0 -> 2
//   1 -> 2
//   2 -> 0, 2 -> 3
//   3 -> 2
const adjList = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [2]
}

function adjacencyListToMatrix(adjList) {
  // Object.keys() extracts all the node names from the adjacency list.
  // Note: object keys are always returned as STRINGS, even though they
  // were written as numbers (0, 1, 2, 3) above.
  // nodes = ["0", "1", "2", "3"]
  const nodes = Object.keys(adjList)

  // total number of nodes in the graph — this determines the matrix's size (n x n)
  const n = nodes.length;

  // nodeIndex maps each node's name to a numeric position (its row/column
  // index in the matrix). This is necessary because a node's "name" isn't
  // guaranteed to already be a usable array index (e.g. if nodes were
  // labeled "A", "B", "C" instead of 0, 1, 2).
  const nodeIndex = {};
  nodes.forEach((node, index) => {
    nodeIndex[node] = index;
  })
  // Example result: { "0": 0, "1": 1, "2": 2, "3": 3 }
  // (left side = original node name as a string, right side = its matrix index)

  //  console.log(nodeIndex)  ← debug line, safely commented out

  // Build an n x n matrix filled entirely with 0s to start.
  // Array.from({ length: n }, callback) runs the callback n times, creating
  // n SEPARATE row arrays — this matters because using .fill([]) instead
  // would make every row point to the exact same array in memory, causing
  // edits to one row to accidentally affect all the others.
  const matrix = Array.from({ length: n }, () => new Array(n).fill(0))

  // Walk through every node in the adjacency list
  for (let node of nodes) {
    // Look up this node's row position in the matrix
    const row = nodeIndex[node];

    // console.log("row: ", row);  ← debug line, safely commented out

    // For every neighbor this node has an edge to...
    for (const neighbor of adjList[node]) {
      // console.log("neighbor: ", neighbor);  ← debug line, safely commented out

      // Look up the neighbor's column position in the matrix
      // (works even though `neighbor` is a number and nodeIndex's keys are
      // strings, because JS automatically coerces number keys to strings
      // when looking up object properties)
      const col = nodeIndex[neighbor];

      // Mark that there's an edge from `node` to `neighbor`
      matrix[row][col] = 1;
    }
  }

  // Print each row of the matrix on its own separate line
  // (rather than logging the whole matrix at once, which would print
  // everything as one big nested array instead of individual rows)
  for (const row of matrix) {
    console.log(row);
  }

  // console.log(matrix)  ← debug line, safely commented out — this would log
  // the WHOLE matrix as one nested array, which is different from the
  // row-by-row logging above and would likely break a test expecting
  // separate per-row log calls

  // Return the completed matrix so it can be used elsewhere (not just printed)
  return matrix;
}

adjacencyListToMatrix(adjList)