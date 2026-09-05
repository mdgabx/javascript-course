// BFS approach example breadth-first search
/* Definition: BFS is a graph/tree traversal algorithm that starts from a source node and explores all neighbors before moving to the next level. */
// Data Structure Used: A queue (FIFO) is essential to keep track of nodes to visit.
// Traversal Order: Level by level (breadth-first), unlike DFS which goes deep into one branch first.
/* 
Applications:
Finding the shortest path in unweighted graphs.
Web crawling (exploring links layer by layer).
AI/game trees (evaluating moves in chess or tic-tac-toe).
Detecting cycles in graphs.
Used in algorithms like Dijkstra’s shortest path, Kahn’s algorithm (topological sorting), and Prim’s algorithm (minimum spanning tree).
*/

function genParentheses(pairs) {
  if (!Number.isInteger(pairs)) {
    return 'The number of pairs should be an integer';
  }
  if (pairs < 1) {
    return 'The number of pairs should be at least 1';
  }
  
  let queue = [['', 0, 0]];
  let result = [];
  
  while (queue.length > 0) {
    console.log(queue);
    let [current, opensUsed, closesUsed] = queue.shift();
    if (current.length === 2 * pairs) {
      result.push(current);
    } else {
      if (opensUsed < pairs) {
        queue.push([current + '(', opensUsed + 1, closesUsed]);
      }
      if (closesUsed < opensUsed) {
        queue.push([current + ')', opensUsed, closesUsed + 1]);
      }
    }
  }
  return result;
}

console.log(genParentheses(2));
console.log(genParentheses(3));