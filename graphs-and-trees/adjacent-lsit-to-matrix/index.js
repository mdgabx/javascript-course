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
    nodeIndex[node] = index;
  })

   console.log(nodeIndex)

  //create matrix array with 0 values based on nodes length
  const matrix = Array.from({ length: n }, () => new Array(n).fill(0))

  for(let node of nodes) {
    const row = nodeIndex[node];

    console.log("row: ", row);
    for(let col of adj)
   
  }
}

adjacencyListToMatrix(adjList)
