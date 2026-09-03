const adjList = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [2]
}


function adjacencyListToMatrix (adjList) {
  const nodes = Object.keys(adjList)
  const n = nodes.length;

  const nodeIndex = {};
  nodes.forEach((node, index) => {
    console.log(node, index)
    nodes[node] = index;
  })

  console.log(nodes);
  
}

adjacencyListToMatrix(adjList)
