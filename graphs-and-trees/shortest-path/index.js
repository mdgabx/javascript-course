const INF = Infinity; // represents "no direct connection" / "unknown distance"

// adjacency matrix: adjMatrix[i][j] = weight of the edge from node i to node j
// (0 on the diagonal = no distance from a node to itself; INF = no direct edge)
const adjMatrix = [
  [0, 5, 3, INF, 11, INF],
  [5, 0, 1, INF, INF, 2],
  [3, 1, 0, 1, 5, INF],
  [INF, INF, 1, 0, 9, 3],
  [11, INF, 5, 9, 0, INF],
  [INF, 2, INF, 3, INF, 0],
];

function shortestPath(matrix, startNode, targetNode = null) {
  const n = matrix.length; // number of nodes in the graph

  // distances[i] = current best known distance from startNode to node i
  // start with "infinitely far" for everyone except the start itself
  const distances = new Array(n).fill(INF);
  distances[startNode] = 0; // distance from startNode to itself is 0

  // paths[i] = the sequence of nodes that make up the current best path to node i
  // initialize each node's path as just itself (will be overwritten as shorter paths are found)
  const paths = Array.from({ length: n }, (_, i) => [i]);

  // visited[i] = true once node i's shortest distance is finalized (locked in)
  const visited = new Array(n).fill(false);

  // main loop: runs once per node, each time "finalizing" one more node's shortest distance
  for (let i = 0; i < n; i++) {
    let minDistance = INF; // smallest distance found so far in this pass
    let current = -1; // index of the closest unvisited node found so far

    // scan every node to find the closest one that hasn't been visited yet
    for (let nodeNo = 0; nodeNo < n; nodeNo++) {
      if (!visited[nodeNo] && distances[nodeNo] < minDistance) {
        minDistance = distances[nodeNo];
        current = nodeNo;
      }
    }

    // if no reachable unvisited node was found, the remaining nodes are unreachable — stop early
    if (current === -1) {
      break;
    }

    visited[current] = true; // lock in this node's shortest distance — it won't change anymore

    // relaxation step: check if going through "current" gives shorter paths to its neighbors
    for (let nodeNo = 0; nodeNo < n; nodeNo++) {
      const distance = matrix[current][nodeNo]; // direct edge weight from current to nodeNo

      // only consider real, direct connections to nodes not yet finalized
      if (distance !== INF && !visited[nodeNo]) {
        const newDistance = distances[current] + distance; // distance via "current"

        // if this route is shorter than the best known distance so far, update it
        if (newDistance < distances[nodeNo]) {
          distances[nodeNo] = newDistance;
          paths[nodeNo] = [...paths[current], nodeNo]; // extend current's path by one node
        }
      }
    }
  }

  // decide which node(s) to print results for: just the target, or all nodes if none specified
  const targets = targetNode !== null ? [targetNode] : [...Array(n).keys()];

  for (const nodeNo of targets) {
    // skip the start node itself, and skip any node that was never reached
    if (nodeNo === startNode || distances[nodeNo] === INF) {
      continue;
    }

    const path = paths[nodeNo].join(' -> '); // format the path as "0 -> 2 -> 5"
    console.log(`\n${startNode}-${nodeNo} distance: ${distances[nodeNo]}\nPath: ${path}`);
  }

  return [distances, paths];
}
  
shortestPath(adjMatrix, 0, 5)